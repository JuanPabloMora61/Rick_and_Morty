const { Favorite } = require('../DB_connection');

const postFavs = async (req, res) => {
    
    try {
        const { id, name, origin, status, image, species, gender } = req.body;
        
        if(!id || !name || !origin || !status || !image || !species || !gender){
            return res.status(401).send("Faltan datos")
        } 

        await Favorite.findOrCreate({where: { id }, defaults: { id, name, origin, status, image, species, gender }});
        const favList = await Favorite.findAll();

        return res.status(200).send(favList);
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { postFavs }