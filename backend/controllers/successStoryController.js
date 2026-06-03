import SuccessStory from '../models/SuccessStory.js';

export const updateSuccessStory = async (req, res) => {
    const { type } = req.params;
    const { count, label } = req.body;

    try {
        const updatedStory = await SuccessStory.findOneAndUpdate(
            { type: type },
            { count, label }
        );

        if (!updatedStory) {
            return res.status(404).json({ message: "Type not found in database" });
        }

        return res.status(200).json({ message: `${type} updated successfully!`, data: updatedStory });
    } catch (error) {
        console.error("Backend error:", error);
        return res.status(500).json({ message: error.message });
    }
};

export const getSuccessStories = async (req, res) => {
    try {
        const stories = await SuccessStory.find();
        res.status(200).json(stories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}