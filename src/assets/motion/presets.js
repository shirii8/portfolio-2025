// Shared motion language. One easing curve and a couple of springs keep every
// animation on the page feeling like it belongs to the same hand.

// Fast start, long soft landing. Reads as "placed on paper", not "bounced".
export const EASE_OUT = [0.22, 1, 0.36, 1];

export const SPRING_SOFT = { type: "spring", stiffness: 220, damping: 26 };
export const SPRING_SNAPPY = { type: "spring", stiffness: 420, damping: 30 };

// Viewport settings for scroll-triggered entrances: fire once, slightly
// before the element is fully on screen so it is mid-animation when seen.
export const IN_VIEW = { once: true, margin: "-80px" };

// Ink is always the page's near-black; the brand is strictly black and white.
export const INK = "#030712";
