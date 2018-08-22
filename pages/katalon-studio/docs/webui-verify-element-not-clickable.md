---
title: "[WebUI] Verify Element Not Clickable" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-element-not-clickable.html 
description: 
---
This keyword only works with Element has **tag** _<input>_ with attribute **disable.**

_![](../../images/katalon-studio/docs/webui-verify-element-not-clickable/uua9rf0a0ve6.png)_

Description
-----------

Verify if the given element is NOT clickable. 

Parameters
----------

<table class="relative-table wrapped confluenceTable" style="width: 97.9511%;"><colgroup><col style="width: 7.40741%;"><col style="width: 9.74235%;"><col style="width: 7.56844%;"><col style="width: 75.2818%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh" colspan="1">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">to</span></td><td class="xtd-1-1 confluenceTd" colspan="1">TestObject</td><td class="xtd-1-2 confluenceTd" colspan="1">Required</td><td class="xtd-1-3 confluenceTd"><div class="content-wrapper"><p>&nbsp;</p><p><span style="color: rgb(0,0,0);">Represent a web element.</span></p></div></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-2-1 confluenceTd" colspan="1">FailureHandling</td><td class="xtd-2-2 confluenceTd" colspan="1">Optional</td><td class="xtd-2-3 confluenceTd">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Returns
-------

<table class="relative-table wrapped confluenceTable" style="width: 54.9095%;"><colgroup><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh" colspan="1">Param Type</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1">boolean</td><td class="xtd-1-1 confluenceTd"><ul><li><p><strong>true: </strong>the element is present and NOT clickable.</p></li><li><strong>false: </strong>the element is present and clickable.</li></ul></td></tr></tbody></table>

Example
-------

You want to verify if 'Make Appointment' button is NOT clickable.

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS

'Open browser and navigate to demo AUT site.'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Verify \'Make Appoint\' button is NOT clickable'
WebUI.verifyElementNotClickable(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

'Close browser'
WebUI.closeBrowser()
```