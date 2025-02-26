const movieData = {
        theblackdemon: {
        title: "../images/movies/tt (1).png",
        year: "2023",
        rating: "14+",
        duration: "1h 40min",
        genre: "Horror, Thriller",
        description: " A family's peaceful trip turns into a nightmare when they encounter a massive, ancient megalodon lurking in the deep. Stranded on an oil rig, they must fight to survive against the legendary beast. 🦈🌊",
        background: "../images/bg.jpg"
    },

    littleMermaid: {
        title: "../images/movies/R.png",
        year: "2023",
        rating: "12+",
        duration: "2h 14min",
        genre: "Romance",
        description: "Ariel, a curious and adventurous mermaid, dreams of exploring the human world. When she makes a risky deal to become human, she discovers love, challenges, and the true meaning of sacrifice.",
        background: "../images/wp12344045_the_little_mermaid_movie_2023_wallpaper_by_sillyjellybeans_dfy43v3-pre.jpg"
    },
    devara: {
        title: "../images/movies/Dt.png",
        year: "2023",
        rating: "15+",
        duration: "2h 30min",
        genre: "Action",
        description: "A gripping action-packed drama about a fearless man who fights for his family's honor. As betrayal and revenge unfold, he must confront powerful enemies to protect what matters most.",
        background: "../images/jrNtr.jpeg"
    },

    avatar: {
        title: "../images/Avatar-Logo-PNG-File.png",
        year: "2022",
        rating: "13+",
        duration: "3h 10min",
        genre: "Sci-Fi",
        description: "On the lush alien world of Pandora, a paraplegic soldier finds himself torn between duty and the indigenous Na’vi people. As he bonds with their world, he must choose between saving his own kind or protecting a planet under threat.",
        background: "../images/AVTAR.webp"
    },
    titanic: {
        title: "../images/movies/tt.png",
        year: "1997",
        rating: "13+",
        duration: "3h 14min",
        genre: "Romance, Drama",
        description: "A young aristocrat falls in love with a struggling artist aboard the grand RMS Titanic. As the ship embarks on its doomed voyage, their love story faces tragedy when disaster strikes.",
        background: "../images/movies/tb.jpg"
    },
    conjuring: {
        title: "../images/movies/The-Conjuring-PNG-Clipart-Background.png",
        year: "2021",
        rating: "16+",
        duration: "2h",
        genre: "Horror",
        description: "Paranormal investigators Ed and Lorraine Warren travel to England to help a family plagued by a sinister presence. As dark forces grow stronger, they must risk everything to uncover the truth.",
        background: "../images/conjuring (2).jpg"
    },
    
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
