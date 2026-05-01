import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { characters } from './data/characters.js';
import { stateManager } from './data/stateManager.js';

const activeFilters = { element: 'all', weapon: 'all', rarity: 'all', version: 'all' };

const renderGrid = () => {
    const grid = document.getElementById('character-grid');
    if (!grid) return;

    const filteredList = characters.filter(char => {
        if (char.rarity === 0 || char.id === "template") return false;
        const matchElement = activeFilters.element === 'all' || char.element === activeFilters.element;
        const matchWeapon = activeFilters.weapon === 'all' || char.weapon === activeFilters.weapon;
        const matchRarity = activeFilters.rarity === 'all' || char.rarity.toString() === activeFilters.rarity;
        const matchVersion = activeFilters.version === 'all' || char.version === activeFilters.version;
        return matchElement && matchWeapon && matchRarity && matchVersion;
    });

    grid.innerHTML = filteredList.map(char => {
        const isUnlocked = stateManager.isUnlocked(char.id);
        const lockedClass = isUnlocked ? '' : 'locked';
        const linkPath = isUnlocked ? `details.html?id=${char.id}` : '#';

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
                            <div class="card-rarity-row mt-1">${rarityStars}</div>
                        </div>
                        ${!isUnlocked ? `<div class="lock-overlay"><span class="lock-icon">🔒</span></div>` : ''}
                        <div class="card-overlay"></div>
                    </div>
                </a>
            </div>`;
    }).join('');
};

/* ============================================================
   MASTER TOGGLE — double-click the summon button
   ============================================================ */
const initMasterToggle = () => {
    const summonBtn = document.querySelector('a[href="wish.html"]');
    if (!summonBtn) return;

    // Reflect current state on page load
    updateToggleStyle(summonBtn, stateManager.isMasterUnlocked);

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'U') {
            const isNowUnlocked = stateManager.toggleAllUnlocks();
            updateToggleStyle(summonBtn, isNowUnlocked);
            renderGrid();
        }
    });
};

const updateToggleStyle = (btn, isUnlocked) => {
    if (isUnlocked) {
        btn.textContent = '🔓 ALL UNLOCKED (DEV)';
        btn.style.borderColor = '#00ff99';
        btn.style.color = '#00ff99';
    } else {
        btn.textContent = '✨ GO TO SUMMON';
        btn.style.borderColor = '';
        btn.style.color = '';
    }
};

/* ============================================================
   SCROLL & FILTERS
   ============================================================ */
const scrollContainer = document.querySelector(".results-wrapper");
if (scrollContainer) {
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollBy({
            left: evt.deltaY * 2.5,
            behavior: 'smooth'
        });
    });
}

window.updateFilter = (category, value) => { activeFilters[category] = value; renderGrid(); };
window.resetFilters = () => {
    Object.keys(activeFilters).forEach(k => activeFilters[k] = 'all');
    document.querySelectorAll('.custom-select').forEach(s => s.selectedIndex = 0);
    renderGrid();
};

document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
    initMasterToggle();
});