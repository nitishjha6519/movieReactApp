
import {useEffect,useState} from "react"
import './App.css';
import Card from "./components/card"
import Navbar from "./components/navbar"

function App() {

const [movies,setMovies]=useState([])
   const [filtered,setFiltered]=useState([])
   const [toggle,setToggle]=useState(false)
   const [favSrc,setFavsrc]=useState([])

 useEffect(()=>{
  const url="https://www.omdbapi.com/?s=Batman&page=2&apikey=3044c742"

  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    console.log(data.Search)
    setMovies(data.Search)
  })
 },[])
  return (
    <div className="App">

         <Navbar setFiltered={setFiltered}/>

     <div className='movies'>

    {

filtered ?  filtered.map((item)=>{
  return(
    <Card key={item.imdbID} Poster={item.Poster}/>
    
  )
})

:
movies.map((movie)=>{
  return(
    <Card key={movie.imdbID} Poster={movie.Poster} toggle={toggle} setToggle={setToggle} favSrc={favSrc} setFavsrc={setFavsrc}/>
    
  )
})
    }
      </div>

      <div className='favourites'>
      { toggle ? <Card Poster={favSrc}/>
        : null

    
    }
      </div>


  
    </div>
  );
}



export default App;
