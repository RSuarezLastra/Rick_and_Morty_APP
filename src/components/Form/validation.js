
const validation = (userData, errors, setErrors) => { 
    //validar username

    if(!userData.username){
        setErrors({...errors, username:'Porfavor completa este campo '})
    } else if(userData.username.length > 35) {
        setErrors({...errors, username:'El nombre se usuario no puede tener más de 35 caracteres'})
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
        setErrors({...errors, username:'Email inválido'})
    }else setErrors({...errors, username:''})
        
    // validar password

    // if(userData.password.length < 6 || userData.password.length > 10 ){
    //    setErrors({...errors, password:'La contraseña debe contener entre 6 y 10 caracteres'}) 
    // }else if(!/\d/.test(userData.password)){
    //     setErrors({...errors, password:'La contraseña debe contener al menos un número'})
    // }else {setErrors({...errors, password:''})}
}

export default validation;