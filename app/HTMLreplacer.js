// Used for Component Entire Replacer
export default (innerHTML, classList, selector) => {
	const element = document.querySelector(selector);

	classList = classList.split(' ');
	if (classList[0] != '') {
		classList.forEach(className => {
			element.classList.add(className);
		});
	}

	element.innerHTML = innerHTML;
};
