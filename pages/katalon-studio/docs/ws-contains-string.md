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

<table class="wrapped relative-table confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Parameter</th><th class="xtd-0-1 confluenceTh" style="">Parameter Type</th><th class="xtd-0-2 confluenceTh" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><span style="">response&nbsp;</span></td><td class="xtd-1-1 confluenceTd" style=""><span style="">ResponseObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd" style=""><span style="">required</span></td><td class="xtd-1-3 confluenceTd" style=""><span style="">the object represents for a HTTP Response, user can get responded content type, data, header properties (sometime user may want to get cookie from response header)</span></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><span style="">string&nbsp;</span></td><td class="xtd-2-1 confluenceTd" style=""><span style="">String&nbsp;</span></td><td class="xtd-2-2 confluenceTd" style=""><span style="">required</span></td><td class="xtd-2-3 confluenceTd" style=""><span style="">the text you want to look for</span></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><span style="">useRegex</span></td><td class="xtd-3-1 confluenceTd" style=""><span style="">Boolean&nbsp;</span></td><td class="xtd-3-2 confluenceTd" style=""><span style="">required</span></td><td class="xtd-3-3 confluenceTd" style=""><span style="">indicate whether the text is a regular expression</span></td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" colspan="1" style=""><span style="">flowControl</span></td><td class="xtd-4-1 confluenceTd" colspan="1" style=""><span style="">FailureHandling&nbsp;</span></td><td class="xtd-4-2 confluenceTd" colspan="1" style=""><span style="">optional</span></td><td class="xtd-4-3 confluenceTd" colspan="1" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

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