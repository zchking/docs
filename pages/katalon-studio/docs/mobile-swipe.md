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

<table class="wrapped relative-table confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Param</th><th class="xtd-0-1 confluenceTh" style="">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1" style="">Description</th><th class="xtd-0-4 confluenceTh" colspan="1" style="">Note</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" colspan="1" style="">startX</td><td class="xtd-1-1 confluenceTd" colspan="1" style="">int</td><td class="xtd-1-2 confluenceTd" colspan="1" style="">Required</td><td class="xtd-1-3 confluenceTd" colspan="1" style="">Starting x position</td><td class="xtd-1-4 confluenceTd" colspan="1" style="">&nbsp;</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" colspan="1" style="">startY</td><td class="xtd-2-1 confluenceTd" colspan="1" style="">int</td><td class="xtd-2-2 confluenceTd" colspan="1" style="">Required</td><td class="xtd-2-3 confluenceTd" colspan="1" style="">Starting y position</td><td class="xtd-2-4 confluenceTd" colspan="1" style="">&nbsp;</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" colspan="1" style="">endX</td><td class="xtd-3-1 confluenceTd" colspan="1" style="">int</td><td class="xtd-3-2 confluenceTd" colspan="1" style="">Required</td><td class="xtd-3-3 confluenceTd" colspan="1" style="">Ending x position</td><td class="xtd-3-4 confluenceTd" colspan="1" style="">Since 5.1.0.2:<br style="">Relative x position of startX</td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" colspan="1" style="">endY</td><td class="xtd-4-1 confluenceTd" colspan="1" style="">int</td><td class="xtd-4-2 confluenceTd" colspan="1" style="">Required</td><td class="xtd-4-3 confluenceTd" colspan="1" style="">Ending y position</td><td class="xtd-4-4 confluenceTd" colspan="1" style="">Since 5.1.0.2<br style="">Relative y position of start Y</td></tr><tr class="xtr-5" style=""><td class="xtd-5-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-5-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-5-2 confluenceTd" colspan="1" style="">Optional</td><td class="xtd-5-3 confluenceTd" colspan="1" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td><td class="xtd-5-4 confluenceTd" colspan="1" style="">&nbsp;</td></tr></tbody></table>

Example 
--------

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