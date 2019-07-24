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
    context['$marked_doc_hidden'] = true

    // will replace __strong__ to <strong>strong</strong>
    context.marked_doc = context.doc.replace(/__([^*]+)__/g, '<strong>$1</strong>')

    // add support for locales
    if ('$doc_de' in context) {
        context.$marked_doc_de = context.$doc_de.replace(/__([^*]+)__/g, '<strong>$1</strong>')
    }

    // abstract directive
    return resolve()

  })
}

module.exports = new abstractor()