---
title: "[Mobile] Wait For Element Attribute Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-wait-for-element-attribute-value.html 
redirect_from: "/display/KD/%5BMobile%5D+Wait+For+Element+Attribute+Value" 
description: 
---
Description
===========

Wait until the given mobile element has an attribute with the specified name and value.

Parameters 
===========

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>to</span></td><td><span>TestObject</span></td><td><span>Required</span></td><td><p><span>Represent a mobile element.</span></p></td></tr><tr><td><span>attributeName</span></td><td><span>String</span></td><td><span>Required</span></td><td><span>The name of the attribute to wait for.</span></td></tr><tr><td><span>attributeValue</span></td><td><span>String</span></td><td><span>Required</span></td><td><span>The value of the attribute to wait for.</span></td></tr><tr><td><span>timeout</span></td><td><span>int</span></td><td><span>Required</span></td><td><span>System will wait at most timeout (seconds) to return a result</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
=======

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td><span>boolean</span></td><td><ul><li><span><strong>true:</strong> the element has the attribute with the specified name and value in the given timeout.</span></li><li><span><strong>false:</strong> the element doesn't have the attribute with the specified name and value in the given timeout.</span></li></ul></td></tr></tbody></table>

Example
=======

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