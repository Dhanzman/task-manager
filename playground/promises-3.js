require('../src/db/mongoose')
const Task = require('../src/models/task')



const taskCreate = async (description, completed) => {
    const task = await Task.create(description, completed)
    const count = await Task.countDocuments(completed)
    return count
}


taskCreate({description:'Quiz time'},  false).then((coun) => {
    console.log(coun)
}).catch((e) => {
    console.log(e)
})