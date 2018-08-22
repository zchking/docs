---
title: "[Mobile] Select List Item By Index" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-select-list-item-by-index.html 
description: 
---
Description
-----------

Select item of listview control by its index. Have not implemented for Android because its list view is async loaded

Parameters  
------------

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Parameter</th><th class="xtd-0-1 confluenceTh">Parameter Type</th><th class="xtd-0-2 confluenceTh">Mandatory</th><th class="xtd-0-3 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">to</span></td><td class="xtd-1-1 confluenceTd"><span style="color: rgb(0,0,0);">TestObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-1-3 confluenceTd">Represent a mobile element</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">index&nbsp;</span></td><td class="xtd-2-1 confluenceTd"><span style="color: rgb(0,0,0);">int</span></td><td class="xtd-2-2 confluenceTd"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-2-3 confluenceTd">Item index (1-based indexed)</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><span style="color: rgb(0,0,0);">timeout&nbsp;</span></td><td class="xtd-3-1 confluenceTd"><span style="color: rgb(0,0,0);">int</span></td><td class="xtd-3-2 confluenceTd"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-3-3 confluenceTd">System will wait at most timeout (seconds) to return result</td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-4-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-4-2 confluenceTd"><span style="color: rgb(0,0,0);">Optional</span></td><td class="xtd-4-3 confluenceTd"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example
-------

You want to select the third item in the list

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

'Select the third item in the list'
Mobile.selectListItemByIndex(findTestObject('Object Repository/Application/App/android.widget.TextView-Activity'), 3, 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```