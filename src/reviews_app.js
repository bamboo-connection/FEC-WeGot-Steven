import React from 'react';
import ReactDOM from 'react-dom';
import ReviewTitle from './components/review-title'
import ReviewBody from './components/review-body'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: []
		}
	}

	render() {
		return (
			<div>
				<ReviewTitle />
				<ReviewBody reviews={this.state.reviews} dialogBool={false}/>
				
				<button className="moreButton">MORE REVIEWS</button>
			</div>
		)
	}

}

export default App