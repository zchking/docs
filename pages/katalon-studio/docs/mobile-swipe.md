---
title: "[Mobile] Swipe" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-swipe.html 
description: 
---
Description
-----------

Simulate swiping fingers on the mobile device.

Parameters
----------

<table class="wrapped relative-table confluenceTable" style="width: 75.5876%;"><colgroup><col style="width: 9.24623%;"><col style="width: 12.0603%;"><col style="width: 9.24623%;"><col style="width: 49.8492%;"><col style="width: 19.598%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1">Description</th><th class="xtd-0-4 confluenceTh" colspan="1">Note</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1">startX</td><td class="xtd-1-1 confluenceTd" colspan="1">int</td><td class="xtd-1-2 confluenceTd" colspan="1">Required</td><td class="xtd-1-3 confluenceTd" colspan="1">Starting x position</td><td class="xtd-1-4 confluenceTd" colspan="1">&nbsp;</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1">startY</td><td class="xtd-2-1 confluenceTd" colspan="1">int</td><td class="xtd-2-2 confluenceTd" colspan="1">Required</td><td class="xtd-2-3 confluenceTd" colspan="1">Starting y position</td><td class="xtd-2-4 confluenceTd" colspan="1">&nbsp;</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd" colspan="1">endX</td><td class="xtd-3-1 confluenceTd" colspan="1">int</td><td class="xtd-3-2 confluenceTd" colspan="1">Required</td><td class="xtd-3-3 confluenceTd" colspan="1">Ending x position</td><td class="xtd-3-4 confluenceTd" colspan="1">Since 5.1.0.2:<br>Relative x position of startX</td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd" colspan="1">endY</td><td class="xtd-4-1 confluenceTd" colspan="1">int</td><td class="xtd-4-2 confluenceTd" colspan="1">Required</td><td class="xtd-4-3 confluenceTd" colspan="1">Ending y position</td><td class="xtd-4-4 confluenceTd" colspan="1">Since 5.1.0.2<br>Relative y position of start Y</td></tr><tr class="xtr-5"><td class="xtd-5-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-5-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-5-2 confluenceTd" colspan="1">Optional</td><td class="xtd-5-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td><td class="xtd-5-4 confluenceTd" colspan="1">&nbsp;</td></tr></tbody></table>

Example
-------

You want to swipe from (200,300) position to (400,600) position on current screen.

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil

'Start application on current selected android\'s device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)

Mobile.tap(findTestObject('Application/android.widget.TextView - Graphics'), GlobalVariable.G_Timeout)

'Swipe from 200,300 to 400,600 posisition on screen'
Mobile.swipe(200, 300, 400, 600)
 
'Since 5.1.0.2, endX and endY will be relative position of (startX, startY) position
Mobile.swipe(200, 300, 200, 300)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```