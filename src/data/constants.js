/**
 * constants.js
 * ✨ NEW FILE: Centralizes all magic numbers and configuration values
 * Makes the codebase more maintainable and easier to tune
 */

// Gacha probability rates (percentages)
export const GACHA_RATES = {
    FIVE_STAR_BASE: 0.6,        // 0.6% base rate for 5-star
    FOUR_STAR_BASE: 5.1,        // 5.1% base rate for 4-star
    FOUR_STAR_THRESHOLD: 5.7,   // Combined threshold: 0.6 + 5.1
};

// Pity system limits (number of pulls)
export const PITY_LIMITS = {
    FIVE_STAR: 90,   // Guaranteed 5-star at 90 pulls
    FOUR_STAR: 10,   // Guaranteed 4-star at 10 pulls
};

// Rarity values
export const RARITY = {
    FIVE_STAR: 5,
    FOUR_STAR: 4,
    THREE_STAR: 3,
};

// Video types for wish animations
export const VIDEO_TYPES = {
    SINGLE: 'single',
    MULTIPLE: 'multiple',
};

// Pull types
export const PULL_TYPES = {
    CHARACTER: 'character',
    WEAPON: 'weapon',
    ITEM: 'item',
};

// Element colors for theming
export const ELEMENT_COLORS = {
    electro: { color: 'rgba(148, 95, 177, 0.9)', glow: 'rgba(148, 95, 177, 0.2)' },
    pyro: { color: 'rgba(239, 64, 53, 0.9)', glow: 'rgba(239, 64, 53, 0.2)' },
    hydro: { color: 'rgba(0, 177, 255, 0.9)', glow: 'rgba(0, 177, 255, 0.2)' },
    anemo: { color: 'rgba(0, 255, 150, 0.9)', glow: 'rgba(0, 255, 150, 0.2)' },
    cryo: { color: 'rgba(150, 230, 255, 0.9)', glow: 'rgba(150, 230, 255, 0.2)' },
    geo: { color: 'rgba(255, 180, 0, 0.9)', glow: 'rgba(255, 180, 0, 0.2)' },
    dendro: { color: 'rgba(100, 255, 0, 0.9)', glow: 'rgba(100, 255, 0, 0.2)' },
};

// Animation durations
export const ANIMATIONS = {
    CARD_HOVER_DURATION: '0.4s',
    TAB_TRANSITION_DURATION: '0.3s',
    RESULT_ENTER_DURATION: '0.6s',
};

// Image paths
export const PATHS = {
    CHARACTER_CARD: (id) => `/characters/${id}/card.webp`,
    CHARACTER_BG: (id) => `/characters/${id}/bg.webp`,
    CHARACTER_WISH: (id) => `/characters/${id}/wish.webp`,
    WEAPON_WISH: (id) => `/wish/${id}.png`,
    ICON: (category, value) => {
        const slug = value.toLowerCase().replace(/\s+/g, '-');
        return `/assets/ui/icons/${category}-${slug}.webp`;
    },
};

// Filter options
export const FILTER_CATEGORIES = {
    ELEMENT: 'element',
    WEAPON: 'weapon',
    RARITY: 'rarity',
    VERSION: 'version',
};

// Default filter state
export const DEFAULT_FILTERS = {
    element: 'all',
    weapon: 'all',
    rarity: 'all',
    version: 'all',
};
