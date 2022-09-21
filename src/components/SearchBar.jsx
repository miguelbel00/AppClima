import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  let history = useHistory()

  return (
    <div className="header">
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setTimeout(() => {
        history.push("/")
      }, 2500);

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
