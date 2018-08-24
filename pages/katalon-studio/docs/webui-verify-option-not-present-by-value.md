---
title: "[WebUI] Verify Option Not Present By Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-option-not-present-by-value.html 
redirect_from: "/display/KD/%5BWebUI%5D+Verify+Option+Not+Present+By+Value" 
description: 
---
Description
-----------

Verify if the options with the given value do NOT present.

![](../../images/katalon-studio/docs/webui-verify-option-not-present-by-value/image2017-3-1 18_20_51.png)

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td>to</td><td>TestObject</td><td>Required</td><td>Represent a web element.</td></tr><tr><td>value</td><td>String</td><td>Required</td><td><p>Value of the options to be verified if NOT presenting.</p></td></tr><tr><td>isRegex</td><td>boolean</td><td>Required</td><td>True if the label is a regular expression, false by default.</td></tr><tr><td>timeout</td><td>int</td><td>Required</td><td>System will wait at most timeout (seconds) to return the result.</td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td>Optional</td><td><span>Spec</span>ify <a>failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><ul><li><p><strong>true:&nbsp;</strong>if all options with given value do NOT present.</p></li><li><p><strong>false: </strong>if all options with given value is present</p></li></ul></td></tr></tbody></table>

Example
-------

You want to verify if 'Thailand CURA Center' does not exist in the list.

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
import org.openqa.selenium.Keys as Keys

'Open browser and navigate to demo AUT site'
WebUI.openBrowser('http://demoaut.katalon.com/')

'Click on \'Make Appointment\' button'
WebUI.click(findTestObject('Page_CuraAppointment/btn_BookAppointment'))

'Verify \"Thailand CURA Center\" option is not present'
WebUI.verifyOptionNotPresentByValue(findTestObject('Page_CuraAppointment/lst_Facility'), 'ThaiLand CURA center', false, 
    10)

'Close Browser'
WebUI.closeBrowser()
```