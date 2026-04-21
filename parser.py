import os
import json
import re # Added for text formatting

# Configuration
SOURCE_FOLDER = 'raw_data'
OUTPUT_FILE = 'src/data/characters.js'

def run_sync():
    if not os.path.exists(SOURCE_FOLDER):
        os.makedirs(SOURCE_FOLDER)
        print(f"Created '{SOURCE_FOLDER}' folder.")
        return

    roster = []

    for filename in os.listdir(SOURCE_FOLDER):
        if filename.endswith('.txt'):
            char_id = filename.replace('.txt', '')
            with open(os.path.join(SOURCE_FOLDER, filename), 'r', encoding='utf-8') as f:
                content = f.read()

            # Split logic (matching your [ABILITY_ID] and [CONST] tags)
            parts = content.split('[ABILITY_ID]:')
            header_section = parts[0]
            the_rest = '[ABILITY_ID]:'.join(parts[1:])
            skills_vs_consts = the_rest.split('[CONST]:')
            
            skill_blocks = skills_vs_consts[0].split('[ABILITY_ID]:') if len(skills_vs_consts) > 0 else []
            const_blocks = skills_vs_consts[1:] if len(skills_vs_consts) > 1 else []

            def pluck(tag, source):
                try:
                    return source.split(f'[{tag}]:')[1].split('\n')[0].strip()
                except:
                    return ""

            character = {
                "id": char_id,
                "name": pluck("NAME", header_section),
                "title": pluck("TITLE", header_section),
                "rarity": int(pluck("RARITY", header_section) or 0),
                "version": pluck("VERSION", header_section),
                "element": pluck("ELEMENT", header_section),
                "weapon": pluck("WEAPON", header_section),
                "region": pluck("REGION", header_section),
                "role": pluck("ROLE", header_section),
                "unlocked": pluck("UNLOCKED", header_section).lower() == 'true',
                "lore": header_section.split('[LORE]:')[1].strip() if '[LORE]:' in header_section else "",
                "abilities": [],
                "constellations": []
            }

            # --- Find this part in your loop ---
            for block in skill_blocks:
                if not block.strip(): continue
    
                # 1. Grab everything after the description tag
                raw_desc = block.split('[ABILITY_DESC]:')[1].strip() if '[ABILITY_DESC]:' in block else ""
    
                # 2. NEW: Split again by [PREVIEWS] and only take the first part (the actual text)
                clean_desc = raw_desc.split('[PREVIEWS]:')[0].strip()

                character["abilities"].append({
                    "id": block.split('\n')[0].strip(),
                    "name": pluck("ABILITY_NAME", block),
                    "desc": clean_desc, # Use the cleaned version here
                    "previews": pluck("PREVIEWS", block).replace(' ', '').split(',') if pluck("PREVIEWS", block) else []
                    })

            for index, block in enumerate(const_blocks):
                if not block.strip(): continue
                character["constellations"].append({
                    "id": block.split('\n')[0].strip(),
                    "level": index + 1,
                    "name": pluck("CONST_NAME", block),
                    "desc": block.split('[CONST_DESC]:')[1].strip() if '[CONST_DESC]:' in block else ""
                })

            roster.append(character)

    # --- FORMATTING THE OUTPUT ---
    # 1. Generate standard JSON string
    json_string = json.dumps(roster, indent=4)

    # 2. Use Regex to remove quotes from keys (e.g., "id": becomes id:)
    clean_js = re.sub(r'"(\w+)":', r'\1:', json_string)

    # 3. Write to file with the export statement
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(f"export const characters = {clean_js};")
    
    print(f"Sync Complete! Check {OUTPUT_FILE} for the unquoted keys.")

if __name__ == "__main__":
    run_sync()