'use strict'

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })  
}

const db = mongoose.connect('mongodb://localhost:27017/middleware-test', {useMongoClient: true})

const Schema = mongoose.Schema({
    firstName: String,
    lastName: String
})


Schema.pre('save', function(next) {
    console.log(`Pre -> save - begin ...`)
    wait(3000)
    .then(() => {
        console.log(`Pre -> save - end`)
        next()
    })

})

Schema.post('save', function (doc, next) {
    console.log(`Post -> save - begin ...`)
    wait(3000)
    .then(() => {
        console.log(`Post -> save - end`)
        next()
    })

})


const Person = mongoose.model('Person', Schema)

db.on('open', () => {
    const person = new Person({
        firstName: 'Nick',
        lastName: 'Naso'
    })
    person.save()
    .then(person => {
        console.log(`One person just saved on db => ${person.firstName} - ${person.lastName}`)
    })
    .catch(err => {
        console.log(err)
    })
})


process.on('SIGINT', () => {
   db.close()
   console.log('Good bye ...')
})