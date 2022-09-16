import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import Ciudad from '../components/Ciudad';
import Footer from '../components/Footer';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min-273.15),
            max: Math.round(recurso.main.temp_max-273.15),
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
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
        
      });
      
  }
  function onFilter(ciudadId) {
/* 
    let ciudad = cities.filter(c => parseInt(c.id) === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    } */

    return cities.find(c => parseInt(c.id) === parseInt(ciudadId));

  }
  return (
    <>
      <div className="page-container">
      <div className="content-wrap">
        <Route path='/'>
          <Nav onSearch={onSearch}/>

        </Route>
        <Switch>
          <Route exact path='/'>
            <Cards cities={cities} onClose={onClose}></Cards>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/ciudad/:ciudadId'>
            {({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
          </Route>
      </Switch>
      </div>
        <Footer></Footer>
        </div>
    </>
    
  
  );
}

export default App;
