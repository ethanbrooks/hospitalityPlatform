const showdown  = require('showdown');
showdown.setOption('simpleLineBreaks', true);

const markdownConverter = new showdown.Converter();

var abstractor = function () {}

abstractor.prototype.init = function(context) {
	return new Promise(function(resolve, reject) {
		
		// initialize abstractor
		resolve()
	})
}

abstractor.prototype.abstract = function(context) {
	return new Promise(function(resolve, reject) {
		
		// will hide the generatod context from admin interface
		context['$marked_description_hidden'] = true
		
		
		// will replace __strong__ to <strong>strong</strong>
		//context.description = "fasdf \n\njlkj2l2j";
		context.marked_description = markdownConverter.makeHtml(context.description);//context.description.replace(/(\n\n){1}/g, '</p><p>')
		
		// abstract directive
		return resolve()
		
	})
}

module.exports = new abstractor()