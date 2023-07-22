const { Thought, User } = require('../models')

module.exports = {
    async getThought(req, res){
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            res.status(500).json
        }
    },

    async getSingleThought (req, res){
        try {
            const thought = await Thought.findOne({_id: req.params.thoughId})

            if (!thought){
                return res.status(404).json({message: 'No thought with that ID'})
            }

            res.json(thought);
        } catch (err){
            res.status(500).json(err)
        }
    },

    async createThought (req, res){

        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
            )

            if (!user){
                return res.status(404).json({
                    message: 'Thought created, but no user found with that ID'
                })
            }
            res.json('Created thought')
        } catch (err){
            console.log(err);
            res.status(500).json(err)
        }
    }
}