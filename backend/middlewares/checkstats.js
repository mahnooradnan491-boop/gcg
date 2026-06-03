import mongoose from 'mongoose'
import SuccessStory from '../models/SuccessStory.js'

const checkStats = async () => {
    try {
        const stat = await SuccessStory.findOne()

        if (!stat) {
            const statone = new SuccessStory({
                count: '5k+',
                label: 'Regular Student',
                type: 'regular'
            })
            await statone.save()
            const stattwo = new SuccessStory({
                count: '10k+',
                label: 'Graduate Student',
                type: 'graduate'
            })
            await stattwo.save()
            const statthree = new SuccessStory({
                count: '140+',
                label: 'Research Student',
                type: 'research'
            })
            await statthree.save()
            console.log('Default Success Stories Created')
        }
    } catch (error) {
        console.error('Error in checkStats:', error)
    }
}

export default checkStats