---
title: "[WebUI] Drag And Drop To Object" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-drag-and-drop-to-object.html 
description: 
---
Description
-----------

Drag an object and drop it onto another object.

Parameters
----------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Param</th><th class="" colspan="1" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style=""><span style="" class="">sourceObject</span></td><td class="" colspan="1" style="">TestObject</td><td class="" colspan="1" style="">Required</td><td class="" style=""><p class="" style=""><span style="" class="">The source object.</span></p></td></tr><tr class="" style=""><td class="" colspan="1" style="">destinationObject</td><td class="" colspan="1" style="">TestObject</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">The destination object.</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" colspan="1" style="">FailureHandling</td><td class="" colspan="1" style="">Optional</td><td class="" style="">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Example
-------

You want to drag 'Drop me to target' div and drop it to 'Drop here' div

```
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