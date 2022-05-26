import React from 'react';
import styles from './search.module.css'
import {IoIosAdd} from "react-icons/io"

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const handleOnSearch = () => {
  const input = document.getElementById("searchInput");
 // console.log(input.value)
  if(input.value!==''){
     onSearch(input.value);
     input.value="";
    } else {
      alert('Ingrese una ciudad!')
    }
  
  };
  return <div className={styles.searchBar12}>
   
    <input className={styles.searchInput1} id="searchInput"  placeholder="Ingrese Ciudad" autoComplete="off"/>
    <button className={styles.button} onClick={handleOnSearch }><IoIosAdd></IoIosAdd></button> 

  </div>
   };