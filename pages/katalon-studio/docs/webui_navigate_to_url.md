---
title: "[WebUI] Navigate to Url" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui_navigate_to_url.html 
description: 
---
Description
-----------

Navigate to the specified web page.

Parameters
----------

<table class="wrapped confluenceTable" style="margin-top: 10.0px;color: rgb(51,51,51);font-weight: normal;"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1">rawUrl</td><td class="xtd-1-1 confluenceTd" colspan="1">String</td><td class="xtd-1-2 confluenceTd" colspan="1">Required</td><td class="xtd-1-3 confluenceTd" colspan="1"><p>URL of web page to navigate to.If rawUrl doesn't contain protocol prefix, the&nbsp;the protocol<span style="color: rgb(0,0,0);white-space: normal;">&nbsp;will be&nbsp;</span><a rel="nofollow" style="white-space: normal;">http://.</a></p><p><span style="color: rgb(0,0,0);white-space: normal;">Example:&nbsp;</span></p><ul><li><span style="color: rgb(0,0,0);white-space: normal;">&nbsp;</span><a class="external-link" href="http://katalon.com" rel="nofollow">http://katalon.com/;</a><span style="color: rgb(0,0,0);white-space: normal;">&nbsp;</span></li><li><span style="color: rgb(0,0,0);white-space: normal;">&nbsp;</span><a class="external-link" href="https://www.google.com" rel="nofollow">https://www.google.com;</a><span style="color: rgb(0,0,0);white-space: normal;">&nbsp;</span></li><li><span style="color: rgb(0,0,0);white-space: normal;">f</span><span style="color: rgb(0,0,0);">ile:///D:Development/index.html;</span></li><li><span style="color: rgb(0,0,0);">kms-technology.com =&gt; http://kms-tecnology.com</span></li></ul></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-2-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-2-2 confluenceTd" colspan="1">Optional</td><td class="xtd-2-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Spec</span>ify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Example
-------

You want to navigate to '[http://demoaut.katalon.com](http://demoaut.katalon.com)' website.

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

'Open browser'
WebUI.openBrowser('')

'Navigate to demo AUT site'
WebUI.navigateToUrl('http://demoaut.katalon.com/')

'Click on \'Make Appointment\' button'
WebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

'Close browser'
WebUI.closeBrowser()
```