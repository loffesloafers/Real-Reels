var moviesLoaded = false
var movies;
var goodMovies = [];

$(document).ready(function(){
	console.log('document ready')
	$.ajax({
	  dataType: "json",
	  url: "getmovies.php",
	  data: {},
	  success: function(data){
	  	console.log('loadedMovies');
	  	movies = data;
	  	console.log(data);
	  	sortMovies();
	  	$('#while-loading').hide();
	  	$('#finished-loading').show();
	  },
	  error: function(error){
	  	console.log('error',error);
	  }
	});
	$(".movie-button").click(function () {
		/*
		do {
		    var randomFilm = Math.floor(Math.random() * movies.length);
		} while (movies[randomFilm].rating < 3)
		*/

		var currentMovieIndex = Math.floor(Math.random()* goodMovies.length)
		var currentMovie = goodMovies[currentMovieIndex];
		presentMovieData(currentMovie);
	    //appending movie title to container div
		$(".movies-container").html($("<div class='movie-container'></div>").append(movies[randomFilm].title));
		$(".year-container").html($("<div class='year-container'></div>").append(movies[randomFilm].year));
		$(".rating-container").html($("<div class='rating-container'></div>").append(movies[randomFilm].rating));
	});
});

function sortMovies(){
	for(var i = 0; i < movies.length;i++){
		if(movies[i].rating >= 3){
			goodMovies.push(movies[i]);
		}
	}
}

function presentMovieData(currentMovie){
	$('#movies-container').append(currentMovie.title)
	$('#year-container').append(currentMovie.year)
	$('#rating-container').append(currentMovie.rating)
}

