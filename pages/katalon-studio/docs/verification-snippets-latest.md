---
title: "Verification Snippets (latest)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/verification-snippets-latest.html 
description: 
---
Katalon Studio now supports the ability to write verification scripts directly in Web Service object's details. This support will greatly reduce the time for you to add scripts and verify response on the fly.

Verification snippets can be accessed by clicking on the '**Verification**' tab within Web Service object's view.

### List of Available Verification Snippets

On the right panel of 'Verification' tab is the list of common pre-built snippets which can assist you in most of the verification cases. 

| Snippet | Description |
| --- | --- |
| Get current response | Return response object after sending a request successfully. |
| Get a global variable | Return a Global Variable's value. |
| Response body: Contains string | Verify if response's body contains a specific string. |
| Response body: Convert to JSON Object | Convert response's body to JSON. |
| Response headers: Content-Type header | Verify Content-Type header's value. |
| Status code: Code is 200 | Verify if response's status code is 200 or no. |
| Status code: Successfully request | Verify if the request is sent successfully |
| Response body: number of elements | Verify number of elements from response |
| Response body: element not empty | Verify specified element is not empty |
| Response: Array contains | Verify specified arrays contain values |
| Response: Get single info of array list | Get single info of array list |

When you click on one of these labels, it will generate a snippet for you.

The generated snippet is ONLY an example. DON'T try to use them immediately without adjustments matched your needs, otherwise it will not work.

### Using Verification Snippets

Once the verification snippets are generated, you can use it in either in your current Web Service's object or in your Test Case

*   _In Web Service's object_: Click on drop-down button next to '**Play**' button in Web Service object's details and select 'Test Request and Verify'.   
      
      
    It will send the current request and also execute verification snippets. Verification logs executed using verification snippets will be displayed on '**Verification Log**' tab. If you don't want to send a test request using current verification snippets, then just click on '**Play'** button.  
    
*   _In test case_:  Use 'Send Request and Verify' keyword. This will also send the current request and execute verification snippets. 
    
    ```
    WS.sendRequestAndVerify(findTestObject('REST_CommentDetails'))
    ```
    
    Execution results will be displayed in '**Log Viewer**' tab.