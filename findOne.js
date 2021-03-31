/**
 * Returns first child node of the `element`, that match `selector`.
 * @param {HTMLElement|String} element - parent element.
 * @param {String} selector - filter for child element.
 * @returns {HTMLElement} - matched element
 */

export const findOne = (element, selector) => element.querySelector(selector);
