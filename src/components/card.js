import React, { useState } from "react";
 const Card=({k,Poster, toggle,setToggle, favSrc, setFavsrc}) =>{



const handleClick=(event)=>{
//     setToggle(!toggle)
//   console.log(toggle)
// //    console.log(event.target.__reactProps$v2509rxmgyd.src)
//    setFavsrc(Poster)
//    console.log(Poster)

if(favSrc.indexOf(Poster) ===-1){
   let arr= favSrc.push(Poster)
   setFavsrc(arr)
} else{
  let arr=  favSrc.splice(favSrc.indexOf(Poster),1) 
  setFavsrc(arr)
}

console.log(favSrc)

}

    return(
        <div  className="image">
        <img key={k} src={Poster} alt="poster" onClick={handleClick}/>

        <div className="toFavourite" style={{color:"white"}} >
        ❤️ Add to Favourites
        </div>
       
         </div>
    )
 }

 export default Card;