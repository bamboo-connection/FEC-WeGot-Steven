const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const db = require('./db.js');
const fs = require('fs');
const emoji = require('emoji-strip');

const data = require('../SeedData/restaurants_detailed.js')
const port = 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/:id', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/reviews.html'))
})

app.get('/reviews/:id', function(req, res) {
	var queryString = `SELECT re.author_name, re.profile_photo_url, re.rating, re.review_text, re.relative_time_description FROM restaurants r LEFT JOIN reviews re on re.restaurant_id = r.id WHERE r.place_id = "${req.params.id}"`
	
	db.query(queryString, function(err, result) {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
		res.send(result);
	})
})

app.get('/restaurant/:id', function(req, res) {
	var queryString = `SELECT name, rating FROM restaurants where place_id = "${req.params.id}"`
	
	db.query(queryString, function(err, result) {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
		res.send(result);
	})
})

// app.get('/test', function(req, res) {
// 	var tempData = 'USE weGotData;\n';
// 	var reviewData = 'USE weGotData;\n';
// 	data.forEach(function(element, index) {
// 		tempData += (`INSERT INTO restaurants (name, place_id, rating) VALUES ("${element.result.name}", "${element.result.place_id}", ${element.result.rating});\n`)

// 		//author
// 		//photo
// 		//rating
// 		//relative
// 		//text

// 		element.result.reviews.forEach(function(review) {
// 			//newTemp = mystring.replace(/"/g, "'");
// 			var test = review.text.replace(/\s\s+/g, ' ');
// 			var temp = test.replace(/"/g, "");
// 			var tempText = emoji(temp);
// 			reviewData += (`INSERT INTO reviews (restaurant_id, author_name, rating, profile_photo_url, review_text, relative_time_description) VALUES (${index + 1}, "${review.author_name}", ${review.rating}, "${review.profile_photo_url}", "${tempText}", "${review.relative_time_description}");\n`)
// 		})

// 	})

// 	fs.writeFile('restaurants.sql', tempData, (err) => {  
//     // throws an error, you could also catch it here
//     if (err) throw err;

//     // success case, the file was saved
//     console.log('restaurants saved!');
// 	});
// 	fs.writeFile('reviews.sql', reviewData, (err) => {  
//     // throws an error, you could also catch it here
//     if (err) throw err;

//     // success case, the file was saved
//     console.log('Review saved!');
// 	});

// 	res.send("Done");

// })


app.listen(port, function() {
	console.log("Connected to: " + port);
})