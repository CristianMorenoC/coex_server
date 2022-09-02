import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config({ path: './config.env' });

const sequelize = new Sequelize({
 	host: process.env.HOST,
 	username: process.env.USER,
 	password: process.env.PASS,
 	port: 3306,
 	database: process.env.DATABASE,
 	dialect: 'mysql',
});


export {sequelize} ;
