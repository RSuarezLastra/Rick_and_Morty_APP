import { ADD_FAV, REMOVE_FAV , FILTER, ORDER, ALL_FAV} from "./actionsType";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return{...state, myFavorites: action.payload,
            allCharacters: action.payload};
        break;
        case REMOVE_FAV:
            return{...state, 
                myFavorites: action.payload,
                allCharacters: action.payload};
        break;
        case FILTER:
            const newFilter = state.allCharacters.filter((char)=> char.gender === action.payload)
            return{...state, myFavorites:newFilter}
        break;
        case ALL_FAV:
            return{...state, myFavorites: [...state.allCharacters]}
        break;
        case ORDER:
            const newOrder = [...state.allCharacters].sort((a,b)=>{
                if(a.id > b.id){
                    return "Ascendente" === action.payload ? 1 : -1;
                }
                if(a.id < b.id){
                    return "Descendente" === action.payload ? 1: -1;
                }
                return 0;
            })
            return{...state, myFavorites:newOrder}
        break;
        default:
            return{...state}
    }
}

export default rootReducer;