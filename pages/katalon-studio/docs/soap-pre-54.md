---
title: "SOAP (Pre-5.4)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/soap-pre-54.html 
description: 
---
Create SOAP Object
------------------

1.  Select **File > New > Web Service Request** from the main menu. The **New Web Service Request** dialog will be displayed.  
    ![](../../images/katalon-studio/docs/soap-pre-54/image2017-2-13 14_4_53.png)  
    Provide the name for the new service request object, select **SOAP** as **Request Type** then click **OK**.  
      
    
2.  A new service request object is created under **Object Repository** of Katalon Studio.  
    ![](../../images/katalon-studio/docs/soap-pre-54/image2017-2-13 14_5_47.png)  
      
    
3.  In the opened editor of the new service request object, enter all required information.  
    ![](../../images/katalon-studio/docs/soap-pre-54/image2017-6-30 20_48_48.png)  
    where:
    
    | Field | Description |
    | --- | --- |
    | Request Method | The request method indicates the expected action to be executed on the specified resource. Katalon Studio supports following SOAP methods: SOAP, SOAP 1.2, POST, GET. |
    | Request URL | The WSDL address registered for the SOAP web service. |
    | Service Function | The function/method of the SOAP web service that you want to use in this SOAP request. The list will be retrieved after clicking **Load from WSDL**. |
    | Authorization | 
    Credential for HTTP authentication.
    
    ![](../../images/katalon-studio/docs/soap-pre-54/image2017-2-13 13_31_8.png)
    
    
    
     |
    | HTTP Headers | 
    
    The header information that you want to transmit in this SOAP request object.
    
    You can select headers from the list of suggested options (by double clicking on the **Name** cell) or enter another header of your interest. Refer to [Supported HTTP Headers](#SOAP(Pre-5.4)-SupportedHTTPHeaders) for more details.
    
    ![](../../images/katalon-studio/docs/soap-pre-54/image2017-2-13 13_33_57.png)
    
    
    
     |
    | Request Message | 
    
    The information that you want to transmit in this SOAP request object. You can enter directly or import content from external text files. ![](../../images/katalon-studio/docs/soap-pre-54/image2017-2-13 14_20_16.png) 
    
    
    
     |
    | Response | 
    
    The retrieved message from web service server when you click **Test Request**.
    
    ![](../../images/katalon-studio/docs/soap-pre-54/image2017-2-13 14_21_55.png)
    
    
    
     |
    
4.  Save the service request object when you're done. The service request defined here can be utilized in other test cases. Refer to [Use WebService in Test Case](#SOAP(Pre-5.4)-UseWebServiceinTestCase) for more details.

Supported HTTP Headers 
-----------------------

Here’s the list of HTTP headers initially supported in Katalon Studio:

<table class="" style="width: 100.0%;"><tbody class=""><tr class=""><td class=""><p class=""><strong class="">Header field name</strong></p></td><td class=""><p class=""><strong class="">Description</strong></p></td></tr><tr class=""><td class=""><p class="">Accept</p></td><td class=""><p class="">Content-Type items acceptable for the response.</p></td></tr><tr class=""><td class=""><p class="">Accept-Charset</p></td><td class=""><p class="">Character sets that are acceptable.</p></td></tr><tr class=""><td class=""><p class="">Accept-Encoding</p></td><td class=""><p class="">List of acceptable encodings.</p></td></tr><tr class=""><td class=""><p class="">Accept-Language</p></td><td class=""><p class="">List of acceptable human languages for response.</p></td></tr><tr class=""><td class=""><p class="">Authorization</p></td><td class=""><p class="">Authentication credentials for HTTP authentication.</p></td></tr><tr class=""><td class=""><p class="">Cache-Control</p></td><td class=""><p class="">Used to specify directives that must be obeyed by all caching mechanisms along the request-response chain</p></td></tr><tr class=""><td class=""><p class="">Connection</p></td><td class=""><p class="">Control options for the current connection and list of hop-by-hop request fields.</p></td></tr><tr class=""><td class=""><p class="">Content-Length</p></td><td class=""><p class="">The length of the request body in octets (8-bit bytes)</p></td></tr><tr class=""><td class=""><p class="">Content-Type</p></td><td class=""><p class="">The MIME type of the body of the request (used with POST and PUT requests).</p></td></tr><tr class=""><td class=""><p class="">Cookie</p></td><td class=""><p class="">An HTTP cookie previously sent by the server with Set-Cookie.</p></td></tr><tr class=""><td class=""><p class="">DNT</p></td><td class=""><p class="">Requests a web application to disable their tracking of a user. This is Mozilla's version of the X-Do-Not-Track header field (since Firefox 4.0 Beta 11). Safari and IE9 also have support for this field.</p></td></tr><tr class=""><td class=""><p class="">Date</p></td><td class=""><p class="">The date and time that the message was sent (in "HTTP-date" format as defined by RFC 7231 Date/Time Formats.</p></td></tr><tr class=""><td class=""><p class="">Expect</p></td><td class=""><p class="">Indicates that particular server behaviors are required by the client.</p></td></tr><tr class=""><td class=""><p class="">From</p></td><td class=""><p class="">The email address of the user making the request.</p></td></tr><tr class=""><td class=""><p class="">Front-End-Https</p></td><td class=""><p class="">Non-standard header field used by Microsoft applications and load-balancers.</p></td></tr><tr class=""><td class=""><p class="">Host</p></td><td class=""><p class="">The domain name of the server (for virtual hosting), and the TCP port number on which the server is listening. The port number may be omitted if the port is the standard port for the service requested. Mandatory since HTTP/1.1.</p></td></tr><tr class=""><td class=""><p class="">If-Match</p></td><td class=""><p class="">Only perform the action if the client supplied entity matches the same entity on the server. This is mainly for methods like PUT to only update a resource if it has not been modified since the user last updated it.</p></td></tr><tr class=""><td class=""><p class="">If-Modified-Since</p></td><td class=""><p class="">Allows a 304 Not Modified to be returned if content is unchanged.</p></td></tr><tr class=""><td class=""><p class="">If-None-Match</p></td><td class=""><p class="">Allows a 304 Not Modified to be returned if content is unchanged.</p></td></tr><tr class=""><td class=""><p class="">If-Range</p></td><td class=""><p class="">If the entity is unchanged, send me the part(s) that I am missing; otherwise, send me the entire new entity.</p></td></tr><tr class=""><td class=""><p class="">If-Unmodified-Since</p></td><td class=""><p class="">Only send the response if the entity has not been modified since a specific time.</p></td></tr><tr class=""><td class=""><p class="">Max-Forwards</p></td><td class=""><p class="">Limit the number of times the message can be forwarded through proxies or gateways.</p></td></tr><tr class=""><td class=""><p class="">Origin</p></td><td class=""><p class="">Initiates a request for cross-origin resource sharing (asks server for an 'Access-Control-Allow-Origin' response field).</p></td></tr><tr class=""><td class=""><p class="">Pragma</p></td><td class=""><p class="">Implementation-specific fields that may have various effects anywhere along the request-response chain.</p></td></tr><tr class=""><td class=""><p class="">Proxy-Authorization</p></td><td class=""><p class="">Authorization credentials for connecting to a proxy.</p></td></tr><tr class=""><td class=""><p class="">Proxy-Connection</p></td><td class=""><p class="">Implemented as a misunderstanding of the HTTP specifications. Common because of mistakes in implementations of early HTTP versions. Has exactly the same functionality as standard Connection field.</p></td></tr><tr class=""><td class=""><p class="">Range</p></td><td class=""><p class="">Request only part of an entity. Bytes are numbered from 0.</p></td></tr><tr class=""><td class=""><p class="">Referer</p></td><td class=""><p class="">This is the address of the previous web page from which a link to the currently requested page was followed. (The word “referrer” has been misspelled in the RFC as well as in most implementations to the point that it has become standard usage and is considered correct terminology).</p></td></tr><tr class=""><td class=""><p class="">TE</p></td><td class=""><p class="">The transfer encodings the user agent is willing to accept: the same values as for the response header field Transfer-Encoding can be used, plus the "trailers" value (related to the "chunked" transfer method) to notify the server it expects to receive additional fields in the trailer after the last, zero-sized, chunk.</p></td></tr><tr class=""><td class=""><p class="">Upgrade</p></td><td class=""><p class="">Ask the server to upgrade to another protocol.</p></td></tr><tr class=""><td class=""><p class="">User-Agent</p></td><td class=""><p class="">The user agent string of the user agent.</p></td></tr><tr class=""><td class=""><p class="">Via</p></td><td class=""><p class="">Informs the server of proxies through which the request was sent.</p></td></tr><tr class=""><td class=""><p class="">Warning</p></td><td class=""><p class="">A general warning about possible problems with the entity body.</p></td></tr><tr class=""><td class=""><p class="">X-ATT-DeviceId</p></td><td class=""><p class="">Allows easier parsing of the MakeModel/Firmware that is usually found in the User-Agent String of AT&amp;T Devices</p></td></tr><tr class=""><td class=""><p class="">X-Csrf-Token</p></td><td class=""><p class="">Used to prevent cross-site request forgery. Alternative header names are: X-CSRFToken and X-XSRF-TOKEN.</p></td></tr><tr class=""><td class=""><p class="">X-Forwarded-For</p></td><td class=""><p class="">A de facto standard for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer.</p></td></tr><tr class=""><td class=""><p class="">X-Forwarded-Host</p></td><td class=""><p class="">A de facto standard for identifying the original host requested by the client in the Host HTTP request header, since the host name and/or port of the reverse proxy (load balancer) may differ from the origin server handling the request.</p></td></tr><tr class=""><td class=""><p class="">X-Forwarded-Proto</p></td><td class=""><p class="">A de facto standard for identifying the originating protocol of an HTTP request, since a reverse proxy (or a load balancer) may communicate with a web server using HTTP even if the request to the reverse proxy is HTTPS. An alternative form of the header (X-ProxyUser-Ip) is used by Google clients talking to Google servers.</p></td></tr><tr class=""><td class=""><p class="">X-Http-Method-Override</p></td><td class=""><p class="">Requests a web application override the method specified in the request (typically POST) with the method given in the header field (typically PUT or DELETE). Can be used when a user agent or firewall prevents PUT or DELETE methods from being sent directly (note that this either a bug in the software component, which ought to be fixed, or an intentional configuration, in which case bypassing it may be the wrong thing to do).</p></td></tr><tr class=""><td class=""><p class="">X-Requested-With</p></td><td class=""><p class="">Mainly used to identify Ajax requests. Most JavaScript frameworks send this field with value of XMLHttpRequest.</p></td></tr><tr class=""><td class=""><p class="">X-UIDH</p></td><td class=""><p class="">Server-side deep packet insertion of a unique ID identifying customers of Verizon Wireless; also known as "perma-cookie" or "supercookie".</p></td></tr><tr class=""><td class=""><p class="">X-Wap-Profile</p></td><td class=""><p class="">Links to an XML file on the Internet with a full description and details about the device currently connecting. In the example to the right is an XML file for an AT&amp;T Samsung Galaxy S2.</p></td></tr></tbody></table>

Refer to [https://en.wikipedia.org/wiki/List\_of\_HTTP\_header\_fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) for more info.