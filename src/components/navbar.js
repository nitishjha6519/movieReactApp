import React,{useEffect,useState} from "react";
 const Navbar=({setFiltered}) =>{

    const [search,setSearch]=useState("")


    const url=`https://www.omdbapi.com/?s=${search}&apikey=3044c742`
    

    useEffect(()=>{
      
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setFiltered(data.Search)
            })
        
  
     },[search, setFiltered,url])
   


    return(
        <div className="nav">
         
         <p>
            movie
         </p>
       
         <input type="text" placeholder="search movie" value={search} onChange={(e)=>setSearch(e.target.value)}/>

         </div>
    )
 }

 export default Navbar;