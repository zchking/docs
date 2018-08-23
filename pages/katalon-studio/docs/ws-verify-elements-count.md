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

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead style=""><tr style=""><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Param</div></th><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Param Type</div></th><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Mandatory</div></th><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Description</div></th></tr></thead><tbody style=""><tr class="xtr-0" style=""><td class="xtd-0-0 confluenceTd" style=""><span style="">response</span></td><td class="xtd-0-1 confluenceTd" style=""><span style="">ResponseObject</span></td><td class="xtd-0-2 confluenceTd" style="">Required</td><td class="xtd-0-3 confluenceTd" style=""><span style="">Represent an HTTP Response, the user can get responded content type, data, header properties (sometimes the user may want to get cookies from response header)</span></td></tr><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><span style="">locator</span></td><td class="xtd-1-1 confluenceTd" style=""><span style="">String</span></td><td class="xtd-1-2 confluenceTd" style="">Required</td><td class="xtd-1-3 confluenceTd" style=""><span style="">An expression Katalon will use to go through and look for the expected element(s), please refer to our user guide for how to write it:&nbsp;</span><a href="/display/KD/Introduction+to+Web+Services+Test+Object" style="">Handle Web Service Response object</a></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><span style="">count&nbsp;</span></td><td class="xtd-2-1 confluenceTd" style=""><span style="">int&nbsp;</span></td><td class="xtd-2-2 confluenceTd" style="">Required</td><td class="xtd-2-3 confluenceTd" style=""><span style=""><span style="">T</span><span style="">he expected number of element(s) should appear in the responded data (usually is JSON/XML)</span></span></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-3-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-3-2 confluenceTd" style="">Optional</td><td class="xtd-3-3 confluenceTd" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true**, if your expectation is met, otherwise; **false**.

Example
-------

You want to verify number of expected elements in the response is 3

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
def response = WS.sendRequest(findTestObject('REST_EmployeeInfo'))

'Verify number of expected employee contact records'
WS.verifyElementsCount(resObj, 'employee.contacts', 3)
```