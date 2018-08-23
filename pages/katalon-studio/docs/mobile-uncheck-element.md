---
title: "[Mobile] Uncheck Element" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-uncheck-element.html 
description: 
---
Description
-----------

Un-check a check-box mobile element (android.widget.CheckBox for Android, UIASwitch for iOS)

Parameters
----------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Parameter</th><th class="" style="">Parameter Type</th><th class="" style="">Mandatory</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style=""><span style="" class="">to</span></td><td class="" style=""><span style="" class="">TestObject&nbsp;</span></td><td class="" style=""><span style="" class="">Required</span></td><td class="" style="">Represent a mobile element.</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">timeout&nbsp;</span></td><td class="" style=""><span style="" class="">int</span></td><td class="" style=""><span style="" class="">Required</span></td><td class="" style="">System will wait at most timeout (seconds) to return a result.</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" style=""><span style="" class="">Optional</span></td><td class="" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example
-------

You want to uncheck 'Subscribe' checkbox.

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
 
'Tap and hold app control for 10 seconds'
Mobile.tapAndHold(findTestObject('Application/android.widget.TextView - App'),10, 10)
 
Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)
 
Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)
 
'Uncheck subscribe checkbox'
Mobile.uncheckElement(findTestObject('Application/App/Activity/android.widget.Check - Subscribe'), 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```