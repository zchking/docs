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

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Parameter</th><th class="xtd-0-1 confluenceTh" style="">Parameter Type</th><th class="xtd-0-2 confluenceTh" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><span style="">response</span></td><td class="xtd-1-1 confluenceTd" style=""><span style="">ResponseObject</span></td><td class="xtd-1-2 confluenceTd" style="">Required</td><td class="xtd-1-3 confluenceTd" style=""><span style="">Represent an HTTP Response, the user can get responded content type, data, header properties (sometimes the user may want to get cookies from response header)</span></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><span style="">locator</span></td><td class="xtd-2-1 confluenceTd" style=""><span style="">String</span></td><td class="xtd-2-2 confluenceTd" style=""><span style="">Required</span></td><td class="xtd-2-3 confluenceTd" style=""><span style="">An expression Katalon will use to go through and look for the expected element(s), please refer to our user guide on how to write it:&nbsp;</span><a href="https://docs.katalon.com/display/KD/Handle+Response+Messages" rel="nofollow" style="">Handle Web Service Response object</a></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><span style="">value&nbsp;</span></td><td class="xtd-3-1 confluenceTd" style=""><span style="">String</span></td><td class="xtd-3-2 confluenceTd" style=""><span style="">Required</span></td><td class="xtd-3-3 confluenceTd" style=""><span style=""><span style="">T</span></span><span style="">he expected value of element you want to verify in the responded data (usually is JSON/XML)</span></td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-4-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-4-2 confluenceTd" style="">Optional</td><td class="xtd-4-3 confluenceTd" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

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