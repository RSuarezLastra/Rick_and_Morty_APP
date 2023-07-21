import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";


export default function Nav(props){
    return(
        <nav className={style.containerNav}>
             <SearchBar onSearch={props.onSearch} />
             <Link to="/home"className={style.links}><h3>HOME</h3></Link>
             <Link to="/about" className={style.links}><h3>ABOUT</h3></Link>
             <Link to="/favorites"className={style.links}><h3>FAVORITES</h3></Link>
        </nav>
    )
}