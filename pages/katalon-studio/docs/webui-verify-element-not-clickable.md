---
title: "[WebUI] Verify Element Not Clickable" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-element-not-clickable.html 
description: 
---
This keyword only works with Element has **tag** _<input>_ with attribute **disable.**

_![](../../images/katalon-studio/docs/webui-verify-element-not-clickable/uua9rf0a0ve6.png)_

Description
-----------

Verify if the given element is NOT clickable. 

Parameters
----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" colspan="1" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><span style="" class="">to</span></td><td class="" colspan="1" style="">TestObject</td><td class="" colspan="1" style="">Required</td><td class="" style=""><div class="" style=""><p class="" style="">&nbsp;</p><p class="" style=""><span style="" class="">Represent a web element.</span></p></div></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" colspan="1" style="">FailureHandling</td><td class="" colspan="1" style="">Optional</td><td class="" style="">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Returns
-------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" colspan="1" style="">Param Type</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" colspan="1" style="">boolean</td><td class="" style=""><ul class="" style=""><li class="" style=""><p class="" style=""><strong class="" style="">true: </strong>the element is present and NOT clickable.</p></li><li class="" style=""><strong class="" style="">false: </strong>the element is present and clickable.</li></ul></td></tr></tbody></table>

Example
-------

You want to verify if 'Make Appointment' button is NOT clickable.

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

'Verify \'Make Appoint\' button is NOT clickable'
WebUI.verifyElementNotClickable(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

'Close browser'
WebUI.closeBrowser()
```