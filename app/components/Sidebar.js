import Replacer from '../HTMLreplacer';

const classList = 'border-right background--color-contrast-high text--color-white';
const sideBar = `
				<ul class="sidebar-nav">
					<li class="sidebar-brand">Live HTML DOM Viewer</li>
					<li class="text--color-success d-none d-md-block">Press "F" To Disable HTML DOM Inspector</li>
				</ul>
				<pre id="liveCodeContainer">
					<code id="liveCode" class="hljs html" > </code>
				</pre>
`;
Replacer(sideBar, classList, '#sidebar-wrapper');
