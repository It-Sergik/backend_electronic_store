const {Device, DeviceInfo} = require('../models/models');
const path = require('path');
const uuid = require('uuid');

class DeviceController{

    async create(req, res){
        try {
            let {name, price, info} = req.body;
            const {img} = req.files();
            let fileName = uuid.v4() + '.jpg';
            await img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const device = await Device.create({name, price, img: fileName});

            if (info) {
                info = JSON.parse(info);
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: i.deviceId,
                    })
                );
            };
            return res.json(device);
        } catch (e) {
            console.log(e.message);
        }
    }

    async getAll(req, res){
        let {catalogId, brandId, typeId, limit, page} = req.query;
        let device;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        let query = {
            catalogId, brandId, typeId
        }

        device = await Device.findAndCountAll({
            where: {
                ...query.catalogId ? {catalogId: query.catalogId} : {},
                ...query.brandId ? {brandId: query.brandId} : {},
                ...query.typeId ? {typeId: query.typeId}: {},
            },
            limit, offset
        });

        return res.json(device);
    }

    async getOne(req, res){
        const id = req.query;
        const device = await Device.findOne({where: {id}});
        return res.json(device);
    }

    async delete(req, res){
        const id = req.query;
        const device = await Device.destroy({where: {id}});
        return res.json(device);
    }

    async update(req, res){

    }

}

module.exports = new DeviceController();