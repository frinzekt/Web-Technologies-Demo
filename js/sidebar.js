hljs.configure({ tabReplace: ' ' }); // config of code spacing


const highlightCode = () => {
	document.querySelectorAll('pre code').forEach((block) => {
		hljs.highlightBlock(block);
	});
};
document.onmouseover = (e) => {
	if (isDOMViewEnabled) {
		const codeDiv = document.querySelector('#liveCode');
		const listOfDisabledHover = ['#liveCode', '#liveCodeContainer', '#sidebar-wrapper', '.sidebar-nav', '.sidebar-brand', '.hljs'];

		//DISABLE MOUSEOVER FUNCTION HOVER FOR IDs of either parent or target parent
		if (
			!listOfDisabledHover.some(
				(selector) => document.querySelector(selector) == e.target || document.querySelector(selector) == e.target.parentElement
			)
		) {
			// Only highlight outside code box to avoid recursion
			//CHANGE TEXT AND HIGHLIGHT ELEMENT
			codeDiv.textContent = e.target.outerHTML;
			highlightCode();
			e.target.classList.add('overlay');
		}
	}
};
document.onmouseout = (e) => {
	if (isDOMViewEnabled) {
		e.target.classList.remove('overlay');
	}
};

$('#menu-toggle').click((e) => {
	isDOMViewEnabled = !isDOMViewEnabled;
	e.preventDefault();
	$('#wrapper').toggleClass('toggled');
});

$('body').keypress((e) => {
	isDOMViewEnabled = !isDOMViewEnabled;
});
