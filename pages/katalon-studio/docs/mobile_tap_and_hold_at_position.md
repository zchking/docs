---
title: "[Mobile] Tap And Hold At Position" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile_tap_and_hold_at_position.html 
description: 
---
Description
-----------

Tap and hold at a specific position on the screen of the mobile device.

Parameters
----------

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1">x</td><td class="xtd-1-1 confluenceTd" colspan="1">Number</td><td class="xtd-1-2 confluenceTd" colspan="1">Required</td><td class="xtd-1-3 confluenceTd" colspan="1">x position</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1">y</td><td class="xtd-2-1 confluenceTd" colspan="1">Number</td><td class="xtd-2-2 confluenceTd" colspan="1">Required</td><td class="xtd-2-3 confluenceTd" colspan="1">y position</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd" colspan="1">duration</td><td class="xtd-3-1 confluenceTd" colspan="1"><span>Number</span></td><td class="xtd-3-2 confluenceTd" colspan="1">Required</td><td class="xtd-3-3 confluenceTd" colspan="1"><span style="color: rgb(52,52,55);">Duration (in seconds) that the tap&nbsp;</span>is held<span style="color: rgb(52,52,55);">&nbsp;on the&nbsp;</span>element,<span style="color: rgb(52,52,55);">&nbsp;if set to &lt;= 0 then will use default duration</span></td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-4-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-4-2 confluenceTd" colspan="1">Optional</td><td class="xtd-4-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

  
Example
----------

You want to tap at (200,400) position and hold it for 10 seconds.

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

'Tap at 200,400 position and hold it for 10 seconds'
Mobile.tapAndHoldAtPosition(200, 400, 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```