const { MongoClient } = require('mongodb')
const createSticky = require('./createSticky')
const { expect } = require('chai')

describe('createSticky', () => {
    let client

    before(() => {
        client = new MongoClient('mongodb://127.0.0.1:27017')

        return client.connect()

            .then(connection => {
                const db = connection.db('mydb')
                process.db = db
            })
    })


    it('succed when user exists', () => {
        const text = 'hello sticky' + Math.random()
        return createSticky('user-1676992518546', text, 'public')
            .then(() => process.db.collection('stickies').findOne({text}) )
            .then(sticky=>{
                expect(sticky.user).to.equal('user-1676992518546')
                expect(sticky.text).to.equal(text)
                expect(sticky.visibility).to.equal('public')
            })

    })

   after(()=> client.close())
})

