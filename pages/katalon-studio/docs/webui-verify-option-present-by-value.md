---
title: "[WebUI] Verify Option Present By Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-option-present-by-value.html 
description: 
---
Description
-----------

Verify if the option with the given value does exist.

![](../../images/katalon-studio/docs/webui-verify-option-present-by-value/label.jpg)

Parameters
----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" colspan="1" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" colspan="1" style="">to</td><td class="" colspan="1" style="">TestObject</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">Represent a web element.</td></tr><tr class="" style=""><td class="" colspan="1" style="">value</td><td class="" colspan="1" style="">String</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">Value&nbsp;of the options to be verified if being present.</td></tr><tr class="" style=""><td class="" colspan="1" style="">isRegex</td><td class="" colspan="1" style="">boolean</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">True if the label is a regular expression, false by default.</td></tr><tr class="" style=""><td class="" colspan="1" style="">timeout</td><td class="" colspan="1" style="">int</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">System will wait at most timeout (seconds) to return the result.</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" colspan="1" style="">Optional</td><td class="" colspan="1" style=""><span style="" class="">Spec</span>ify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop</td></tr></tbody></table>

Returns
-------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param Type</th><th class="" colspan="1" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" colspan="1" style="">boolean</td><td class="" colspan="1" style=""><ul class="" style=""><li class="" style=""><strong class="" style="">true:</strong>&nbsp;if options with given displayed text is present.</li><li class="" style=""><strong class="" style="">false:</strong>&nbsp;if options with given displayed text do NOT present</li></ul></td></tr></tbody></table>

Example
-------

You want to verify if 'HongKong Cura Health Center' does present in the list.

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

'Click on \'Book Appointment\' button'
WebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

'Verify \'HongKong Cura Health Center\' option in \'Facility\' list is present'
WebUI.verifyOptionPresentByValue(findTestObject('Page_CuraAppointment/lst_Facility'), 'HongKong Cura Health Center', 
    false, 20)

'Close browser'
WebUI.closeBrowser()
```