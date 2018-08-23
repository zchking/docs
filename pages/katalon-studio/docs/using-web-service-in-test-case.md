---
title: "Using Web Service in Test Case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/using-web-service-in-test-case.html 
description: 
---
### In Manual View

Follow the steps below in order to use web service object in **Manual** view:

1.  Open a test case in **Manual** view, then select option to add **Web Service Keyword** from command toolbar.  
    ![](../../images/katalon-studio/docs/using-web-service-in-test-case/image2017-6-30 20_49_48.png)  
      
    
2.  A Web Service step is added to the test case.   
    To send a request to Web Service, you need to use **[Send Request](https://docs.katalon.com/display/KD/%5BWS%5D+Send+Request)** keyword. Select the **[Send Request](https://docs.katalon.com/display/KD/%5BWS%5D+Send+Request)** keyword now.  
    ![](../../images/katalon-studio/docs/using-web-service-in-test-case/image2017-6-30 20_50_17.png)  
      
    
3.  Double click on object cell to specify the web service object to **[Send Request](https://docs.katalon.com/display/KD/%5BWS%5D+Send+Request)**.  
    ![](../../images/katalon-studio/docs/using-web-service-in-test-case/image2017-2-14 11_16_9.png)  
      
    
4.  The output of **[Send Request](https://docs.katalon.com/display/KD/%5BWS%5D+Send+Request)** keyword could be validated if needed using different **[Verify...](https://docs.katalon.com/display/KD/Web+Service)** keywords depending on your situation.  
    ![](../../images/katalon-studio/docs/using-web-service-in-test-case/image2017-6-30 20_50_56.png)

### In Scripting View

You can use the **[Send Request](https://docs.katalon.com/display/KD/%5BWS%5D+Send+Request)** keyword for Web Service object and the **[Verify...](https://docs.katalon.com/display/KD/Web+Service)** keywords to verify the web service response. You may want to refer to [Handle Response messages](#UsingWebServiceinTestCase-HandleResponsemessages) for more details regarding **Element Locator**:

```
//Send a SOAP request and returns its response
def response = WS.sendRequest(findTestObject([the ID of Web Service object]))

//Verify if a value at a specific location in response is as expected
WS.verifyElementPropertyValue(response, <Element Locator>, <expected value>)
```

For example:

![](../../images/katalon-studio/docs/using-web-service-in-test-case/image2017-2-28 15_20_11.png)

The following API docs may prove useful when working with web service objects:

Class

Description

**[Request Object](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/RequestObject.html)**

Describe all available methods for Request Object

**[Response Object](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/ResponseObject.html)**

Describe all available methods for Response Object