import SuccessStory from '../models/SuccessStory.js';

export const updateSuccessStory = async (req, res) => {
    const { type } = req.params; 
    const { count, label } = req.body; 

    // VS CODE TERMINAL LOG
    console.log("2. Backend ko data mila ->", { type, count, label });

    try {
        const updatedStory = await SuccessStory.findOneAndUpdate(
            { type: type },          
            { count, label },        
            { new: true }            
        );

        // DATABASE SE JO DATA UPDATE HUA WOH LOG
        console.log("3. Database mein update hone ke baad ka data ->", updatedStory);

        if (!updatedStory) {
            return res.status(404).json({ message: "Type not found in database" });
        }

        return res.status(200).json({ message: `${type} updated successfully!`, data: updatedStory });
    } catch (error) {
        console.error("Backend error:", error);
        return res.status(500).json({ message: error.message });
    }
};