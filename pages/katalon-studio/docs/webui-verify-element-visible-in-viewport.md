---
title: "[WebUI] Verify Element Visible In Viewport" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-element-visible-in-viewport.html 
redirect_from: "/display/KD/%5BWebUI%5D+Verify+Element+Visible+In+Viewport" 
description: 
---
Description
-----------

Verify if the web element is visible in current [viewport](https://www.w3schools.com/css/css_rwd_viewport.asp)

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>to</span></td><td><span>TestObject</span></td><td><span>Required</span></td><td><span>Represent a web element.</span></td></tr><tr><td><span>timeOut&nbsp;</span></td><td><span>int&nbsp;</span></td><td><span>Required</span></td><td><span>Maximum period of time (in seconds) that system will wait to return the result.</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td><span>Specify <span><a>failure handling</a></span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td><span>Boolean</span></td><td><ul><li><span><strong>true:</strong>&nbsp;the element is visible in current viewport.</span></li><li><span><strong>false:</strong> the element is NOT visible in current viewport.</span></li></ul></td></tr></tbody></table>

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