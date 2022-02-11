import React from 'react';
import ReactDOM from 'react-dom';
import User from './user';
import Home from './components/Home';

const App = () => {
	return (
		<React.Fragment>
			<h1>Hi there this is React with Webpack</h1>
			<User username={'asadanik'} />
			<h3>This is the another update here</h3>

			<Home />
		</React.Fragment>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));