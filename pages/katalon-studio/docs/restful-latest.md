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

| 
Field

 | 

Description

 |
| --- | --- |
| Request method | The request method indicates the expected action to be executed on the specified resource. Katalon Studio supports following methods for REST services: GET, POST, PUT, DELETE. |
| Request URL | The URL registered for the RESTful web services. |
| Parameters | Any parameter to be passed along with the RESTful request object. These values are generated automatically based on the Request URL or can be manually added. |
| 

Authorization



 | 

Credentials for HTTP authentication. 

Type: **Basic, OAuth 1.0, **or **No Authorization**



 |
| HTTP Headers | 

The header information to be included to transmit in the RESTful request object. '**Content-Type**' value is generated automatically based on the HTTP Body.

You can also select headers from the list of suggested options (by double-clicking on the **Name** cell) or enter another header of your interest. Refer to [Supported HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) for more details.



 |
| HTTP Body | 

The body information to be included to transmit in the RESTful request object. Katalon Studio supports the following transmit types:

*   Text
*   x-www-form-urlencoded
*   form-data
*   file

And the following format types:

*   Text
*   JSON
*   XML
*   HTML
*   Javascript

![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 18_58_27.png)



 |

RESTful Response
----------------

Since version 5.4, Katalon Studio provides Web Services Response in a separate window pane, which contains more details information of the Request as shown below

### Body

![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_4_42.png)

There are 3 new information provided in the response's section:

| Field | Description |
| --- | --- |
| 
**Status**

 | The status code of the response |
| 

**Elapsed**

 | The total time that starts from the request is sent until Katalon Studio receives the last byte of the response. |
| 

**Size**

 | Size of the response package |

The **Response** can be displayed in **multiple ways**

|   | Description | Example |
| --- | --- | --- |
| **pretty** | Response is displayed in a pretty format which is easier to read | 
![](../../images/katalon-studio/docs/restful-latest/Screen Shot 2018-04-10 at 17.23.21.png)



 |
| **raw** | Response is displayed in the raw text without any format | 

![](../../images/katalon-studio/docs/restful-latest/Screen Shot 2018-04-10 at 17.23.30.png)



 |
| **preview** | 

Response will be displayed as visualized

(e.g. If a Response is from loading a specific webpage, it will be displayed as the screenshot below)

 | 

![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_10_26.png)



 |

  
  

At the bottom of the** Body** section, different types of Response format can be selected as desired

*   JSON
*   XML
*   HTML
*   JavaScript

### Header

The response's header information is displayed in the **Header** tab

![](../../images/katalon-studio/docs/restful-latest/image2018-4-1 19_13_52.png)