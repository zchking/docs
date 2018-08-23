---
title: "[WebUI] Verify All Links On Current Page Accessible" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-all-links-on-current-page-accessible.html 
description: 
---
Description
-----------

Verify if all links (URLs) on the current page are accessible.

Parameters
----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" colspan="1" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" colspan="1" style="">isIncludedExternalLinks</td><td class="" colspan="1" style="">boolean</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">If false, only target to links on the same HOST. Otherwise, target to all links.</td></tr><tr class="" style=""><td class="" colspan="1" style="">excludedLinks</td><td class="" colspan="1" style="">List</td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style="">A list of excluded links (URLs).</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" colspan="1" style="">Optional</td><td class="" colspan="1" style=""><span style="" class="">Spec</span>ify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Example
-------

You want to verify if all links on '[http://demoaut.katalon.com](http://demoaut.katalon.com)' are accessible.

```
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpointimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
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
 
WebUI.openBrowser('http://demoaut.katalon.com')
 
WebUI.verifyAllLinksOnCurrentPageAccessible(true, [])
 
WebUI.closeBrowser()
```