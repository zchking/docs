---
title: "[Common] Verify Not Equal" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-verify-not-equal.html 
redirect_from: "/display/KD/%5BCommon%5D+Verify+Not+Equal" 
description: 
---
Description  
=============

Verify if the actual number is NOT equal to the expected number.

Parameters  
============

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>actualObject&nbsp;</span></td><td><span>Object&nbsp;</span></td><td>Required</td><td><span>Represent the actual object.</span></td></tr><tr><td><span>expectedObject&nbsp;</span></td><td><span>Object&nbsp;</span></td><td>Required</td><td><span>Represent the expected object.</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td>Optional</td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
=======

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td><span>Boolean</span></td><td><ul><li><p><span><strong>true</strong>&nbsp;if the actual number is&nbsp;NOT equal to the expected number.</span></p></li><li><p><span><strong>false</strong>&nbsp;if the actual number is equal to the expected number.</span></p></li></ul></td></tr></tbody></table>

Example  
=========

You want to verify if the two given numbers are not equal.

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

'Use WebUI keyword'
WebUI.verifyNotEqual(10, 12)
 
'Use Mobile keyword'
Mobile.verifyNotEqual(10, 12)

'Use Web Service keyword'
WS.verifyNotEqual(10, 12)
```