export class User {
    id:	string;	// Users unique ID (24 byte hex)
    username: string; // Username of the User
    password: string; // Password
    token?: string;
    name: string;	// Name of the User
}

export class UserMailboxes {
    'success': boolean;
    'results': [];
}


export interface UserDetail {
    success: boolean;	 // Indicates successful response
    id:	string;	// Users unique ID (24 byte hex)
    username: string; // Username of the User
    name: string;	// Name of the User
    address: string;	// Main email address of the User
    retention: number; // Default retention time in ms. false if not enabled
    enabled2fa:	string[];	// List of enabled 2FA methods
    encryptMessages: boolean;	// If true then received messages are encrypted
    encryptForwarded: boolean; // If true then forwarded messages are encrypted
    pubKey: string;	// Public PGP key for the User that is used for encryption
    keyInfo: object;	// Information about public key or false if key is not available
//    ->name: string;	//Name listed in public key
//    ->  address: string; //E-mail address listed in public key
//    ->  fingerprint: string; //Fingerprint of the public key
    metaData: string; // formatted custom metadata object set for this user
    targets: string[]; // List of forwarding targets
    spamLevel: number; // Relative scale for detecting spam. 0 means that everything is spam, 100 means that nothing is spam

    limits: object; // Account limits and usage
/*    -> quota: object; //Quota usage limits
    -> -> allowed: number; //Allowed quota of the user in bytes
    -> -> used: number; //Space used in bytes
    -> recipients: object; //Sending quota  allowed	number	    How many messages per 24 hours can be sent
    -> -> used: number;	//How many messages are sent during current 24 hour period
    -> -> ttl: number;	//Time until the end of current 24 hour period
    -> forwards: object;	//Forwarding quota
    -> -> allowed: number;	//How many messages per 24 hours can be forwarded
    -> -> used: number;	//How many messages are forwarded during current 24 hour period
    -> -> ttl: number;	//Time until the end of current 24 hour period
    -> received: object;	//Receiving quota
    -> ->  allowed: number; //How many messages per 1 hour can be received
    -> -> used: number;	//How many messages are received during current 1 hour period
    -> -> ttl: number;	//Time until the end of current 1 hour period
    -> imapUpload: object;	//IMAP upload quota
    -> -> allowed: number;	//How many bytes per 24 hours can be uploaded via IMAP. Only message contents are counted, not protocol overhead.
    -> -> used: number;	//How many bytes are uploaded during current 24 hour period
    -> -> ttl: number; //Time until the end of current 24 hour period
    -> imapDownload: object; //IMAP download quota
    -> -> allowed: number; //How many bytes per 24 hours can be downloaded via IMAP. Only message contents are counted, not protocol overhead.
    -> -> used: number; //How many bytes are downloaded during current 24 hour period
    -> -> ttl: number; //Time until the end of current 24 hour period
    -> pop3Download:object; //POP3 download quota
     -> -> allowed: number; //How many bytes per 24 hours can be downloaded via POP3. Only message contents are counted, not protocol overhead.
    -> -> used: number; //How many bytes are downloaded during current 24 hour period
    -> -> ttl: number; //Time until the end of current 24 hour period
    */
    tags: string[]; // List of tags associated with the User
    disabledScopes: string[]; // Disabled scopes for this user
    hasPasswordSet: boolean; // If true then the User has a password set and can authenticate
    activated: boolean; // Is the account activated
    disabled: boolean; // If true then the user can not authenticate or receive any new mail
}

export class UserDetail {
    success: boolean;	 // Indicates successful response
    id:	string;	// Users unique ID (24 byte hex)
    username: string; // Username of the User
    name: string;	// Name of the User
    address: string;	// Main email address of the User
    retention: number; // Default retention time in ms. false if not enabled
    enabled2fa:	string[];	// List of enabled 2FA methods
    encryptMessages: boolean;	// If true then received messages are encrypted
    encryptForwarded: boolean; // If true then forwarded messages are encrypted
    pubKey: string;	// Public PGP key for the User that is used for encryption
    keyInfo: object;	// Information about public key or false if key is not available
//    ->name: string;	//Name listed in public key
//    ->  address: string; //E-mail address listed in public key
//    ->  fingerprint: string; //Fingerprint of the public key
    metaData: string; // formatted custom metadata object set for this user
    targets: string[]; // List of forwarding targets
    spamLevel: number; // Relative scale for detecting spam. 0 means that everything is spam, 100 means that nothing is spam

    limits: object; // Account limits and usage
/*    -> quota: object; //Quota usage limits
    -> -> allowed: number; //Allowed quota of the user in bytes
    -> -> used: number; //Space used in bytes
    -> recipients: object; //Sending quota  allowed	number	    How many messages per 24 hours can be sent
    -> -> used: number;	//How many messages are sent during current 24 hour period
    -> -> ttl: number;	//Time until the end of current 24 hour period
    -> forwards: object;	//Forwarding quota
    -> -> allowed: number;	//How many messages per 24 hours can be forwarded
    -> -> used: number;	//How many messages are forwarded during current 24 hour period
    -> -> ttl: number;	//Time until the end of current 24 hour period
    -> received: object;	//Receiving quota
    -> ->  allowed: number; //How many messages per 1 hour can be received
    -> -> used: number;	//How many messages are received during current 1 hour period
    -> -> ttl: number;	//Time until the end of current 1 hour period
    -> imapUpload: object;	//IMAP upload quota
    -> -> allowed: number;	//How many bytes per 24 hours can be uploaded via IMAP. Only message contents are counted, not protocol overhead.
    -> -> used: number;	//How many bytes are uploaded during current 24 hour period
    -> -> ttl: number; //Time until the end of current 24 hour period
    -> imapDownload: object; //IMAP download quota
    -> -> allowed: number; //How many bytes per 24 hours can be downloaded via IMAP. Only message contents are counted, not protocol overhead.
    -> -> used: number; //How many bytes are downloaded during current 24 hour period
    -> -> ttl: number; //Time until the end of current 24 hour period
    -> pop3Download:object; //POP3 download quota
     -> -> allowed: number; //How many bytes per 24 hours can be downloaded via POP3. Only message contents are counted, not protocol overhead.
    -> -> used: number; //How many bytes are downloaded during current 24 hour period
    -> -> ttl: number; //Time until the end of current 24 hour period
    */
    tags: string[]; // List of tags associated with the User
    disabledScopes: string[]; // Disabled scopes for this user
    hasPasswordSet: boolean; // If true then the User has a password set and can authenticate
    activated: boolean; // Is the account activated
    disabled: boolean; // If true then the user can not authenticate or receive any new mail
}
