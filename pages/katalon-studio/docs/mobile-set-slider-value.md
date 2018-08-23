---
title: "[Mobile] Set Slider Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-set-slider-value.html 
description: 
---
Description
-----------

Set the value for Slider control (android.widget.SeekBar for Android, UIASlider for iOS) at specific percentage

Parameters
----------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Parameter</th><th class="" style="">Parameter Type</th><th class="" style="">Mandatory</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style=""><span style="" class="">to</span></td><td class="" style=""><span style="" class="">TestObject&nbsp;</span></td><td class="" style=""><span style="" class="">Required</span></td><td class="" style="">Represent a mobile element (android.widget.SeekBar for Android, UIASlider for iOS)</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">percent&nbsp;</span></td><td class="" style=""><span style="" class="">Number&nbsp;</span></td><td class="" style=""><span style="" class="">Required</span></td><td class="" style="">Percentage value to set to the slider ( 0 &lt;= percent &lt;= 100 )</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">timeout&nbsp;</span></td><td class="" style=""><span style="" class="">int</span></td><td class="" style=""><span style="" class="">Required</span></td><td class="" style="">System will wait at most timeout (seconds) to return result</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" style=""><span style="" class="">Optional</span></td><td class="" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example
-------

You want to set slider value at 50% of the slider

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
 
'Set slider value at 50% of the slider'
Mobile.setSliderValue(findTestObject('/Application/App/android.widget.SeekBar0'), 50, 10)
 
'Close application on current selected android\'s device'
Mobile.closeApplication()
```