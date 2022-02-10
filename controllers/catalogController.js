const {Catalog} = require('../models/models');

class CatalogController {

    async create(req, res){
        const {name} = req.body;
        const catalog = await Catalog.create({name});
        return res.json(catalog);
    };

    async getAll(req, res){
        const catalog = await Catalog.findAll();
        return res.json(catalog);
    };

    async getOne(req, res){
        const id = req.query.id;
        const catalog = await Catalog.findOne({where:{id}});
        return res.json(catalog);
    };

    async delete(req, res){
        const id = req.query.id;
        const catalog = await Catalog.destroy({where: {id}});
        return res.json(catalog);
    };

    async update(req, res){
        const id = req.query.id;
        await Catalog.findByPk(id).then((catalog) => {
            catalog.update({
                name: req.body.name,
            })
        });
    };

}

module.exports = new CatalogController();