---
title: "[WS] Send Request" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws-send-request.html 
description: 
---
Description
-----------

Send an HTTP Request to a web server.

Parameters
----------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" style="">Mandatory</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style=""><span style="" class="">request&nbsp;</span></td><td class="" style=""><span style="" class="">RequestObject&nbsp;</span></td><td class="" style=""><span style="" class="">Required</span></td><td class="" style=""><span style="" class="">Represent a HTTP Request, user needs to define it from Object Repository &gt; New &gt; Web Service Request</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl&nbsp;</span></td><td class="" style=""><span style="" class="">FailureHandling&nbsp;</span></td><td class="" style=""><span style="" class="">Optional</span></td><td class="" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Param Type</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style="">ResponseObject</td><td class="" style="">A response object</td></tr></tbody></table>

Example
-------

You want to send a HTTP request to web server

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
def response = WS.sendRequest(findTestObject('SOAP_ConvertWeight'))

'Verify converted weight after sending request is correct or not'
WS.verifyElementText(response, 'ConvertWeightResult', '3000')
```