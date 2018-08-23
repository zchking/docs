---
title: "[Common] Concatenate" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-concatenate.html 
description: 
---
Description  
-------------

Concatenate all strings end-to-end into one string.

Parameters  
------------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>stringList</span></td><td><span>String[]</span></td><td><span>Required</span></td><td><span>List of strings to concatenate.</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td>Optional</td><td><span>Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns  
---------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td><span>String</span></td><td><p><span>A concatenated string from the list of strings.</span></p></td></tr></tbody></table>

Example  
---------

You want to concatenate two strings "Katalon Studio" and "Automation Tool" into one string "Katalon Studio Automation Tool".

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
WebUI.concatenate(['Katalon', 'Automation Tool'] as String[], FailureHandling.STOP_ON_FAILURE)
  
'Use Mobile keyword'
Mobile.concatenate(['Katalon', 'Automation Tool'] as String[], FailureHandling.STOP_ON_FAILURE)
  
'Use Web Service keyword'
WS.concatenate(['Katalon', 'Automation Tool'] as String[], FailureHandling.STOP_ON_FAILURE)
```