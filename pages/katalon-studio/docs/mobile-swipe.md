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

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""><col style="" class=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" colspan="1" style="">Description</th><th class="" colspan="1" style="">Note</th></tr><tr class="" style=""><td class="" colspan="1" style="">startX</td><td class="" colspan="1" style="">int</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">Starting x position</td><td class="" colspan="1" style="">&nbsp;</td></tr><tr class="" style=""><td class="" colspan="1" style="">startY</td><td class="" colspan="1" style="">int</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">Starting y position</td><td class="" colspan="1" style="">&nbsp;</td></tr><tr class="" style=""><td class="" colspan="1" style="">endX</td><td class="" colspan="1" style="">int</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">Ending x position</td><td class="" colspan="1" style="">Since 5.1.0.2:<br class="" style="">Relative x position of startX</td></tr><tr class="" style=""><td class="" colspan="1" style="">endY</td><td class="" colspan="1" style="">int</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">Ending y position</td><td class="" colspan="1" style="">Since 5.1.0.2<br class="" style="">Relative y position of start Y</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" colspan="1" style="">Optional</td><td class="" colspan="1" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td><td class="" colspan="1" style="">&nbsp;</td></tr></tbody></table>

Example 
--------

You want to swipe from (200,300) position to (400,600) position on current screen.

```
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