---
title: "[WS] Verify Element Property Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws-verify-element-property-value.html 
description: 
---
Description
-----------

Verify that there is an element with expected property value appeared in the returned data from a web service call.

Parameters
----------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Parameter</th><th class="" style="">Parameter Type</th><th class="" style="">Mandatory</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style=""><span style="" class="">response</span></td><td class="" style=""><span style="" class="">ResponseObject</span></td><td class="" style="">Required</td><td class="" style=""><span style="" class="">Represent an HTTP Response, the user can get responded content type, data, header properties (sometimes the user may want to get cookies from response header)</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">locator</span></td><td class="" style=""><span style="" class="">String</span></td><td class="" style=""><span class="" style="">Required</span></td><td class="" style=""><span style="" class="">An expression Katalon will use to go through and look for the expected element(s), please refer to our user guide on how to write it:&nbsp;</span><a href="https://docs.katalon.com/display/KD/Handle+Response+Messages" rel="nofollow" class="" style="">Handle Web Service Response object</a></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">value&nbsp;</span></td><td class="" style=""><span style="" class="">String</span></td><td class="" style=""><span class="" style="">Required</span></td><td class="" style=""><span class="" style=""><span style="" class="">T</span></span><span style="" class="">he expected value of element you want to verify in the responded data (usually is JSON/XML)</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" style="">Optional</td><td class="" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

*   **true**, if your expectation is met, otherwise **false**.
    

Example
-------

You want to verify if the response contains 'Eliseo@gardner.biz' in the email list.

```
'Send a SOAP request and returns its response'
def response = WS.sendRequest(findTestObject('REST_CommentDetails'))

'Verify if comment\'s email after sending request is correct or not'
WS.verifyElementPropertyValue(response, '[0].email', 'Eliseo@gardner.biz')
```