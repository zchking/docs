---
title: "[WS] Contains String" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws-contains-string.html 
description: 
---
Description
-----------

Verify that an expected text appeared in the returned data from a web service call.

Parameters 
-----------

<table class="wrapped relative-table confluenceTable" style="width: 100.0%;"><colgroup><col style="width: 7.25552%;"><col style="width: 10.2524%;"><col style="width: 7.41325%;"><col style="width: 75.0789%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Parameter</th><th class="xtd-0-1 confluenceTh">Parameter Type</th><th class="xtd-0-2 confluenceTh">Mandatory</th><th class="xtd-0-3 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">response&nbsp;</span></td><td class="xtd-1-1 confluenceTd"><span style="color: rgb(0,0,0);">ResponseObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd"><span style="color: rgb(0,0,0);">required</span></td><td class="xtd-1-3 confluenceTd"><span style="color: rgb(0,0,0);">the object represents for a HTTP Response, user can get responded content type, data, header properties (sometime user may want to get cookie from response header)</span></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">string&nbsp;</span></td><td class="xtd-2-1 confluenceTd"><span style="color: rgb(0,0,0);">String&nbsp;</span></td><td class="xtd-2-2 confluenceTd"><span style="color: rgb(0,0,0);">required</span></td><td class="xtd-2-3 confluenceTd"><span style="color: rgb(0,0,0);">the text you want to look for</span></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><span style="color: rgb(0,0,0);">useRegex</span></td><td class="xtd-3-1 confluenceTd"><span style="color: rgb(0,0,0);">Boolean&nbsp;</span></td><td class="xtd-3-2 confluenceTd"><span style="color: rgb(0,0,0);">required</span></td><td class="xtd-3-3 confluenceTd"><span style="color: rgb(0,0,0);">indicate whether the text is a regular expression</span></td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-4-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">FailureHandling&nbsp;</span></td><td class="xtd-4-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">optional</span></td><td class="xtd-4-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

  
Returns
----------

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