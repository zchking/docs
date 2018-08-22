---
title: "[WebUI] Switch To Window Index" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-switch-to-window-index.html 
description: 
---
Description  
-------------

Switch to the window with given index. 

Window index is counted by order of window's appearance and starts from 0. After switching, window index does NOT change, i.e. the first window still has index 0, the second window still has index 1 and so on.

Parameters  
------------

<table class="relative-table wrapped confluenceTable" style="width: 86.3412%;"><colgroup><col style="width: 7.62873%;"><col style="width: 7.69231%;"><col style="width: 5.97584%;"><col style="width: 78.7031%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">index</span></td><td class="xtd-1-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">int</span></td><td class="xtd-1-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-1-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">The index of the window to switch to, </span>the index<span style="color: rgb(0,0,0);"> is </span>a 0-based<span style="color: rgb(0,0,0);"> number.</span></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-2-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-2-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Optional</span></td><td class="xtd-2-3 confluenceTd" colspan="1">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a> <span style="color: rgb(0,0,0);">schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example 
--------

You want to switch to the second window (index 1).

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
WebUI.switchToWindowIndex(1)

'Close browser'
WebUI.closeBrowser()
```