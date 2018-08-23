---
title: "[Mobile] Set Slider Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-set-slider-value.html 
description: 
---
Description
===========

Set the value for Slider control (android.widget.SeekBar for Android, UIASlider for iOS) at specific percentage

Parameters
==========

<table><thead><tr><th>Parameter</th><th>Parameter Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>to</span></td><td><span>TestObject&nbsp;</span></td><td><span>Required</span></td><td>Represent a mobile element (android.widget.SeekBar for Android, UIASlider for iOS)</td></tr><tr><td><span>percent&nbsp;</span></td><td><span>Number&nbsp;</span></td><td><span>Required</span></td><td>Percentage value to set to the slider ( 0 &lt;= percent &lt;= 100 )</td></tr><tr><td><span>timeout&nbsp;</span></td><td><span>int</span></td><td><span>Required</span></td><td>System will wait at most timeout (seconds) to return result</td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td><span>Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example
=======

You want to set slider value at 50% of the slider

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
 
'Set slider value at 50% of the slider'
Mobile.setSliderValue(findTestObject('/Application/App/android.widget.SeekBar0'), 50, 10)
 
'Close application on current selected android\'s device'
Mobile.closeApplication()
```