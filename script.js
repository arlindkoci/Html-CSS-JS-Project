// //Ketu percaktoj shfaqjen e nje pop-up modal sa here qe klikoj nje foto. Kodi duhet te me shfaqi header + img + movie content//

const movieImages = document.querySelectorAll('.movie img');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('title');
const modalImage = document.getElementById('image');
const modalDescription = document.getElementById('description');
const closeBtn = document.getElementsByClassName('close')[0];


movieImages.forEach((movieImage) => {
    movieImage.addEventListener('click', () => {
        const title = movieImage.alt;
        const src = movieImage.src;
        const description = movieImage.dataset.description;


        modalTitle.innerText = title;
        modalImage.src = src;
        modalDescription.innerText = description;

        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


//Ketu i pergjigjem modales se dyte e cila duhet te bej te mundur shfaqjen e emrave te filmave gjithashtu te shfaqi 1 dritare te vogel kur filmi ne "search" te klikohet.


function searchMovies(searchValue) {
    const movies = document.querySelectorAll('.movie2');
    const movies2 = document.querySelector('.movies2');
    const searchValueLower = searchValue.toLowerCase();

    if (searchValueLower.length > 0) {
        movies.forEach(movie => {
            if (movie.textContent.toLowerCase().includes(searchValueLower)) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });

        movies2.classList.add('show');
    } else {
        movies.forEach(movie => {
            movie.style.display = 'none';
        });

        movies2.classList.remove('show');
    }
}

function resetMovies() {
    const movies = document.querySelectorAll('.movie2');
    const movies2 = document.querySelector('.movies2');

    movies.forEach(movie => {
        movie.style.display = 'block';
    });

    movies2.classList.remove('show');
}


const movies = document.querySelectorAll('.movie2');
const modalTwo = document.querySelector('.modal2');
const modalContent = document.querySelector('.modal-content2');
const close = document.querySelector('.close2');

movies.forEach(movie => {
    movie.addEventListener('click', () => {
        modalContent.innerText = movie.innerText;
        modalTwo.style.display = 'block';
    });
});

close.addEventListener('click', () => {
    modalTwo.style.display = 'none';
});

window.addEventListener('click', e => {
    if (e.target == modal) {
        modalTwo.style.display = 'none';
    }
});

const form = document.querySelector('.search form');
const input = document.querySelector('.search input');

form.addEventListener('submit', e => {
    e.preventDefault();
    const searchTerm = input.value.toLowerCase();
    movies.forEach(movie => {
        if (movie.innerText.toLowerCase().includes(searchTerm)) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });
});