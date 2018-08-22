---
title: "[Common] Verify Greater Than Or Equal" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common_verify_greater_than_or_equal.html 
description: 
---
Description 
------------

Verify if the actual number is greater than or equal to the expected number.

Parameters 
-----------

| 
Param

 | 

Param Type

 | 

Mandatory

 | 

Description

 |
| --- | --- | --- | --- |
| actualObject  | Object  | Required | Represent the actual object. |
| expectedObject  | Object  | Required | Represent the expected object. |
| flowControl | FailureHandling | Optional | Specify [failure handling](https://docs.katalon.com/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns 
--------

<table class="wrapped confluenceTable"><colgroup><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param Type</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">Boolean</span></td><td class="xtd-1-1 confluenceTd"><ul><li><p><span style="color: rgb(0,0,0);"><strong>true</strong>&nbsp;if the actual number is greater than or equal to the expected number.</span></p></li><li><p><span style="color: rgb(0,0,0);"><strong>false</strong>&nbsp;if the actual number is NOT greater than or equal to the expected number.</span><span style="color: rgb(128,128,128);">&nbsp;</span></p></li></ul></td></tr></tbody></table>

Example 
--------

You want to verify if the first number is greater than or equal to the second number.

*   Manual view    
    ![](../../images/katalon-studio/docs/common_verify_greater_than_or_equal/image2017-3-3 17_30_33.png)
*   Script view 
    
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
    WebUI.verifyGreaterThanOrEqual(12, 10)
     
    'Use Mobile keyword'
    Mobile.verifyGreaterThanOrEqual(12, 10)
     
    'Use WS keyword'
    WS.verifyGreaterThanOrEqual(12, 10)
    ```