import { useState } from "react";
import validation from "./validation";
import style from './Form.module.css'


const Form = ({login})=> {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        username: '',
        password:'',
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData,[property]: value})
        validation({...userData,[property]: value}, errors, setErrors)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={style.container_Form}>
            <form className={style.Form} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={userData.username} 
                        onChange={handleInputChange}/>
                    <p>{errors.username}</p>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={userData.password} 
                        onChange={handleInputChange}/>
                    {errors.password}
                </div>
                <div className={style.boton}>
                    <button>LOGIN</button>   
                </div>
            
        </form>
        </div>
        
    )
}

export default Form;