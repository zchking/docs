---
title: "[Mobile] Take Screenshot" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-take-screenshot.html 
redirect_from: "/display/KD/%5BMobile%5D+Take+Screenshot" 
description: 
---
Description  
-------------

Take a screenshot of the current device screen.

Parameters  
------------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td>fileName</td><td>String</td><td>Required</td><td>&nbsp;The absolute path of the saved screenshot image file</td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example 
--------

You want to take a screenshot of the current device screen and save it to another location.

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

'Take screenshot of current device screen'
Mobile.takeScreenshot("D:\\screenshot.png")

'Close application on current selected android\'s device'
Mobile.closeApplication()
```