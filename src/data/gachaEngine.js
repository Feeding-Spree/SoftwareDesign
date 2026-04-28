// src/data/gachaEngine.js
import { characters } from './characters.js';
import { stateManager } from './stateManager.js';

/**
 * Core RNG Engine for The Oasis Pulling Simulator.
 * Orchestrates probabilities, pity counters, and character pool selection.
 */
export function performPull() {
    // 1. Increment global pity counters before every roll
    stateManager.updatePity();
    
    // 2. Prepare the candidate pools
    // Filters out entries with rarity 0 or missing names (like templates)
    const pool5 = characters.filter(c => c.rarity === 5 && c.id !== "template" && c.name !== "");
    const pool4 = characters.filter(c => c.rarity === 4 && c.id !== "template" && c.name !== "");
    
    // 3. Generate a random float between 0 and 100
    const roll = Math.random() * 100;

    /* ============================================================
       LOGIC GATE 1: 5-STAR (Legendary)
       Base Probability: 0.6% | Hard Pity: 90 pulls
       ============================================================ */
    if (roll <= 0.6 || stateManager.pity5 >= 90) {
        const result = pool5[Math.floor(Math.random() * pool5.length)];
        
        // Persist the unlock state locally
        stateManager.saveNewUnlock(result.id);
        
        // Reset 5-star pity (and often 4-star pity in standard gacha models)
        stateManager.updatePity(5, true); 
        
        return { ...result, pullType: 'character', displayRarity: 5 };
    }

    /* ============================================================
       LOGIC GATE 2: 4-STAR (Epic)
       Base Probability: 5.1% | Threshold: 5.7% (0.6 + 5.1) | Hard Pity: 10 pulls
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
    return { 
        id: "3star-weapon", 
        name: "3-Star Weapon", 
        rarity: 3, 
        pullType: 'item',
        displayRarity: 3 
    };
}