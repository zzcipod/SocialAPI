const { User, Thought } = require('../models');

module.exports = {
  // Get all courses
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a course
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No course with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a course
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: {thoughts: thought._id} },
          {new: true }
        )
      })
      .then((user)=> {
        !user
        ?res 
            .status(404)
            .json({message:'No user found!'})
            : res.json(user)
         
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a course
  deleteThought(req, res) {
    Course.findOneAndDelete({ _id: req.params.courseId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Student.deleteMany({ _id: { $in: thought.user } })
      )
      .then(() => res.json({ message: 'User and thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a course
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

// Add an reaction
addReaction(req, res) {
console.log('Adding a Reaction');
console.log(req.body);
Thought.findOneAndUpdate(
  {_id: req.params.thoughtId },
  {$addToSet: { reactions: req.body } },
  {runValidators: true, new: true }
)
  .then((thought) =>
  !thought
    ? res
        .status(404)
        .json({ message: 'No thought found with that ID :(' })
    : res.json(thought)
)
.catch((err) => res.status(500).json(err));
}, 

removeReaction(req, res) {
  Thought.findOneAndUpdate(
    {_id: req.params.thoughtId },
    {$pull: { reactions: { reactionId: req.params.reactionId } } },
    {runValidators: true, new: true }
  )
    .then((thought) =>
    !thought
      ? res
          .status(404)
          .json({ message: 'No thought found with that ID :(' })
      : res.json(thought)
  )
  .catch((err) => res.status(500).json(err));
  }, 
};
