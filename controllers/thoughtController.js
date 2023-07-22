const { Thought, User } = require('../models')

module.exports = {
    async getThought(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            res.status(500).json
        }
    },

    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
          

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' })
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async createThought(req, res) {

        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            )

            if (!user) {
                return res.status(404).json({
                    message: 'Thought created, but no user found with that ID'
                })
            }
            res.json('Created thought')
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id' })
            }
            res.json(thought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId })

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id' })
            }

            const user = await User.findOneAndUpdate(
                { thought: req.params.thoughtId },
                { $pull: { thought: req.params.thoughtId } },
                { new: true }
            )

            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'Thought deleted but no user with this id!' });
            }
            res.json({ message: 'Thought successfully deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: {reactions: req.body} },
                // { $addToSet: { reactions: reactions._id } },
                { runValidators: true, new: true }
            )
            if (!thought){
                return res.status(404).json({message: 'No thought with this id'})
            }
            
            res.json({ message: 'reaction added!' })
        } catch (err){
            res.status(500).json(err)
            console.log(err)
        }
        },

    async deleteReaction (req, res){
        try {
            
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            )

            if (!thought){
                return res.status(404).json({message: 'No thought with this ID'})
            }
            res.json(thought)
            console.log('boop')
        } catch (err) {
            res.status(500).json(err);
           
          }
    }
}
