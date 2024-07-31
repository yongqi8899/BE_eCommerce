import sequelize from '../db/index.js';
import {DataTypes} from 'sequelize';

export const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

await Category.sync();