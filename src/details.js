import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { characters } from './data/characters.js';

// 1. Get Character Data from URL
const params = new URLSearchParams(window.location.search);
const charId = params.get('id');
const character = characters.find(c => c.id === charId);

// The Guard: Only run if we found a valid character
if (character && document.getElementById('details-body')) {
    
    // Initial Setup
    document.getElementById('details-body').style.backgroundImage = `url('/characters/${charId}/bg.webp')`;
    document.getElementById('char-name').innerText = character.name;
    document.getElementById('char-title').innerText = character.title;
    document.getElementById('char-lore').innerText = character.lore;
    document.getElementById('char-role').innerText = character.role;
    document.getElementById('char-region').innerText = character.region;

    // Set Role/Region Icons from the Global Assets folder
    const roleSlug = character.role.toLowerCase().replace(/\s+/g, '-');
    const regionSlug = character.region.toLowerCase();
    document.getElementById('role-icon').src = `/assets/ui/icons/role-${roleSlug}.webp`;
    document.getElementById('region-icon').src = `/assets/ui/icons/region-${regionSlug}.webp`;

    // 2. Inject Ability Icons (Vertical Stack)
    const iconContainer = document.getElementById('ability-icons');
    iconContainer.innerHTML = character.abilities.map((ability, index) => `
      <img 
        src="/characters/${charId}/talent-icons/${ability.id}.webp" 
        class="ability-btn ${index === 0 ? 'active' : ''}" 
        onclick="window.setAbility('${ability.id}', this)" 
        alt="${ability.name}"
      >
    `).join('');

    // 3. Ability Controller
    window.setAbility = (abilityId, element) => {
        const ability = character.abilities.find(a => a.id === abilityId);
        const previewContainer = document.getElementById('ability-preview-container');

        if (!previewContainer) return;

        // Update Text Content
        document.getElementById('current-ability-name').innerText = ability.name;
        document.getElementById('current-ability-desc').innerText = ability.desc;

        // Visual Logic (Carousel vs Single vs Fallback)
        if (ability.previews && ability.previews.length > 0) {
            if (ability.previews.length > 1) {
                // Generate Carousel for multi-previews
                previewContainer.innerHTML = `
                  <div id="abilityCarousel" class="carousel slide h-100" data-bs-ride="false">
                    <div class="carousel-inner h-100">
                      ${ability.previews.map((p, i) => `
                        <div class="carousel-item h-100 ${i === 0 ? 'active' : ''}">
                          <img src="/characters/${charId}/talent-previews/${p}.webp" class="d-block w-100 h-100 object-fit-cover">
                          <div class="carousel-caption">
                            <span class="badge text-uppercase">${p.split('-').pop()}</span>
                          </div>
                        </div>
                      `).join('')}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#abilityCarousel" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#abilityCarousel" data-bs-slide="next">
                      <span class="carousel-control-next-icon"></span>
                    </button>
                  </div>
                `;
            } else {
                // Show Single GIF
                previewContainer.innerHTML = `
                  <img src="/characters/${charId}/talent-previews/${ability.previews[0]}.webp" class="img-fluid w-100 h-100 object-fit-cover">
                `;
            }
            // Replace the fallback part in details.js
            } else {
                const splashPath = `/characters/${charId}/talent-previews/splash.webp`; // CHANGE EXTENSION HERE IF NEEDED
                console.log("Attempting to load splash from:", splashPath); 

                previewContainer.innerHTML = `
                <div class="fallback-visual h-100 w-100">
                    <img src="${splashPath}" 
                        class="splash-fallback fade-in" 
                        onerror="this.style.display='none'; console.error('FAILED TO LOAD SPLASH ART');">
                    <div class="visual-overlay">
                    <span>PASSIVE TALENT</span>
                    </div>
                </div>
                `;
            }

        // Manage Highlighting
        document.querySelectorAll('.ability-btn').forEach(btn => btn.classList.remove('active'));
        if (element) {
            element.classList.add('active');
        } else {
            const first = document.querySelector('.ability-btn');
            if (first) first.classList.add('active');
        }
    };

    // Initialize Page
    window.setAbility(character.abilities[0].id);

} else if (!character && window.location.pathname.includes('details.html')) {
    // If user manually types a wrong ID, send them back
    window.location.href = 'index.html';
}