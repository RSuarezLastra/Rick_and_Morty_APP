const {User} = require('../DB_connection');

const postUser = async (req, res) => {
    try {
    const {email, password} = req.body;
        if(!email || !password) 
            res.status(400).send('Faltan datos')
    const newUser = await User.create({email,password})
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status(500).send(error.message)
    }

}

module.exports = postUser;