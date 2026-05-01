import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { characters } from './data/characters.js';

/* ============================================================
   1. INITIALIZATION & DATA BINDING
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const charId = params.get('id');
    const character = characters.find(c => c.id === charId);

    if (!character && window.location.pathname.includes('details.html')) {
        window.location.href = 'index.html';
        return;
    }

    const detailsBody = document.getElementById('details-body');
    if (!character || !detailsBody) return;

    detailsBody.style.backgroundImage = `url('/characters/${charId}/bg.webp')`;
    detailsBody.style.backgroundColor = 'transparent';

    const elementClass = character.element.toLowerCase();
    detailsBody.classList.add(`theme-${elementClass}`);

    const textFields = {
        'char-name': character.name,
        'char-title': character.title,
        'char-lore': character.lore,
        'char-role': character.role,
        'char-region': character.region,
        'char-element-display': character.element,
        'char-weapon-display': character.weapon
    };

    Object.entries(textFields).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    });

    const rarityContainer = document.getElementById('char-rarity');
    if (rarityContainer && character.rarity) {
        rarityContainer.innerHTML = Array(Number(character.rarity)).fill(0)
            .map(() => `<img src="/assets/ui/icons/rarity-star.webp" class="rarity-star" style="width:40px" alt="Star">`).join('');
    }

    const setIcon = (id, category, value) => {
        const el = document.getElementById(id);
        if (el && value) {
            const slug = value.toLowerCase().replace(/\s+/g, '-');
            el.src = `/assets/ui/icons/${category}-${slug}.webp`;
        }
    };

    setIcon('role-icon', 'role', character.role);
    setIcon('region-icon', 'region', character.region);
    setIcon('element-icon', 'element', character.element);
    setIcon('weapon-icon', 'weapon', character.weapon);

    /* ============================================================
       2. GLOBAL SCOPE FUNCTIONS
       ============================================================ */
    
    window.highlightCard = (level, isActive) => {
        const card = document.querySelector(`[data-con-level="${level}"]`);
        if (card) card.classList.toggle('highlight-box', isActive);

        const circle = document.getElementById(`node-circle-${level}`);
        const icon = document.getElementById(`node-icon-${level}`);
        if (circle) circle.classList.toggle('node-active', isActive);
        if (icon) icon.classList.toggle('active', isActive);
    };

    window.switchTab = (tabName, element) => {
        if (!document.startViewTransition) {
            renderTabContent(tabName, element);
        } else {
            document.startViewTransition(() => renderTabContent(tabName, element));
        }
    };

    window.setAbility = (id, el) => {
        const ability = character.abilities.find(a => a.id === id);
        if (!ability) return;
        
        document.getElementById('current-ability-name').innerText = ability.name;
        document.getElementById('current-ability-desc').innerText = ability.desc;

        const previewContainer = document.getElementById('ability-preview-container');
        if (previewContainer) {
            const previews = ability.previews || [];

            if (previews.length > 1) {
                const items = previews.map((img, idx) => `
                    <div class="carousel-item ${idx === 0 ? 'active' : ''} h-100">
                        <img src="/characters/${charId}/talent-previews/${img}.webp" class="d-block w-100 h-100 object-fit-cover">
                    </div>`).join('');

                previewContainer.innerHTML = `
                    <div id="abilityCarousel" class="carousel slide h-100" data-bs-ride="carousel">
                        <div class="carousel-inner h-100">${items}</div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#abilityCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#abilityCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </button>
                    </div>`;
            } else if (previews.length === 1) {
                previewContainer.innerHTML = `<img src="/characters/${charId}/talent-previews/${previews[0]}.webp" class="w-100 h-100 object-fit-cover">`;
            } else {
                previewContainer.innerHTML = `
                    <div class="h-100 w-100 position-relative overflow-hidden bg-black">
                        <img src="/characters/${charId}/talent-previews/splash.webp" class="w-100 h-100 object-fit-cover opacity-25" style="filter: grayscale(0.5) blur(2px);">
                        <div class="position-absolute top-50 start-50 translate-middle text-white opacity-50 italic small text-uppercase" style="letter-spacing: 3px;">Passive Talent</div>
                    </div>`;
            }
        }

        document.querySelectorAll('.ability-btn').forEach(b => b.classList.remove('active'));
        if (el) el.classList.add('active');
    };

    /* ============================================================
       3. RENDER CONTENT
       ============================================================ */
    function renderTabContent(tabName, element) {
        const container = document.getElementById('morph-container');
        if (!container) return;

        document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
        if (element) element.classList.add('active');

        if (tabName === 'abilities') {
            container.innerHTML = `
                <div class="row g-5">
                    <div class="col-md-5">
                        <div class="d-flex gap-4">
                            <div id="ability-icons" class="d-flex flex-column gap-3"></div>
                            <div class="flex-grow-1">
                                <h3 id="current-ability-name" class="text-gold text-uppercase fw-bold italic"></h3>
                                <p id="current-ability-desc" class="opacity-75" style="white-space: pre-line;"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="ratio ratio-16x9 border border-secondary border-opacity-10 overflow-hidden">
                            <div id="ability-preview-container" class="h-100"></div>
                        </div>
                    </div>
                </div>`;
            initAbilities();
        } else {
            const mapData = character.constellationMap;
            const connections = character.constConnections || [];

            container.innerHTML = `
                <div class="row g-5 align-items-center">
                    <div class="col-lg-5">
                        <div class="constellation-map-container" id="map-target" style="position:relative; background:none;">
                            <img src="/characters/${charId}/const-icon/const-map.webp" class="constellation-figure-img w-100" style="position:relative; z-index:1; display:block;">
                            
                            ${mapData ? `
                            <svg viewBox="0 0 100 100" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:10; pointer-events:none;">
                                <g class="constellation-lines">
                                    ${connections.map(conn => {
                                        const s = mapData[conn[0]], e = mapData[conn[1]];
                                        return (s && e) ? `<line x1="${s[0]}" y1="${s[1]}" x2="${e[0]}" y2="${e[1]}" />` : '';
                                    }).join('')}
                                </g>
                                <g style="pointer-events: auto;">
                                    ${Object.keys(mapData).map(key => {
                                        const [x, y] = mapData[key];
                                        const iconIdx = key.replace('c', ''); 
                                        return `
                                            <circle id="node-circle-${iconIdx}" cx="${x}" cy="${y}" r="3.5" fill="white" class="node-circle" />
                                            <image id="node-icon-${iconIdx}" href="/characters/${charId}/const-icon/const-${iconIdx}.webp" 
                                                   x="${x - 4}" y="${y - 4}" width="8" height="8" class="const-node-icon"
                                                   style="cursor:pointer;" onmouseenter="window.highlightCard(${iconIdx}, true)" onmouseleave="window.highlightCard(${iconIdx}, false)" />`;
                                    }).join('')}
                                </g>
                            </svg>` : ''}
                        </div>

                        <div class="text-center mt-4">
                            <h4 class="constellation-title" 
                                style="letter-spacing: 2px; font-size: 1.1rem; color: var(--element-color); text-shadow: 0 0 10px var(--element-glow);">
                                ${character.constellationName || 'Constellation'}
                            </h4>
                            <hr class="mx-auto border-secondary opacity-25" style="width: 50px;">
                        </div>
                    </div>

                    <div class="col-lg-7">
                        <div class="row row-cols-1 row-cols-md-2 g-3">
                            ${character.constellations.map(con => `
                                <div class="col">
                                    <div class="info-box constellation-card p-4 h-100" data-con-level="${con.level}"
                                         onmouseenter="window.highlightCard(${con.level}, true)" onmouseleave="window.highlightCard(${con.level}, false)">
                                        <span class="label d-block mb-1">LEVEL ${con.level}</span>
                                        <span class="value fs-5 text-gold d-block mb-2">${con.name}</span>
                                        <p class="small opacity-75 mb-0">${con.desc}</p>
                                    </div>
                                </div>`).join('')}
                        </div>
                    </div>
                </div>`;
        }
    }

    function initAbilities() {
        const iconContainer = document.getElementById('ability-icons');
        if (!iconContainer) return;
        iconContainer.innerHTML = character.abilities.map((ability, idx) => `
            <img src="/characters/${charId}/talent-icons/${ability.id}.webp" class="ability-btn ${idx === 0 ? 'active' : ''}" 
                 style="width:55px; cursor:pointer" onclick="window.setAbility('${ability.id}', this)">`).join('');
        window.setAbility(character.abilities[0].id);
    }

    const defaultTab = document.querySelector('.tab-link');
    if (defaultTab) renderTabContent('abilities', defaultTab);
});