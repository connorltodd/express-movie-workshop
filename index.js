const express = require("express");
const app = express();
const port = 5000;

const moviesRouter = require("./routes/movies.route");

app.use(express.json());

app.use("/movies", moviesRouter);

app.get("/", (request, response) => {
  response.send("Welcome to my app");
});

app.listen(port, (error) => {
  error ? console.log(error) : console.log(`App is running at port ${port}`);
});
