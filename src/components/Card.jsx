import React from 'react';
import styles from './Card.module.css';

import {IoIosClose} from "react-icons/io"


export default function Card(props) {
  const {max, min, name, img, onClose } = props;
  // acá va tu código
return (<div className={`${styles.card} ${props.primary ? styles.primary: ""}`}>
     <span className={styles.name}>{name}
      
    {!props.primary && (<button className={styles.button}onClick={onClose}><IoIosClose/></button> )}
       </span>
     
    <img 
    src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
    alt="img"
    />
    <div className={styles.temps}>
    <Temp label="Min" temp={min} />
    <Temp label="Max" temp={max} />
   
    </div>
  
</div>
);
}
function Temp({label, temp}) {
  return (
    <div className={styles.temp}>
      <span>{label}</span>
      <span>{temp}°</span>
    </div>
  )
}