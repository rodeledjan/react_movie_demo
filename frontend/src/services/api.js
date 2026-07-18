//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "f3e7b1c0"; // Replace with your actual API key, to get the key go to https://www.themoviedb.org/settings/api and create an account and generate a key
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
}