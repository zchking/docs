---
title: "[Mobile] Verify Element Not Exist" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-not-exist.html 
description: 
---
Description
-----------

Verify if a mobile element is not present.

Parameters  
------------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Parameter</th><th class="" style="">Parameter Type</th><th class="" style="">Mandatory</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style=""><span style="" class="">to</span></td><td class="" style=""><span style="" class="">TestObject&nbsp;</span></td><td class="" style=""><span style="" class="">Required</span></td><td class="" style="">Represent a mobile element</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" style=""><span style="" class="">Optional</span></td><td class="" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true** if the element is NOT present; otherwise,** false**

Example
-------

You want to verify if 'App' button is NOT presented in 10 seconds timeout.

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
 
'Verify App control is presented in 10 seconds timeout'
Mobile.verifyElementNotExist(findTestObject('Application/android.widget.TextView - App'), 10)
 
Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)
 
Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```