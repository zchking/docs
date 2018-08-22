---
title: "[Mobile] Wait For Element Attribute Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-wait-for-element-attribute-value.html 
description: 
---
Description
-----------

Wait until the given mobile element has an attribute with the specified name and value.

Parameters
----------

<table class="relative-table wrapped confluenceTable" style="width: 97.9511%;"><colgroup><col style="width: 7.40741%;"><col style="width: 9.74235%;"><col style="width: 7.56844%;"><col style="width: 75.2818%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh"><span style="color: rgb(0,0,0);">Param</span></th><th class="xtd-0-1 confluenceTh" colspan="1"><span style="color: rgb(0,0,0);">Param Type</span></th><th class="xtd-0-2 confluenceTh" colspan="1"><span style="color: rgb(0,0,0);">Mandatory</span></th><th class="xtd-0-3 confluenceTh"><span style="color: rgb(0,0,0);">Description</span></th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">to</span></td><td class="xtd-1-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">TestObject</span></td><td class="xtd-1-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-1-3 confluenceTd"><p><span style="color: rgb(0,0,0);">Represent a mobile element.</span></p></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">attributeName</span></td><td class="xtd-2-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">String</span></td><td class="xtd-2-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-2-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">The name of the attribute to wait for.</span></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">attributeValue</span></td><td class="xtd-3-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">String</span></td><td class="xtd-3-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-3-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">The value of the attribute to wait for.</span></td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">timeout</span></td><td class="xtd-4-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">int</span></td><td class="xtd-4-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-4-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">System will wait at most timeout (seconds) to return a result</span></td></tr><tr class="xtr-5"><td class="xtd-5-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-5-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-5-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Optional</span></td><td class="xtd-5-3 confluenceTd"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="relative-table wrapped confluenceTable" style="width: 75.2561%;"><colgroup><col style="width: 15.9496%;"><col style="width: 84.0504%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh" colspan="1"><span style="color: rgb(0,0,0);">Param Type</span></th><th class="xtd-0-1 confluenceTh"><span style="color: rgb(0,0,0);">Description</span></th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">boolean</span></td><td class="xtd-1-1 confluenceTd"><ul><li><span style="color: rgb(0,0,0);"><strong>true:</strong> the element has the attribute with the specified name and value in the given timeout.</span></li><li><span style="color: rgb(0,0,0);"><strong>false:</strong> the element doesn't have the attribute with the specified name and value in the given timeout.</span></li></ul></td></tr></tbody></table>

Example
-------

You want to wait until 'App' control has 'class' attribute with value: android.widget.TextView

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint

'Start application on current selected android\'s device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)

'Wait until app control has class atribute with value android.widget.TextView'
Mobile.waitForElementAttributeValue(findTestObject(findTestObject('Object Repository/Application/android.widget.TextView - App')), 'class', 'android.widget.TextView', 20)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```