var moviesLoaded = false
var movies;
var goodMovies = [];
var local = true

$(document).ready(function(){
	console.log('document ready')

	if(local){
		movies = window.allMovies;
		console.log(movies);
		sortMovies();
		$('#while-loading').hide();
	  	$('#finished-loading').show()
	  	moviesLoaded = true;
	  	showRandomMovie();
	}
	else{
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
		  	$('#finished-loading').show()
		  	moviesLoaded = true;
		  	showRandomMovie();
		  },
		  error: function(error){
		  	console.log('error',error);
		  	$('#while-loading').append('something went wrong, please reload the page');
		  }
		});
	}


	$(".movie-button").click(function () {
		$(".movie-button").hide();
		$('#imdb-data').empty();
		showRandomMovie();
	});
});

function sortMovies(){
	for(var i = 0; i < movies.length;i++){
		if(movies[i].rating >= 3){
			goodMovies.push(movies[i]);
		}
	}
}

function showRandomMovie(){
	$('#imdb-data').append('')
	var currentMovieIndex = Math.floor(Math.random()* goodMovies.length)
	var currentMovie = goodMovies[currentMovieIndex];
	loadImdbData(currentMovie);
}

function loadImdbData(currentMovie){
	$.ajax({
		dataType: "json",
		url: "http://www.imdbapi.com/?i=tt" + currentMovie.imdbid,
		success: function(data){
			console.log(data);
			if( Number(data.imdbRating) > 7 ){
				showImdbData(data,currentMovie)
			}
			else {
				showRandomMovie()
			}
		},
		error: function(){
			showRandomMovie();
		}
	});
}

function showImdbData(data,beshdelData){
	// $('#imdb-data').append(data.title)
	$('#movie-poster').empty().append('<img src="' + data['Poster'] +'" width="300px">')

	var dataToShow = ["Title","Year", "Runtime", "Genre", "Director", "Actors","Plot","Language","Country","imdbRating","imdbVotes"];

	for(var i = 0; i < dataToShow.length; i++){
		var key = dataToShow[i];
		$('#imdb' + key).empty().append('<b>' + key + ':</b> ' + data[key])
	}

	var imdbLink = "http://www.imdb.com/title/" + data['imdbID'] + "/?ref_=nv_sr_1"
	$('#imdbLink').empty().append('<a href="' + imdbLink +'" class="imdb-link">' + imdbLink + '</a>');

	$(".movie-button").show();
}

