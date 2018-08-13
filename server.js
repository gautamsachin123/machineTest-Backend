const app = require('./boot/app');
const port = process.env.PORT || 8000;

const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});