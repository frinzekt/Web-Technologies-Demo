// Used for Component Modularization of Appenditure
export default (nodeTag, innerHTML, selector) => {
	let node = document.createElement(nodeTag);
	node.innerHTML = innerHTML;
	document.querySelector(selector).appendChild(node);
};
