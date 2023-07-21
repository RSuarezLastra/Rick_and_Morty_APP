import style from './card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav , removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';

function Card({id,name,status,species,gender,image,onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false); 

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }else{
         setIsFav(true);
         addFav({id,name,status,species,gender,image})
      }
   }

   return (
      <div className={style.container}>
         <div className={style.botones}>
          {
         isFav ? 
            (<button className={style.fav_button} onClick={handleFavorite}>❤️</button>) 
            : (<button className={style.fav_button} onClick={handleFavorite}>🤍</button>)
         }
         <button onClick={()=>onClose(id)} className={style.closeButton}>X</button>  
         </div>
         

         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <img src={image} alt='Imagen de Rick' />
         {/* <h2>{id}</h2> */}
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)