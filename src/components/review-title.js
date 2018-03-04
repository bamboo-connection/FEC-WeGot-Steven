import React from 'react';

class ReviewTitle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurantData: {}
		}
	}

	_getData() {
		var url = window.location.pathname;
		var id = url.substring(url.lastIndexOf('/') + 1);
		var context = this;
		console.log(id)
		$.ajax({
			url: `http://localhost:3000/restaurant/${id}`,
			type: 'GET',
			success: function(data) {
				context.setState({ restaurantData:data[0] })
			}
		})
	}

	componentDidMount() {
		this._getData.call(this)
	}

	render() {
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

		return (
			<div>
				<nav>
				  <div className="nav-wrapper red darken-4">
				    <a style={{width: "100%"}}href="#!" className="brand-logo">
				    	<i className="material-icons">
				    		<img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png" height="35" width="35"></img>
				    	</i>
				    	<div style={{display: "inline-block"}}>GOOGLE REVIEWS {this.state.restaurantData.rating}</div>
				    	<div style={{display: "inline-block"}}>{starHandler(this.state.restaurantData.rating)}</div>
				    </a>
				    <ul className="right hide-on-med-and-down">
				      <li><a href="sass.html"><i className="material-icons">search</i></a></li>
				      <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
				      <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
				      <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
				    </ul>
				  </div>
				</nav>
			</div>
		)
	}

}

export default ReviewTitle
