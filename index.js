/**
 * Converts string to DOM nodes.
 * @param {String} DOM_STRING - input HTML string.
 * @returns {NodeList} - list of DOM nodes.
 */
export const stringToHTML = (DOM_STRING) => {
    var DOM_CONTAINER = document.createElement('div'); 
    DOM_CONTAINER.innerHTML = DOM_STRING; 
    return DOM_CONTAINER.childNodes;
}
  