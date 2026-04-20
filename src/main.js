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
    
    // Guard Clause: Stop if the grid isn't found (e.g., on the details page)
    if (!grid) return;

    // A. Apply cumulative filters
    const filteredList = characters.filter(char => {
        const matchElement = activeFilters.element === 'all' || char.element === activeFilters.element;
        const matchWeapon = activeFilters.weapon === 'all' || char.weapon === activeFilters.weapon;
        const matchRarity = activeFilters.rarity === 'all' || char.rarity.toString() === activeFilters.rarity;
        const matchVersion = activeFilters.version === 'all' || char.version === activeFilters.version;

        return matchElement && matchWeapon && matchRarity && matchVersion;
    });

    // B. Map data to HTML
    grid.innerHTML = filteredList.map(char => {
        const lockedClass = char.unlocked ? '' : 'locked';
        // If locked, the link points to # (nowhere), otherwise it goes to details
        const linkPath = char.unlocked ? `details.html?id=${char.id}` : '#';

        return `
            <div class="col-6 col-md-4 col-lg-3">
                <a href="${linkPath}" class="character-card-link">
                    <div class="character-card card-${char.element.toLowerCase()} ${lockedClass}">
                        
                        <img src="/characters/${char.id}/card.webp" class="card-img" alt="${char.name}">
                        
                        <div class="card-info">
                            <span class="card-element">${char.element}</span>
                            <h3 class="card-name">${char.name}</h3>
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

    // C. Empty State: Show message if no characters match filters
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
   3. GLOBAL CONTROLLERS (Exposed to Window for HTML)
   ============================================================ */

/**
 * Updates the filter state and triggers a re-render
 */
window.updateFilter = (category, value) => {
    activeFilters[category] = value;
    renderGrid();
};

/**
 * Clears all filters back to 'all'
 */
window.resetFilters = () => {
    activeFilters.element = 'all';
    activeFilters.weapon = 'all';
    activeFilters.rarity = 'all';
    activeFilters.version = 'all';

    // Reset all dropdowns in the UI back to their first option
    document.querySelectorAll('.custom-select').forEach(select => {
        select.selectedIndex = 0;
    });

    renderGrid();
};

/* ============================================================
   4. INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
});