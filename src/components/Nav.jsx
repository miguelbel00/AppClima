import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import home from '../img/home-free-icon-font.png';



function Nav({onSearch}) {
  return (
    <nav className="contenedor">
      <Link to='/'>
        <img className='home'src={home} alt="" />
      </Link>
      <span className='nav-span'>Weather App</span>   
        <SearchBar
          onSearch={onSearch}
        />
        
    </nav>
  );
};

export default Nav;
