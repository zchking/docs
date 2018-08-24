---
title: "[Mobile] Tap At Position" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-tap-at-position.html 
redirect_from: "/display/KD/%5BMobile%5D+Tap+At+Position" 
description: 
---
Description
-----------

Tap at a specific position on the screen of the mobile device.

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td>x</td><td>Number</td><td>Required</td><td>x position</td></tr><tr><td>y</td><td>Number</td><td>Required</td><td>y position</td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td>Optional</td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example 
--------

You want to tap at (200,300) position on the current screen.

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

'Tap at 200,300 position'
Mobile.tapAtPosition(200, 300)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```