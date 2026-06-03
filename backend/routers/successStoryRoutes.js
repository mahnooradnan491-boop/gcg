import express from 'express';
import { updateSuccessStory } from '../controllers/successStoryController.js'

const router = express.Router();

router.get('/success-stories', async (req, res) => {
    try {
        const SuccessStory = (await import('../models/SuccessStory.js')).default;
        const stories = await SuccessStory.find();
        res.status(200).json(stories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/success-stories/update/:type', updateSuccessStory);

export default router;