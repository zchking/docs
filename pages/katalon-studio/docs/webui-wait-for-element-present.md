---
title: "[WebUI] Wait For Element Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-element-present.html 
redirect_from: "/display/KD/%5BWebUI%5D+Wait+For+Element+Present" 
description: 
---
Description
-----------

Wait for the given element to present within the given time (in seconds) 

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td>to</td><td>TestObject</td><td>Required</td><td><span>Represent a web element.</span></td></tr><tr><td><span>timeOut&nbsp;</span></td><td><span>int&nbsp;</span></td><td><span>Required</span></td><td><span>Maximum period of time (in seconds) that system will wait to return a result.</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td>Optional</td><td><span>Spec</span>ify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td><span>Boolean</span></td><td><ul><li><span>true&nbsp;if the element is present&nbsp;within&nbsp;the timeout.</span></li><li><span>false&nbsp;if the element is NOT present within&nbsp;</span>the timeout.</li></ul></td></tr></tbody></table>

Example 
--------

You want to wait for 'btn_Login' button to be present in 10s timeout.

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

'Open browser and navigate to website that contains the element to wait for'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Wait for btn_Login to be present in 10s'
WebUI.waitForElementPresent(findTestObject('Page_Login/btn_Login'), 10)

'Close browser'
WebUI.closeBrowser()


```