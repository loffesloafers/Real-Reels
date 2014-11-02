<!DOCTYPE html>

<html>
    <head>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/taffydb/2.7.2/taffy-min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="movies.js"></script>
        <title>k</title>
        <link rel="stylesheet" type="text/css" href="styles.css"/> 
    </head>
    
    
    <body>
    
    <div id="jumbotron">
        <h1>Real-Reels</h1>
        <p>Generating high quality movies for a clarity of mind.</p>
    </div>

    <div id="while-loading">
        <p>Loading movies, please wait...</p>
    </div>
    
    <div id="finished-loading">    
        <div id="Question">
            <h2>Would you like to watch...</h2>
        </div>

        
        <div id="movies-container"></div>
        <div id="year-container"></div>
        <div id="rating-container"></div>
        
        <div id="answer">
            <p>?</p>
        </div>
        
        <p align="center">
            <button class="movie-button"style="margin-left:auto;margin-right:auto">Please magically generate something else!
            </button>
        </p>
    </div>
    <script src="main.js"></script>
  </body>       
</html>
