import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import Pagination from './pagination';
import './home.css'

function Home() {
    //-------------------REDUX-----------------------
    const dispatch = useDispatch();
  
    //--------------------REACT-----------------------

    //----------------filtro x name ------------------
 /* const handleInputChange = (e) => {
    const value = e.target.value
    setPokeName(value)
  }

  const searchName = async ()  =>{
    
    if(!pokeName){
      setfiltrado(false)
    } else {
      dispatch(getPokemonName(pokeName))
      setfilterPokemons(pokemons.pokemon)
      setfiltrado(true)
    }
    
  }
  const allPokemons = async (e)  =>{ 
    
    setTotalPokemons(pokemons.pokemons)
    setfiltrado(false)
  }*/

    //---------------Pagination---------------------
 /*const [ currentPage, setCurrentPage ] = useState(1); // pagina mostrando actualmente
 const [ pokePerPage ] = useState(6); // cant de prod por pag
 


const indexOfLastPoke = currentPage * pokePerPage;  // índice primer prod de la pag
const indexOfFirstPoke = indexOfLastPoke - pokePerPage; // índice último prod de la pag

//---Change Page----
const paginate = (pageNumbers) => setCurrentPage(pageNumbers)*/

//---------------------ORDENAMIENTOS------------------------
/*const orderNameCre =()=>{
  const orderNames =[...totalPokemons].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
  setTotalPokemons(orderNames)
}
const orderNameDecre =()=>{
  
  const orderNames =[...totalPokemons].sort((a, b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0))
  setTotalPokemons(orderNames)
}
const orderForceCre = ()=>{
   const orderHp= [...totalPokemons].sort((a, b) => a.hp - b.hp)
  setTotalPokemons(orderHp)
 }

 const orderForceDecre = ()=>{
  const orderHp= [...totalPokemons].sort((a, b) => b.hp - a.hp)
  setTotalPokemons(orderHp)
}*/
    return (
        <div>
         <button className="btn-addAlumn">Nuevo Alumno</button>
         <button className="btn-showAlumn">Ver Alumnos</button>
         <button className="btn-addMateria">Inscripcion a materias</button>
        </div>
    )
}

export default Home