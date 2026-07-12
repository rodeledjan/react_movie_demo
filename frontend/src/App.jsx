import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
function App() {

  //This is a fragment: <> </>, normally components only allows one parent element, like 1 div, to be returned.  
  //The fragment serves as a place holder for a parent element.  With a fragement, we can return 2 div elements. 

  return (
    <>
      <div>
        <h1>Welcome to the Movie App!</h1>
      </div>
      <Home />
    </>
  )
}

export default App

//work on the Home page next.