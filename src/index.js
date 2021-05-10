const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// loading database
require('./db/mongoose')

// Initializing express
const app = express()

// Port for the server
const port = process.env.PORT || 3000

//Change req to json
app.use(express.json())

// User router
app.use(userRouter)

// Task router
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is connected on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById('608b17ba5cfabd19408874c0')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner) 

//     const user = await User.findById('608b12855497ae0c50f1b136')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()