// Use Vite environment variable VITE_API_KEY (defined in frontend/.env)
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    if (!API_KEY) {
        throw new Error('Missing VITE_API_KEY environment variable. See frontend/README.md or root README.md for setup instructions.');
    }
    const response = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    if (!API_KEY) {
        throw new Error('Missing VITE_API_KEY environment variable. See frontend/README.md or root README.md for setup instructions.');
    }
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
}