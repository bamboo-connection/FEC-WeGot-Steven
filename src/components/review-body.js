import React from 'react';

class ReviewBody extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
		}
	}

	_getData() {
		var url = window.location.pathname;
		var id = url.substring(url.lastIndexOf('/') + 1);
		var context = this;
		console.log(id)
		$.ajax({
			url: `http://localhost:3000/reviews/${id}`,
			type: 'GET',
			success: function(data) {
				context.setState({ reviews:data })
			}
		})
	}

	componentDidMount() {
		this._getData.call(this)
	}

	render() {
		// Function for rendering the number of stars
		let starHandler = (starNum) => {
			// let totalStars = 0;
			let tempArr = [];
			for (var i = 1; i <= starNum; i++) {
				tempArr.push(<img src="https://image.flaticon.com/icons/png/512/616/616489.png" height="13" width="13" />)
			} 
			// if decimal place greater than or equal to 0.5, render half stars
			let splitNum = ("" + starNum).split('.');
			console.log('SPLIT: ', splitNum)
			if (splitNum.length > 1) {
				if (parseInt(splitNum[1]) >= 5) {
					tempArr.push(<img src="../img/half-star.png" height="13" width="13" />)
				}
			}

			return (<div>{tempArr}</div>);
		}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d65c69744ad824977c1d35319802b2c2ddb22743

		var reviewList = this.state.reviews.map(function(review) {
			return (
				<div className="col s12 m7">
<<<<<<< HEAD
=======
					  <div className="card horizontal">
					    <div>
					      <img className="img-circle" src={review.profile_photo_url} height="80" width="80" />
					    </div>
					    <div className="card-stacked">
					      <div className="card-content">
					      	{starHandler(review.rating)}
					      	<blockquote>
					      		<p>{review.review_text}</p>
						      </blockquote>
						      <p>{review.author_name}</p>
						      <p>{review.relative_time_description}</p>
=======
		
		// Function for rendering 3 reviews onto body
		let eachReview = () => { 
			let tempArr = []
			for (var i = 1; i <= 3; i++) {
				tempArr.push(
					<div className="col s12 m7">
>>>>>>> d65c69744ad824977c1d35319802b2c2ddb22743
					  <div className="card horizontal">
					    <div>
					      <img className="img-circle" src={review.profile_photo_url} height="80" width="80" />
					    </div>
					    <div className="card-stacked">
					      <div className="card-content">
					      	{starHandler(review.rating)}
					      	<blockquote>
					      		<p>{review.review_text}</p>
						      </blockquote>
<<<<<<< HEAD
						      <p>{review.author_name}</p>
						      <p>{review.relative_time_description}</p>
=======
						      <p>-aznBoi76</p>
						      <p>7 days ago</p>
>>>>>>> 44d2177bff57947c359cf282cd13d72a57832e5c
>>>>>>> d65c69744ad824977c1d35319802b2c2ddb22743
					      </div>
					    </div>
					  </div>
					</div>
<<<<<<< HEAD
			)
		})

		if (reviewList.length === 0) {
			return (
				<div>No Restaurant Found</div>
			)
		} else {
			return (
				<div>
					{reviewList}
				</div>
			)
		}
=======
<<<<<<< HEAD
			)
		})

		if (reviewList.length === 0) {
			return (
				<div>No Restaurant Found</div>
			)
		} else {
			return (
				<div>
					{reviewList}
				</div>
			)
		}
=======
				)
			}
			return (<div>{tempArr}</div>);
		}


		return (
			<div>
				{eachReview()}
			</div>
		)
>>>>>>> 44d2177bff57947c359cf282cd13d72a57832e5c
>>>>>>> d65c69744ad824977c1d35319802b2c2ddb22743
	}

}

export default ReviewBody


