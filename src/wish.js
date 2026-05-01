/**
 * wish.js - The Akademiya Summoning Theater Controller
 */

import './assets/style.css';
import './assets/wish.css';
import { performPull } from './data/gachaEngine.js';
import { stateManager } from './data/stateManager.js';

const wishVideo = document.getElementById('wish-video');
const videoSource = document.getElementById('video-source');
const resultScreen = document.getElementById('result-screen');
const summonControls = document.getElementById('summon-controls');
const skipBtn = document.getElementById('skip-btn');
const pity5Label = document.getElementById('pity-5');
const pity4Label = document.getElementById('pity-4');

const CARD_CLIP_PATH = "M0.473,0 L0.5135,0 L0.5946,0.0156 L0.6892,0.025 L0.7568,0.0406 L0.7703,0.0688 L0.8108,0.075 L0.9054,0.0781 L0.9189,0.0938 L0.9865,0.1062 L0.9865,0.8906 L0.9189,0.9031 L0.9054,0.9187 L0.8108,0.9219 L0.7703,0.9313 L0.7432,0.9594 L0.6757,0.975 L0.5135,0.9969 L0.473,0.9969 L0.3108,0.975 L0.2432,0.9594 L0.2162,0.9313 L0.1757,0.9219 L0.0811,0.9187 L0.0676,0.9031 L0,0.8906 L0,0.1062 L0.0676,0.0938 L0.0811,0.0781 L0.1757,0.075 L0.2162,0.0688 L0.2297,0.0406 L0.2973,0.025 L0.4595,0.0031 Z";

function ensureClipPath() {
    if (document.getElementById('card-shape-clip')) return;
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.position = "absolute";
    svg.style.overflow = "hidden";

    const defs = document.createElementNS(svgNS, "defs");
    const clipPath = document.createElementNS(svgNS, "clipPath");
    clipPath.setAttribute("id", "card-shape-clip");
    clipPath.setAttribute("clipPathUnits", "objectBoundingBox");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", CARD_CLIP_PATH);

    clipPath.appendChild(path);
    defs.appendChild(clipPath);
    svg.appendChild(defs);
    document.body.appendChild(svg);
}

/**
 * Resolves the portrait image path based on pull type.
 * Characters use their own folder, weapons use the /wish/ folder.
 */
function getPortraitSrc(res) {
    if (res.pullType === 'character') {
        return `/characters/${res.id}/wish.webp`;
    }
    return `/wish/${res.id}.webp`;
}

const updatePityUI = () => {
    pity5Label.innerText = stateManager.pity5;
    pity4Label.innerText = stateManager.pity4;
};

window.startWish = (count) => {
    const results = [];
    let highestRarity = 3;

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

    let videoFile = count === 10
        ? `${highestRarity}-star-multiple.mp4`
        : `${highestRarity}-star-single.mp4`;

    if (count === 10 && highestRarity === 3) videoFile = '3-star-single.mp4';

    window._pendingResults = results;

    summonControls.classList.add('d-none');
    wishVideo.classList.remove('d-none');
    skipBtn.classList.remove('d-none');
    videoSource.src = `/wish/${videoFile}`;
    wishVideo.load();

    wishVideo.play().catch(() => finishWish(results));
    wishVideo.onended = () => finishWish(results);
};

window.skipVideo = () => {
    wishVideo.pause();
    wishVideo.currentTime = 0;
    finishWish(window._pendingResults);
};

function finishWish(results) {
    wishVideo.classList.add('d-none');
    skipBtn.classList.add('d-none');
    window._pendingResults = null;
    showMultiResult(results);
    updatePityUI();
}

function showMultiResult(results) {
    results.sort((a, b) => {
        if (b.displayRarity !== a.displayRarity) return b.displayRarity - a.displayRarity;
        return a.pullType === 'character' ? -1 : 1;
    });

    ensureClipPath();

    resultScreen.classList.remove('d-none');
    const resultContent = document.querySelector('.result-content');
    resultContent.className = "result-content w-100 px-0";

    resultContent.innerHTML = `
    <div class="results-wrapper mb-5 animate-result-enter">
        ${results.map(res => `
            <div class="result-item">
                <div class="mini-result-card rarity-${res.displayRarity}">
                    <div class="portrait-clipper">
                        <img src="${getPortraitSrc(res)}"
                             class="${res.pullType === 'character' ? 'character-portrait' : 'weapon-portrait'}"
                             loading="lazy">
                    </div>
                    <img src="/wish/wish-card.webp" class="card-frame" loading="lazy">
                    <div class="card-info">
                        <span class="stars">${'★'.repeat(res.displayRarity)}</span>
                    </div>
                </div>
            </div>
        `).join('')}
    </div>
`;

    const scrollContainer = document.querySelector(".results-wrapper");
    if (scrollContainer) {
        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollBy({ left: evt.deltaY * 2.5, behavior: 'smooth' });
        });
    }

    const topPull = results[0];
    if (topPull.displayRarity === 5 && topPull.pullType === 'character') {
        resultScreen.style.backgroundImage = `
            radial-gradient(circle, rgba(1, 10, 19, 0) 30%, rgba(1, 10, 19, 0.9) 100%),
            url('/characters/${topPull.id}/bg.webp')`;
    } else {
        resultScreen.style.backgroundImage = "url('/wish/wish-background.webp')";
    }
    resultScreen.style.backgroundSize = "cover";
    resultScreen.style.backgroundPosition = "center";
}

window.closeResult = () => {
    resultScreen.classList.add('d-none');
    summonControls.classList.remove('d-none');
    wishVideo.pause();
    wishVideo.currentTime = 0;
};

document.addEventListener('DOMContentLoaded', updatePityUI);