---
title: "[Mobile] Toggle Airplane Mode" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-toggle-airplane-mode.html 
description: 
---
Description  
-------------

Simulate toggling airplane mode on mobile devices.

 Parameters  
-------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | String | Required | \["yes", "on", "true"\] to turn on airplane mode; otherwise, airplane mode is turn off. |
| flowControl | FailureHandling | Optional | Specify [failure handling](https://docs.katalon.com/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example  
---------

You want to turn on airplane mode.

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

'Turn on airplane mode'
Mobile.toggleAirplaneMode('yes')

'Close application on current selected android\'s device'
Mobile.closeApplication()
```