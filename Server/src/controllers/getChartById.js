var axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const {id} = req.params;
    axios(`${URL}${id}`)
    .then(({data}) => { 
        const {id,name,gender,species,origin,image,status} = data;
        const character = { id, status, name, species, origin, image, gender }

        return character.name 
        ? res.status(200).json(character)
        : res.status(404).send("Not found")
    })
    .catch( error => res.status(500).send(error.message))
}



module.exports = getCharById;


//version anterior

// const successHandler = (response, res) => {
//     const {id,name,gender,species,origin,image,status} = response.data;
//     res.writeHead(200, {"Content-type": "application/json"})
//     res.end(JSON.stringify({id,name,gender,species,origin,image,status}))
// }
// const errorHandler = (error, res) => {
//     res.writeHead(500 , {"Content-type": "text/plain"})
//     res.end(error.message)
// }

// const getCharById = (res, id) => {
//     const URL = "https://rickandmortyapi.com/api/character/"
//     axios(`${URL}${id}`)
//     .then(response => successHandler(response, res))
//     .catch(error => errorHandler(error,res))
// }
