import axios from "axios";

const header = {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTY4NDYyODMwNC43NjksInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o6x7t4i4LNeo5Hnt2rggEsj6GBF6pF97CzFOUXTTpLo'
  },
};

export const IMG_PATH = "https://image.tmdb.org/t/p/original";

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
function getMoviesPopular() {
    return axios.get(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        header
    );
}
function getMoviesTopRated() {
    return axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        header
    );
}
function getMoviesUpcoming() {
    return axios.get(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        header
    );
}
export async function getGenreListMovie() {
    let storedGenreList = JSON.parse(sessionStorage.getItem("GenreList"));
    if (storedGenreList && storedGenreList.length > 0) {
        console.log("세션스토리지에 장르리스트 있음");
        return storedGenreList;
    } else {
        console.log("장르리스트 API 요청");
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/genre/movie/list?language=en",
                header
            );
            const genreList = response.data.genres;
            sessionStorage.setItem("GenreList", JSON.stringify(genreList));
            return genreList;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}