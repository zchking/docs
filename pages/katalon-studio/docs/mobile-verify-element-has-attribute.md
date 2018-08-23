---
title: "[Mobile] Verify Element Has Attribute" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-has-attribute.html 
description: 
---
Description
-----------

Verify if the element has an attribute with a specific name.

Parameters
----------

<table><thead><tr><th>Parameter</th><th>Parameter Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>to</span></td><td><span>TestObject&nbsp;</span></td><td><span>Required</span></td><td><span>Represent a mobile element</span></td></tr><tr><td><span>attributeName&nbsp;</span></td><td><span>String&nbsp;</span></td><td><span>Required</span></td><td><span>The name of the attribute to verify</span></td></tr><tr><td><span>timeout&nbsp;</span></td><td><span>int</span></td><td><span>Required</span></td><td><span>System will wait at most timeout (seconds) to return a result</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td><span>Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true** if the element has the attribute with a specific name; otherwise, **false**

Example
-------

You want to verify 'App' control has 'class' attribute in 10 seconds timeout.

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
 
'Verify App control has class attribute in 10 seconds timeout'
Mobile.verifyElementExist(findTestObject('Application/android.widget.TextView - App'),'class', 10)
 
Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)
 
Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```