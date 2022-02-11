import Comp from './comp.js';

// Function exports as a component..
export default function printMe(){
	document.writeln('I get called from print.js!');
	console.log(Comp());
}