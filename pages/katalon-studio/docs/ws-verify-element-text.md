---
title: "[WS] Verify Element Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws-verify-element-text.html 
description: 
---
Description
-----------

Verify that there is an element with expected text appeared in the returned data from a web service call.

Parameters 
-----------

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Parameter</th><th class="xtd-0-1 confluenceTh" style="">Parameter Type</th><th class="xtd-0-2 confluenceTh" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><span style="">response&nbsp;</span></td><td class="xtd-1-1 confluenceTd" style=""><span style="">ResponseObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd" style=""><span style="">Required</span></td><td class="xtd-1-3 confluenceTd" style=""><span style="">Represent an HTTP Response, the user can get responded content type, data, header properties (sometimes the user may want to get cookies from response header)</span></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><span style="">locator&nbsp;</span></td><td class="xtd-2-1 confluenceTd" style=""><span style="">String&nbsp;</span></td><td class="xtd-2-2 confluenceTd" style=""><span style="">Required</span></td><td class="xtd-2-3 confluenceTd" style=""><span style="">An expression Katalon will use to go through and look for the expected element(s), please refer to our user guide on how to write it:&nbsp;</span><a class="unresolved" href="#" style="">Handle Web Service Response object</a></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><span style="">text&nbsp;</span></td><td class="xtd-3-1 confluenceTd" style=""><span style="">String&nbsp;</span></td><td class="xtd-3-2 confluenceTd" style=""><span style="">Required</span></td><td class="xtd-3-3 confluenceTd" style=""><span style="">The expected text of element you want to verify in the responded data (usually is JSON/XML)</span></td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style=""><span style="">flowControl&nbsp;</span></td><td class="xtd-4-1 confluenceTd" style=""><span style="">FailureHandling&nbsp;</span></td><td class="xtd-4-2 confluenceTd" style=""><span style="">Optional</span></td><td class="xtd-4-3 confluenceTd" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

*   **true**, if your element text is found, otherwise; **false**.

Example
-------

You want to verify converted weight after sending request is correct or not.

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
def response = WS.sendRequest(findTestObject('SOAP_ConvertWeight'))

'Verify converted weight after sending request is correct or not'
WS.verifyElementText(response, 'ConvertWeightResult', '3000')
```