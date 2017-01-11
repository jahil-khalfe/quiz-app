import React, {
	Component
}
from 'react';
import Nav from './navigation/nav';
import QuestionList from './quiz/QuestionList'

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
				}],
				correct: 'a'
			}, {
				id: 2,
				text: 'what is your MOMs name',
				choices: [{
					id: 'a',
					text: 'Jahil'
				}, {
					id: 'b',
					text: 'Sebas'
				}, {
					id: 'c',
					text: 'Dan'
				}],
				correct: 'b'
			}, {
				id: 3,
				text: 'what is your DADs name',
				choices: [{
					id: 'a',
					text: 'Jahil'
				}, {
					id: 'b',
					text: 'Sebas'
				}, {
					id: 'c',
					text: 'Dan'
				}],
				correct: 'c'
			}],
			score: 0,
			current: 1
		}
	}

	render() {
		return (
			<div>
				<Nav/>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>React Quiz</h1>
							<p className="lead">A simple ReactJS Quiz Application</p>
							<hr />
							<QuestionList {...this.state} />
						</div>
					</div>
				</div>	
				
			</div>
		);
	}
}

export default App
