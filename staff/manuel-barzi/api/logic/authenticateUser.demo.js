require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const authenticateUser = require('./authenticateUser');

(async () => {
    try {
        await connect(process.env.MONGO_URL)

        const token = await authenticateUser('hello@world.com', '123123123')

        console.log(token)
    } catch (error) {
        console.error(error)
    } finally {
        await disconnect()
    }
})()