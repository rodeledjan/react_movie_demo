import './App.css'
import MovieCard from './components/MovieCard'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  //This is a fragment: <> </>, normally components only allows one parent element, like 1 div, to be returned.  
  //The fragment serves as a place holder for a parent element.  With a fragement, we can return 2 div elements. 

  return (
    <>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
      
    </>
  )
}

export default App

//work on the Home page next.