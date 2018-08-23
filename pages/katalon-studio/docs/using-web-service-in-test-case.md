---
title: "Using Web Service in Test Case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/using-web-service-in-test-case.html 
description: 
---
### In Manual View

Follow the steps below in order to use web service object in **Manual** view:

1.  Open a test case in **Manual** view, then select option to add **Web Service Keyword** from command toolbar.  
      
      
    
2.  A Web Service step is added to the test case.   
    To send a request to Web Service, you need to use **Send Request** keyword. Select the **Send Request** keyword now.  
      
      
    
3.  Double click on object cell to specify the web service object to **Send Request**.  
      
      
    
4.  The output of **Send Request** keyword could be validated if needed using different **Verify...** keywords depending on your situation.  
    

### In Scripting View

You can use the **Send Request** keyword for Web Service object and the **Verify...** keywords to verify the web service response. You may want to refer to Handle Response messages for more details regarding **Element Locator**:

```
//Send a SOAP request and returns its response
def response = WS.sendRequest(findTestObject([the ID of Web Service object]))

//Verify if a value at a specific location in response is as expected
WS.verifyElementPropertyValue(response, <Element Locator>, <expected value>)
```

For example:

The following API docs may prove useful when working with web service objects:

| Class | Description |
| --- | --- |
| **Request Object** | Describe all available methods for Request Object |
| **Response Object** | Describe all available methods for Response Object |