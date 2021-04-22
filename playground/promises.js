require('../src/db/mongoose')
const User = require('../src/models/user')


// User.findByIdAndUpdate('60800a40add9f11c6c343c52', {age: 20}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 20})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return { user, count}
}

updateAgeAndCount('60800a40add9f11c6c343c52', 20).then((user) => {
    console.log(user)
}).catch((e) => {
    console.log('e', e)
})