---
title: "[Mobile] Check Element" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-check-element.html 
redirect_from: "/display/KD/%5BMobile%5D+Check+Element" 
description: 
---
Description
-----------

Check a check-box mobile element (android.widget.CheckBox for Android, UIASwitch for iOS)

Parameters
----------

<table><thead><tr><th>Parameter</th><th>Parameter Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>to</span></td><td><span>TestObject</span></td><td><span>required</span></td><td>represent a mobile element</td></tr><tr><td><span>timeout&nbsp;</span></td><td><span>int</span></td><td><span>required</span></td><td>system will wait at most timeout (seconds) to return result</td></tr><tr><td><span>flowControl&nbsp;</span></td><td><span>FailureHandling&nbsp;</span></td><td><span>optional</span></td><td><span>Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example
-------

You want to check on subscribe checkbox in 10 seconds timeout

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil

'Get full directory\'s path of android application'
def appPath = PathUtil.relativeToAbsolutePath(GlobalVariable.G_AndroidApp, RunConfiguration.getProjectDir())

'Start application on current selected android\'s device'
Mobile.startApplication(appPath, false)

Mobile.tap(findTestObject('Application/android.widget.TextView - App'), 10)

Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)

Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)

'Check on subscribe checkbox'
Mobile.checkElement(findTestObject('Application/App/Activity/android.widget.Check - Subscribe'), 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```