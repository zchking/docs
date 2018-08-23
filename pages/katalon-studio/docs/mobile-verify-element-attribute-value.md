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

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Parameter</th><th class="xtd-0-1 confluenceTh" style="">Parameter Type</th><th class="xtd-0-2 confluenceTh" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style="">to</td><td class="xtd-1-1 confluenceTd" style="">TestObject&nbsp;</td><td class="xtd-1-2 confluenceTd" style="">Required</td><td class="xtd-1-3 confluenceTd" style="">Represent a mobile element.</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style="">attributeName&nbsp;</td><td class="xtd-2-1 confluenceTd" style="">String&nbsp;</td><td class="xtd-2-2 confluenceTd" style="">Required</td><td class="xtd-2-3 confluenceTd" style="">The value of the attribute to verify.</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" colspan="1" style="">attributeValue&nbsp;</td><td class="xtd-3-1 confluenceTd" colspan="1" style="">String&nbsp;</td><td class="xtd-3-2 confluenceTd" colspan="1" style="">Required</td><td class="xtd-3-3 confluenceTd" colspan="1" style="">The value of the attribute to verify.</td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style="">timeout&nbsp;</td><td class="xtd-4-1 confluenceTd" style="">int</td><td class="xtd-4-2 confluenceTd" style="">Required</td><td class="xtd-4-3 confluenceTd" style="">System will wait at most timeout (seconds) to return a result.</td></tr><tr class="xtr-5" style=""><td class="xtd-5-0 confluenceTd" style="">flowControl</td><td class="xtd-5-1 confluenceTd" style="">FailureHandling</td><td class="xtd-5-2 confluenceTd" style="">Optional</td><td class="xtd-5-3 confluenceTd" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true** if the element has the attribute with the specified name and value; otherwise, **false**

Example
-------

You want to verify if 'App' control has an attribute with name = 'class' and value is 'android.widget.TextView'

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
 
'Verify App control has attribute class with value android.widget.TextView'
Mobile.verifyElementAttributeValue(findTestObject('Application/android.widget.TextView - App'),'class','android.widget.TextView', 10)
 
'Close application on current selected android\'s device'
Mobile.closeApplication()
```