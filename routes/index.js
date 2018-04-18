var moviesJSON = require('../movies.json');

//home page
exports.home = function(req,res){
  var movies = moviesJSON.movies;
  res.render("home",{
        "title": "Star Wars Movies",
        "movies": movies
      });
  };

//single page
exports.movie_single = function(req,res){
  var episode_number = req.params.episode_number;
  var movies = moviesJSON.movies;
  var movie = movies[episode_number - 1];
  res.render("movie_single",{
    "title": movies[episode_number - 1].title,
    "movie": movie
  });
};

//notFound page
exports.notFound = function(req,res){
  res.send("This is you not want absolutely, just go back!!!!");
};
