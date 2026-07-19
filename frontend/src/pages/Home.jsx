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
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies()
    }, []);
    
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) return; // Do not search if the input is empty
        if (loading) return; // Prevent multiple searches while loading

        setLoading(true);

        try {
            const searchResults = await searchMovies(searchTerm);
            setMovies(searchResults);
            setError(null); // Clear any previous errors
        } catch (error) {
            console.log(error);
            setError("Failed to fetch movies.");
        } finally {
            setLoading(false);
        }
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

            {error && <p className="error-message">{error}</p>}

            {loading ? ( <p>Loading...</p>):
            (            <div className="movies-grid">
                {movies.map((movie) => (
                    // movie.title.toLowerCase().includes(searchTerm) &&
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
)
            }



            
        </div>
    )
}

export default Home