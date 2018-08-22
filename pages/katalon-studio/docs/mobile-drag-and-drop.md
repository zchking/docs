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

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Parameter</th><th class="xtd-0-1 confluenceTh">Parameter Type</th><th class="xtd-0-2 confluenceTh">Mandatory</th><th class="xtd-0-3 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">fromObject&nbsp;</span></td><td class="xtd-1-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">TestObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">required</span></td><td class="xtd-1-3 confluenceTd" colspan="1">represent the drag-able mobile element</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">toObject&nbsp;</span></td><td class="xtd-2-1 confluenceTd"><span style="color: rgb(0,0,0);">TestObject</span></td><td class="xtd-2-2 confluenceTd"><span style="color: rgb(0,0,0);">required</span></td><td class="xtd-2-3 confluenceTd">represent the drop-able mobile element</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><span style="color: rgb(0,0,0);">timeout&nbsp;</span></td><td class="xtd-3-1 confluenceTd"><span style="color: rgb(0,0,0);">int</span></td><td class="xtd-3-2 confluenceTd"><span style="color: rgb(0,0,0);">required</span></td><td class="xtd-3-3 confluenceTd">system will wait at most timeout (seconds) to return result</td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl&nbsp;</span></td><td class="xtd-4-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling&nbsp;</span></td><td class="xtd-4-2 confluenceTd"><span style="color: rgb(0,0,0);">optional</span></td><td class="xtd-4-3 confluenceTd"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

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