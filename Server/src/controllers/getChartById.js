var axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const {data} = await axios(`${URL}${id}`)
        
        if(!data.name) throw Error(`faltan datos del personaje ID: ${id}`)

        const character = { 
            id: data.id, 
            status: data.status, 
            name: data.name, 
            species: data.species, 
            origin: data.origin, 
            image: data.image, 
            gender: data.gender 
        }
        return res.status(200).json(character)

    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    }
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
