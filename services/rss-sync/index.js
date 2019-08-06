const { transform } = require('camaro')
const fs = require('fs')
const parse = require('url-parse');
const moment = require('moment');

let imagesHtml = [];
let lang = 'en';
const xml = fs.readFileSync('arco-rss-en.xml', 'utf-8');

const template = {
    blog: ['//rss/item', {
        blog_title: 'title',
        blog_article: 'content:encoded',
        blog_link: 'link',
        blog_date: 'pubDate'
    }]
};

(async function () {
    const result = await transform(xml, template);
    result.blog.forEach(function(element) {
        let langPos;
        element.published = false;

        var day = moment(element.blog_date).format();
        element.$date_type = 'date';
        element.blog_date = day;
        if(lang === 'es') {
            langPos = 1;
        } else if (lang === 'en') {
            langPos = 2;
        }

        let fileName = parse(element.blog_link, true).pathname.split( '/' )[langPos];
        imagesHtml = element.blog_article.match(/<img[^>]+src="([^">]+)/g);
            element.$image_type = 'image';
            element.blog_image = '';
            if(imagesHtml){
            let images = [];
            let count = 0;
            imagesHtml.forEach(function(image) {
                try {
                    let groups = image.match(/http:\/\/arcoproperties.com\/wp-content\/uploads\/(?<year>[0-9]{4})\/(?<month>[0-9]{2})\/(?<imgFile>.*)-(?<height>[0-9]+)x(?<width>[0-9]+).jpg?/).groups;
                    date = groups.year + '-' + groups.month;

                    images.push( 
                     'https://beta.hotelherrera.com' + '/image-src/fit-in/640x480/' + fileName + '-' + groups.year + '-' + groups.month + '-' + count + '.jpg'
    //                    'curl http://arcoproperties.com/wp-content/uploads/' + groups.year + '/' + groups.month + '/' + groups.imgFile + '.jpg -o es/out/img/' + fileName + '-' + groups.year + '-' + groups.month + '-' + count + '.jpg;'
                    );
                    element.blog_image = images[count]
                    console.log( images[count]);
                }       
                catch(err) {
                    console.log(err);
                }
                count++;
            });
            element.published = true;
        }
        if(lang === 'es') {
            element.$blog_title_es = element.blog_title
            element.$blog_description_es = element.blog_article.replace(/<[^>]*>/g, '').substring(0, 500);
            element.$blog_article_es = element.blog_article.replace(/<[^>]*>/g, '');
            element.$blog_page_slug_es = fileName;
            delete element.blog_title;
            delete element.blog_description;
            delete element.blog_article;
        } else if (lang === 'en') {
            element.blog_description = element.blog_article.replace(/<[^>]*>/g, '').substring(0, 500);
            element.blog_article = element.blog_article.replace(/<[^>]*>/g, '');
            element.blog_page_slug = fileName;
        }
        '../../enduro/cms/generators/blog/' 

        fs.writeFile('../../enduro/cms/generators/blog/' + fileName + '.js', '(' + JSON.stringify(element, null, 2) + ')', (err) => {
            if (err) throw err;
                console.log('The '+ fileName +' has been saved!');
            });
        });
})();
