---
title: "[WebUI] Drag And Drop To Object" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-drag-and-drop-to-object.html 
redirect_from: "/display/KD/%5BWebUI%5D+Drag+And+Drop+To+Object" 
description: 
---
Description
-----------

Drag an object and drop it onto another object.

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>sourceObject</span></td><td>TestObject</td><td>Required</td><td><p><span>The source object.</span></p></td></tr><tr><td>destinationObject</td><td>TestObject</td><td>Required</td><td>The destination object.</td></tr><tr><td><span>flowControl</span></td><td>FailureHandling</td><td>Optional</td><td>Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Example
-------

You want to drag 'Drop me to target' div and drop it to 'Drop here' div

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

WebUI.openBrowser('https://jqueryui.com/droppable/')

'Drag \'Drop me to target\' div and drop it to \'Drop here\' div'
WebUI.dragAndDropToObject(findTestObject('Page_jQuery_Droppable/div_draggable'), findTestObject('Page_jQuery_Droppable/div_droppable'))

WebUI.closeBrowser()
```