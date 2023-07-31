var axios = require('axios');


const successHandler = (response, res) => {
    const {id,name,gender,species,origin,image,status} = response.data;
    res.writeHead(200, {"Content-type": "application/json"})
    res.end(JSON.stringify({id,name,gender,species,origin,image,status}))
}
const errorHandler = (error, res) => {
    res.writeHead(500 , {"Content-type": "text/plain"})
    res.end(error.message)
}

const getCharById = (res, id) => {
    const URL = "https://rickandmortyapi.com/api/character/"
    axios(`${URL}${id}`)
    .then(response => successHandler(response, res))
    .catch(error => errorHandler(error,res))
}

module.exports = getCharById;