require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const createSticky = require('./createSticky');

(async () => {
    try {
        await connect(process.env.MONGO_URL)
    
        const result = await createSticky('6400b46a537e25951ae65548', 'hola mon', 'public')

        console.log(result)
    } catch (error) {
        console.error(error)
    } finally {
        await disconnect()
    }
})()