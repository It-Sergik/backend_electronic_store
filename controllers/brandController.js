const {Brand} = require("../models/models");

class BrandController{

    async create(req, res){
        const {name} = req.body;
        const brand = await Brand.create({name});
        return res.json(brand);
    }

    async getAll(req, res){
        const brand = await Brand.findAll();
        return res.json(brand);
    }

    async getOne(req, res){
        const id = req.query.id;
        const brand = await Brand.findOne({where: {id}});
        return res.json(brand);
    }

    async delete(req, res){
        const id = req.query.id;
        const brand = await Brand.destroy({where: {id}});
        return res.json('Запись удалена');
    }

    async update(req, res){
        const id = req.query.id;
        await Brand.findByPk(id).then((brand)=>{
            brand.update({
                name: req.body.name,
            })
        });
    }

}

module.exports = new BrandController();