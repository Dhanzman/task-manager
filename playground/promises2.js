require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndUpdate('607f6814541f043df4b2e8d2', {description: 'Finishing promises task'}).then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// Task.findByIdAndDelete('607f6814541f043df4b2e8d2').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const taskDeleteAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments(completed)
    return count 
}


taskDeleteAndCount('6080a472f018203964974b70', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
