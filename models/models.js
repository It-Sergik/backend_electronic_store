const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, default: 'USER'},
});

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
})

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey:true}
});

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: true}
})

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    title: {type: DataTypes.STRING, allowNull: true},
    description: {type: DataTypes.STRING, allowNull: true},
});

const Review = sequelize.define('review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    image_quality: {type: DataTypes.STRING, allowNull: true},
    work_speed: {type: DataTypes.STRING, allowNull: true},
    photo_quality: {type: DataTypes.STRING, allowNull: true},
});

const Catalog = sequelize.define('catalog', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: true},
});

const ReviewInfo = sequelize.define('review_info', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    dignity: {type: DataTypes.STRING, allowNull: true},
    limitations: {type: DataTypes.STRING, allowNull: true},
    comment: {type: DataTypes.STRING, allowNull: true},
});

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
});

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
});

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});


User.hasOne(Basket);
Basket.belongsTo(Basket);

User.hasMany(Review);
Review.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo);
DeviceInfo.belongsTo(Device);

Catalog.hasMany(Device);
Device.belongsTo(Catalog);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Type.hasMany(Device);
Device.belongsTo(Type);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});

Review.hasOne(Device);
Device.belongsTo(Review);

Review.hasMany(ReviewInfo);
ReviewInfo.belongsTo(Review);

module.exports = ({
    User, Basket, BasketDevice, Device, DeviceInfo,
    Catalog, Brand, Type, TypeBrand, Review, ReviewInfo
});
