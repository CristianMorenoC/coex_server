import express from 'express'

import { createTodo, getTodos, getTodoByid, updatedTodo } from '../controllers/todo.controller.js'

const router = express.Router()

router.get('/', getTodos)
router.get('/:id', getTodoByid)
router.post('/', createTodo)
router.patch('/:id', updatedTodo)

export {router as todoRouter}