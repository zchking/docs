---
title: "[WS] Verify Elements Count" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws-verify-elements-count.html 
description: 
---
Description
-----------

Verify the number of expected elements (JSON/XML) in the response (output) of a web service call.

Parameters
----------

<table class="" style="table-layout: fixed;"><thead class="" style=""><tr class="" style=""><th class="" style=""><div class="" style="">Param</div></th><th class="" style=""><div class="" style="">Param Type</div></th><th class="" style=""><div class="" style="">Mandatory</div></th><th class="" style=""><div class="" style="">Description</div></th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><span style="" class="">response</span></td><td class="" style=""><span style="" class="">ResponseObject</span></td><td class="" style="">Required</td><td class="" style=""><span style="" class="">Represent an HTTP Response, the user can get responded content type, data, header properties (sometimes the user may want to get cookies from response header)</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">locator</span></td><td class="" style=""><span style="" class="">String</span></td><td class="" style="">Required</td><td class="" style=""><span style="" class="">An expression Katalon will use to go through and look for the expected element(s), please refer to our user guide for how to write it:&nbsp;</span><a href="/display/KD/Introduction+to+Web+Services+Test+Object" class="" style="">Handle Web Service Response object</a></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">count&nbsp;</span></td><td class="" style=""><span style="" class="">int&nbsp;</span></td><td class="" style="">Required</td><td class="" style=""><span class="" style=""><span style="" class="">T</span><span style="" class="">he expected number of element(s) should appear in the responded data (usually is JSON/XML)</span></span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" style="">Optional</td><td class="" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true**, if your expectation is met, otherwise; **false**.

Example
-------

You want to verify number of expected elements in the response is 3

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
def response = WS.sendRequest(findTestObject('REST_EmployeeInfo'))

'Verify number of expected employee contact records'
WS.verifyElementsCount(resObj, 'employee.contacts', 3)
```