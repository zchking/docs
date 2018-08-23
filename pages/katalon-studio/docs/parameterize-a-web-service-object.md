---
title: "Parameterize a Web Service Object" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/parameterize-a-web-service-object.html 
description: 
---
Since version 5.4

  
Katalon Studio supports parameterized the following information for Web Services object:

*   **HTTP Body **
*   **HTTP Header**
*   **URL**

Having the ability to parameterized Web Services object allows user have more control of the web services request object and fulfill all the testing requirements. The approach is the same with Web UI object

**Example:**

*   Create a POST method with **Parameterized HTTP Body**. The **userID** in the screenshot below are parameterized instead of being hardcoded.  
      
      
    Where
    
    | Parameter | Description |
    | --- | --- |
    | ${userID} | Parameterized **userID** to receive any passing value |
    
    In **Script Mode**, the below code passing the value of **userID** to be sent in the request
    
    ```
    def response = WS.sendRequest(findTestObject('REST_CommentDetails - Copy', [('userID') : '999']))
    ```
    
*   Create a **REST** object with **GET** method and **Parameterized URL**. The **userID** is parameterized in the URL to receive any passing value from the Test Case.  
      
      
    
    Where
    
    | Parameter | Description |
    | --- | --- |
    | ${userID} | Parameterized **userID** to receive any passing value |
    
      
    In **Script Mode** of the test case, the script below send a request to GET any user with ID = 2 
    
    ```
    ResponseObject response = WS.sendRequest(findTestObject('Object Repository/REST_CommentDetails', [('userId'): '2']))
    
    System.out.println(response.getResponseText())
    ```