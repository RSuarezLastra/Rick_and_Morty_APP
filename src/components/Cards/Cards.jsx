import Card from '../Card/Card';
import style from './cards.module.css'


export default function Cards({characters, onClose}) {
   return( <div className={style.containerPrincipal}>
      <div className={style.card_container}>
      {characters?.map(({name,status,species,gender,image,id}) =>{
         return(
            <Card 
            name={name} 
            status={status} 
            species={species} 
            gender={gender} 
            image={image} 
            id = {id}
            key = {id}
            onClose={onClose}/> 
            )
         })}
         </div>
   </div>);
}








// {characters.map=(personaje)=>{
//    return <Card name={personaje.name} status={personaje.status} species={personaje.species} gender={personaje.gender} image={personaje.image} />
// }}