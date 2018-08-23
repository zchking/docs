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

| Param | Param Type | Mandatory | Description | Note |
| --- | --- | --- | --- | --- |
| startX | int | Required | Starting x position |   |
| startY | int | Required | Starting y position |   |
| endX | int | Required | Ending x position | Since 5.1.0.2:  
Relative x position of startX |
| endY | int | Required | Ending y position | Since 5.1.0.2  
Relative y position of start Y |
| flowControl | FailureHandling | Optional | Specify [failure handling](https://docs.katalon.com/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |   |

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