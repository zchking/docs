---
title: "[WebUI] Wait For Element Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-element-present.html 
description: 
---
Description
-----------

Wait for the given element to present within the given time (in seconds) 

Parameters
----------

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Param</th><th class="xtd-0-1 confluenceTh" style="">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" colspan="1" style="">to</td><td class="xtd-1-1 confluenceTd" colspan="1" style="">TestObject</td><td class="xtd-1-2 confluenceTd" colspan="1" style="">Required</td><td class="xtd-1-3 confluenceTd" colspan="1" style=""><span style="">Represent a web element.</span></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" colspan="1" style=""><span style="">timeOut&nbsp;</span></td><td class="xtd-2-1 confluenceTd" colspan="1" style=""><span style="">int&nbsp;</span></td><td class="xtd-2-2 confluenceTd" colspan="1" style=""><span style="">Required</span></td><td class="xtd-2-3 confluenceTd" colspan="1" style=""><span style="">Maximum period of time (in seconds) that system will wait to return a result.</span></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-3-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-3-2 confluenceTd" colspan="1" style="">Optional</td><td class="xtd-3-3 confluenceTd" colspan="1" style=""><span style="">Spec</span>ify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Returns
-------

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Param Type</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><span style="">Boolean</span></td><td class="xtd-1-1 confluenceTd" style=""><ul style=""><li style=""><span style="">true&nbsp;if the element is present&nbsp;within&nbsp;the timeout.</span></li><li style=""><span style="">false&nbsp;if the element is NOT present within&nbsp;</span>the timeout.</li></ul></td></tr></tbody></table>

Example 
--------

You want to wait for 'btn_Login' button to be present in 10s timeout.

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

'Open browser and navigate to website that contains the element to wait for'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Wait for btn_Login to be present in 10s'
WebUI.waitForElementPresent(findTestObject('Page_Login/btn_Login'), 10)

'Close browser'
WebUI.closeBrowser()


```