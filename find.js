/**
* Returns child nodes of the element, that match selector.
* @param {HTMLElement|String} element - parent element.
* @param {String} selector - filter for child elements.
* @returns {HTMLElement[]} - matched elements.
*/

export const find = (element, selector) => {
    return Array.prototype.slice.call(element.querySelectorAll(selector));
};
