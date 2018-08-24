---
title: "[Mobile] Set Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-set-text.html 
description: 
---
Description
===========

Set text to a mobile element.

Parameters
==========

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td>to</td><td>TestObject</td><td>Required</td><td>Represent a mobile element.</td></tr><tr><td>text</td><td>String</td><td>Required</td><td>The text to set on the mobile element.</td></tr><tr><td>timeout</td><td>int</td><td>Required</td><td><span>maximum period of time (in seconds) that system will wait to return a result</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td>Optional</td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example 
========

You want to set text on textbox control.

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

'Set text on textbox control'
Mobile.setText(findTestObject('Application/Graphics/android.widget.TextView - Xfermodes'),'Your text here', GlobalVariable.G_Timeout)

'Verify if item\'s label is equal to \"Xfermodes\"'
Mobile.verifyEqual(itemText, 'Xfermodes')

'Close application on current selected android\'s device'
Mobile.closeApplication()
```