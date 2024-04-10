// Sample movie data (replace with your own)
const movies = [
    { title: "Spirited Away", genre: "Adventure", releaseDate: "August 31, 2002", image: "Gallery/chihiro042.jpg", rating: 10.0 },
    { title: "My Neighbor Totoro", genre: "Fantasy", releaseDate: "July 13, 1990", image: "Gallery/totoro001.jpg", rating: 9.0 },
    { title: "Howl's Moving Castle", genre: "Adventure", releaseDate: "June 17, 2005", image: "Gallery/howl011.jpg", rating: 9.0 },
    { title: "Ponyo", genre: "Fantasy", releaseDate: "August 14, 2009", image: "Gallery/ponyo049.jpg", rating: 8.5 },
    { title: "Kiki's Delivery Service", genre: "Fantasy", releaseDate: "December 20, 1990", image: "Gallery/majo038.jpg", rating: 8.0 },
    { title: "Princess Mononoke", genre: "Adventure", releaseDate: "December 19, 1997", image: "Gallery/mononoke024.jpg", rating: 9.5 },
    { title: "Grave of the Fireflies", genre: "Drama", releaseDate: "July 26, 1989", image: "Gallery/gof.jpg", rating: 9.0 },
    { title: "Arrietty", genre: "Fantasy", releaseDate: "February 17, 2012", image: "Gallery/karigurashi001.jpg", rating: 8.0 },
    { title: "Whisper of the Heart", genre: "Drama", releaseDate: "July 15, 1995", image: "Gallery/whisper.jpg", rating: 8.5 },
    // Add more movies here
];


const gallery = document.getElementById('movie-gallery');
const sortButtons = document.querySelectorAll('.sort-button');
const searchInput = document.getElementById('search-input');
const sortByRatingButton = document.getElementById('sort-by-rating');

function renderMovies(movies) {
    gallery.innerHTML = '';
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <p style="color:grey;">PREMIERED: ${movie.releaseDate}</p>
            <h3>${movie.title}</h3>
            <p>${movie.genre}</p>
            <p>Rating: ${movie.rating}</p>
            <div class="rating-input">
            </div>
        `;
        gallery.appendChild(card);
    });
}

function filterMovies(genre) {
    let sortedMovies = [...movies];
    if (genre !== 'all') {
        sortedMovies = sortedMovies.filter(movie => movie.genre === genre);
    }
    return sortedMovies;
}

function sortByRating() {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    renderMovies(sortedMovies);
}

sortButtons.forEach(button => {
    button.addEventListener('click', function () {
        sortButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const genre = this.getAttribute('data-genre');
        const filteredMovies = filterMovies(genre);
        renderMovies(filteredMovies);
    });
});

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.trim().toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    renderMovies(filteredMovies);
});

sortByRatingButton.addEventListener('click', sortByRating);

renderMovies(movies);