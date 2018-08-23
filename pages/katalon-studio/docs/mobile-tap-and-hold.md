---
title: "[Mobile] Tap And Hold" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-tap-and-hold.html 
description: 
---
Description
-----------

Tap and hold on a mobile element for a duration

Parameters
----------

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Parameter</th><th class="xtd-0-1 confluenceTh" style="">Parameter Type</th><th class="xtd-0-2 confluenceTh" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><span style="">to</span></td><td class="xtd-1-1 confluenceTd" style=""><span style="">TestObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd" style=""><span style="">Required</span></td><td class="xtd-1-3 confluenceTd" style="">Represent a mobile element.</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><span style="">duration</span></td><td class="xtd-2-1 confluenceTd" style=""><span style="">Number&nbsp;</span></td><td class="xtd-2-2 confluenceTd" style=""><span style="">Required</span></td><td class="xtd-2-3 confluenceTd" style="">Duration (in seconds) that the tap is held on the element, if set to &lt;= 0 then will use default duration.</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><span style="">timeout&nbsp;</span></td><td class="xtd-3-1 confluenceTd" style=""><span style="">int</span></td><td class="xtd-3-2 confluenceTd" style=""><p style=""><span style="">Required</span></p></td><td class="xtd-3-3 confluenceTd" style="">System will wait at most timeout (seconds) to return the result.</td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-4-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-4-2 confluenceTd" style=""><span style="">Optional</span></td><td class="xtd-4-3 confluenceTd" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example
-------

You want to tap on 'App' control and hold it for 10 seconds.

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
 
'Tap and hold app control for 10 seconds'
Mobile.tapAndHold(findTestObject('Application/android.widget.TextView - App'),10, 10)
 
Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)
 
Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)
 
'Check on subscribe checkbox'
Mobile.checkElement(findTestObject('Application/App/Activity/android.widget.Check - Subscribe'), 10)
 
'Close application on current selected android\'s device'
Mobile.closeApplication()
```