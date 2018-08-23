---
title: "[Mobile] Wait For Element Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-wait-for-element-present.html 
description: 
---
Description
-----------

Wait for the given mobile element to present within the given time (in seconds). 

Parameters
----------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" colspan="1" style="">Description</th></tr><tr class="" style=""><td class="" colspan="1" style="">to</td><td class="" colspan="1" style="">TestObject</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">Represent a mobile element.</td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">timeOut&nbsp;</span></td><td class="" colspan="1" style=""><span style="" class="">int&nbsp;</span></td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style=""><span style="" class="">Maximum period of time (in seconds) that system will wait to return a result.</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" colspan="1" style="">Optional</td><td class="" colspan="1" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Param Type</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style=""><span style="" class="">Boolean</span></td><td class="" style=""><ul class="" style=""><li class="" style=""><span style="" class=""><strong class="" style="">true</strong>:&nbsp;the element is present&nbsp;within&nbsp;the timeout.</span></li><li class="" style=""><span style="" class=""><strong class="" style="">false</strong>: the element is NOT present within&nbsp;</span>the timeout.</li></ul></td></tr></tbody></table>

Example 
--------

You want to wait for 'App' control to be present in 10 seconds timeout.

```
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

'Wait for app control to be present in 10 seconds timeout'
Mobile.waitForElementHasAttribute(findTestObject(findTestObject('Object Repository/Application/android.widget.TextView - App')), 'class', 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```