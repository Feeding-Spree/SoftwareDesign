import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { characters } from './data/characters.js';

/* ============================================================
   1. FILTER STATE
   ============================================================ */
const activeFilters = {
    element: 'all',
    weapon: 'all',
    rarity: 'all',
    version: 'all'
};

/* ============================================================
   2. RENDERING ENGINE
   ============================================================ */
const renderGrid = () => {
    const grid = document.getElementById('character-grid');
    if (!grid) return;

    const filteredList = characters.filter(char => {
        const matchElement = activeFilters.element === 'all' || char.element === activeFilters.element;
        const matchWeapon = activeFilters.weapon === 'all' || char.weapon === activeFilters.weapon;
        const matchRarity = activeFilters.rarity === 'all' || char.rarity.toString() === activeFilters.rarity;
        const matchVersion = activeFilters.version === 'all' || char.version === activeFilters.version;
        return matchElement && matchWeapon && matchRarity && matchVersion;
    });

    // Inside the grid.innerHTML mapping in main.js
    grid.innerHTML = filteredList.map(char => {
        const lockedClass = char.unlocked ? '' : 'locked';
        const linkPath = char.unlocked ? `details.html?id=${char.id}` : '#';

        // Generate rarity stars
        const rarityStars = Array(Number(char.rarity)).fill(0).map(() => 
            `<img src="/assets/ui/icons/rarity-star.webp" class="rarity-star-sm" alt="Star">`
        ).join('');

        return `
            <div class="col-6 col-md-4 col-lg-3">
                <a href="${linkPath}" class="character-card-link">
                    <div class="character-card card-${char.element.toLowerCase()} ${lockedClass}">
                        
                        <img src="/characters/${char.id}/card.webp" class="card-img" alt="${char.name}">
                        
                        <div class="card-info">
                            <h3 class="card-name">${char.name}</h3>
                            
                            <div class="card-rarity-row mt-1">
                                ${rarityStars}
                            </div>
                        </div>

                        ${!char.unlocked ? `
                            <div class="lock-overlay">
                                <span class="lock-icon">🔒</span>
                            </div>
                        ` : ''}

                        <div class="card-overlay"></div>
                    </div>
                </a>
            </div>
        `;
    }).join('');

    if (filteredList.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-gold opacity-50 italic">No characters match the selected criteria.</p>
                <button class="filter-btn" onclick="window.resetFilters()">RESET FILTERS</button>
            </div>
        `;
    }
};

/* ============================================================
   3. GLOBAL CONTROLLERS
   ============================================================ */
window.updateFilter = (category, value) => {
    activeFilters[category] = value;
    renderGrid();
};

window.resetFilters = () => {
    activeFilters.element = 'all';
    activeFilters.weapon = 'all';
    activeFilters.rarity = 'all';
    activeFilters.version = 'all';
    document.querySelectorAll('.custom-select').forEach(select => select.selectedIndex = 0);
    renderGrid();
};

/* ============================================================
   4. INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
});