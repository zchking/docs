---
title: "[Mobile] Verify Element Attribute Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-attribute-value.html 
description: 
---
Description
-----------

Verify if the element has an attribute with the specified name and value  

Parameters
----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Parameter</th><th class="" style="">Parameter Type</th><th class="" style="">Mandatory</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style="">to</td><td class="" style="">TestObject&nbsp;</td><td class="" style="">Required</td><td class="" style="">Represent a mobile element.</td></tr><tr class="" style=""><td class="" style="">attributeName&nbsp;</td><td class="" style="">String&nbsp;</td><td class="" style="">Required</td><td class="" style="">The value of the attribute to verify.</td></tr><tr class="" style=""><td class="" colspan="1" style="">attributeValue&nbsp;</td><td class="" colspan="1" style="">String&nbsp;</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">The value of the attribute to verify.</td></tr><tr class="" style=""><td class="" style="">timeout&nbsp;</td><td class="" style="">int</td><td class="" style="">Required</td><td class="" style="">System will wait at most timeout (seconds) to return a result.</td></tr><tr class="" style=""><td class="" style="">flowControl</td><td class="" style="">FailureHandling</td><td class="" style="">Optional</td><td class="" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true** if the element has the attribute with the specified name and value; otherwise, **false**

Example
-------

You want to verify if 'App' control has an attribute with name = 'class' and value is 'android.widget.TextView'

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
 
'Verify App control has attribute class with value android.widget.TextView'
Mobile.verifyElementAttributeValue(findTestObject('Application/android.widget.TextView - App'),'class','android.widget.TextView', 10)
 
'Close application on current selected android\'s device'
Mobile.closeApplication()
```