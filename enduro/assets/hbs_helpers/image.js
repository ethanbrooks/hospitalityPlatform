var helper = function () {}

helper.prototype.register = function () {
    enduro.templating_engine.registerHelper('image', function (edits, bucket, image) {
        return Buffer.from(JSON.stringify({
            bucket: bucket,
            key: image[0].blog_image,
            edits: JSON.parse(edits)
        }), 'binary').toString('base64');
    });
}

module.exports = new helper()