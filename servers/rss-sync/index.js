const { transform, prettyPrint } = require('camaro')
const fs = require('fs')
const parse = require('url-parse');
const moment = require('moment');

let imagesHtml = [];

const xml = fs.readFileSync('arco-rss-es.xml', 'utf-8')
const template = {
    blog: ['//rss/item', {
        blog_title: 'title',
        blog_text: 'content:encoded',
        blog_link: 'link',
        blog_date: 'pubDate'
    }]
};

(async function () {
    const result = await transform(xml, template);

    result.blog.forEach(function(element) {

    var day = moment(element.blog_date).format();
    element.blog_date = day;


    let lang = 'en';
    let langPos;
    if(lang === 'es') {
        langPos = 1;
    } else if (lang === 'en') {
        langPos = 1;
    }

    let fileName = parse(element.blog_link, true).pathname.split( '/' )[langPos];
console.log(fileName);
    imagesHtml = element.blog_text.match(/<img[^>]+src="([^">]+)/g);
    if(imagesHtml){
        let images = [];
        let count = 0;
        imagesHtml.forEach(function(image) {
            try {
                let groups = image.match(/http:\/\/arcoproperties.com\/wp-content\/uploads\/(?<year>[0-9]{4})\/(?<month>[0-9]{2})\/(?<imgFile>.*)-(?<height>[0-9]+)x(?<width>[0-9]+).jpg?/).groups;
                date = groups.year + '-' + groups.month;

                images.push( 
                    '/image-src/fit-in/640x480/' + fileName + '-' + groups.year + '-' + groups.month + '-' + count + '.jpg'
//                    'http://arcoproperties.com/wp-content/uploads/' + groups.year + '/' + groups.month + '/' + groups.imgFile + '.jpg';
//                    'curl http://arcoproperties.com/wp-content/uploads/' + groups.year + '/' + groups.month + '/' + groups.imgFile + '.jpg -o es/out/img/' + fileName + '-' + groups.year + '-' + groups.month + '-' + count + '.jpg;'
                );
                //if(images.length > 0){
                    element.blog_image = images[0];
                    console.log( images[element.blog_image]);
                //}    
            }       
            catch(err) {
                console.log(err);
            }
            count++;
        });
    }

    if(lang === 'es') {
        element.$blog_text_es = element.blog_title
        element.$blog_title_es = element.blog_text.replace(/<[^>]*>/g, '');
        delete element.blog_title;
        delete element.blog_text;
    } else if (lang === 'en') {
        element.blog_text = element.blog_text.replace(/<[^>]*>/g, '');
    }

    fs.writeFile('../../cms/generators/blog/' + fileName + '.js', '(' + JSON.stringify(element, null, 2) + ')', (err) => {
        if (err) throw err;
            console.log('The '+ fileName +' has been saved!');
        });
    });
})();
