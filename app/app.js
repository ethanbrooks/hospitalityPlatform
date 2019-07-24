var local_app = function () {}

local_app.prototype.init = function (app) {
	// express app available here

	const port = 3000;
	app.get('/user', function (req, res) {
		res.send('Got a GET request')
	});	  
	app.post('/', function (req, res) {
		res.send('Got a POST request')
	});
	app.put('/user', function (req, res) {
		res.send('Got a PUT request at /user')
	});
	app.delete('/user', function (req, res) {
		res.send('Got a DELETE request at /user')
	});
	app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

module.exports = new local_app()
