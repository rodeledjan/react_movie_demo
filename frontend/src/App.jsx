import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //<> </> This is a fragment, normally components only allows one parent element, like 1 div, to be returned.  
  //The fragment serves as a place holder for a parent element.  With a fragement, we can return 2 div elements. 

  return (
    <> 
    <div>
        <p>Hello World.</p>
      </div>
            <div>
        <p>Hello World.</p>
      </div>
    </>
  )
}

export default App
