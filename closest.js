import closest from 'closest';

/**
 * Gets the first element that matches the selector.
 * Tests the element itself and traverses up through its ancestors.
 * @param {HTMLElement} element - starting element.
 * @param {String} selector - selector to match elements against.
 * @returns {HTMLElement[]} - matched elements.
 */
export const closest = (element, selector) => closest(element, selector, true);
