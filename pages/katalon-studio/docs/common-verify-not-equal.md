---
title: "[Common] Verify Not Equal" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-verify-not-equal.html 
description: 
---
Description  
-------------

Verify if the actual number is NOT equal to the expected number.

Parameters  
------------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" colspan="1" style="">Description</th></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">actualObject&nbsp;</span></td><td class="" colspan="1" style=""><span style="" class="">Object&nbsp;</span></td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style=""><span style="" class="">Represent the actual object.</span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">expectedObject&nbsp;</span></td><td class="" colspan="1" style=""><span style="" class="">Object&nbsp;</span></td><td class="" colspan="1" style="">Required</td><td class="" colspan="1" style=""><span style="" class="">Represent the expected object.</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" colspan="1" style="">Optional</td><td class="" colspan="1" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Param Type</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style=""><span style="" class="">Boolean</span></td><td class="" style=""><ul class="" style=""><li class="" style=""><p class="" style=""><span style="" class=""><strong class="" style="">true</strong>&nbsp;if the actual number is&nbsp;NOT equal to the expected number.</span></p></li><li class="" style=""><p class="" style=""><span style="" class=""><strong class="" style="">false</strong>&nbsp;if the actual number is equal to the expected number.</span></p></li></ul></td></tr></tbody></table>

Example  
---------

You want to verify if the two given numbers are not equal.

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

'Use WebUI keyword'
WebUI.verifyNotEqual(10, 12)
 
'Use Mobile keyword'
Mobile.verifyNotEqual(10, 12)

'Use Web Service keyword'
WS.verifyNotEqual(10, 12)
```