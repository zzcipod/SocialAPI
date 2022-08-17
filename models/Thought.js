const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction.js");
const formatDate = require("../utils/data.js")

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    // createdAt: {
    //   type: Date,
    //   default: true,
    // },
    createAt: {
      type: Date,
      default: Date.now(),
      get:(timestamp) => formatDate(timestamp)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function(){
  `${this.reactions.length}`
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
