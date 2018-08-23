---
title: "[WebUI] Verify Element Attribute Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-element-attribute-value.html 
description: 
---
Description
-----------

Verify if the web element has an attribute with the specified name and value.

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>to</span></td><td>TestObject</td><td>Required</td><td><p><span>Represent a web element.</span></p></td></tr><tr><td><span>attributeName</span></td><td>String</td><td>Required</td><td><span>The name of the attribute to verify.</span></td></tr><tr><td><span>attributeValue</span></td><td>String</td><td>Required</td><td><span>The value of the attribute to verify.</span></td></tr><tr><td>timeout</td><td>int</td><td>Required</td><td><span>System will wait at most timeout (seconds) to return result</span></td></tr><tr><td><span>flowControl</span></td><td>FailureHandling</td><td>Optional</td><td>Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><ul><li><strong>true:</strong> the element has the attribute with the specified name and value.</li><li><strong>false:</strong> the <span>element doesn't have the attribute with the specified name and value.</span></li></ul></td></tr></tbody></table>

Example
-------

You want to verify if 'Make Appointment' button has attribute id with value: 'btnMakeAppointment' 

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS

'Open browser and navigate to demo AUT site.'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Verify \'Make Appoint\' button has id : \'btnMakeAppointment\''
WebUI.verifyElementAttributeValue(findTestObject('Page_CuraHomepage/btn_MakeAppointment'), 'id', 'btnMakeAppointment', 20)

'Close browser'
WebUI.closeBrowser()
```