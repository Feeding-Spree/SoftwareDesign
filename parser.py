import os
import json
import re

# Configuration
SOURCE_FOLDER = 'raw_data'
OUTPUT_FILE = 'src/data/characters.js'


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def pluck(tag: str, source: str) -> str:
    """Extract a single-line value for a given tag."""
    marker = f'[{tag}]:'
    if marker not in source:
        return ''
    return source.split(marker, 1)[1].split('\n', 1)[0].strip()


def pluck_multiline(tag: str, source: str, stop_tags: list[str] = None) -> str:
    """Extract a multi-line block starting at tag, stopping at any stop_tag."""
    marker = f'[{tag}]:'
    if marker not in source:
        return ''
    content = source.split(marker, 1)[1].strip()
    if stop_tags:
        for stop in stop_tags:
            content = content.split(f'[{stop}]:', 1)[0]
    return content.strip()


def parse_constellation_map(raw: str) -> dict:
    """
    Parse the CONST_MAP block into a dict.
    Expected format (one entry per line):
        c1: [x, y],
        c2: [x, y],
    """
    result = {}
    for line in raw.splitlines():
        line = line.strip().rstrip(',')
        if not line:
            continue
        match = re.match(r'(\w+)\s*:\s*(\[.*?\])', line)
        if match:
            key, value = match.group(1), match.group(2)
            try:
                result[key] = json.loads(value)
            except json.JSONDecodeError:
                pass
    return result


def parse_const_connections(raw: str) -> list:
    """
    Parse the CONST_CONNECTIONS block into a list of pairs.
    Expected format (one pair per line):
        ["c1", "c2"],
        ["c3", "c4"],
    """
    result = []
    for line in raw.splitlines():
        line = line.strip().rstrip(',')
        if not line:
            continue
        try:
            parsed = json.loads(line)
            if isinstance(parsed, list):
                result.append(parsed)
        except json.JSONDecodeError:
            pass
    return result


def extract_spatial_block(tag: str, content: str) -> str:
    """
    Pull the raw text block for a spatial tag, stopping before the next
    bracketed tag or end of file.
    """
    marker = f'[{tag}]:'
    if marker not in content:
        return ''
    raw = content.split(marker, 1)[1].strip()
    # Stop at any next [TAG]: pattern
    raw = re.split(r'\n\s*\[[\w_]+\]:', raw, maxsplit=1)[0]
    return raw.strip()


# ---------------------------------------------------------------------------
# Main parser
# ---------------------------------------------------------------------------

def parse_character_file(char_id: str, content: str) -> dict:
    # Split header from abilities/constellations
    parts = content.split('[ABILITY_ID]:', 1)
    header = parts[0]
    body = '[ABILITY_ID]:' + parts[1] if len(parts) > 1 else ''

    # Split abilities from constellations
    ability_body, _, const_body = body.partition('[CONST]:')

    # Parse abilities
    ability_blocks = re.split(r'\[ABILITY_ID\]:', ability_body)
    abilities = []
    for block in ability_blocks:
        block = block.strip()
        if not block:
            continue
        ability_id = block.split('\n', 1)[0].strip()
        desc = pluck_multiline('ABILITY_DESC', block, stop_tags=['PREVIEWS', 'ABILITY_ID'])
        previews_raw = pluck('PREVIEWS', block)
        previews = [p.strip() for p in previews_raw.split(',') if p.strip()] if previews_raw else []
        abilities.append({
            'id': ability_id,
            'name': pluck('ABILITY_NAME', block),
            'desc': desc,
            'previews': previews,
        })

    # Parse constellations
    const_blocks = re.split(r'\[CONST\]:', const_body)
    constellations = []
    for index, block in enumerate(const_blocks):
        block = block.strip()
        if not block:
            continue
        const_id = block.split('\n', 1)[0].strip()
        desc = pluck_multiline(
            'CONST_DESC', block,
            stop_tags=['CONST_MAP', 'CONSTCONNECTIONS', 'CONST_CONNECTIONS', 'CONST']
        )
        constellations.append({
            'id': const_id,
            'level': index + 1,
            'name': pluck('CONST_NAME', block),
            'desc': desc,
        })

    # Parse spatial data from full content
    constellation_map = parse_constellation_map(
        extract_spatial_block('CONST_MAP', content)
    ) or {'c1': [], 'c2': [], 'c3': [], 'c4': [], 'c5': [], 'c6': []}

    connections_raw = (
        extract_spatial_block('CONST_CONNECTIONS', content)
        or extract_spatial_block('CONSTCONNECTIONS', content)
    )
    const_connections = parse_const_connections(connections_raw) or [[], [], [], [], [], []]

    rarity_raw = pluck('RARITY', header)
    lore = pluck_multiline('LORE', header, stop_tags=['ABILITY_ID', 'CONST'])

    return {
        'id': char_id,
        'name': pluck('NAME', header),
        'title': pluck('TITLE', header),
        'constellationName': pluck('CONSTELLATION_NAME', header),
        'rarity': int(rarity_raw) if rarity_raw.isdigit() else 0,
        'version': pluck('VERSION', header),
        'element': pluck('ELEMENT', header),
        'weapon': pluck('WEAPON', header),
        'region': pluck('REGION', header),
        'role': pluck('ROLE', header),
        'unlocked': pluck('UNLOCKED', header).lower() == 'true',
        'lore': lore,
        'abilities': abilities,
        'constellations': constellations,
        'constellationMap': constellation_map,
        'constConnections': const_connections,
    }


def run_sync():
    if not os.path.exists(SOURCE_FOLDER):
        os.makedirs(SOURCE_FOLDER)
        print(f"Created '{SOURCE_FOLDER}' folder. Add .txt files and re-run.")
        return

    roster = []
    txt_files = [f for f in os.listdir(SOURCE_FOLDER) if f.endswith('.txt')]

    if not txt_files:
        print("No .txt files found in source folder.")
        return

    for filename in sorted(txt_files):
        char_id = filename[:-4]  # strip .txt
        filepath = os.path.join(SOURCE_FOLDER, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            character = parse_character_file(char_id, content)
            roster.append(character)
            print(f"  ✓ Parsed: {character['name']} ({char_id})")
        except Exception as e:
            print(f"  ✗ Failed to parse '{filename}': {e}")

    # Serialize to JS — unquote object keys for cleaner JS output
    json_string = json.dumps(roster, indent=4, ensure_ascii=False)
    clean_js = re.sub(r'"(\w+)":', r'\1:', json_string)

    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(f"export const characters = {clean_js};\n")

    print(f"\nSync complete! {len(roster)} character(s) written to '{OUTPUT_FILE}'.")


if __name__ == '__main__':
    run_sync()