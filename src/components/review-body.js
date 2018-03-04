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
			if (splitNum.length > 1) {
				if (parseInt(splitNum[1]) >= 5) {
					tempArr.push(<img src="../img/half-star.png" height="13" width="13" />)
				}
			}

			return (<div>{tempArr}</div>);
		}

		var reviewList = this.state.reviews.map(function(review) {
			return (
				<div className="col s12 m7">
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
					      </div>
					    </div>
					  </div>
					</div>
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

		return (
			<div>
				{eachReview()}
			</div>
		)
	}

}

export default ReviewBody


