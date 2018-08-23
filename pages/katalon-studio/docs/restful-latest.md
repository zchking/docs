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

```
https://sample-web-service-aut.herokuapp.com/api/users/accept-json?gender=MALE&age=15
```

  
![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 18_52_9.png)

where:

<table class="" style="table-layout: fixed;"><thead class="" style=""><tr class="" style=""><th class="" style=""><div class="" style="">Field</div></th><th class="" style=""><div class="" style="">Description</div></th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style="">Request method</td><td class="" style=""><span style="" class="">The request method indicates the expected action to be executed on the specified resource. Katalon Studio supports following methods for REST services: GET, POST, PUT, DELETE.</span></td></tr><tr class="" style=""><td class="" style="">Request URL</td><td class="" style="">The URL registered for the RESTful web services.</td></tr><tr class="" style=""><td class="" style="">Parameters</td><td class="" style="">Any parameter to be passed along with the RESTful request object. These values are generated automatically based on the Request URL or can be manually added.</td></tr><tr class="" style=""><td class="" style=""><div class="" style=""><p class="" style="">Authorization</p></div></td><td class="" style=""><div class="" style=""><p class="" style="">Credentials for HTTP authentication.&nbsp;</p><p class="" style="">Type:&nbsp;<strong class="" style="">Basic, OAuth 1.0,&nbsp;</strong>or&nbsp;<strong class="" style="">No Authorization</strong></p><p class="" style="">&nbsp;&nbsp;&nbsp;&nbsp;</p></div></td></tr><tr class="" style=""><td class="" style="">HTTP Headers</td><td class="" style=""><div class="" style=""><p class="" style="">The header information to be included to transmit in the RESTful request object. '<strong class="" style="">Content-Type</strong>' value is generated automatically based on the HTTP Body.</p><p class="" style="">You can also select headers from the list of suggested options (by double-clicking on the&nbsp;<strong class="" style="">Name</strong>&nbsp;cell) or enter another header of your interest. Refer to&nbsp;<a class="" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers" rel="nofollow" style="">Supported HTTP Headers</a>&nbsp;for more details.</p></div></td></tr><tr class="" style=""><td class="" colspan="1" style="">HTTP Body</td><td class="" colspan="1" style=""><div class="" style=""><p class="" style="">The body information to be included to transmit in the RESTful request object. Katalon Studio supports the following transmit types:</p><ul class="" style=""><li class="" style="">Text</li><li class="" style="">x-www-form-urlencoded</li><li class="" style="">form-data</li><li class="" style="">file</li></ul><p class="" style="">And the following format types:</p><ul class="" style=""><li class="" style="">Text</li><li class="" style="">JSON</li><li class="" style="">XML</li><li class="" style="">HTML</li><li class="" style="">Javascript</li></ul><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/restful-latest/image2018-4-1 18_58_27.png" data-image-src="/download/attachments/13697545/image2018-4-1%2018%3A58%3A27.png?version=1&amp;modificationDate=1522583905000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697558" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-4-1 18:58:27.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5" style=""></span></p></div></td></tr></tbody></table>

RESTful Response
----------------

Since version 5.4, Katalon Studio provides Web Services Response in a separate window pane, which contains more details information of the Request as shown below

### Body

![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_4_42.png)

There are 3 new information provided in the response's section:

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Field</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><p class="" style=""><strong class="" style="">Status</strong></p></td><td class="" style="">The status code of the response</td></tr><tr class="" style=""><td class="" style=""><p class="" style=""><strong class="" style="">Elapsed</strong></p></td><td class="" style="">The total time that starts from the request is sent until Katalon Studio receives the last byte of the response.</td></tr><tr class="" style=""><td class="" style=""><p class="" style=""><strong class="" style="">Size</strong></p></td><td class="" style="">Size of the response package</td></tr></tbody></table>

The **Response** can be displayed in **multiple ways**

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">&nbsp;</th><th class="" style="">Description</th><th class="" colspan="1" style="">Example</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><strong class="" style="">pretty</strong></td><td class="" style="">Response is displayed in a pretty format which is easier to read</td><td class="" colspan="1" style=""><div class="" style=""><p class="" style=""><span class="" style=""><img class="" height="250" src="../../images/katalon-studio/docs/restful-latest/Screen Shot 2018-04-10 at 17.23.21.png" data-image-src="/download/attachments/13697545/Screen%20Shot%202018-04-10%20at%2017.23.21.png?version=1&amp;modificationDate=1534404392000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13701029" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-04-10 at 17.23.21.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5" style=""></span></p></div></td></tr><tr class="" style=""><td class="" style=""><strong class="" style="">raw</strong></td><td class="" style="">Response is displayed in the raw text without any format</td><td class="" colspan="1" style=""><div class="" style=""><p class="" style=""><span class="" style=""><img class="" height="150" src="../../images/katalon-studio/docs/restful-latest/Screen Shot 2018-04-10 at 17.23.30.png" data-image-src="/download/attachments/13697545/Screen%20Shot%202018-04-10%20at%2017.23.30.png?version=1&amp;modificationDate=1534404392000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13701030" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-04-10 at 17.23.30.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5" style=""></span></p></div></td></tr><tr class="" style=""><td class="" style=""><strong class="" style="">preview</strong></td><td class="" style=""><p class="" style="">Response will be displayed as visualized</p><p class="" style="">(e.g. If a Response is from loading a specific webpage, it will be displayed as the screenshot below)</p></td><td class="" colspan="1" style=""><div class="" style=""><p class="" style=""><span class="" style=""><img class="" height="150" src="../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_10_26.png" data-image-src="/download/attachments/13697545/image2018-4-1%2019%3A10%3A26.png?version=1&amp;modificationDate=1534404392000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13701031" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-4-1 19:10:26.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697545" data-linked-resource-container-version="5" style=""></span></p></div></td></tr></tbody></table>

  
  

At the bottom of the** Body** section, different types of Response format can be selected as desired

*   JSON
*   XML
*   HTML
*   JavaScript

### Header

The response's header information is displayed in the **Header** tab

![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_13_52.png)