import React, {
	Component
}
from 'react';
import Nav from './navigation/nav';
import QuestionList from './quiz/QuestionList'
import ScoreBox from './quiz/ScoreBox'
import Results from './quiz/Results'

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

	setCurrent(current) {
		this.setState({
			current
		});
	}

	setScore(score) {
		
			this.setState({
				score
			});
		
	
	}



	render() {
		if (this.state.current > this.state.questions.length) {
			var scorebox = ''
			var results = <Results {...this.state} />
		} else {
			var scorebox = <ScoreBox {...this.state}/>
			var results = ''
		}
		return (
			<div>
				<Nav/>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>React Quiz</h1>
							<p className="lead">A simple ReactJS Quiz Application</p>
							<hr />
							{scorebox}
							<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}  />
							{results}
						</div>
					</div>
				</div>	
				
			</div>
		);
	}
}

export default App
