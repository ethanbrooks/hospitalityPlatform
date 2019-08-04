const { AWSTranslateJSON } = require('aws-translate-json');
 // https://github.com/andre-araujo/aws-translate-json#readme


 AWS_TRANSLATE_REGION: 'us-east-1'; 
 AWS_TRANSLATE_ID: 'AKIAY3QWPMGHF2GRXDMJ'; 
 AWS_TRANSLATE_SECRET: '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';


const awsConfig = {
    accessKeyId: 'AKIAY3QWPMGHF2GRXDMJ',
    secretAccessKey: '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',
    region: 'us-east-1',
/*
    accessKeyId: process.env.AWS_TRANSLATE_ID,
    secretAccessKey: process.env.AWS_TRANSLATE_SECRET,
    region: process.env.AWS_TRANSLATE_REGION,
*/
}
 
const source = "en";
const taget = ["fr", "es"];
 
const { translateJSON } = new AWSTranslateJSON(awsConfig, source, taget);
 
translateJSON({
    "$blog_title_en":"Cools stuff we like",
    "$blog_text_en":"I love sugar"
}).then(console.log);