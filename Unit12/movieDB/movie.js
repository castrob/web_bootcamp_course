var movies = [
    {
        title: "Avengers - Infinity War",
        rating: 4,
        hasWatched: true
    },
    {
        title: "Deadpool",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "The incredibles 2",
        rating: 3.5,
        hasWatched: false
    },
    {
        title: "Fantastics beasts and where to find them",
        rating: 5,
        hasWatched: true
    }
];

function showMovies() {
    for(var i = 0; i < movies.length; i++){
        var commomString = "You have";
        if(movies[i].hasWatched){
            console.log(commomString + " watched " + movies[i].title + " - "  + movies[i].rating + " stars.");
        }else{
            console.log(commomString + " not seen " + movies[i].title + " - "  + movies[i].rating  + " stars.");
        }
    }
}