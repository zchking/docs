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

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | Number | Required | x position |
| y | Number | Required | y position |
| offset | Number | Required | The offset length to pinch |
| flowControl | FailureHandling | Optional | Specify [failure handling](https://docs.katalon.com/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to pinch to zoom in at position (200,300).

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

'Pinch to zoom in at position 200,300'
Mobile.pinchToZoomInAtPosition(200, 300, 20)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```