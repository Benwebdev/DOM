/**
 * Remove elements from DOM
 * @param {...Element} element - elements that need to be removed
 * @returns {Element[]} - array of removed elements
 */

export const remove = (...elements) => {
    let removed = [];
    elements.forEach((el) => {
        if (!(el instanceof Element) || !el.parentNode) {
            return;
        }
        removed.push(el.parentNode.removeChild(el));
    });
    return removed;
};
