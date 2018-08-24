---
title: "[WebUI] Get Element Left Position" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-get-element-left-position.html 
description: 
---
Description  
=============

Get the left position of web element.

Parameters  
============

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>to</span></td><td><span>TestObject</span></td><td><span>Required</span></td><td>Represent a web element.</td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td>Specify <a>failure handling</a> <span>schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
=======

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>int</td><td><span>Left position of web element.</span></td></tr></tbody></table>

Example 
========

You want to get the left position of the object "txt_UserName", then store it into "leftPosition" variable.

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

'Open browser and navigate to AUT'
WebUI.openBrowser(GlobalVariable.G_SiteURL)
 
'Get left position of txt_UserName'
leftPosition = WebUI.getElementLeftPosition(findTestObject('Page_Login/txt_UserName'))
 
'Close browser'
WebUI.closeBrowser()

```