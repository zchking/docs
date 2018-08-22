---
title: "[WebUI] Verify Alert Not Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-alert-not-present.html 
description: 
---
Description
-----------

Verify if alert does not present

Parameters
----------

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1">timeout</td><td class="xtd-1-1 confluenceTd" colspan="1">int</td><td class="xtd-1-2 confluenceTd" colspan="1">Required</td><td class="xtd-1-3 confluenceTd" colspan="1">Timeout waiting for alert to NOT present.</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-2-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-2-2 confluenceTd" colspan="1">Optional</td><td class="xtd-2-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Spec</span>ify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Returns
-------

<table class="relative-table wrapped confluenceTable" style="width: 33.4909%;"><colgroup><col style="width: 37.0283%;"><col style="width: 62.9717%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param Type</th><th class="xtd-0-1 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1">boolean</td><td class="xtd-1-1 confluenceTd" colspan="1"><ul><li>true if alert is not present</li><li>otherwise, false</li></ul></td></tr></tbody></table>

Example
-------

You want to verify if an alert is NOT present in 20 seconds.

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

'Open browser and navigate to website which alert is not present'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Verify alert is not present after 20 seconds'
WebUI.verifyAlertNotPresent(20)

'Close browser'
WebUI.closeBrowser()
```