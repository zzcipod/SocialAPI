const { Schema, Types } = require('mongoose');
const formatDate = require("../utils/data.js");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
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
      get:(timestamp) => formatDate(timestamp)
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
