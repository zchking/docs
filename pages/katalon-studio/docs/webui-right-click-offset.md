---
title: "[WebUI] Right Click Offset" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-right-click-offset.html 
description: 
---
Description
-----------

Right-click on the given element with the relative position (x, y) from the top-left corner of that element.

Parameters
----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" colspan="1" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><span style="" class="">to</span></td><td class="" colspan="1" style="">TestObject</td><td class="" colspan="1" style="">Required</td><td class="" style=""><p class="" style=""><span style="" class="">Represent a web element.</span></p></td></tr><tr class="" style=""><td class="" colspan="1" style="">offsetX</td><td class="" colspan="1" style="">int</td><td class="" colspan="1" style=""><span class="" style="">Required</span></td><td class="" colspan="1" style="">x position in relative to the element</td></tr><tr class="" style=""><td class="" colspan="1" style=""><span class="" style="">offsetY</span></td><td class="" colspan="1" style="">int</td><td class="" colspan="1" style=""><span class="" style="">Required</span></td><td class="" colspan="1" style="">y position in relative to the element</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" colspan="1" style="">FailureHandling</td><td class="" colspan="1" style="">Optional</td><td class="" style="">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Example
-------

You want to right-click on the top-left cell of the Tic Tac Toe board.

```
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

'Open browser and navigate to Tic Tac Toe site.'
WebUI.openBrowser('https://codepen.io/solartic/full/qEGqNL/')

'Right-click on the top left cell'
WebUI.rightClickOffset(findTestObject('Object Repository/Page_CodePen - Tic Tac Toe/canvas_tic-tac-toe-board'), 100, 100)

'Close browser'
WebUI.closeBrowser()
```