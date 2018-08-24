---
title: "[Mobile] Scroll To Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-scroll-to-text.html 
redirect_from: "/display/KD/%5BMobile%5D+Scroll+To+Text" 
description: 
---
Description
-----------

Scroll to an element which contains the given text.

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>Required</td><td><span>Text of the element to scroll to</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td>Optional</td><td><span>Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example 
--------

Scroll to the element which the displayed text is Xfermodes.

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

'Scroll to element which displayed text is Xfermodes'
Mobile.scrollToText('Xfermodes')

'Get item\'s label'
def itemText = Mobile.getText(findTestObject('Application/Graphics/android.widget.TextView - Xfermodes'), GlobalVariable.G_Timeout)

'Verify if item\'s label is equal to \"Xfermodes\"'
Mobile.verifyEqual(itemText, 'Xfermodes')

'Close application on current selected android\'s device'
Mobile.closeApplication()
```