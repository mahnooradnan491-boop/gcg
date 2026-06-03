import express from 'express';
import { updateSuccessStory, getSuccessStories } from '../controllers/successStoryController.js'

const router = express.Router();

router.get('/success-stories', getSuccessStories);

router.put('/success-stories/update/:type', updateSuccessStory);

export default router;