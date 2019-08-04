var helper = function () {}
helper.prototype.register = function () {
    enduro.templating_engine.registerHelper('json', function (input) {
        return JSON.stringify(input);
    });
}

module.exports = new helper()