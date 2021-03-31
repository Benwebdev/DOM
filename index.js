import { stringToHTML } from "./stringToHTML";
import { arrayFromNodeList } from "./arrayFromNodeList";
import { withNodeList } from "./withNodeList";
import { append } from "./append";
import { prepend } from "./prepend";
import { remove } from "./remove";
import { find } from "./find";
import { findOne } from "./findOne";
import { closest } from "./closest";

/**
 * Adds class to specified element(s).
 * @param {HTMLElement|HTMLElement[]} elements - target node(s).
 * @param {String} className - class name to add. Multiple classes are separated by space.
 * @returns {void}
 */
export const addClass = (elements, className) => {
    if (!Array.isArray(elements)) {
        elements = [elements,];
    }
    let classNames = className.split(' ');
    elements.forEach(
        // not using `el.classList.add(...classNames)` as it's not supported by IE
        el => classNames.forEach((cls) => el.classList.add(cls))
    );
}

/**
 * Removes class from specified element(s).
 * @param {HTMLElement|HTMLElement[]} elements - target node(s).
 * @param {String} className - class name to remove. Multiple classes are separated by space.
 * @returns {void}
 */
export const removeClass = (elements, className) => {
    if (!Array.isArray(elements)) {
        elements = [elements,];
    }
    let classNames = className.split(' ');
    elements.forEach(
        // not using `el.classList.remove(...classNames)` as it's not supported by IE
        el => classNames.forEach((cls) => el.classList.remove(cls))
    );
}

/**
 * Determine whether any of elements are assigned the given class.
 * @param {HTMLElement|HTMLElement[]} elements - target node(s).
 * @param {String} className - class name to check.
 * @returns {Boolean} - whether any of elements are assigned the given class.
 */
export const hasClass = (elements, className) => {
    if (!Array.isArray(elements)) {
        elements = [elements,];
    }

    return elements.some(el => el.classList.contains(className));
}

/**
 * Add or remove one or more classes from each element in the set of matched elements.
 * @param {HTMLElement|HTMLElement[]} elements - target element(s).
 * @param {String} className - one or more class names (separated by spaces).
 * @param {Boolean} state - determines whether the class should be added or removed
 * @return {void}
 */
const toggleClass = (elements, className) => {
    if (!Array.isArray(elements)) {
        elements = [elements,];
    }

    if (typeof elements === 'string') {
        // @todo this route should not be used
        elements = this.find(elements);
    }

    className.split(' ').forEach(name => elements.forEach(el => el.classList.toggle(name)));
}

export {
    stringToHTML,
    arrayFromNodeList,
    withNodeList,
    append,
    prepend,
    remove,
    find,
    findOne,
    closest
}