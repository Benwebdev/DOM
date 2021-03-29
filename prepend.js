import { withNodeList } from "./withNodeList";

/**
* Prepend content into the parent after the nth child
* @param {HTMLElement} parent - element to add content to
* @param {String|NodeList|HTMLElement[]} content - content to be added
* @param {Integer} nth - Position to insert after
* @returns {Object} - service object
*/

export const prepend = (parent, content, nth = 0) => {
    if (typeof content === 'undefined') {
        content = parent;
        parent = document.body;
    }
    let child = parent.children[nth];
    let fn = (el) => parent.insertBefore(el, child);
    return withNodeList(content, fn);
};
