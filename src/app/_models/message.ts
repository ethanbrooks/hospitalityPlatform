export class MessageDetail {
  success: boolean; // Indicates successful response
  id: number; // ID of the Message
  mailbox: string; // ID of the Mailbox
  user:	string; // ID of the User
  envelope:	object; // SMTP envelope (if available)
//    from:	string; //	Address from MAIL FROM
//    rcpt:	object[];//	Array of addresses from RCPT TO (should have just one normally)
//      value:	string;//	RCPT TO address as provided by SMTP client
//      formatted:	string;//	Normalized RCPT address
  thread:	string; // ID of the Thread
  from:	object; // From: header info
//    name:	string;//	Name of the sender
//    address:	string;//	Address of the sender
  to:	object[]; // To: header info
    name:	string; // Name of the recipient
    address:	string; // Address of the recipient
  cc:	object[]; // Cc: header info
//    name:	string;//	Name of the recipient
//    address:	string;//	Address of the recipient
  bcc: object[]; // Recipients in Bcc: field. Usually only available for drafts
//    name:	string;//	Name of the recipient
//    address:	string;//	Address of the recipient
  subject:	string; // Message subject
  messageId:	string; // Message-ID header
  date:	string; // Datestring of message header
  list:	object; // If set then this message is from a mailing list
//    id:	string;//	Value from List-ID header
//    unsubscribe: string;//	Value from List-Unsubscribe header
  expires: string; // Datestring, if set then indicates the time after this message is automatically deleted
  seen:	boolean; // Does this message have a \Seen flag
  deleted:	boolean; // Does this message have a \Deleted flag
  flagged:	boolean; // Does this message have a \Flagged flag
  draft:	boolean; // Does this message have a \Draft flag
  html:	string[]; // An array of HTML string. Every array element is from a separate mime node, usually you would just join these to a single string
  text:	string; // Plaintext content of the message
  attachments: Attachment[]; // List of attachments for this message
  verificationResults: object; // Security verification info if message was received from MX. If this property is missing then do not automatically assume invalid TLS, SPF or DKIM.
//    tls:	object; // TLS information. Value is false if TLS was not used
//      name:	object; // Cipher name, eg "ECDHE-RSA-AES128-GCM-SHA256"
//      version: object; //	TLS version, eg "TLSv1/SSLv3"
//    spf:	object; //	Domain name (either MFROM or HELO) of verified SPF or false if no SPF match was found
//    dkim:	object; //	Domain name of verified DKIM signature or false if no valid signature was found
  contentType: object; // Parsed Content-Type header. Usually needed to identify encrypted messages and such
//    value: string; //	MIME type of the message, eg. "multipart/mixed"
//    params:	object; // An object with Content-Type params as key-value pairs
  metaData:	string; // JSON formatted custom metadata object set for this message
  reference: object; // Referenced message info
  prepared: object; // Custom for adding the Angular santized HTML
}

export class Attachment {
    id:	string; // Attachment ID
    filename: string; // Filename of the attachment
    contentType: string; // MIME type
    disposition: string; // Attachment disposition
    transferEncoding:	string; // Which transfer encoding was used (actual content when fetching attachments is not encoded)
    related: boolean; // Was this attachment found from a multipart/related node. This usually means that this is an embedded image
}
