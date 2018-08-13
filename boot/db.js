var mongoose = require('mongoose');
const {database} = require('config');

mongoose.Promise = Promise;
// Create the database connection
mongoose.connect(database.MONGO_URL);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.once('open', () => {
  // eslint-disable-next-line
  console.log(`Mongoose connection open to ${database.MONGO_URL}`);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

// When the connection is disconnected
mongoose.connection.once('disconnected', () => {
  console.log('Mongoose connection disconnected');
});
