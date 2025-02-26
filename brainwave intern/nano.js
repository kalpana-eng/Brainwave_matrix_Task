const movieData = {
    littleMermaid: {
        title: "./images/movies/little-mermaid.jpg",
        year: "2023",
        rating: "12+",
        duration: "2h 14min",
        genre: "Romance",
        description: "A young mermaid makes a deal to become human but faces unexpected challenges.",
        background: "./images/movies/little-mermaid-bg.jpg" // New field for background
    },
    devara: {
        title: "./images/movies/Devara.jpg",
        year: "2023",
        rating: "15+",
        duration: "2h 30min",
        genre: "Action",
        description: "A legendary warrior sets out on a mission to bring justice to his kingdom.",
        background: "./images/movies/devara-bg.jpg"
    },
    avatar: {
        title: "./images/movies/Avatar.png",
        year: "2022",
        rating: "13+",
        duration: "3h 10min",
        genre: "Sci-Fi",
        description: "A sequel to the epic Avatar movie, exploring new territories of Pandora.",
        background: "./images/movies/avatar-bg.jpg"
    },
    chhava: {
        title: "./images/movies/chhava-.png",
        year: "2023",
        rating: "18+",
        duration: "2h 20min",
        genre: "Historical",
        description: "A gripping tale of a legendary Indian warrior's journey.",
        background: "./images/movies/chhava-bg.jpg"
    },
    conjuring: {
        title: "./images/movies/conguring.jpg",
        year: "2021",
        rating: "16+",
        duration: "2h",
        genre: "Horror",
        description: "The Warrens investigate the most terrifying paranormal case yet.",
        background: "./images/movies/conjuring-bg.jpg"
    },
    oracle: {
        title: "./images/movies/oracle.jpg",
        year: "2023",
        rating: "14+",
        duration: "1h 50min",
        genre: "Thriller",
        description: "A mysterious prophecy brings chaos to a small town.",
        background: "./images/movies/oracle-bg.jpg"
    }
};

function updateMovieDetails(movieKey) {
    let movie = movieData[movieKey];
    
    // Update the title and movie details
    document.getElementById("movie-title").src = movie.title;
    document.getElementById("movie-year").innerText = movie.year;
    document.getElementById("movie-rating").innerText = movie.rating;
    document.getElementById("movie-duration").innerText = movie.duration;
    document.getElementById("movie-genre").innerText = movie.genre;
    document.getElementById("movie-description").innerText = movie.description;

    // Update the background to cover the full banner
    document.querySelector(".banner").style.background = `url('${movie.background}') no-repeat center center/cover`;
}
