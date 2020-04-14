import Replacer from '../HTMLreplacer';

const classList = 'navbar navbar-expand-lg sticky-top text--color-white background--color-contrast-high d-flex justify-content-between';
const nav = `<div class="navbar-brand mb-0 h1"><a href="index.html" id="Homepage">Frinze Lapuz</a></div>
<button
	class="navbar-toggler"
	type="button"
	data-toggle="collapse"
	data-target="#navbarText"
	aria-controls="navbarText"
	aria-expanded="false"
	aria-label="Toggle navigation"
>
	<span>
		<i class="fa fa-bars" style="color:#fff; font-size:28px;"></i>
	</span>
</button>
<div class="collapse navbar-collapse" id="navbarText">
	<ul class="navbar-nav mr-auto">
		<li id="HTML" class="nav-item">
			<a class="nav-link" href="HTML.html"><i class="fab fa-html5"></i> HTML</a>
		</li>
		<li id="CSS" class="nav-item">
			<a class="nav-link" href="CSS.html"><i class="fab fa-css3"></i> CSS</a>
		</li>
		<li id="JavaScript" class="nav-item">
			<a class="nav-link" href="JavaScript.html"><i class="fab fa-js"></i> JavaScript</a>
		</li>
		<li class="nav-item" >
			<a class="nav-link" id="menu-toggle">Toggle HTML Inspector</a>
		</li>
	</ul>
</div>





`;
Replacer(nav, classList, '#nav');
