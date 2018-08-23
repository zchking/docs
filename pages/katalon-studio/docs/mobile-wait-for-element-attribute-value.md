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
-----------

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Param</th><th class="xtd-0-1 confluenceTh" colspan="1" style="">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><span style="">to</span></td><td class="xtd-1-1 confluenceTd" colspan="1" style=""><span style="">TestObject</span></td><td class="xtd-1-2 confluenceTd" colspan="1" style=""><span style="">Required</span></td><td class="xtd-1-3 confluenceTd" style=""><p style=""><span style="">Represent a mobile element.</span></p></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" colspan="1" style=""><span style="">attributeName</span></td><td class="xtd-2-1 confluenceTd" colspan="1" style=""><span style="">String</span></td><td class="xtd-2-2 confluenceTd" colspan="1" style=""><span style="">Required</span></td><td class="xtd-2-3 confluenceTd" colspan="1" style=""><span style="">The name of the attribute to wait for.</span></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" colspan="1" style=""><span style="">attributeValue</span></td><td class="xtd-3-1 confluenceTd" colspan="1" style=""><span style="">String</span></td><td class="xtd-3-2 confluenceTd" colspan="1" style=""><span style="">Required</span></td><td class="xtd-3-3 confluenceTd" colspan="1" style=""><span style="">The value of the attribute to wait for.</span></td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" colspan="1" style=""><span style="">timeout</span></td><td class="xtd-4-1 confluenceTd" colspan="1" style=""><span style="">int</span></td><td class="xtd-4-2 confluenceTd" colspan="1" style=""><span style="">Required</span></td><td class="xtd-4-3 confluenceTd" colspan="1" style=""><span style="">System will wait at most timeout (seconds) to return a result</span></td></tr><tr class="xtr-5" style=""><td class="xtd-5-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-5-1 confluenceTd" colspan="1" style=""><span style="">FailureHandling</span></td><td class="xtd-5-2 confluenceTd" colspan="1" style=""><span style="">Optional</span></td><td class="xtd-5-3 confluenceTd" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" colspan="1" style="">Param Type</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" colspan="1" style=""><span style="">boolean</span></td><td class="xtd-1-1 confluenceTd" style=""><ul style=""><li style=""><span style=""><strong style="">true:</strong> the element has the attribute with the specified name and value in the given timeout.</span></li><li style=""><span style=""><strong style="">false:</strong> the element doesn't have the attribute with the specified name and value in the given timeout.</span></li></ul></td></tr></tbody></table>

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