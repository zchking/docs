---
title: "[WebUI] Get Viewport Width" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-get-viewport-width.html 
redirect_from: "/display/KD/%5BWebUI%5D+Get+Viewport+Width" 
description: 
---
Description  
-------------

Get current viewport's width value.

Parameters  
------------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td>Specify <a>failure handling</a> <span>schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns 
--------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td><span>int</span></td><td><span>Current viewport's&nbsp;</span><span>width</span><span>.</span></td></tr></tbody></table>

Example 
--------

You want to get viewport width value of web browser. The output is stored in variable "viewport_width".

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

'Open browser and navigate to AUT'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Get current viewport width'
viewport_width = WebUI.getViewportWidth()

'Close browser'
WebUI.closeBrowser()
```