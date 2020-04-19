//COMPONENT SYSTEM TO INTRODUCE LESS REPETITION IN CODE
//Uses webpack to compile this bundle into dist/bundle.js
hljs.initHighlighting();

//GLOBAL VARIABLES
window.isDOMViewEnabled = false;

import Appender from './HTMLappender';

// Component JS
import Nav from './components/NavBar';
import Sidebar from './components/Sidebar';

// Event-Handling JS
import sidebar from '../js/sidebar';
import nav from '../js/nav';
