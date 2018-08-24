---
title: "Parameterize a Web Service Object" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/parameterize-a-web-service-object.html 
redirect_from: "/display/KD/Parameterize+a+Web+Service+Object" 
description: 
---
> Since version 5.4

  
Katalon Studio supports parameterized the following information for Web Services object:

*   **HTTP Body **
*   **HTTP Header**
*   **URL**

Having the ability to parameterized Web Services object allows user have more control of the web services request object and fulfill all the testing requirements. The approach is the same with [Web UI object](/x/A4C9)

**Example:**

*   Create a POST method with **Parameterized HTTP Body**. The **userID** in the screenshot below are parameterized instead of being hardcoded.  
      
    ![](../../images/katalon-studio/docs/parameterize-a-web-service-object/image2018-4-3 11_12_30.png)  
    Where
    
    | Parameter | Description |
    | --- | --- |
    | ${userID} | Parameterized **userID** to receive any passing value |
    
    In **Script Mode**, the below code passing the value of **userID** to be sent in the request
    
    ```groovy
    def response = WS.sendRequest(findTestObject('REST_CommentDetails - Copy', [('userID') : '999']))
    ```
    
*   Create a **REST** object with **GET** method and **Parameterized URL**. The **userID** is parameterized in the URL to receive any passing value from the Test Case.  
      
    ![](../../images/katalon-studio/docs/parameterize-a-web-service-object/image2018-8-24 9_29_22.png)  
    
    Where
    
    | Parameter | Description |
    | --- | --- |
    | ${userID} | Parameterized **userID** to receive any passing value |
    
      
    In **Script Mode** of the test case, the script below send a request to GET any user with ID = 2 
    
    ```groovy
    ResponseObject response = WS.sendRequest(findTestObject('Object Repository/REST_CommentDetails', [('userId'): '2']))
    
    System.out.println(response.getResponseText())
    ```
    
    ![](../../images/katalon-studio/docs/parameterize-a-web-service-object/Screen Shot 2018-06-05 at 2.16.49 PM.png)