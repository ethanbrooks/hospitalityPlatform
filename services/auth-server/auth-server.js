'use strict';
const pathlib = require('path');
process.env.NODE_CONFIG_DIR = pathlib.join('/', 'opt', 'wildduck', 'config');

const db = require('/opt/wildduck/lib/db.js');
const crypto = require('crypto');
const config = require('wild-config');
const yargs = require('yargs');
const util = require('util');
const http = require('http');
const dbconnect = util.promisify(db.connect);

let app = http.createServer((req, res) => {  
    if("POST" == req.method){
        var postData ='';
        req.on('data', function (chunk) {
            postData += chunk;
        });
        req.on('end', function () { 
            var serverPostDataObject = JSON.parse(postData);
 
            var clientRequestOptions = {
                hostname:'localhost',
                port:'8080',
                method:'POST',
                path:'/authenticate',
                headers: {
//This shold get the access token durring setup. This is an auth token
                    'X-Access-Token': '8be399e3719892fc899283265dd6dc424e5264a1',
                    'Content-type': 'application/json'
                }
            };

            var clientPostDataObject = {
                username: serverPostDataObject.username,
                password: serverPostDataObject.password,
                scope: 'webmail'//serverPostDataObject.scope
            };
            var request = http.request(clientRequestOptions, function (resp) {
                var returnData = '';
                resp.on('data', function (data) {
                    returnData += data;
                })
                let clientResponseObject;
                resp.on('end', function () {
                    clientResponseObject = JSON.parse(returnData);                        
                    if(clientResponseObject.success == true){                            

                        let user = clientResponseObject.username;
                        let role = 'webmail';
//Real
                        let accessToken = crypto.randomBytes(20).toString('hex');
                        let tokenHash = crypto.createHash('sha256').update(accessToken).digest('hex');                
                        let key = 'tn:token:' + tokenHash;
                        let secret = config.api.accessControl.secret;
                        
                        let tokenData = {
                            user: user,
                            role: role,
                            created: Date.now(),
                            s: crypto.createHmac('sha256', secret).update(
                                JSON.stringify({
                                    token: accessToken,
                                    user: user,
                        //This should not be passed in from the front end
                                    role: role
                                })
                            ).digest('hex')
                        };
                        database(key, tokenData, user, tokenHash);

//                        console.error('Generated access token for %s[%s]:', tokenData.user, tokenData.role);

                        res.writeHead(200, {'Content-Type': 'text/json'});
                        res.end(JSON.stringify({
                            id: clientResponseObject.id,
                            username: clientResponseObject.username,
                            require2fa: clientResponseObject.require2fa,
                            requirePasswordChange: clientResponseObject.requirePasswordChange,
                            token: accessToken
                        }));
                    }else{
                        res.writeHead(200, {'Content-Type': 'text/json'});
                        res.end(JSON.stringify(
                            clientResponseObject
                        ));                        
                    }
                })            

            });
            request.write(JSON.stringify(clientPostDataObject));   
            request.end();
        });
    }else{
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(JSON.stringify({
            message: "Must be a POST"       
        }));
    }
});
app.listen(8200, '127.0.0.1');  
console.log('Node servers running on port 8200'); 

async function database(key, tokenData, user, tokenHash){ 

    console.log(key, tokenData, user, tokenHash);
 
    try {
        let response = await dbconnect();
        console.log('response: ');
        console.log(response);
    } catch(err) {
        console.log(err);
    }

    try { 
        let response2 = await db.redis
            .multi()
            .hmset(key, tokenData)
            .sadd('tn:user:' + user, tokenHash)
            .exec();
        console.log('response2: ');
        console.log(response2);
    } catch(err) {
        console.log(err);
    }  
}