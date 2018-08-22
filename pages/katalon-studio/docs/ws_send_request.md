---
title: "[WS] Send Request" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws_send_request.html 
description: 
---
Description
-----------

Send an HTTP Request to a web server.

Parameters
----------

<table class="wrapped relative-table confluenceTable" style="width: 100.0%;"><colgroup><col style="width: 7.57098%;"><col style="width: 11.1199%;"><col style="width: 7.41325%;"><col style="width: 73.8959%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh">Mandatory</th><th class="xtd-0-3 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">request&nbsp;</span></td><td class="xtd-1-1 confluenceTd"><span style="color: rgb(0,0,0);">RequestObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-1-3 confluenceTd"><span style="color: rgb(0,0,0);">Represent a HTTP Request, user needs to define it from Object Repository &gt; New &gt; Web Service Request</span></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl&nbsp;</span></td><td class="xtd-2-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling&nbsp;</span></td><td class="xtd-2-2 confluenceTd"><span style="color: rgb(0,0,0);">Optional</span></td><td class="xtd-2-3 confluenceTd"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="wrapped confluenceTable"><colgroup><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param Type</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd">ResponseObject</td><td class="xtd-1-1 confluenceTd">A response object</td></tr></tbody></table>

Example
-------

You want to send a HTTP request to web server

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