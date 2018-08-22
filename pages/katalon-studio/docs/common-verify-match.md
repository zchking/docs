---
title: "[Common] Verify Match" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-verify-match.html 
description: 
---
Description  
-------------

Verify if two strings match each other, the second string can be a regular expression.

Parameters  
------------

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">actualText</span></td><td class="xtd-1-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">String</span></td><td class="xtd-1-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-1-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Represent the actual text.</span></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">expectedText</span></td><td class="xtd-2-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">String</span></td><td class="xtd-2-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-2-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Represent the expected text (can be a regular expression).</span></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">isRegex</span></td><td class="xtd-3-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Boolean</span></td><td class="xtd-3-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-3-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Indicate whether the expected text is a regular expression.</span></td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-4-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-4-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Optional</span></td><td class="xtd-4-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="relative-table wrapped confluenceTable" style="width: 55.0827%;"><colgroup><col style="width: 25.3582%;"><col style="width: 74.6418%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param Type</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">Boolean</span></td><td class="xtd-1-1 confluenceTd"><p><strong>true</strong>,&nbsp;if two given strings match each other; otherwise,&nbsp;<strong>false</strong>.</p></td></tr></tbody></table>

Example  
---------

You want to verify if the text "Katalon" matches the regular expression "(K|T)atalon".

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

'Use WebUI keyword'
WebUI.verifyMatch('Katalon', '(K|T)atalon', true)
 
'Use Mobile keyword'
Mobile.verifyMatch('Katalon', '(K|T)atalon', true)

'Use Web Service keyword'
WS.verifyMatch('Katalon', '(K|T)atalon', true)
```