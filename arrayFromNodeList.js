/**
* Turns a NodeList into a proper array and returns the array.
* @param {NodeList} nodeList - NodeList to turn into array
* @returns {Element[]}
*/

export const arrayFromNodeList = (nodeList) => [].slice.call(nodeList);
