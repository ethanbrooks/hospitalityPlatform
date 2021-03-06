'use strict';

const http = require('http');

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
                path:'/users',
                headers: {
//This shold get the access token durring setup. This is an auth token
                    'X-Access-Token': '4779ee90baf558b25ef451328eeb665c450bba59',
                    'Content-type': 'application/json'
                }
            };

            var clientPostDataObject = {
                username: serverPostDataObject.username, //username	String Username of the User. Dots are allowed but informational only ("user.name" is the same as "username").
                password: serverPostDataObject.password, //password	String	Password for the account. Set to boolean false to disable password usage
                name: serverPostDataObject.name, //name optional	String	Name of the User
                address: serverPostDataObject.address,  //address optional	String	Default email address for the User (autogenerated if not set)
                tags: serverPostDataObject.tags, //tags optional	String[]    A list of tags associated with this user
                pubKey: serverPostDataObject.pubKey,  //pubKey optional	String	Public PGP key for the User that is used for encryption. Use empty string to remove the key
                
//                hashedPassword: hashedPassword,//hashedPassword: hashedPassword//hashedPassword optional	Boolean If true then password is already hashed, so store as. Hash needs to be bcrypt $2a, $2y or $2b. Additionally md5-crypt hashes $1 are allowed but these are rehashed on first successful authentication
                metaData: '{"ihave": "Meta Data!!"}',//metaData,//metaData optional	String Optional metadata, must be JSON formatted object
                quota:100000000,//quota optional	Number Allowed quota of the user in bytes 10000000 10mb
//                mailboxes: mailboxes,//mailboxes optional	Object	Optional names for special mailboxes
                //sent optional	String	Path of Sent Mail folder Default value: Sent Mail
                //junk optional	String	Path of spam folder Default value: Junk
                //drafts optional	String	Path of drafts folder Default value: Drafts
                //trash optional	String	Path of trash folder Default value: Trash

                disabledScopes: ['imap', 'pop3', 'smtp'], //disabledScopes	String[] List of scopes that are disabled for this user ("imap", "pop3", "smtp")                
                allowUnsafe: false,//allowUnsafe optional	Boolean	If false then validates provided passwords against Have I Been Pwned API. Experimental, so validation is disabled by default but will be enabled automatically in some future version of WildDuck. Default value: true
                
//                sess: sess//sess optional	String	Session identifier for the logs
                //emptyAddress optional	Boolean	If true then do not autogenerate missing email address for the User. Only needed if you want to create an user account that does not have any email address associated
                //requirePasswordChange optional	Boolean	If true then requires the user to change password, useful if password for the account was autogenerated                
                addTagsToAddress: true,//addTagsToAddress optional	Boolean	If true then autogenerated address gets the same tags as the user
                //retention optional	Number	Default retention time in ms. Set to 0 to disable
                uploadSentMessages: true,//uploadSentMessages optional	Boolean	If true then all messages sent through MSA are also uploaded to the Sent Mail folder. Might cause duplicates with some email clients, so disabled by default.
//                encryptMessages: true,// optional	Boolean	If true then received messages are encrypted
//                encryptForwarded: true,// optional	Boolean	If true then forwarded messages are encrypted
                language: 'US_en',//language optional	String Language code for the User
                //targets optional	String[] An array of forwarding targets. The value could either be an email address or a relay url to next MX server ("smtp://mx2.zone.eu:25") or an URL where mail contents are POSTed to
                //spamLevel optional	Number	Relative scale for detecting spam. 0 means that everything is spam, 100 means that nothing is spam Default value: 50
                //recipients optional	Number	How many messages per 24 hour can be sent
                //forwards optional	Number	How many messages per 24 hour can be forwarded
                //imapMaxUpload optional	Number	How many bytes can be uploaded via IMAP during 24 hour
                //imapMaxDownload optional	Number	How many bytes can be downloaded via IMAP during 24 hour
                //pop3MaxDownload optional	Number	How many bytes can be downloaded via POP3 during 24 hour
                //receivedMax optional	Number	How many messages can be received from MX during 60 seconds
                //ip optional	String	IP address for the logs
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
                        res.writeHead(200, {'Content-Type': 'text/json'});
                        res.end(JSON.stringify({
                            id: clientResponseObject.id,
                            success: clientResponseObject.success
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
app.listen(8400, '127.0.0.1');  
console.log('Node servers running on port 8400');   