import axios from "axios";

const header = {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTY4NDYyODMwNC43NjksInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o6x7t4i4LNeo5Hnt2rggEsj6GBF6pF97CzFOUXTTpLo'
  },
};

export const categories = [
    { category: "Now Playing", func: getMoviesNowPlaying },
    { category: "Popular", func: getMoviesPopular },
    { category: "Top Rated", func: getMoviesTopRated },
    { category: "Upcoming", func: getMoviesUpcoming },
];

function getMoviesNowPlaying() {
    return axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        header
    );
}
function getMoviesPopular() {}
function getMoviesTopRated() {}
function getMoviesUpcoming() {}