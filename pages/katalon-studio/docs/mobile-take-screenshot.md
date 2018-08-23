---
title: "[Mobile] Take Screenshot" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-take-screenshot.html 
description: 
---
Description  
-------------

Take a screenshot of the current device screen.

Parameters  
------------

Param

Param Type

Mandatory

Description

fileName

String

Required

 The absolute path of the saved screenshot image file

flowControl

FailureHandling

Optional

Specify [failure handling](https://docs.katalon.com/x/qAAM) schema to determine whether the execution should be allowed to continue or stop.

Example 
--------

You want to take a screenshot of the current device screen and save it to another location.

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

'Take screenshot of current device screen'
Mobile.takeScreenshot("D:\\screenshot.png")

'Close application on current selected android\'s device'
Mobile.closeApplication()
```