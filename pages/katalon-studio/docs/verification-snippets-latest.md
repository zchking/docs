---
title: "Verification Snippets (latest)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/verification-snippets-latest.html 
description: 
---
Katalon Studio now supports the ability to write verification scripts directly in Web Service object's details. This support will greatly reduce the time for you to add scripts and verify response on the fly.

Verification snippets can be accessed by clicking on the '**Verification**' tab within Web Service object's view.

![](../../images/katalon-studio/docs/verification-snippets-latest/Untitled.png)

### List of Available Verification Snippets

On the right panel of 'Verification' tab is the list of common pre-built snippets which can assist you in most of the verification cases. 

<table class="wrapped confluenceTable"><colgroup><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Snippet</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd">Get current response</td><td class="xtd-1-1 confluenceTd">Return response object after sending a request successfully.</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd">Get a global variable</td><td class="xtd-2-1 confluenceTd">Return a Global Variable's value.</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd">Response body: Contains string</td><td class="xtd-3-1 confluenceTd">Verify if response's body contains a specific string.</td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd" colspan="1">Response body: Convert to JSON Object</td><td class="xtd-4-1 confluenceTd" colspan="1">Convert response's body to JSON.</td></tr><tr class="xtr-5"><td class="xtd-5-0 confluenceTd" colspan="1">Response headers: Content-Type header</td><td class="xtd-5-1 confluenceTd" colspan="1">Verify Content-Type header's value.</td></tr><tr class="xtr-6"><td class="xtd-6-0 confluenceTd" colspan="1">Status code: Code is 200</td><td class="xtd-6-1 confluenceTd" colspan="1">Verify if response's status code is 200 or no.</td></tr><tr class="xtr-7"><td class="xtd-7-0 confluenceTd" colspan="1">Status code: Successfully request</td><td class="xtd-7-1 confluenceTd" colspan="1">Verify if the request is sent successfully</td></tr><tr class="xtr-8"><td class="xtd-8-0 confluenceTd" colspan="1">Response body: number of elements</td><td class="xtd-8-1 confluenceTd" colspan="1">Verify number of elements from response</td></tr><tr class="xtr-9"><td class="xtd-9-0 confluenceTd" colspan="1">Response body: element not empty</td><td class="xtd-9-1 confluenceTd" colspan="1">Verify specified element is not empty</td></tr><tr class="xtr-10"><td class="xtd-10-0 confluenceTd" colspan="1">Response: Array contains</td><td class="xtd-10-1 confluenceTd" colspan="1">Verify specified arrays contain values</td></tr><tr class="xtr-11"><td class="xtd-11-0 confluenceTd" colspan="1">Response: Get single info of array list</td><td class="xtd-11-1 confluenceTd" colspan="1"><span>Get single info of array list</span></td></tr></tbody></table>

When you click on one of these labels, it will generate a snippet for you.

The generated snippet is ONLY an example. DON'T try to use them immediately without adjustments matched your needs, otherwise it will not work.

### Using Verification Snippets

Once the verification snippets are generated, you can use it in either in your current Web Service's object or in your Test Case

*   _In Web Service's object_: Click on drop-down button next to '**Play**' button in Web Service object's details and select 'Test Request and Verify'.   
    ![](../../images/katalon-studio/docs/verification-snippets-latest/Untitled3.png)  
      
    It will send the current request and also execute verification snippets. Verification logs executed using verification snippets will be displayed on '**Verification Log**' tab. If you don't want to send a test request using current verification snippets, then just click on '**Play'** button.  
    ![](../../images/katalon-studio/docs/verification-snippets-latest/Untitled.png)
*   _In test case_:  Use '[Send Request and Verify](https://docs.katalon.com/display/KD/%5BWS%5D+Send+Request+And+Verify)' keyword. This will also send the current request and execute verification snippets. 
    
    ```groovy
    WS.sendRequestAndVerify(findTestObject('REST_CommentDetails'))
    ```
    
    Execution results will be displayed in '**Log Viewer**' tab.
    
    ![](../../images/katalon-studio/docs/verification-snippets-latest/Untitled2.png)