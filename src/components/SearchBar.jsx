import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <div className="header">
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input 
        className="entrada"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="button" type="submit" value="Agregar" />
    </form>
    </div>
  );
}
