var helper = function () {}
helper.prototype.register = function () {
    enduro.templating_engine.registerHelper('random', function (min, max) {
        return Math.floor(Math.random() * (+max - +min)) + +min;
    });
}

module.exports = new helper()