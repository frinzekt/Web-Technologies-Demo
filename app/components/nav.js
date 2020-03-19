import Replacer from '../HTMLreplacer';

const classList = 'navbar navbar-expand-lg sticky-top text--color-white background--color-black d-flex justify-content-between';
const nav = `<div class="navbar-brand mb-0 h1"><a href="index.html">Frinze Lapuz</a></div>
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
		<i class="fas fa-bars" style="color:#fff; font-size:28px;"></i>
	</span>
</button>
<div class="collapse navbar-collapse" id="navbarText">
	<ul class="navbar-nav mr-auto">
		<li class="nav-item">
			<a class="nav-link" href="HTML.html">HTML</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="CSS.html">CSS</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="JavaScript.html">JavaScript</a>
		</li>
	</ul>
</div>





`;
Replacer(nav, classList, '#nav');