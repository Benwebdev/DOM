/**
 * Insert content, specified by the parameter, to the end of parent element.
 * @param {HTMLElement} parent - element to add content to
 * @param {String|NodeList|HTMLElement[]} content - content to be added
 * @returns {Object}
 */

export const append = (parent, content) => {
    if (typeof content === 'undefined') {
        content = parent;
        parent = document.body;
    }
    let fn = (el) => parent.appendChild(el);
    return this.withNodeList(content, fn);
};
