---
title: "Using Web Services in a Test Case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/using-web-services-in-a-test-case.html 
redirect_from:
    - "/display/KD/Using%20Web%20Services%20in%20a%20Test%20Case/"
    - "/x/ARRO/"
    - "/katalon-studio/docs/using-web-services-in-a-test-case/"
description: 
---
In Manual View
--------------

Follow the steps below in order to use web service object in **Manual** view:

1.  Open a test case in **Manual** view, then select the option to add a **Web Service Keyword** from command toolbar.  
    ![](../../images/katalon-studio/docs/using-web-services-in-a-test-case/image2017-6-30-203A493A48.png)  
      
    
2.  A Web Service step is added to the test case.   
    To send a request to Web Service, you need to use **[Send Request](/display/KD/%5BWS%5D+Send+Request)** keyword. Select the **[Send Request](/display/KD/%5BWS%5D+Send+Request)** keyword now.  
    ![](../../images/katalon-studio/docs/using-web-services-in-a-test-case/image2018-8-23-163A583A44.png)  
      
    
3.  Double click on object cell to specify the web service object to **[Send Request](/display/KD/%5BWS%5D+Send+Request)**.
    
    > Variables for Web Service Test Object
    > 
    > When you modify the variables of a Web Service Test Object in a test case, the values will ONLY apply to that particular test case. If you reuse that Test Object in another test case, Katalon Studio will get the original values that were defined in the Test Object view
    
      
    ![](../../images/katalon-studio/docs/using-web-services-in-a-test-case/image2018-8-23-163A353A40.png)  
      
    
4.  The output of **[Send Request](/display/KD/%5BWS%5D+Send+Request)** keyword could be validated if needed using different **[Verify...](/display/KD/Web+Service)** keywords depending on your situation.  
      
    

In Scripting View
-----------------

You can use the **[Send Request](/display/KD/%5BWS%5D+Send+Request)** keyword for Web Service object and the **[Verify...](/display/KD/Web+Service)** keywords to verify the web service response. You may want to refer to [Handle Response messages](#UsingWebServicesinaTestCase-HandleResponsemessages) for more details regarding **Element Locator**:

```groovy
//Send a SOAP request and returns its response
def response = WS.sendRequest(findTestObject([the ID of Web Service object]))

//Verify if a value at a specific location in response is as expected
WS.verifyElementPropertyValue(response, <Element Locator>, <expected value>)
```

For example:

![](../../images/katalon-studio/docs/using-web-services-in-a-test-case/image2017-2-28-153A203A11.png)

The following API docs may prove useful when working with web service objects:

| Class | Description |
| --- | --- |
| **[Request Object](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/RequestObject.html)** | Describe all available methods for Request Object |
| **[Response Object](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/ResponseObject.html)** | Describe all available methods for Response Object |