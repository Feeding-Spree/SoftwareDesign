/**
 * stateManager.js
 * Handles persistent storage for The Akademiya using localStorage.
 * Tracks pity counts and character unlocks.
 */

const STORAGE_KEYS = {
    UNLOCKS: 'akademiya_unlocked',
    PITY_5: 'akademiya_pity5',
    PITY_4: 'akademiya_pity4'
};

export const stateManager = {
    // 1. PITY TRACKING
    get pity5() {
        return parseInt(localStorage.getItem(STORAGE_KEYS.PITY_5)) || 0;
    },
    get pity4() {
        return parseInt(localStorage.getItem(STORAGE_KEYS.PITY_4)) || 0;
    },

    /**
     * Updates pity counters. 
     * @param {number} rarity - The rarity of the character pulled.
     * @param {boolean} reset - Whether to reset the counter to 0.
     */
    updatePity(rarity = 0, reset = false) {
        if (rarity === 5) {
            localStorage.setItem(STORAGE_KEYS.PITY_5, reset ? 0 : this.pity5 + 1);
        } else if (rarity === 4) {
            localStorage.setItem(STORAGE_KEYS.PITY_4, reset ? 0 : this.pity4 + 1);
        } else {
            // Increment both for 3-star pulls
            localStorage.setItem(STORAGE_KEYS.PITY_5, this.pity5 + 1);
            localStorage.setItem(STORAGE_KEYS.PITY_4, this.pity4 + 1);
        }
    },

    // 2. UNLOCK TRACKING
    get unlockedIds() {
        const data = localStorage.getItem(STORAGE_KEYS.UNLOCKS);
        return data ? JSON.parse(data) : [];
    },

    /**
     * Saves a new character ID to the unlocked list.
     * @param {string} id - The character ID from characters.js
     */
    saveNewUnlock(id) {
        const current = this.unlockedIds;
        if (!current.includes(id)) {
            current.push(id);
            localStorage.setItem(STORAGE_KEYS.UNLOCKS, JSON.stringify(current));
        }
    },

    /**
     * Checks if a specific character is already in the collection.
     */
    isUnlocked(id) {
        return this.unlockedIds.includes(id);
    },

    // 3. UTILITIES
    /**
     * Completely wipes the collection and resets pity.
     * Useful for debugging or restarting the experience.
     */
    resetProgress() {
        localStorage.removeItem(STORAGE_KEYS.UNLOCKS);
        localStorage.setItem(STORAGE_KEYS.PITY_5, 0);
        localStorage.setItem(STORAGE_KEYS.PITY_4, 0);
        window.location.reload(); // Refresh to update the UI
    }
};