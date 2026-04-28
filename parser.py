import os
import json
import re

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

            def pluck_spatial(tags, source, default):
                for tag in tags:
                    if f'[{tag}]:' in source:
                        try:
                            raw = source.split(f'[{tag}]:')[1].strip()
                            raw = re.split(r'\[CONST', raw)[0].strip()
                            formatted = re.sub(r'(\w+):', r'"\1":', raw)
                            if isinstance(default, dict) and not formatted.startswith('{'):
                                formatted = "{" + formatted + "}"
                            return json.loads(formatted)
                        except:
                            continue
                return default

            # 1. Main Character Info
            character = {
                "id": char_id,
                "name": pluck("NAME", header_section),
                "title": pluck("TITLE", header_section),
                "constellationName": pluck("CONSTELLATION_NAME", header_section), # --- NEW FIELD ---
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

            # 2. Add Abilities
            for block in skill_blocks:
                if not block.strip(): continue
                raw_desc = block.split('[ABILITY_DESC]:')[1].strip() if '[ABILITY_DESC]:' in block else ""
                clean_desc = raw_desc.split('[PREVIEWS]:')[0].strip()
                character["abilities"].append({
                    "id": block.split('\n')[0].strip(),
                    "name": pluck("ABILITY_NAME", block),
                    "desc": clean_desc,
                    "previews": pluck("PREVIEWS", block).replace(' ', '').split(',') if pluck("PREVIEWS", block) else []
                })

            # 3. Add Constellations
            for index, block in enumerate(const_blocks):
                if not block.strip(): continue
                raw_c_desc = block.split('[CONST_DESC]:')[1].strip() if '[CONST_DESC]:' in block else ""
                
                clean_c_desc = raw_c_desc
                for tag in ["CONST_MAP", "CONSTCONNECTIONS", "CONST_CONNECTIONS"]:
                    clean_c_desc = clean_c_desc.split(f'[{tag}]:')[0]
                
                character["constellations"].append({
                    "id": block.split('\n')[0].strip(),
                    "level": index + 1,
                    "name": pluck("CONST_NAME", block),
                    "desc": clean_c_desc.strip()
                })

            # 4. Spatial Data at the VERY END
            default_map = {"c1": [], "c2": [], "c3": [], "c4": [], "c5": [], "c6": []}
            default_conn = [[], [], [], [], [], []]
            
            character["constellationMap"] = pluck_spatial(["CONST_MAP"], content, default_map)
            character["constConnections"] = pluck_spatial(["CONSTCONNECTIONS", "CONST_CONNECTIONS"], content, default_conn)

            roster.append(character)

    json_string = json.dumps(roster, indent=4)
    clean_js = re.sub(r'"(\w+)":', r'\1:', json_string)

    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(f"export const characters = {clean_js};")
    
    print(f"Sync Complete! Added general constellation name and cleaned descriptions.")

if __name__ == "__main__":
    run_sync()