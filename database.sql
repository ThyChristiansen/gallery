CREATE TABLE gallery (
    "id" serial PRIMARY KEY,
    "path" varchar(1000) NOT NULL,
    "description" varchar(255),
    "likes" integer default 0
);

SELECT * FROM gallery;

INSERT INTO gallery (path, description, likes)
VALUES ('pictute', 'descrip', 12);

