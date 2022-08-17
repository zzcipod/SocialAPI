const connection = require('../config/connection');
const { User, Thought } = require('../models');
// const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});


  console.info('Seeding complete! 🌱');
  process.exit(0);
});
