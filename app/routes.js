var Todo = require('./models/todo');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos


	// create todo and send back all todos after creation


	// delete a todo


	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};