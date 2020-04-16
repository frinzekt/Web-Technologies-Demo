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
			// ALSO REMOVE PREVIOUS OVERLAY
			try {
				window.lastOverlay.classList.remove('overlay');
			} catch (e) {
				//SILENT ERROR
			}

			codeDiv.textContent = e.target.outerHTML;
			highlightCode();
			e.target.classList.add('overlay');
			window.lastOverlay = e.target;
		}
	}
};
document.onmouseout = (e) => {
	if (isDOMViewEnabled) {
		e.target.classList.remove('overlay');
	}
};
const toggleDOMViewEnabled = () => {
	isDOMViewEnabled = !isDOMViewEnabled;
	navIndicator = document.querySelector('.html-inspector');

	//RESPONSIVE AND COLOR
	if (isDOMViewEnabled) {
		navIndicator.style.color = '#88C559';
		[...document.querySelectorAll('.song')].forEach((element) => element.classList.remove('col-md-6'));
		[...document.querySelectorAll('.song-preview')].forEach((element) => element.classList.remove('col-md-5'));
	} else {
		navIndicator.style.color = 'inherit';
		[...document.querySelectorAll('.song')].forEach((element) => element.classList.add('col-md-6'));
		[...document.querySelectorAll('.song-preview')].forEach((element) => element.classList.add('col-md-5'));
	}
};
$('#menu-toggle').click((e) => {
	e.preventDefault();
	$('#wrapper').toggleClass('toggled');
	toggleDOMViewEnabled();
});

$('body').keypress((e) => {
	if (e.key.toLowerCase() == 'f') {
		toggleDOMViewEnabled();
	}
});
