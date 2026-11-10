import 'dotenv/config'
import mongoose from 'mongoose'
import Job from './models/Job.js'
import { jobCards } from './data/Jobs.js'

async function ready(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        await Job.deleteMany()
        await Job.insertMany(jobCards)
        console.log('Seeded')
        process.exit()
    }catch (err){
        console.error(err.message)
        process.exit(1)
    }
}

ready()