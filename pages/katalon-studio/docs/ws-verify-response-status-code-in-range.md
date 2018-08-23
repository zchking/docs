---
title: "[WS] Verify Response Status Code In Range" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws-verify-response-status-code-in-range.html 
description: 
---
Description
===========

Verify status code valid in a range of status codes in the returned data from a web service call.

Parameters
==========

<table><thead><tr><th>Parameter</th><th>Parameter Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>responseObject</span></td><td><span>ResponseObject</span></td><td>Required</td><td><span>The object represents an HTTP Response, the user can get responded content type, header properties (sometimes the user may want to get cookies from response header)</span></td></tr><tr><td>fromStatusCode</td><td>int</td><td>Required</td><td>From status code</td></tr><tr><td>toStatusCode</td><td>int</td><td>Required</td><td>To status code</td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td>Optional</td><td><span>Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
=======

*   **true** if the response status code is the same as the expected status code, otherwise **false**.

Example
=======

You want to verify if the response from "REST\_Status Codes/POST\_201" object returns a status code from 200 to 400.

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpointimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
  
'Send a request and returns its response'
def response = WS.sendRequest(findTestObject('REST_Status Codes/POST_201'))
 
'Verify if the response from "REST_Status Codes/POST_201" object returns a status code from 200 to 400'
WS.verifyResponseStatusCode(response, 201)
```