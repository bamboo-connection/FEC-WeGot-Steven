USE weGotData;

CREATE TABLE restaurants (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  place_id VARCHAR(255),
  rating float
);

CREATE TABLE reviews (
  id INT PRIMARY KEY AUTO_INCREMENT,
  restaurant_id Int,
  author_name varchar(255),
  rating float,
  profile_photo_url varchar(255),
  review_text LONGTEXT,
  relative_time_description varchar(255)
);


