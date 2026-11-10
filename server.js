import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import jobRoutes from './routes/jobRoutes.js'

const app = express()
app.use(cors());
app.use(express.json());

app.use('/api/jobs', jobRoutes)

app.get('/' , (req, res) => {
    res.send('API running')
})

const PORT = process.env.PORT || 5000

async function start() {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB Connected')
        app.listen(PORT, () => console.log(`Server on ${PORT}`))
    } catch (err) {
        console.error(err.message)
    }
}

start()

