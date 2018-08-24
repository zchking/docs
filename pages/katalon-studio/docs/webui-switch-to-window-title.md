---
title: "[WebUI] Switch To Window Title" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-switch-to-window-title.html 
redirect_from: "/display/KD/%5BWebUI%5D+Switch+To+Window+Title" 
description: 
---
Description  
-------------

Switch to the window with a given title. 

Parameters  
------------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>title</span></td><td><span>String</span></td><td><span>Required</span></td><td><span>Title of the window to switch to.</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td>Specify <a>failure handling</a> <span>schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example 
--------

You want to switch to the window with title "Documentation".

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

'Open browser and navigate to website katalon.com'
WebUI.openBrowser('https://www.katalon.com/')

'Click on Documentation to open another window'
WebUI.click(findTestObject('Page_Katalon Studio/a_Documentation'))

'Switch to Documentation window'
WebUI.switchToWindowTitle('Documentation')

'Close browser'
WebUI.closeBrowser()
```