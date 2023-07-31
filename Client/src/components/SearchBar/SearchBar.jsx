import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div className={style.containerBar} >
         <input 
            className={style.searchBar}
            type='search' 
            placeholder="  Search Character" 
            onChange={handleChange}/>
         <button 
            className={style.search_button}
            onClick={ () => onSearch(id) }>
            Search</button> 
      </div>
   );
}
 