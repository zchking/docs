---
title: "[WebUI] Authenticate" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-authenticate.html 
description: 
---
Description
-----------

Navigate to a page that requires authentication. System will enter username and password.

Parameters
----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" colspan="1" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><span style="" class="">url</span></td><td class="" colspan="1" style="">String</td><td class="" colspan="1" style="">Required</td><td class="" style=""><p class="" style=""><span class="" style="">URL</span><span style="" class="">&nbsp;of the page to navigate.</span></p></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">userName</span></td><td class="" colspan="1" style="">String</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style=""><span style="" class="">Username to authenticate.</span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">password</span></td><td class="" colspan="1" style="">String</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style=""><span style="" class="">Password to authenticate.</span></td></tr><tr class="" style=""><td class="" colspan="1" style="">timeout</td><td class="" colspan="1" style="">int</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">Time to wait since navigating to the page until entering&nbsp;username.</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" colspan="1" style="">FailureHandling</td><td class="" colspan="1" style="">Optional</td><td class="" style="">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Example
-------

You want to verify if 'Make Appointment' button has attribute id with value: 'btnMakeAppointment' 

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
WebUI.openBrowser('')

'Input username and password on authentication dialog.'
WebUI.authenticate('http://the-internet.herokuapp.com/basic_auth', 'admin', 'admin', 12)

'Close browser'
WebUI.closeBrowser()
```