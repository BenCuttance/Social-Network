const { User } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //Get single user with Id
    async getSingleUser(req, res) {
        console.log('get single user')
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v')
                .populate('thoughts')

            if (!user) {
                return res.status(400).json({ message: 'No user with that ID' })
            }
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Create user
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body)
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //Update user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with this id' })
            }

            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)

        }
    },
    // delete user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId })

            if (!user) {
                return res.status(404).json({ message: 'No user with this id' })
            }

            res.json({ message: 'User deleted' })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // add friend
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            )

            if (!user) {
                return res.status(404).json({ message: 'No user with this id' })
            }
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
            console.log(err)
        }
    },
    // delete friend 
    async deleteFriend(req, res){
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId }},
                { runValidators: true, new: true }
            )

            if (!user){
                return res.status(404).json({message: "No friend with this id"})
            }
            res.json(user)
            console.log('friend deleted')
        } catch (err){
            res.status(500).json(err)
        }
    }
}

