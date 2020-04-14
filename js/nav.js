initNavBar = (id) => {
	element = document.querySelector(`#${id}`);
	classColor = {
		Homepage: 'text--color-success',
		HTML: 'text--color-warning',
		CSS: 'text--color-primary',
		JavaScript: 'text--color-error',
	};
	element.classList.add(classColor[id]);
};
