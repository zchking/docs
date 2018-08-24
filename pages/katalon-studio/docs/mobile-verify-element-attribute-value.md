---
title: "[Mobile] Verify Element Attribute Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-attribute-value.html 
redirect_from: "/display/KD/%5BMobile%5D+Verify+Element+Attribute+Value" 
description: 
---
Description
-----------

Verify if the element has an attribute with the specified name and value  

Parameters
----------

<table><thead><tr><th>Parameter</th><th>Parameter Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td>to</td><td>TestObject&nbsp;</td><td>Required</td><td>Represent a mobile element.</td></tr><tr><td>attributeName&nbsp;</td><td>String&nbsp;</td><td>Required</td><td>The value of the attribute to verify.</td></tr><tr><td>attributeValue&nbsp;</td><td>String&nbsp;</td><td>Required</td><td>The value of the attribute to verify.</td></tr><tr><td>timeout&nbsp;</td><td>int</td><td>Required</td><td>System will wait at most timeout (seconds) to return a result.</td></tr><tr><td>flowControl</td><td>FailureHandling</td><td>Optional</td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

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