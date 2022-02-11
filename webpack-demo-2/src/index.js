// Main Entry Point from webpack config..
import _ from 'lodash';
import PrintMe from './print.js';


// JavaScript Function..
function component(){
	const element = document.createElement('div');
	const button = document.createElement('button');


	element.innerHTML = _.join(['Hello', 'Webpack-Configuration'], '');

	button.innerHTML = "Click Me!";
	button.onclick = PrintMe;

	element.appendChild(button);

	return element;
}

document.body.appendChild(component());