import _ from 'lodash';

// importing style CSS file..
import './style.css';

// importing image files..
import apple from './apple.png';
import GifImage from './image.gif';

// importing files XML, CSV..
import Data from './data.xml';
import Note from './data.csv';

// importing the files (toml, yaml, json5)..
import toml from './data.toml';
import yaml from './data.yaml';
import jsonFive from './data.json5';


// Using toml, yaml & json5 files..
//toml..
console.log(toml.title);
console.log(toml.owner.name);

//yaml..
console.log(yaml.title);
console.log(yaml.owner.name);

//json5..
console.log(jsonFive.title);
console.log(jsonFive.owner.name);


// JS function..
function component(){
	const element = document.createElement('div');

	// Imported lodash for this work..
	element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
	element.classList.add('text-red');

	// Adding the Image for html file to config with webpack..
	const myImage = new Image();
	myImage.src = GifImage;
	element.appendChild(myImage);

	// lets using the XML and CSV Files...
	console.log('XML Data -->> ', Data);
	console.log('CSV Note -->> ', Note);

	return element;
}


document.body.appendChild(component());