---
title: "[Mobile] Verify Element Not Has Attribute" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-not-has-attribute.html 
description: 
---
Description
-----------

Verify if the element has an attribute with the specified name 

Parameters
----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" style="">Mandatory</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><span style="" class="">to</span></td><td class="" style=""><span style="" class="">TestObject&nbsp;</span></td><td class="" style=""><span style="" class="">Required</span></td><td class="" style="">Represent a mobile element.</td></tr><tr class="" style=""><td class="" colspan="1" style="">attirbuteName</td><td class="" colspan="1" style="">String</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">The name of the attribute to verify.</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">timeout&nbsp;</span></td><td class="" style=""><span style="" class="">int</span></td><td class="" style=""><span style="" class="">Required</span></td><td class="" style="">System will wait at most timeout (seconds) to return result.</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" style=""><span style="" class="">Optional</span></td><td class="" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true** if the element doesn't have the attribute with the specified name; otherwise, **false**

Example
-------

You want to verify 'graphics' control doesn't have 'package' attribute

```
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint

'Start application on current selected android\'s device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)

Mobile.tap(findTestObject('Application/android.widget.TextView - Graphics'), GlobalVariable.G_Timeout)

Mobile.scrollToText('Xfermodes')


'Verify graphics control doesn\'t have \'package\' attribute'
Mobile.verifyElementNotHasAttribute(findTestObject('Application/android.widget.TextView - Graphics'), 'package', 12)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```