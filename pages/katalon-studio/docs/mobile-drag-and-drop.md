---
title: "[Mobile] Drag And Drop" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-drag-and-drop.html 
description: 
---
Description
-----------

Drag and drop an element onto another element

Parameters  
------------

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Parameter</th><th class="xtd-0-1 confluenceTh" style="">Parameter Type</th><th class="xtd-0-2 confluenceTh" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" colspan="1" style=""><span style="">fromObject&nbsp;</span></td><td class="xtd-1-1 confluenceTd" colspan="1" style=""><span style="">TestObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd" colspan="1" style=""><span style="">required</span></td><td class="xtd-1-3 confluenceTd" colspan="1" style="">represent the drag-able mobile element</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><span style="">toObject&nbsp;</span></td><td class="xtd-2-1 confluenceTd" style=""><span style="">TestObject</span></td><td class="xtd-2-2 confluenceTd" style=""><span style="">required</span></td><td class="xtd-2-3 confluenceTd" style="">represent the drop-able mobile element</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><span style="">timeout&nbsp;</span></td><td class="xtd-3-1 confluenceTd" style=""><span style="">int</span></td><td class="xtd-3-2 confluenceTd" style=""><span style="">required</span></td><td class="xtd-3-3 confluenceTd" style="">system will wait at most timeout (seconds) to return result</td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style=""><span style="">flowControl&nbsp;</span></td><td class="xtd-4-1 confluenceTd" style=""><span style="">FailureHandling&nbsp;</span></td><td class="xtd-4-2 confluenceTd" style=""><span style="">optional</span></td><td class="xtd-4-3 confluenceTd" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example
-------

You want to drag and drop a button into another frame in 10 seconds timeout.

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil

'Get full directory\'s path of android application'
def appPath = PathUtil.relativeToAbsolutePath(GlobalVariable.G_AndroidApp, RunConfiguration.getProjectDir())

'Start application on current selected android\'s device'
Mobile.startApplication(appPath, false)

Mobile.tap(findTestObject('Application/android.widget.TextView - App'), 10)

Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)

Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)

'Drag and drop a button into another frame'
Mobile.dragAndDrop(findTestObject('Application/App/Activity/android.widget.Button'),findTestObject('Application/App/Activity/android.widget.Frame 1'), 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```