import express from 'express'
import Job from '../models/Job.js'

const router = express.Router()

router.get('/', async(req, res) => {
    try{
        const jobs = await Job.find()
        res.json(jobs)      
    }catch(err){
        res.status(500).json({message: err.message})
    }
})


router.get('/:id', async(req, res) => {
    try{
        const job = await Job.findById(req.params.id)
        if(!job) return res.status(404).json({message: 'Job Not Found'})
        res.json(job)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

export default router