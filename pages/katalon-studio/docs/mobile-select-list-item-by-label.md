---
title: "[Mobile] Select List Item By Label" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-select-list-item-by-label.html 
description: 
---
Description
-----------

Select item of listview control by its label.

Parameters
----------

<table><thead><tr><th>Parameter</th><th>Parameter Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>to</span></td><td><span>TestObject&nbsp;</span></td><td><span>Required</span></td><td>Represent a mobile element</td></tr><tr><td><span>label&nbsp;</span></td><td><span>String</span></td><td><span>Required</span></td><td>Label item</td></tr><tr><td><span>timeout&nbsp;</span></td><td><span>int</span></td><td><span>Required</span></td><td>System will wait at most timeout (seconds) to return a result</td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td><span>Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example
-------

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

Mobile.tap(findTestObject('Application/android.widget.TextView - Graphics'), GlobalVariable.G_Timeout)

Mobile.scrollToText('Xfermodes')

'Select \'Record 1\' item in the list'
Mobile.selectListItemByLabel(findTestObject('android.widget.Button1 - Go to List'), 'Record 1', 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```