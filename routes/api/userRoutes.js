const router = require('express').Router();
const {
  getStudents,
  getSingleStudent,
  createStudent,
  deleteStudent,
  addAssignment,
  removeAssignment,
  getUsers,
  createUser,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/userid
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
