import React from 'react';
import { render } from 'react-dom';
import HeaderComponent from './Components/HeaderComponent.jsx';
import FooterComponent from './Components/FooterComponent.jsx';

class App extends React.Component {
	constructor (props) {
		super (props);
	}

	render () {
		return <p>Hello React Scratch!</p>
	}
}

render (<App/>, document.getElementById ('app'));
render (<HeaderComponent/>, document.getElementById 	('header'));
render (<FooterComponent/>, document.getElementById ('footer'))