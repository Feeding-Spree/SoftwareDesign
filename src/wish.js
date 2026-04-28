/**
 * wish.js - The Akademiya Summoning Theater Controller
 * Manages gacha execution, video transitions, and standardized result framing.
 */

import './assets/style.css';
import './assets/wish.css';
import { performPull } from './data/gachaEngine.js';
import { stateManager } from './data/stateManager.js';

// --- DOM Selectors ---
const wishVideo = document.getElementById('wish-video');
const videoSource = document.getElementById('video-source');
const resultScreen = document.getElementById('result-screen');
const summonControls = document.getElementById('summon-controls');
const pity5Label = document.getElementById('pity-5');
const pity4Label = document.getElementById('pity-4');

/**
 * Updates the pity labels based on persistent state.
 */
const updatePityUI = () => {
    pity5Label.innerText = stateManager.pity5;
    pity4Label.innerText = stateManager.pity4;
};

/**
 * Initiates the summoning sequence.
 * @param {number} count - Number of pulls (1 or 10).
 */
window.startWish = (count) => {
    const results = [];
    let highestRarity = 3;

    // 1. Execute Gacha Logic
    try {
        for (let i = 0; i < count; i++) {
            const pull = performPull();
            if (!pull) throw new Error("Gacha Engine failure.");
            results.push(pull);
            if (pull.displayRarity > highestRarity) highestRarity = pull.displayRarity;
        }
    } catch (err) {
        console.error("Akademiya Error:", err);
        return;
    }

    // 2. Map Animation Files (Standardized naming convention)
    let videoFile = count === 10 
        ? `${highestRarity}-star-multiple.mp4` 
        : `${highestRarity}-star-single.mp4`;
    
    // Failsafe: Revert to single-star video if 10-pull contains only 3-stars
    if (count === 10 && highestRarity === 3) videoFile = '3-star-single.mp4';

    // 3. Prepare Theater
    summonControls.classList.add('d-none');
    wishVideo.classList.remove('d-none');
    videoSource.src = `/wish/${videoFile}`;
    wishVideo.load();

    // 4. Play Video with Failsafe Catch
    wishVideo.play().catch(() => finishWish(results));
    wishVideo.onended = () => finishWish(results);
};

/**
 * Logic to run after video animation concludes.
 */
function finishWish(results) {
    wishVideo.classList.add('d-none');
    showMultiResult(results);
    updatePityUI();
}

/**
 * Renders the results carousel with standardized wish-card framing and folder-based naming.
 */
function showMultiResult(results) {
    // Sort: 5* -> 4* -> 3*, then Characters -> Weapons
    results.sort((a, b) => {
        if (b.displayRarity !== a.displayRarity) return b.displayRarity - a.displayRarity;
        return a.pullType === 'character' ? -1 : 1;
    });

    resultScreen.classList.remove('d-none');
    const resultContent = document.querySelector('.result-content');
    
    // Force end-to-end layout
    resultContent.className = "result-content w-100 px-0"; 

    resultContent.innerHTML = `
        <div class="results-wrapper mb-5 animate-result-enter">
            ${results.map(res => `
                <div class="result-item">
                    <div class="mini-result-card rarity-${res.displayRarity}">
                        <img src="/wish/wish-card.webp" class="card-frame" loading="lazy">
                        
                        <div class="portrait-clipper">
                            <img src="${res.pullType === 'character' ? `/characters/${res.id}/wish.webp` : '/wish/3star-weapon.webp'}" 
                                 class="character-portrait" loading="lazy">
                            
                            <div class="card-cover"></div>
                        </div>

                        <div class="card-info">
                            <span class="stars">${'★'.repeat(res.displayRarity)}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="mt-4 text-center">
            <button class="custom-select p-3 px-5 fs-5" onclick="window.closeResult()">CONFIRM</button>
        </div>
    `;

    // Initialize Smooth Mouse-Wheel Horizontal Scroll
    const scrollContainer = document.querySelector(".results-wrapper");
    if (scrollContainer) {
        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollBy({ left: evt.deltaY * 2.5, behavior: 'smooth' });
        });
    }

    // Dynamic 5-Star Background (Using folder-based pathing)
    const topPull = results[0];
    if (topPull.displayRarity === 5 && topPull.pullType === 'character') {
        resultScreen.style.backgroundImage = `radial-gradient(circle, transparent 20%, #010a13 90%), url('/characters/${topPull.id}/bg.webp')`;
    } else {
        resultScreen.style.backgroundImage = 'none';
    }
}

/**
 * Resets the UI state and resets video playback.
 */
window.closeResult = () => {
    resultScreen.classList.add('d-none');
    summonControls.classList.remove('d-none');
    wishVideo.pause();
    wishVideo.currentTime = 0; // Ensures video starts from 0 on next pull
};

// Initialize Pity Display on Page Load
document.addEventListener('DOMContentLoaded', updatePityUI);