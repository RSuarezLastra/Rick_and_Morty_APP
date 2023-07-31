import './App.css';
import { Route, Routes ,useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { username, password, url } from './utils/const';
import axios from 'axios'
import {Cards, Nav, About, Detail, Form, Favorites} from './components/index'

function App() {
   //* HOOKS *// ****************
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false);
   const {pathname} = useLocation();
   const navigate = useNavigate();

    useEffect(()=>{
      !access && navigate('/');
    },[access])

   //! FUNCIONES **************************

   const onSearch = (id) => {
      axios(`${url}${id}`)
      .then(response => response.data)
      .then((data) => {
         if(data.name && !characters.find((char)=>char.id === data.id)){ setCharacters((characters) => [...characters,data]);
         }else {alert('¡Algo salío mal!')
      }}).catch((error)=> console.log(error))
   }
   const onClose = (id) => {
         setCharacters(characters.filter((char) => char.id !== id)
      )}

   const login = (userData)=>{
      if(userData.username === username && userData.password === password){
         setAccess(true);
         navigate('/home');
      }else{
         alert('Credenciales incorrectas')
      }
   }
//******RENDER *******/
   return (
      <div className='App'>
            {pathname!== '/' && <Nav onSearch={onSearch}/>}
            <Routes>
               <Route path='/' element={<Form login={login}/>}/>
               <Route 
                  path='/home' 
                  element={<Cards characters={characters} onClose={onClose} />}
                  />
                  <Route path='/about' element={<About/>}/>
                  <Route path='/favorites' element={<Favorites/>}/>
                  <Route path='/detail/:detailId' element={<Detail/>}/>
            </Routes>
      </div>
   );

  
}

export default App;
