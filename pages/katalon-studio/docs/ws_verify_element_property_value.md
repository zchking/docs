---
title: "[WS] Verify Element Property Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws_verify_element_property_value.html 
description: 
---
Description
-----------

Verify that there is an element with expected property value appeared in the returned data from a web service call.

Parameters
----------

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Parameter</th><th class="xtd-0-1 confluenceTh">Parameter Type</th><th class="xtd-0-2 confluenceTh">Mandatory</th><th class="xtd-0-3 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">response</span></td><td class="xtd-1-1 confluenceTd"><span style="color: rgb(0,0,0);">ResponseObject</span></td><td class="xtd-1-2 confluenceTd">Required</td><td class="xtd-1-3 confluenceTd"><span style="color: rgb(52,52,55);">Represent an HTTP Response, the user can get responded content type, data, header properties (sometimes the user may want to get cookies from response header)</span></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">locator</span></td><td class="xtd-2-1 confluenceTd"><span style="color: rgb(0,0,0);">String</span></td><td class="xtd-2-2 confluenceTd"><span>Required</span></td><td class="xtd-2-3 confluenceTd"><span style="color: rgb(52,52,55);">An expression Katalon will use to go through and look for the expected element(s), please refer to our user guide on how to write it:&nbsp;</span><a href="https://docs.katalon.com/display/KD/Handle+Response+Messages" rel="nofollow">Handle Web Service Response object</a></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><span style="color: rgb(0,0,0);">value&nbsp;</span></td><td class="xtd-3-1 confluenceTd"><span style="color: rgb(0,0,0);">String</span></td><td class="xtd-3-2 confluenceTd"><span>Required</span></td><td class="xtd-3-3 confluenceTd"><span><span style="color: rgb(0,0,255);">T</span></span><span style="color: rgb(52,52,55);">he expected value of element you want to verify in the responded data (usually is JSON/XML)</span></td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-4-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-4-2 confluenceTd">Optional</td><td class="xtd-4-3 confluenceTd"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

  
Returns
----------

*   **true**, if your expectation is met, otherwise **false**.
    

Example
-------

You want to verify if the response contains 'Eliseo@gardner.biz' in the email list.

```groovy
'Send a SOAP request and returns its response'
def response = WS.sendRequest(findTestObject('REST_CommentDetails'))

'Verify if comment\'s email after sending request is correct or not'
WS.verifyElementPropertyValue(response, '[0].email', 'Eliseo@gardner.biz')
```