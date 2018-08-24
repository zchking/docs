---
title: "[Mobile] Wait For Element Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-wait-for-element-present.html 
redirect_from: "/display/KD/%5BMobile%5D+Wait+For+Element+Present" 
description: 
---
Description
-----------

Wait for the given mobile element to present within the given time (in seconds). 

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td>to</td><td>TestObject</td><td>Required</td><td>Represent a mobile element.</td></tr><tr><td><span>timeOut&nbsp;</span></td><td><span>int&nbsp;</span></td><td>Required</td><td><span>Maximum period of time (in seconds) that system will wait to return a result.</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td>Optional</td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td><span>Boolean</span></td><td><ul><li><span><strong>true</strong>:&nbsp;the element is present&nbsp;within&nbsp;the timeout.</span></li><li><span><strong>false</strong>: the element is NOT present within&nbsp;</span>the timeout.</li></ul></td></tr></tbody></table>

Example 
--------

You want to wait for 'App' control to be present in 10 seconds timeout.

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

'Wait for app control to be present in 10 seconds timeout'
Mobile.waitForElementHasAttribute(findTestObject(findTestObject('Object Repository/Application/android.widget.TextView - App')), 'class', 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```