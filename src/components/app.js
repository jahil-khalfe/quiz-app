import React, {
	Component
}
from 'react';
import Nav from './navigation/nav';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			questions: [{
				id: 1,
				text: 'what is your name',
				choices: [{
					id: 'a',
					text: 'Jahil'
				}, {
					id: 'b',
					text: 'Sebas'
				}, {
					id: 'c',
					text: 'Dan'
				}]
			}]
		}
	}

	render() {
		return (
			<div>
				<Nav/>
			</div>
		);
	}
}

export default App;
