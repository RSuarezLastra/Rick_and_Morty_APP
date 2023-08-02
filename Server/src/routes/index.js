const {login} =  require('../controllers/login');
const getChartByid = require('../controllers/getChartById');
const {postFav, deleteFav} = require('../controllers/handleFavorites');

const router = require('express').Router();

router.get("/character/:id", (req, res)=>{
    getChartByid(req, res);
})

router.get("/login", (req,res)=>{
    login(req, res)
}) 
// esto seria lo mismo que las otras rutas, al entrar en esa ruta se ejecutaria la funcion login

router.post("/fav", (req, res)=>{
    postFav(req, res);
})

router.delete("/fav/:id", (req, res)=>{
    deleteFav(req, res);
})

module.exports = router;