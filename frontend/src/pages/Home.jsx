import MovieCard from "../components/MovieCard";
import {useState} from "react";


function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    const movies = [
        { id: 1, title: "My React Demo Movie", release_date: "2026-07-10" },
        { id: 2, title: "War of the Worlds", release_date: "2005-06-29" },
        { id: 3, title: "Bill and Ted's Bogus Journey", release_date: "1991-07-19" }
    ];

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