---
title: "[Mobile] Tap And Hold At Position" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-tap-and-hold-at-position.html 
description: 
---
Description
-----------

Tap and hold at a specific position on the screen of the mobile device.

Parameters
----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" colspan="1" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" colspan="1" style="">x</td><td class="" colspan="1" style="">Number</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">x position</td></tr><tr class="" style=""><td class="" colspan="1" style="">y</td><td class="" colspan="1" style="">Number</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">y position</td></tr><tr class="" style=""><td class="" colspan="1" style="">duration</td><td class="" colspan="1" style=""><span class="" style="">Number</span></td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style=""><span style="" class="">Duration (in seconds) that the tap&nbsp;</span>is held<span style="" class="">&nbsp;on the&nbsp;</span>element,<span style="" class="">&nbsp;if set to &lt;= 0 then will use default duration</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" colspan="1" style="">Optional</td><td class="" colspan="1" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example 
--------

You want to tap at (200,400) position and hold it for 10 seconds.

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

'Tap at 200,400 position and hold it for 10 seconds'
Mobile.tapAndHoldAtPosition(200, 400, 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```