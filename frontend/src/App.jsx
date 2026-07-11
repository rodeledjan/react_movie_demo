import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  //This is a fragment: <> </>, normally components only allows one parent element, like 1 div, to be returned.  
  //The fragment serves as a place holder for a parent element.  With a fragement, we can return 2 div elements. 

  return (
    <> 
     <div>
      <h1>Welcome to the Movie App!</h1>
     </div>
     <div>
      <MovieCard movie={{ title: "My React Demo Movie", release_date: "2026-07-10"  }} />
      <MovieCard movie={{ title: "War of the Worlds", release_date: "1992"  }} />
      <MovieCard movie={{ title: "Bill and Ted's Bogus Journey", release_date: "1993"  }} />
     </div>
    </>
  )
}

export default App

//work on the Home page next.