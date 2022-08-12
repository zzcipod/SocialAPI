const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

// Schema to create Student model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
          ref: 'Thought',
      },
    ],
    friends: [
      {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
  ],
  },
  {
    toJSON: {
      getters: true,
    },
    id:false,
  },
);

userSchema.getters("friendCount").get(function(){
  '${this.friends.length}'});

const User = model('User', userSchema);

module.exports = Student;
