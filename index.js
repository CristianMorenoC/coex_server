import express from 'express'
import { sequelize } from './util/database.js';
import {todoRouter} from './routes/todo.routes.js'

const app = express()
app.use(express.json());

sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

app.use('/api/v1/todo', todoRouter)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
