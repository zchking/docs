---
title: "[WebUI] Verify Element Visible In Viewport" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui_verify_element_visible_in_viewport.html 
description: 
---
Description
-----------

Verify if the web element is visible in current [viewport](https://www.w3schools.com/css/css_rwd_viewport.asp)

Parameters
----------

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh"><span style="color: rgb(0,0,0);">Param</span></th><th class="xtd-0-1 confluenceTh"><span style="color: rgb(0,0,0);">Param Type</span></th><th class="xtd-0-2 confluenceTh" colspan="1"><span style="color: rgb(0,0,0);">Mandatory</span></th><th class="xtd-0-3 confluenceTh" colspan="1"><span style="color: rgb(0,0,0);">Description</span></th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">to</span></td><td class="xtd-1-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">TestObject</span></td><td class="xtd-1-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-1-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Represent a web element.</span></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">timeOut&nbsp;</span></td><td class="xtd-2-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">int&nbsp;</span></td><td class="xtd-2-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-2-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Maximum period of time (in seconds) that system will wait to return the result.</span></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-3-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-3-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Optional</span></td><td class="xtd-3-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Specify <span style="color: rgb(0,0,0);"><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a></span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="relative-table wrapped confluenceTable" style="width: 35.3264%;"><colgroup><col style="width: 23.3281%;"><col style="width: 76.6719%;"></colgroup><tbody><tr><th class="confluenceTh"><span style="color: rgb(0,0,0);">Param Type</span></th><th class="confluenceTh"><span style="color: rgb(0,0,0);">Description</span></th></tr><tr><td class="confluenceTd"><span style="color: rgb(0,0,0);">Boolean</span></td><td class="confluenceTd"><ul><li><span style="color: rgb(0,0,0);"><strong>true:</strong>&nbsp;the element is visible in current viewport.</span></li><li><span style="color: rgb(0,0,0);"><strong>false:</strong> the element is NOT visible in current viewport.</span></li></ul></td></tr></tbody></table>

Example
-------

You want to verify 'btn_Login' button to be visible in 10 seconds in the current viewport.

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

'Open browser and navigate to website that contains the element to wait for'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Wait for btn_Login to be visible in 10s'
WebUI.verifyElementVisibleInViewport(findTestObject('Page_Login/btn_Login'), 10)

'Close browser'
WebUI.closeBrowser()
```