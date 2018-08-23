---
title: "Verification Snippets" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/verification-snippets.html 
description: 
---
Katalon Studio now supports the ability to write verification scripts directly in Web Service object's details. This support will greatly reduce the time for you to add scripts and verify response on the fly.

Verification snippets can be accessed by clicking on the '**Verification**' tab within Web Service object's view.

![](../../images/katalon-studio/docs/verification-snippets/Untitled.png)

### List of Available Verification Snippets

On the right panel of 'Verification' tab is the list of common pre-built snippets which can assist you in most of the verification cases. 

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Snippet</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style="">Get current response</td><td class="" style="">Return response object after sending a request successfully.</td></tr><tr class="" style=""><td class="" style="">Get a global variable</td><td class="" style="">Return a Global Variable's value.</td></tr><tr class="" style=""><td class="" style="">Response body: Contains string</td><td class="" style="">Verify if response's body contains a specific string.</td></tr><tr class="" style=""><td class="" colspan="1" style="">Response body: Convert to JSON Object</td><td class="" colspan="1" style="">Convert response's body to JSON.</td></tr><tr class="" style=""><td class="" colspan="1" style="">Response headers: Content-Type header</td><td class="" colspan="1" style="">Verify Content-Type header's value.</td></tr><tr class="" style=""><td class="" colspan="1" style="">Status code: Code is 200</td><td class="" colspan="1" style="">Verify if response's status code is 200 or no.</td></tr><tr class="" style=""><td class="" colspan="1" style="">Status code: Successfully request</td><td class="" colspan="1" style="">Verify if the request is sent successfully</td></tr><tr class="" style=""><td class="" colspan="1" style="">Response body: number of elements</td><td class="" colspan="1" style="">Verify number of elements from response</td></tr><tr class="" style=""><td class="" colspan="1" style="">Response body: element not empty</td><td class="" colspan="1" style="">Verify specified element is not empty</td></tr><tr class="" style=""><td class="" colspan="1" style="">Response: Array contains</td><td class="" colspan="1" style="">Verify specified arrays contain values</td></tr><tr class="" style=""><td class="" colspan="1" style="">Response: Get single info of array list</td><td class="" colspan="1" style=""><span class="" style="">Get single info of array list</span></td></tr></tbody></table>

When you click on one of these labels, it will generate a snippet for you.

The generated snippet is ONLY an example. DON'T try to use them immediately without adjustments matched your needs, otherwise it will not work.

### Using Verification Snippets

Once the verification snippets are generated, you can use it in either in your current Web Service's object or in your Test Case

*   _In Web Service's object_: Click on drop-down button next to '**Play**' button in Web Service object's details and select 'Test Request and Verify'.   
    ![](../../images/katalon-studio/docs/verification-snippets/Untitled3.png)  
      
    It will send the current request and also execute verification snippets. Verification logs executed using verification snippets will be displayed on '**Verification Log**' tab. If you don't want to send a test request using current verification snippets, then just click on '**Play'** button.  
    ![](../../images/katalon-studio/docs/verification-snippets/Untitled.png)
*   _In test case_:  Use '[Send Request and Verify](https://docs.katalon.com/display/KD/%5BWS%5D+Send+Request+And+Verify)' keyword. This will also send the current request and execute verification snippets. 
    
    ```
    WS.sendRequestAndVerify(findTestObject('REST_CommentDetails'))
    ```
    
    Execution results will be displayed in '**Log Viewer**' tab.
    
    ![](../../images/katalon-studio/docs/verification-snippets/Untitled2.png)