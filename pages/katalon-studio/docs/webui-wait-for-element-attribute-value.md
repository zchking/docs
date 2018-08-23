---
title: "[WebUI] Wait For Element Attribute Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-element-attribute-value.html 
description: 
---
Description
-----------

Wait until the given web element has an attribute with specified name and value.

Parameters 
-----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" colspan="1" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><span style="" class="">to</span></td><td class="" colspan="1" style="">TestObject</td><td class="" colspan="1" style="">Required</td><td class="" style=""><p class="" style=""><span style="" class="">Represent a web element.</span></p></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">attributeName</span></td><td class="" colspan="1" style="">String</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style=""><span style="" class="">The name of the attribute to wait for.</span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">attributeValue</span></td><td class="" colspan="1" style="">String</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style=""><span style="" class="">The value of the attribute to wait for.</span></td></tr><tr class="" style=""><td class="" colspan="1" style="">timeout</td><td class="" colspan="1" style="">int</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style=""><span style="" class="">System will wait at most timeout (seconds) to return result</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" colspan="1" style="">FailureHandling</td><td class="" colspan="1" style="">Optional</td><td class="" style="">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Returns
-------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" colspan="1" style="">Param Type</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" colspan="1" style="">boolean</td><td class="" style=""><ul class="" style=""><li class="" style=""><strong class="" style="">true: </strong>the element has the attribute with the specified name and value in the given timeout.</li><li class="" style=""><strong class="" style="">false: </strong>the element doesn't have the attribute with the specified name and value in the given timeout.</li></ul></td></tr></tbody></table>

Example
-------

You want to wait until 'Make Appointment' button has id: 'btnMakeAppointment' .

```
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

'Wait for \'Make Appoint\' button has id : \'btnMakeAppointment\' in 20 seconds'
WebUI.waitForElementAttributeValue(findTestObject('Page_CuraHomepage/btn_MakeAppointment'), 'id', 'btnMakeAppointment', 20)

'Close browser'
WebUI.closeBrowser()
```