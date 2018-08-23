---
title: "[WebUI] Wait For Angular Load" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-angular-load.html 
description: 
---
Description
-----------

Wait for Angular/AJAX to load within the given time in second unit.

Parameters
----------

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Param</th><th class="xtd-0-1 confluenceTh" style="">ParamType</th><th class="xtd-0-2 confluenceTh" colspan="1" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" colspan="1" style="">seconds</td><td class="xtd-1-1 confluenceTd" colspan="1" style="">int</td><td class="xtd-1-2 confluenceTd" colspan="1" style="">Required</td><td class="xtd-1-3 confluenceTd" colspan="1" style="">&nbsp;The number of seconds to wait</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-2-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-2-2 confluenceTd" colspan="1" style="">Optional</td><td class="xtd-2-3 confluenceTd" colspan="1" style=""><span style="">Spec</span>ify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Returns
-------

**true** if Angular/AJAX is ready. Otherwise, **false**.

Checking of whether Angular/AJAX is loaded or used in your current web application is based on this [approach](http://www.swtestacademy.com/selenium-wait-javascript-angular-ajax/).

Example
-------

Wait for Angular to ready on Angular site in 30 seconds.

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
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
 
'Open browser and navigate to AngularJS page
WebUI.openBrowser('https://angularjs.org/')

'Wait for Angular to be ready'
WebUI.waitForAngularLoad(30)

'Verify displayed text after Angular is ready'
WebUI.verifyTextPresent('Why AngularJS?', false)

'Close browser'
WebUI.closeBrowser()
```