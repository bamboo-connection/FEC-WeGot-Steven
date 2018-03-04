import React from 'react';
import ReactDOM from 'react-dom';
import ReviewTitle from './components/review-title'
import ReviewBody from './components/review-body'

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ReviewTitle />
				<ReviewBody />
			</div>
		)
	}

}

export default App