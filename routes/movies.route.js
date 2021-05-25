const express = require("express");
const router = express.Router();

const myMovies = [
  { id: 1, title: "movie 1", releaseYear: 2000 },
  { id: 2, title: "movie 2", releaseYear: 2010 },
  { id: 3, title: "movie 3", releaseYear: 2020 },
];

// POST http://localhost:5000/movies
router.post("/", (request, response) => {
  const newMovie = { ...request.body, id: myMovies.length + 1 };

  if (newMovie.title && newMovie.releaseYear) {
    myMovies.push(newMovie);
    response.json(newMovie);
  } else {
    response
      .status(400)
      .send({ error: "Movies must contain title and release year" });
  }
});

// GET http://localhost:5000/movies
router.get("/", (request, response) => {
  response.json(myMovies);
});

// GET http://localhost:5000/movies/:id
router.get("/:id", (request, response) => {
  const foundMovie = myMovies.find(
    (movie) => movie.id === Number(request.params.id)
  );
  if (foundMovie) {
    response.json(foundMovie);
  } else {
    response.status(404).send("Movie not found");
  }
});

module.exports = router;
