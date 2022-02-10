const {Type} = require('../models/models');

class TypeController{

    async create(req, res){
        const {name} = req.body;
        const type = await Type.create({name});
        return res.json(type);
    }

    async getAll(req, res){
        const type = await Type.findAll();
        return res.json(type);
    }

    async getOne(req, res){
        const id = req.query.id;
        const type = await Type.findOne({where: {id}});
        return res.json(type);
    }

    async delete(req, res){
        const id = req.query.id;
        const type = await Type.destroy({where: {id}});
        return res.json('Запись удалена');
    }

    async update(req, res){
        const id = req.query.id;
        await Type.findByPk(id).then((type)=> {
            type.update({
                name: req.body.name,
            })
        });
    }
}

module.exports = new TypeController();