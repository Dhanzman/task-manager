const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = express.Router()

// Routes

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    }catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks', auth, async (req, res) => {

    try {
        //const tasks = await Task.find({})
        //const tasks = await Task.find({owner: req.user._id})
        await req.user.populate('tasks').execPopulate()
        res.status(200).send(req.user.tasks)
    }catch (e) {
        res.status(500).send(e)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({_id, owner: req.body._id})

        if(!task) {
            return res.status(404).send('Cant find this task')
        }
        res.status(200).send(task)
    }catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/tasks/:id', auth, async(req, res) => {
    const updates = Object.keys(req.body)
    const allowupdate = ['description', 'completed']
    const isValid = updates.every((update) => allowupdate.includes(update))
    if(!isValid) {
        res.status(400).send({Error: 'Invalid update!'})
    }
    try{
        const task = await Task.findOne({_id: req.params.id, owner: req.user._id})
        if(!task) {
            return res.status(404).send('Error occur')
        }
        updates.forEach((update) => task[update] = req.body[update] )
        await task.save()
        res.status(202).send(task)
    }catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = Task.findOneAndDelete({_id: req.params.id, owner: req.user._id})

        if(!task) {
            return res.status(404).send('Input valid Id')
        }
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})



module.exports = router