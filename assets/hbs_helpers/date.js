// * ———————————————————————————————————————————————————————— * //
// *    year helper
// * ———————————————————————————————————————————————————————— * //

enduro.templating_engine.registerHelper("year", function () {
	return (new Date()).getFullYear();
});