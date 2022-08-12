const { Schema, Types } = require('mongoose');
const formatDate = require("../utils/format.data.js");

const reactionSchema = new Schema(
  {
    ReactionId: {
      type: Schema.Typess.ObjectId,
      default: () => new Types.ObjectId(),
    },
    ReactionBody: {
      type: String,
      required: true,
      maxlength: 50,
      // minlength: 4,
      // default: 'Unnamed assignment',
    },
    username: {
      type: String,
      required: true,
      // default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get:(timestamp) => formatData(timestamp)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
