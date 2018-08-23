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

<table class="relative-table wrapped confluenceTable" style="width: 100.0%;"><tbody><tr class="xtr-0"><td class="xtd-0-0 confluenceTd"><p><strong>Header field name</strong></p></td><td class="xtd-0-1 confluenceTd"><p><strong>Description</strong></p></td></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><p>Accept</p></td><td class="xtd-1-1 confluenceTd"><p>Content-Type items acceptable for the response.</p></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><p>Accept-Charset</p></td><td class="xtd-2-1 confluenceTd"><p>Character sets that are acceptable.</p></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><p>Accept-Encoding</p></td><td class="xtd-3-1 confluenceTd"><p>List of acceptable encodings.</p></td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd"><p>Accept-Language</p></td><td class="xtd-4-1 confluenceTd"><p>List of acceptable human languages for response.</p></td></tr><tr class="xtr-5"><td class="xtd-5-0 confluenceTd"><p>Authorization</p></td><td class="xtd-5-1 confluenceTd"><p>Authentication credentials for HTTP authentication.</p></td></tr><tr class="xtr-6"><td class="xtd-6-0 confluenceTd"><p>Cache-Control</p></td><td class="xtd-6-1 confluenceTd"><p>Used to specify directives that must be obeyed by all caching mechanisms along the request-response chain</p></td></tr><tr class="xtr-7"><td class="xtd-7-0 confluenceTd"><p>Connection</p></td><td class="xtd-7-1 confluenceTd"><p>Control options for the current connection and list of hop-by-hop request fields.</p></td></tr><tr class="xtr-8"><td class="xtd-8-0 confluenceTd"><p>Content-Length</p></td><td class="xtd-8-1 confluenceTd"><p>The length of the request body in octets (8-bit bytes)</p></td></tr><tr class="xtr-9"><td class="xtd-9-0 confluenceTd"><p>Content-Type</p></td><td class="xtd-9-1 confluenceTd"><p>The MIME type of the body of the request (used with POST and PUT requests).</p></td></tr><tr class="xtr-10"><td class="xtd-10-0 confluenceTd"><p>Cookie</p></td><td class="xtd-10-1 confluenceTd"><p>An HTTP cookie previously sent by the server with Set-Cookie.</p></td></tr><tr class="xtr-11"><td class="xtd-11-0 confluenceTd"><p>DNT</p></td><td class="xtd-11-1 confluenceTd"><p>Requests a web application to disable their tracking of a user. This is Mozilla's version of the X-Do-Not-Track header field (since Firefox 4.0 Beta 11). Safari and IE9 also have support for this field.</p></td></tr><tr class="xtr-12"><td class="xtd-12-0 confluenceTd"><p>Date</p></td><td class="xtd-12-1 confluenceTd"><p>The date and time that the message was sent (in "HTTP-date" format as defined by RFC 7231 Date/Time Formats.</p></td></tr><tr class="xtr-13"><td class="xtd-13-0 confluenceTd"><p>Expect</p></td><td class="xtd-13-1 confluenceTd"><p>Indicates that particular server behaviors are required by the client.</p></td></tr><tr class="xtr-14"><td class="xtd-14-0 confluenceTd"><p>From</p></td><td class="xtd-14-1 confluenceTd"><p>The email address of the user making the request.</p></td></tr><tr class="xtr-15"><td class="xtd-15-0 confluenceTd"><p>Front-End-Https</p></td><td class="xtd-15-1 confluenceTd"><p>Non-standard header field used by Microsoft applications and load-balancers.</p></td></tr><tr class="xtr-16"><td class="xtd-16-0 confluenceTd"><p>Host</p></td><td class="xtd-16-1 confluenceTd"><p>The domain name of the server (for virtual hosting), and the TCP port number on which the server is listening. The port number may be omitted if the port is the standard port for the service requested. Mandatory since HTTP/1.1.</p></td></tr><tr class="xtr-17"><td class="xtd-17-0 confluenceTd"><p>If-Match</p></td><td class="xtd-17-1 confluenceTd"><p>Only perform the action if the client supplied entity matches the same entity on the server. This is mainly for methods like PUT to only update a resource if it has not been modified since the user last updated it.</p></td></tr><tr class="xtr-18"><td class="xtd-18-0 confluenceTd"><p>If-Modified-Since</p></td><td class="xtd-18-1 confluenceTd"><p>Allows a 304 Not Modified to be returned if content is unchanged.</p></td></tr><tr class="xtr-19"><td class="xtd-19-0 confluenceTd"><p>If-None-Match</p></td><td class="xtd-19-1 confluenceTd"><p>Allows a 304 Not Modified to be returned if content is unchanged.</p></td></tr><tr class="xtr-20"><td class="xtd-20-0 confluenceTd"><p>If-Range</p></td><td class="xtd-20-1 confluenceTd"><p>If the entity is unchanged, send me the part(s) that I am missing; otherwise, send me the entire new entity.</p></td></tr><tr class="xtr-21"><td class="xtd-21-0 confluenceTd"><p>If-Unmodified-Since</p></td><td class="xtd-21-1 confluenceTd"><p>Only send the response if the entity has not been modified since a specific time.</p></td></tr><tr class="xtr-22"><td class="xtd-22-0 confluenceTd"><p>Max-Forwards</p></td><td class="xtd-22-1 confluenceTd"><p>Limit the number of times the message can be forwarded through proxies or gateways.</p></td></tr><tr class="xtr-23"><td class="xtd-23-0 confluenceTd"><p>Origin</p></td><td class="xtd-23-1 confluenceTd"><p>Initiates a request for cross-origin resource sharing (asks server for an 'Access-Control-Allow-Origin' response field).</p></td></tr><tr class="xtr-24"><td class="xtd-24-0 confluenceTd"><p>Pragma</p></td><td class="xtd-24-1 confluenceTd"><p>Implementation-specific fields that may have various effects anywhere along the request-response chain.</p></td></tr><tr class="xtr-25"><td class="xtd-25-0 confluenceTd"><p>Proxy-Authorization</p></td><td class="xtd-25-1 confluenceTd"><p>Authorization credentials for connecting to a proxy.</p></td></tr><tr class="xtr-26"><td class="xtd-26-0 confluenceTd"><p>Proxy-Connection</p></td><td class="xtd-26-1 confluenceTd"><p>Implemented as a misunderstanding of the HTTP specifications. Common because of mistakes in implementations of early HTTP versions. Has exactly the same functionality as standard Connection field.</p></td></tr><tr class="xtr-27"><td class="xtd-27-0 confluenceTd"><p>Range</p></td><td class="xtd-27-1 confluenceTd"><p>Request only part of an entity. Bytes are numbered from 0.</p></td></tr><tr class="xtr-28"><td class="xtd-28-0 confluenceTd"><p>Referer</p></td><td class="xtd-28-1 confluenceTd"><p>This is the address of the previous web page from which a link to the currently requested page was followed. (The word “referrer” has been misspelled in the RFC as well as in most implementations to the point that it has become standard usage and is considered correct terminology).</p></td></tr><tr class="xtr-29"><td class="xtd-29-0 confluenceTd"><p>TE</p></td><td class="xtd-29-1 confluenceTd"><p>The transfer encodings the user agent is willing to accept: the same values as for the response header field Transfer-Encoding can be used, plus the "trailers" value (related to the "chunked" transfer method) to notify the server it expects to receive additional fields in the trailer after the last, zero-sized, chunk.</p></td></tr><tr class="xtr-30"><td class="xtd-30-0 confluenceTd"><p>Upgrade</p></td><td class="xtd-30-1 confluenceTd"><p>Ask the server to upgrade to another protocol.</p></td></tr><tr class="xtr-31"><td class="xtd-31-0 confluenceTd"><p>User-Agent</p></td><td class="xtd-31-1 confluenceTd"><p>The user agent string of the user agent.</p></td></tr><tr class="xtr-32"><td class="xtd-32-0 confluenceTd"><p>Via</p></td><td class="xtd-32-1 confluenceTd"><p>Informs the server of proxies through which the request was sent.</p></td></tr><tr class="xtr-33"><td class="xtd-33-0 confluenceTd"><p>Warning</p></td><td class="xtd-33-1 confluenceTd"><p>A general warning about possible problems with the entity body.</p></td></tr><tr class="xtr-34"><td class="xtd-34-0 confluenceTd"><p>X-ATT-DeviceId</p></td><td class="xtd-34-1 confluenceTd"><p>Allows easier parsing of the MakeModel/Firmware that is usually found in the User-Agent String of AT&amp;T Devices</p></td></tr><tr class="xtr-35"><td class="xtd-35-0 confluenceTd"><p>X-Csrf-Token</p></td><td class="xtd-35-1 confluenceTd"><p>Used to prevent cross-site request forgery. Alternative header names are: X-CSRFToken and X-XSRF-TOKEN.</p></td></tr><tr class="xtr-36"><td class="xtd-36-0 confluenceTd"><p>X-Forwarded-For</p></td><td class="xtd-36-1 confluenceTd"><p>A de facto standard for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer.</p></td></tr><tr class="xtr-37"><td class="xtd-37-0 confluenceTd"><p>X-Forwarded-Host</p></td><td class="xtd-37-1 confluenceTd"><p>A de facto standard for identifying the original host requested by the client in the Host HTTP request header, since the host name and/or port of the reverse proxy (load balancer) may differ from the origin server handling the request.</p></td></tr><tr class="xtr-38"><td class="xtd-38-0 confluenceTd"><p>X-Forwarded-Proto</p></td><td class="xtd-38-1 confluenceTd"><p>A de facto standard for identifying the originating protocol of an HTTP request, since a reverse proxy (or a load balancer) may communicate with a web server using HTTP even if the request to the reverse proxy is HTTPS. An alternative form of the header (X-ProxyUser-Ip) is used by Google clients talking to Google servers.</p></td></tr><tr class="xtr-39"><td class="xtd-39-0 confluenceTd"><p>X-Http-Method-Override</p></td><td class="xtd-39-1 confluenceTd"><p>Requests a web application override the method specified in the request (typically POST) with the method given in the header field (typically PUT or DELETE). Can be used when a user agent or firewall prevents PUT or DELETE methods from being sent directly (note that this either a bug in the software component, which ought to be fixed, or an intentional configuration, in which case bypassing it may be the wrong thing to do).</p></td></tr><tr class="xtr-40"><td class="xtd-40-0 confluenceTd"><p>X-Requested-With</p></td><td class="xtd-40-1 confluenceTd"><p>Mainly used to identify Ajax requests. Most JavaScript frameworks send this field with value of XMLHttpRequest.</p></td></tr><tr class="xtr-41"><td class="xtd-41-0 confluenceTd"><p>X-UIDH</p></td><td class="xtd-41-1 confluenceTd"><p>Server-side deep packet insertion of a unique ID identifying customers of Verizon Wireless; also known as "perma-cookie" or "supercookie".</p></td></tr><tr class="xtr-42"><td class="xtd-42-0 confluenceTd"><p>X-Wap-Profile</p></td><td class="xtd-42-1 confluenceTd"><p>Links to an XML file on the Internet with a full description and details about the device currently connecting. In the example to the right is an XML file for an AT&amp;T Samsung Galaxy S2.</p></td></tr></tbody></table>

Refer to [https://en.wikipedia.org/wiki/List\_of\_HTTP\_header\_fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) for more info.