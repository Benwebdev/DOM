import { stringToHTML } from "./stringToHTML";

/**
 * Allows a function to be execute over a list of nodes, a node, or a string
 * which will be converted to a node
 * @param {String|NodeList|HTMLElement[]} content - content to be added
 * @param {Function} fn - Function to execute, takes a HTMLElement as an argument
 * @returns {Object}
 */
export const withNodeList = (content, fn) => {
    if (typeof content === 'string') {
        content = stringToHTML(content);
    }

    if (content instanceof HTMLElement) {
        content = [content];
    }

    if (content instanceof NodeList || Array.isArray(content)) {
        Array.prototype.slice.call(content).forEach(el => fn(el));
    }
    return content;
};
