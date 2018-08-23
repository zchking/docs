---
title: "RESTful (latest)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/restful-latest.html 
description: 
---
RESTful Request
---------------

Select **File > New > Web Service Request** from the main menu. The **New Web Service Request** dialog will be displayed where you can input your RESTful URL directly on this dialog.  
![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 18_11_47.png)  
  
After you've created a request successfully, there will be a small **icon** next to the object on Tests Explorer to indicate its used method (**GET**, **POST**, **PUT**, **DELETE**)  
![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 18_35_21.png)  
  
  

2\. In the opened editor of the new service request object, there will be two separate sections for the **Request **(left pane window) and **Response** (right pane window)  
![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 18_41_6.png)

Web Services Request can be parameterized. Refer to this [documentation](https://docs.katalon.com/x/egLR).

We will take a look at the **Request** section using the sample REST URL

```groovy
https://sample-web-service-aut.herokuapp.com/api/users/accept-json?gender=MALE&age=15
```

  
![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 18_52_9.png)

where:

<table><thead><tr><th><div class="tablesorter-header-inner">Field</div></th><th><div class="tablesorter-header-inner">Description</div></th></tr></thead><tbody><tr><td>Request method</td><td><span>The request method indicates the expected action to be executed on the specified resource. Katalon Studio supports following methods for REST services: GET, POST, PUT, DELETE.</span></td></tr><tr><td>Request URL</td><td>The URL registered for the RESTful web services.</td></tr><tr><td>Parameters</td><td>Any parameter to be passed along with the RESTful request object. These values are generated automatically based on the Request URL or can be manually added.</td></tr><tr><td><div class="content-wrapper"><p>Authorization</p></div></td><td><div class="content-wrapper"><p>Credentials for HTTP authentication.&nbsp;</p><p>Type:&nbsp;<strong>Basic, OAuth 1.0,&nbsp;</strong>or&nbsp;<strong>No Authorization</strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;</p></div></td></tr><tr><td>HTTP Headers</td><td><div class="content-wrapper"><p>The header information to be included to transmit in the RESTful request object. '<strong>Content-Type</strong>' value is generated automatically based on the HTTP Body.</p><p>You can also select headers from the list of suggested options (by double-clicking on the&nbsp;<strong>Name</strong>&nbsp;cell) or enter another header of your interest. Refer to&nbsp;<a class="external-link" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers" rel="nofollow">Supported HTTP Headers</a>&nbsp;for more details.</p></div></td></tr><tr><td>HTTP Body</td><td><div class="content-wrapper"><p>The body information to be included to transmit in the RESTful request object. Katalon Studio supports the following transmit types:</p><ul><li>Text</li><li>x-www-form-urlencoded</li><li>form-data</li><li>file</li></ul><p>And the following format types:</p><ul><li>Text</li><li>JSON</li><li>XML</li><li>HTML</li><li>Javascript</li></ul><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/restful-latest/image2018-4-1 18_58_27.png" data-image-src="/download/attachments/13697545/image2018-4-1%2018%3A58%3A27.png?version=1&amp;modificationDate=1522583905000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697558" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-4-1 18:58:27.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5"></span></p></div></td></tr></tbody></table>

RESTful Response
----------------

Since version 5.4, Katalon Studio provides Web Services Response in a separate window pane, which contains more details information of the Request as shown below

### Body

![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_4_42.png)

There are 3 new information provided in the response's section:

<table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><p><strong>Status</strong></p></td><td>The status code of the response</td></tr><tr><td><p><strong>Elapsed</strong></p></td><td>The total time that starts from the request is sent until Katalon Studio receives the last byte of the response.</td></tr><tr><td><p><strong>Size</strong></p></td><td>Size of the response package</td></tr></tbody></table>

The **Response** can be displayed in **multiple ways**

<table><thead><tr><th>&nbsp;</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><strong>pretty</strong></td><td>Response is displayed in a pretty format which is easier to read</td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img class="confluence-embedded-image" height="250" src="../../images/katalon-studio/docs/restful-latest/Screen Shot 2018-04-10 at 17.23.21.png" data-image-src="/download/attachments/13697545/Screen%20Shot%202018-04-10%20at%2017.23.21.png?version=1&amp;modificationDate=1534404392000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13701029" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-04-10 at 17.23.21.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5"></span></p></div></td></tr><tr><td><strong>raw</strong></td><td>Response is displayed in the raw text without any format</td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img class="confluence-embedded-image" height="150" src="../../images/katalon-studio/docs/restful-latest/Screen Shot 2018-04-10 at 17.23.30.png" data-image-src="/download/attachments/13697545/Screen%20Shot%202018-04-10%20at%2017.23.30.png?version=1&amp;modificationDate=1534404392000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13701030" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-04-10 at 17.23.30.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5"></span></p></div></td></tr><tr><td><strong>preview</strong></td><td><p>Response will be displayed as visualized</p><p>(e.g. If a Response is from loading a specific webpage, it will be displayed as the screenshot below)</p></td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img class="confluence-embedded-image" height="150" src="../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_10_26.png" data-image-src="/download/attachments/13697545/image2018-4-1%2019%3A10%3A26.png?version=1&amp;modificationDate=1534404392000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13701031" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-4-1 19:10:26.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5"></span></p></div></td></tr></tbody></table>

  
  

At the bottom of the** Body** section, different types of Response format can be selected as desired

*   JSON
*   XML
*   HTML
*   JavaScript

### Header

The response's header information is displayed in the **Header** tab

![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_13_52.png)