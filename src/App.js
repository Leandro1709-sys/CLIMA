import React from 'react';
import styles from'./App.module.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';

import SearchBar from './components/SearchBar.jsx';
import { Cairns } from './data.js';


function App() {
  const [data,  setData] = React.useState([])

  function onSearch(ciudad) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&appid=4ae2636d8dfbdc3044bede63951a019b')
      .then(r => r.json())
      .then((recurso) => {
        if(recurso?.cod !== '404'&&recurso!==''){
            const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          }; 
           setData(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  
    }

    function handleOnClose(id) {
        setData(prevData => {
        return prevData.filter(city => city.id !== id)
        })
    }
  return (
    <div className={styles.app}>
        
      <div className={styles.backG} />
 
      <div className={styles.container}>
    
      <div>
        <SearchBar onSearch={onSearch}/>  
       </div>
       <div className={styles.citiesContainer}>
        {data.length > 0 && <Card
        primary 
          max={data[data.length -1].max}
          min={data[data.length -1].min}
          name={data[data.length -1].name}
          img={data[data.length -1].img}
         // onClose={() => alert(Cairns.name)}
        />}
        
        <Cards cities={data} onClose={handleOnClose} />
      </div>
      </div>
    </div>
  );
}

export default App;
