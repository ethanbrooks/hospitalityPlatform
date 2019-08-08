console.log(
Buffer.from(
JSON.stringify({
            bucket: 'hotel-herrera',
            key: '2015-the-year-for-community-2014-12-0.jpg',
            edits: {  
						"resize": {
							"height": 300
							},
							"grayscale": true
						}
   }), 'binary').toString('base64')
);
var bucket = 'hotel-herrera';
var key = '2015-the-year-for-community-2014-12-0.jpg';
var edits = {  
	"resize": {
		"height": 300
	},
	"grayscale": true
};

console.log(
	Buffer.from(JSON.stringify({
            bucket: bucket,
            key: key,
            edits: edits
        }), 'binary').toString('base64')
);
