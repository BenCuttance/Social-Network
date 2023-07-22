const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/')
.get(getUsers)
.post(createUser);


// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.delete(deleteUser)
.put(updateUser);

router.route('/:userId/friends/:friendsId')
.post(addFriend)

module.exports = router;
