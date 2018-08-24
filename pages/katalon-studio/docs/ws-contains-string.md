---
title: "[WS] Contains String" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws-contains-string.html 
redirect_from: "/display/KD/%5BWS%5D+Contains+String" 
description: 
---
Description
-----------

Verify that an expected text appeared in the returned data from a web service call.

Parameters 
-----------

<table><thead><tr><th>Parameter</th><th>Parameter Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>response&nbsp;</span></td><td><span>ResponseObject&nbsp;</span></td><td><span>required</span></td><td><span>the object represents for a HTTP Response, user can get responded content type, data, header properties (sometime user may want to get cookie from response header)</span></td></tr><tr><td><span>string&nbsp;</span></td><td><span>String&nbsp;</span></td><td><span>required</span></td><td><span>the text you want to look for</span></td></tr><tr><td><span>useRegex</span></td><td><span>Boolean&nbsp;</span></td><td><span>required</span></td><td><span>indicate whether the text is a regular expression</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling&nbsp;</span></td><td><span>optional</span></td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

*   **true**, if your text is found; otherwise, **false**.

Example
-------

You want to verify if the text "email@katalon.com" is in the data returned from "resObj".

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.testobject.ConditionType as ConditionType
import com.kms.katalon.core.testobject.RequestObject as RequestObject
import com.kms.katalon.core.testobject.TestObjectProperty as TestObjectProperty
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WebAPI
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint

'Send a SOAP request and returns its response'
def resObj = WS.sendRequest(findTestObject('SOAP_EmployeeInfo'))
 
'Verify if response object contains email@katalon.com value'
WS.containsString(resObj, 'email@katalon.com', false)
```