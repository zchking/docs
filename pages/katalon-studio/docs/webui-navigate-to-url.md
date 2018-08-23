---
title: "[WebUI] Navigate to Url" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-navigate-to-url.html 
description: 
---
Description
-----------

Navigate to the specified web page.

Parameters
----------

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Param</th><th class="xtd-0-1 confluenceTh" style="">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" colspan="1" style="">rawUrl</td><td class="xtd-1-1 confluenceTd" colspan="1" style="">String</td><td class="xtd-1-2 confluenceTd" colspan="1" style="">Required</td><td class="xtd-1-3 confluenceTd" colspan="1" style=""><p style="">URL of web page to navigate to.If rawUrl doesn't contain protocol prefix, the&nbsp;the protocol<span style="">&nbsp;will be&nbsp;</span><a rel="nofollow" style="">http://.</a></p><p style=""><span style="">Example:&nbsp;</span></p><ul style=""><li style=""><span style="">&nbsp;</span><a class="external-link" href="http://katalon.com" rel="nofollow" style="">http://katalon.com/;</a><span style="">&nbsp;</span></li><li style=""><span style="">&nbsp;</span><a class="external-link" href="https://www.google.com" rel="nofollow" style="">https://www.google.com;</a><span style="">&nbsp;</span></li><li style=""><span style="">f</span><span style="">ile:///D:Development/index.html;</span></li><li style=""><span style="">kms-technology.com =&gt; http://kms-tecnology.com</span></li></ul></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-2-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-2-2 confluenceTd" colspan="1" style="">Optional</td><td class="xtd-2-3 confluenceTd" colspan="1" style=""><span style="">Spec</span>ify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

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