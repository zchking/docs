---
title: "Authorization" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/authorization.html 
description: 
---
Be sure to click on 'update to HTTP Header' button to use current authentication information.

![](../../images/katalon-studio/docs/authorization/image2018-8-8 11_24_47.png)

  
The following authorizations are supported:

*   **Basic**
*   **OAuth 1.0  
    **

### Basic

This is the simplest authorization for a request.

You pass in your username and password to authenticate the request. It will be encoded to 'Authorization' request's headers as you can see below. 

![](../../images/katalon-studio/docs/authorization/Screen Shot 2018-08-08 at 09.36.21.png)

To learn, please refer to [this guide](https://swagger.io/docs/specification/authentication/basic-authentication/).

**[OAuth 1.0](https://oauth.net/core/1.0a/)**

The following fields are supported in Katalon Studio:

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Name</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style="">Consumer Key</td><td class="xtd-1-1 confluenceTd" style=""><span style="">The API key associated with the application (Twitter, Facebook, etc.). This key (or 'client ID', as Facebook calls it) is what identifies the client, which is a website/service that is trying to access an end-user's resources.</span></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style="">Consumer Secret</td><td class="xtd-2-1 confluenceTd" style=""><span style="">The client's password that is used to authenticate with the authentication server, which is a Twitter/Facebook/etc. server that authenticates the client.</span></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style="">Signature Method</td><td class="xtd-3-1 confluenceTd" style=""><span style="">The Consumer used this to sign the request <em style="">For signature method RSA-SHA1, only support OpenSSL RSA Private key with&nbsp;<strong style="">PKCS#8 or PKCS#1 format</strong></em></span></td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style="">Token</td><td class="xtd-4-1 confluenceTd" style=""><span style="">What is issued to the client once the client successfully authenticates itself (using the consumer key &amp; secret). This access token defines the privileges of the client (what data the client can and cannot access)</span></td></tr><tr class="xtr-5" style=""><td class="xtd-5-0 confluenceTd" style="">Token Secret</td><td class="xtd-5-1 confluenceTd" style=""><span style="">The string sent with the access token as a password</span></td></tr><tr class="xtr-6" style=""><td class="xtd-6-0 confluenceTd" style="">Realm</td><td class="xtd-6-1 confluenceTd" style=""><span style="">The Provider basically decides if this is of any importance. It is the counterpart of the WWW-authenticate response header. If a server returns a WWW-authenticate header of 'OAuth realm="<a class="external-link" href="https://api.example.com/" rel="nofollow" style="">https://api.example.com</a>"' then it probably parses that value from the Authenticate request header in the OAuth process.</span></td></tr></tbody></table>

To know how to generate one of them, you can refer to this [testing site](http://term.ie/oauth/example/index.php) and apply it based on your service provider. See the example below how to use this information:

1.  Use the following consumer key and secret to generate token:
    
    *   Consumer: key
    *   Consumer Secret: secret
    
    ![](../../images/katalon-studio/docs/authorization/Screen Shot 2018-08-08 at 11.10.21.png)
2.  Generated token is shown in the response's body section. Use it in to generate access token:  
    ![](../../images/katalon-studio/docs/authorization/Screen Shot 2018-08-08 at 11.22.08.png)
3.  So far you've gained all the information needed to send a request using OAuth 1.0 authorization (consumer, access token), then use all these information to send a request:

![](../../images/katalon-studio/docs/authorization/Screen Shot 2018-08-08 at 11.36.20.png)

This is just a quick overview on how to use Authorization for a Web Service object. You may need to adjust it accordingly based on your API specifications