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

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Parameter</th><th class="" style="">Parameter Type</th><th class="" style="">Mandatory</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style=""><span style="" class="">response&nbsp;</span></td><td class="" style=""><span style="" class="">ResponseObject&nbsp;</span></td><td class="" style=""><span style="" class="">required</span></td><td class="" style=""><span style="" class="">the object represents for a HTTP Response, user can get responded content type, data, header properties (sometime user may want to get cookie from response header)</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">string&nbsp;</span></td><td class="" style=""><span style="" class="">String&nbsp;</span></td><td class="" style=""><span style="" class="">required</span></td><td class="" style=""><span style="" class="">the text you want to look for</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">useRegex</span></td><td class="" style=""><span style="" class="">Boolean&nbsp;</span></td><td class="" style=""><span style="" class="">required</span></td><td class="" style=""><span style="" class="">indicate whether the text is a regular expression</span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">flowControl</span></td><td class="" colspan="1" style=""><span style="" class="">FailureHandling&nbsp;</span></td><td class="" colspan="1" style=""><span style="" class="">optional</span></td><td class="" colspan="1" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

*   **true**, if your text is found; otherwise, **false**.

Example
-------

You want to verify if the text "email@katalon.com" is in the data returned from "resObj".

```
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