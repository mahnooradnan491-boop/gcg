import mongoose from 'mongoose';

const successStorySchema = new mongoose.Schema({
    count: { type: String, required: true }, 
    label: { type: String, required: true }, 
    type: { type: String, enum: ['regular', 'graduate', 'research'], required: true } 
});

export default mongoose.model('SuccessStory', successStorySchema, 'successstories');