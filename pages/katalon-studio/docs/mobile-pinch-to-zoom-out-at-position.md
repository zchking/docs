---
title: "[Mobile] Pinch To Zoom Out At Position" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-pinch-to-zoom-out-at-position.html 
description: 
---
Description
-----------

Pinch to zoom out at a specific position on the screen of the mobile device.

Parameters
----------

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Param</th><th class="xtd-0-1 confluenceTh" style="">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" colspan="1" style="">x</td><td class="xtd-1-1 confluenceTd" colspan="1" style="">Number</td><td class="xtd-1-2 confluenceTd" colspan="1" style="">Required</td><td class="xtd-1-3 confluenceTd" colspan="1" style="">x position</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" colspan="1" style="">y</td><td class="xtd-2-1 confluenceTd" colspan="1" style="">Number</td><td class="xtd-2-2 confluenceTd" colspan="1" style="">Required</td><td class="xtd-2-3 confluenceTd" colspan="1" style="">y position</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" colspan="1" style="">offset</td><td class="xtd-3-1 confluenceTd" colspan="1" style="">Number</td><td class="xtd-3-2 confluenceTd" colspan="1" style="">Required</td><td class="xtd-3-3 confluenceTd" colspan="1" style="">The offset length to pinch</td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-4-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-4-2 confluenceTd" colspan="1" style="">Optional</td><td class="xtd-4-3 confluenceTd" colspan="1" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example 
--------

You want to pinch to zoom in at position (200,300).

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

'Pinch to zoom in at position 200,300'
Mobile.pinchToZoomInAtPosition(200, 300, 20)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```