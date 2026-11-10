import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    post: { type: String, required: true },
    tag1: String,
    tag2: String,
    pay: String,
    location: String,
    experience: String,
    time: String,
    logo: String,
    },
    { timestamps: true }
)

export default mongoose.model('Job', jobSchema)