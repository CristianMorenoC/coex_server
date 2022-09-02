import { DataTypes } from "sequelize";
import { sequelize } from "../util/database.js";

const Todo = sequelize.define('todo', {
    id: {
        primaryKey: true,
        autoIncrement: true ,
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

export {Todo}