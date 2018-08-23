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

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead style=""><tr style=""><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Field</div></th><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Description</div></th></tr></thead><tbody style=""><tr class="xtr-0" style=""><td class="xtd-0-0 confluenceTd" style="">Request method</td><td class="xtd-0-1 confluenceTd" style=""><span style="">The request method indicates the expected action to be executed on the specified resource. Katalon Studio supports following methods for REST services: GET, POST, PUT, DELETE.</span></td></tr><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style="">Request URL</td><td class="xtd-1-1 confluenceTd" style="">The URL registered for the RESTful web services.</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style="">Parameters</td><td class="xtd-2-1 confluenceTd" style="">Any parameter to be passed along with the RESTful request object. These values are generated automatically based on the Request URL or can be manually added.</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><div class="content-wrapper" style=""><p style="">Authorization</p></div></td><td class="xtd-3-1 confluenceTd" style=""><div class="content-wrapper" style=""><p style="">Credentials for HTTP authentication.&nbsp;</p><p style="">Type:&nbsp;<strong style="">Basic, OAuth 1.0,&nbsp;</strong>or&nbsp;<strong style="">No Authorization</strong></p><p style="">&nbsp;&nbsp;&nbsp;&nbsp;</p></div></td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style="">HTTP Headers</td><td class="xtd-4-1 confluenceTd" style=""><div class="content-wrapper" style=""><p style="">The header information to be included to transmit in the RESTful request object. '<strong style="">Content-Type</strong>' value is generated automatically based on the HTTP Body.</p><p style="">You can also select headers from the list of suggested options (by double-clicking on the&nbsp;<strong style="">Name</strong>&nbsp;cell) or enter another header of your interest. Refer to&nbsp;<a class="external-link" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers" rel="nofollow" style="">Supported HTTP Headers</a>&nbsp;for more details.</p></div></td></tr><tr class="xtr-5" style=""><td class="xtd-5-0 confluenceTd" colspan="1" style="">HTTP Body</td><td class="xtd-5-1 confluenceTd" colspan="1" style=""><div class="content-wrapper" style=""><p style="">The body information to be included to transmit in the RESTful request object. Katalon Studio supports the following transmit types:</p><ul style=""><li style="">Text</li><li style="">x-www-form-urlencoded</li><li style="">form-data</li><li style="">file</li></ul><p style="">And the following format types:</p><ul style=""><li style="">Text</li><li style="">JSON</li><li style="">XML</li><li style="">HTML</li><li style="">Javascript</li></ul><p style=""><span class="confluence-embedded-file-wrapper" style=""><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/restful-latest/image2018-4-1 18_58_27.png" data-image-src="/download/attachments/13697545/image2018-4-1%2018%3A58%3A27.png?version=1&amp;modificationDate=1522583905000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697558" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-4-1 18:58:27.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5" style=""></span></p></div></td></tr></tbody></table>

RESTful Response
----------------

Since version 5.4, Katalon Studio provides Web Services Response in a separate window pane, which contains more details information of the Request as shown below

### Body

![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_4_42.png)

There are 3 new information provided in the response's section:

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Field</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><p style=""><strong style="">Status</strong></p></td><td class="xtd-1-1 confluenceTd" style="">The status code of the response</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><p style=""><strong style="">Elapsed</strong></p></td><td class="xtd-2-1 confluenceTd" style="">The total time that starts from the request is sent until Katalon Studio receives the last byte of the response.</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><p style=""><strong style="">Size</strong></p></td><td class="xtd-3-1 confluenceTd" style="">Size of the response package</td></tr></tbody></table>

The **Response** can be displayed in **multiple ways**

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">&nbsp;</th><th class="xtd-0-1 confluenceTh" style="">Description</th><th class="xtd-0-2 confluenceTh" colspan="1" style="">Example</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><strong style="">pretty</strong></td><td class="xtd-1-1 confluenceTd" style="">Response is displayed in a pretty format which is easier to read</td><td class="xtd-1-2 confluenceTd" colspan="1" style=""><div class="content-wrapper" style=""><p style=""><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size" style=""><img class="confluence-embedded-image" height="250" src="../../images/katalon-studio/docs/restful-latest/Screen Shot 2018-04-10 at 17.23.21.png" data-image-src="/download/attachments/13697545/Screen%20Shot%202018-04-10%20at%2017.23.21.png?version=1&amp;modificationDate=1534404392000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13701029" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-04-10 at 17.23.21.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5" style=""></span></p></div></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><strong style="">raw</strong></td><td class="xtd-2-1 confluenceTd" style="">Response is displayed in the raw text without any format</td><td class="xtd-2-2 confluenceTd" colspan="1" style=""><div class="content-wrapper" style=""><p style=""><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size" style=""><img class="confluence-embedded-image" height="150" src="../../images/katalon-studio/docs/restful-latest/Screen Shot 2018-04-10 at 17.23.30.png" data-image-src="/download/attachments/13697545/Screen%20Shot%202018-04-10%20at%2017.23.30.png?version=1&amp;modificationDate=1534404392000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13701030" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-04-10 at 17.23.30.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5" style=""></span></p></div></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><strong style="">preview</strong></td><td class="xtd-3-1 confluenceTd" style=""><p style="">Response will be displayed as visualized</p><p style="">(e.g. If a Response is from loading a specific webpage, it will be displayed as the screenshot below)</p></td><td class="xtd-3-2 confluenceTd" colspan="1" style=""><div class="content-wrapper" style=""><p style=""><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size" style=""><img class="confluence-embedded-image" height="150" src="../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_10_26.png" data-image-src="/download/attachments/13697545/image2018-4-1%2019%3A10%3A26.png?version=1&amp;modificationDate=1534404392000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13701031" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-4-1 19:10:26.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5" style=""></span></p></div></td></tr></tbody></table>

  
  

At the bottom of the** Body** section, different types of Response format can be selected as desired

*   JSON
*   XML
*   HTML
*   JavaScript

### Header

The response's header information is displayed in the **Header** tab

![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_13_52.png)