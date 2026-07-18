import MovieCard from "../components/MovieCard";
import {useState, useEffect} from "react";
import '../css/Home.css' 
import {searchMovies,getPopularMovies} from "../services/api";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                console.log("setting movies");
            } catch (error) {
                console.log(error);
                setError("Failed to fetch popular movies.");
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies()
    }, []);
    
    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchTerm}`); 
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form" >
                <input 
                    type="text" 
                    placeholder="Search movies..." 
                    className="search-input" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form> 
            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().includes(searchTerm) &&
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home