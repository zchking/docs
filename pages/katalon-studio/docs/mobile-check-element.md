---
title: "[Mobile] Check Element" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-check-element.html 
description: 
---
Description
-----------

Check a check-box mobile element (android.widget.CheckBox for Android, UIASwitch for iOS)

Parameters
----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Parameter</th><th class="" style="">Parameter Type</th><th class="" style="">Mandatory</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><span style="" class="">to</span></td><td class="" style=""><span style="" class="">TestObject</span></td><td class="" style=""><span style="" class="">required</span></td><td class="" style="">represent a mobile element</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">timeout&nbsp;</span></td><td class="" style=""><span style="" class="">int</span></td><td class="" style=""><span style="" class="">required</span></td><td class="" style="">system will wait at most timeout (seconds) to return result</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl&nbsp;</span></td><td class="" style=""><span style="" class="">FailureHandling&nbsp;</span></td><td class="" style=""><span style="" class="">optional</span></td><td class="" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example
-------

You want to check on subscribe checkbox in 10 seconds timeout

```
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