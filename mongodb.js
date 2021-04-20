const {MongoClient, ObjectID} =require('mongodb')


const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionUrl, { useUnifiedTopology:true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Daniel',
    //     age: 20
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to find user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'daniel',
    //         age: 22
    //     }, {
    //         name: 'Rebecca',
    //         age: 20
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to get collection')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Washing the car',
    //         state: true
    //     },{
    //         description: 'Washing the dishes',
    //         state: false
    //     }, {
    //         description: 'Having sex',
    //         state: false

    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to get the collection')
    //     }

    //     console.log(result.ops)
    // })
})