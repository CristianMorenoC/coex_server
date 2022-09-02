import { Todo } from "../models/todo.model.js";

const createTodo = async (req, res) => {
    const {description} = req.body

    await Todo.create({description})

    res.status(201).json({
        status: 'success',
    })

}

const getTodos = async(req, res) => {
    const todo = await Todo.findAll()

    if(!todo){
        return new Error('no hay todos')
    }

    res.status(200).json({
        status: 'success',
        data: {todo}
    })
}


const getTodoByid = async (req, res ) => {
    const {id} = req.params

    const todo = await Todo.findOne({where: {id}})

    if(!todo){
        return new Error('no hay todos')
    }

    res.status(200).json({
        status: 'success',
        data: {todo}
    })

}

const updatedTodo =async (req, res) => {
    const {id} = req.params

    const {description} = req.body

    const todo = await Todo.findOne({where: {id}})

    if(!todo){
        return new Error('no hay todos')
    }

    await todo.update({description,})

    res.status(204).json({
        status: 'success'
    })

}

const deleteTodo = async(req, res)=> {

}

export {createTodo, getTodos, getTodoByid, updatedTodo}