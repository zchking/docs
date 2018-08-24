---
title: "[WS] Verify Element Property Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws-verify-element-property-value.html 
redirect_from: "/display/KD/%5BWS%5D+Verify+Element+Property+Value" 
description: 
---
Description
===========

Verify that there is an element with expected property value appeared in the returned data from a web service call.

Parameters
==========

<table><thead><tr><th>Parameter</th><th>Parameter Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>response</span></td><td><span>ResponseObject</span></td><td>Required</td><td><span>Represent an HTTP Response, the user can get responded content type, data, header properties (sometimes the user may want to get cookies from response header)</span></td></tr><tr><td><span>locator</span></td><td><span>String</span></td><td><span>Required</span></td><td><span>An expression Katalon will use to go through and look for the expected element(s), please refer to our user guide on how to write it:&nbsp;</span><a>Handle Web Service Response object</a></td></tr><tr><td><span>value&nbsp;</span></td><td><span>String</span></td><td><span>Required</span></td><td><span><span>T</span></span><span>he expected value of element you want to verify in the responded data (usually is JSON/XML)</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td>Optional</td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
=======

*   **true**, if your expectation is met, otherwise **false**.
    

Example
=======

You want to verify if the response contains 'Eliseo@gardner.biz' in the email list.

```groovy
'Send a SOAP request and returns its response'
def response = WS.sendRequest(findTestObject('REST_CommentDetails'))

'Verify if comment\'s email after sending request is correct or not'
WS.verifyElementPropertyValue(response, '[0].email', 'Eliseo@gardner.biz')
```