var helper = function () {}

helper.prototype.register = function () {
    enduro.templating_engine.registerHelper('image', function (edits, bucket, image, count) {
    
        if((image.length - 1) < count){
            count = Math.floor(Math.random() * (image.length - 1));
            console.log(image[count].blog_image);
            console.log(count);
        }
        return Buffer.from(JSON.stringify({
            bucket: bucket,
            key: image[count].blog_image,
            edits: JSON.parse(edits)
        }), 'binary').toString('base64');
    });
}

module.exports = new helper()