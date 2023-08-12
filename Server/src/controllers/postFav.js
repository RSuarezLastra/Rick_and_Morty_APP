const {Favorite} = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const {name,origin,status,image,species,gender,id} = req.body;

        if(!id|| !name || !origin || !status || !image || !species || !gender){
            return res.status(401).send('Faltan datos');
        }
        await Favorite.findOrCreate({
            where: { 
                name, origin, status, image, species, gender ,id
            },
            defaults: {
                name, origin, status, image, species, gender,id 
            }
        });
        const favs = await Favorite.findAll();
            return res.status(200).json(favs);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = postFav;