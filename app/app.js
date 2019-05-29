const local_app = function () {}
var temper = enduro.api.temper
// * ———————————————————————————————————————————————————————— * //
// * 	init
// *
// *	gets called upon starting enduro.js production server
// *	@param {express app} app - express app
// *	@return {nothing}
// * ———————————————————————————————————————————————————————— * //

local_app.prototype.init = function (app) {
    app.get('/api/get_random_number', function (req, res) {
        res.send(Math.random().toString())
	})
	
	app.get('/random', function (req, res) {
        temper.render('random', { random_number: Math.random() })
            .then((output) => {
                res.send(output)
            })
    })
}

module.exports = new local_app()