CREATE TABLE gallery (
    "id" serial PRIMARY KEY,
    "path" varchar(1000) ,
    "description" varchar(1000),
    "likes" integer default 0
);

SELECT * FROM gallery;

INSERT INTO gallery (path, description)
VALUES ('images/window_flower.jpg','Photo of the cute window with bathtub of flowers.'),
('images/bridge.jpg','Photo of a bridge in Duluth with the perfect view after trees.'),
('images/cliff.png','Photo of a cliff in Duluth.'),
('images/flower.jpg','Photo of a beautiful a bunch of flower next on the restaurant that I have come.'),
('images/lake.png','Photo of a lake in Northern Minnesota.'),
('images/river.png','Photo of a river in Duluth.')
;




