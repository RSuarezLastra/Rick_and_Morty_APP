const {User} = require('../DB_connection');

const getUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll();
        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getUsers;