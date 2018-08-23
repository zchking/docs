---
title: "[WebUI] Get Url" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-get-url.html 
description: 
---
Description  
-------------

Get URL of the current window.

Parameters  
------------

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Param</th><th class="xtd-0-1 confluenceTh" style="">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-1-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-1-2 confluenceTd" colspan="1" style=""><span style="">Optional</span></td><td class="xtd-1-3 confluenceTd" colspan="1" style="">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a> <span style="">schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead style=""><tr style=""><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Param Type</div></th><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style=""><span style="">Description</span></div></th></tr></thead><tbody style=""><tr class="xtr-0" style=""><td class="xtd-0-0 confluenceTd" style="">String</td><td class="xtd-0-1 confluenceTd" style=""><span style="">URL of current window.</span></td></tr></tbody></table>

Example 
--------

You want to get URL of the current window. The output is stored into variable "url".

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

'Open browser and navigate to AUT'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Get current page\'s URL'
url = WebUI.getUrl()

'Close browser'
WebUI.closeBrowser()
```