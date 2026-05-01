// src/data/gachaEngine.js
import { characters } from './characters.js';
import { stateManager } from './stateManager.js';
import { weapons } from './weapons.js';

/**
 * Core RNG Engine for The Oasis Pulling Simulator.
 * Orchestrates probabilities, pity counters, and character pool selection.
 *
 * SOFT PITY SYSTEM:
 * - Pulls 1–73:   Base rate of 0.6%
 * - Pulls 74–89:  Rate increases by +6% per pull (exponential ramp)
 * - Pull 90:      Hard pity — guaranteed 5-star
 *
 * This mirrors Genshin Impact's soft pity which typically resolves
 * between pulls 74–80, with pull 90 as the hard cap.
 */

const BASE_RATE_5    = 0.6;   // 0.6% base
const SOFT_PITY_START = 73;   // soft pity kicks in after pull 73
const HARD_PITY_5    = 90;    // guaranteed at pull 90
const SOFT_PITY_INCREASE = 6; // +6% added per pull after soft pity start
const pool3 = weapons.filter(w => w.rarity === 3);

/**
 * Calculates the current 5-star pull rate based on pity count.
 * Returns a percentage (0–100).
 */
function get5StarRate(pity) {
    if (pity >= HARD_PITY_5) return 100;
    if (pity > SOFT_PITY_START) {
        const pullsIntoPity = pity - SOFT_PITY_START;
        return Math.min(BASE_RATE_5 + (pullsIntoPity * SOFT_PITY_INCREASE), 100);
    }
    return BASE_RATE_5;
}

export function performPull() {
    // 1. Increment global pity counters before every roll
    stateManager.updatePity();

    // 2. Prepare the candidate pools
    const pool5 = characters.filter(c => c.rarity === 5 && c.id !== "template" && c.name !== "");
    const pool4 = characters.filter(c => c.rarity === 4 && c.id !== "template" && c.name !== "");

    // 3. Generate a random float between 0 and 100
    const roll = Math.random() * 100;

    /* ============================================================
       LOGIC GATE 1: 5-STAR (Legendary)
       Base rate: 0.6% | Soft pity starts at pull 73 (+6%/pull)
       Hard pity: pull 90 (guaranteed)
       ============================================================ */
    const rate5 = get5StarRate(stateManager.pity5);

    if (roll <= rate5) {
        const result = pool5[Math.floor(Math.random() * pool5.length)];

        stateManager.saveNewUnlock(result.id);
        stateManager.updatePity(5, true);

        return { ...result, pullType: 'character', displayRarity: 5 };
    }

    /* ============================================================
       LOGIC GATE 2: 4-STAR (Epic)
       Base Probability: 5.1% | Threshold: 5.7% | Hard Pity: 10 pulls
       ============================================================ */
    if (roll <= 5.7 || stateManager.pity4 >= 10) {
        const result = pool4[Math.floor(Math.random() * pool4.length)];

        stateManager.saveNewUnlock(result.id);
        stateManager.updatePity(4, true);

        return { ...result, pullType: 'character', displayRarity: 4 };
    }

    /* ============================================================
       LOGIC GATE 3: 3-STAR (Common/Weapon)
       Fallback result if no character is pulled
       ============================================================ */
    const result = pool3[Math.floor(Math.random() * pool3.length)];
    return { ...result, displayRarity: 3 };

}