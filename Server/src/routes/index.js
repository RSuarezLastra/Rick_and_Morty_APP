const getChartByid = require('../controllers/getChartById');
const login =  require('../controllers/login');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deteFav')
const postUser = require('../controllers/postUser');
// const getUsers = require('../controllers/getUsers')

const router = require('express').Router();

router.get("/character/:id", (req, res)=>{
    getChartByid(req, res);
})
router.get("/login",login);
// router.get("/users", getUsers);
router.post("/login",postUser); 
router.post("/fav",postFav);
router.delete("/fav/:id", deleteFav);


module.exports = router;