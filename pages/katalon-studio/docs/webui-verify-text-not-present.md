---
title: "[WebUI] Verify Text Not Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-text-not-present.html 
description: 
---
Description  
-------------

Verify if the given text is NOT present anywhere in the page source.

Parameters  
------------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" colspan="1" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">text</span></td><td class="" colspan="1" style=""><span style="" class="">String</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style=""><span style="" class="">Text to be verified if NOT presenting anywhere in the page source.</span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">isRegex</span></td><td class="" colspan="1" style=""><span style="" class="">Boolean</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style=""><span style="" class="">Indicate whether the expected text is a regular expression.</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" colspan="1" style=""><span style="" class="">Optional</span></td><td class="" colspan="1" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param Type</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><span style="" class="">Boolean</span></td><td class="" style=""><p class="" style="">true, if&nbsp;the text&nbsp;is NOT present anywhere in the page source; otherwise,&nbsp;false</p></td></tr></tbody></table>

Example 
--------

You want to verify if the text "Login unsuccessfully" is not present in the current page.

```
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

'Input username'
WebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)

'Input password'
WebUI.setText(findTestObject('Page_Login/txt_Password'), Password)

'Click on \'Login\' button'
WebUI.click(findTestObject('Page_Login/btn_Login'))

'Verify message after logging in'
WebUI.verifyTextNotPresent("Login unsuccessfully", false)

'Close browser'
WebUI.closeBrowser()
```