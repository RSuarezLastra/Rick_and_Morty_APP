import Card from "../Card/Card";
import { useDispatch ,useSelector } from "react-redux";
import { filterCards, orderCards, allFavorites } from "../../redux/actions";


const Favorites = ()=>{
    
    const dispatch = useDispatch();
    const myFavorite = useSelector(state => state.myFavorites)

    const handleOrder = (event) => {
        event.preventDefault();
        const {value} = event.target;
        dispatch(orderCards(value));
    }
    const handleFilter = (event) => {
        event.preventDefault();
        const {value} = event.target;
        dispatch(filterCards(value));
    }
    const handleAll = (event) => {
        event.preventDefault();
        const {value} = event.target;
        dispatch(allFavorites())
    }

    return(
        <div> 
            <select name="Order" defaultValue={"DEFAULT"} onChange={handleOrder}>
                <option value="DEFAULT" disabled>Select order</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="Order" defaultValue={"DEFAULT"} onChange={handleFilter}>
                <option value="DEFAULT" disabled>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <button onClick={handleAll}>All</button>

             {myFavorite && myFavorite.map(({name,status,species,gender,image,id})=>{
                return(
                    
                    <Card
                    name={name} 
                    status={status} 
                    species={species} 
                    gender={gender} 
                    image={image} 
                    id = {id}
                    key = {id}/>    
                )
            })}
        </div>

    )
   
}

export default Favorites;