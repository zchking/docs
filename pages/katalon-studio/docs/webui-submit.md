---
title: "[WebUI] Submit" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-submit.html 
description: 
---
Description
-----------

If the current element is a form or an element within a form, then this will be submitted. If this causes the current page to change, then this method will block until the new page is loaded.

Parameters
----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" colspan="1" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" colspan="1" style="">to</td><td class="" colspan="1" style=""><span style="" class="">TestObject</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style="">Represent a web element.</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" colspan="1" style=""><span style="" class="">Optional</span></td><td class="" colspan="1" style=""><span style="" class="">Spec</span>ify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Example 
--------

You want to submit a form after entering username and password.

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

'Open browser and navigate to login form'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Input username'
WebUI.setText(findTestObject('txt_UserName'), Username)

'Input password'
WebUI.setText(findTestObject('txt_Password'), Password)

'Submit form'
WebUI.submit(findTestObject('frm_Login'))

'Close browser'
WebUI.closeBrowser()
```