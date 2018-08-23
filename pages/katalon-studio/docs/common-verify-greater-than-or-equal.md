---
title: "[Common] Verify Greater Than Or Equal" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-verify-greater-than-or-equal.html 
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
| flowControl | FailureHandling | Optional | Specify failure handling schema to determine whether the execution should be allowed to continue or stop. |

 Returns 
---------

| Param Type | Description |
| --- | --- |
| Boolean | 
*   **true** if the actual number is greater than or equal to the expected number.
    
*   **false** if the actual number is NOT greater than or equal to the expected number.
    

 |

Example 
--------

You want to verify if the first number is greater than or equal to the second number.

*   Manual view    
    
*   Script view 
    
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
    WebUI.verifyGreaterThanOrEqual(12, 10)
     
    'Use Mobile keyword'
    Mobile.verifyGreaterThanOrEqual(12, 10)
     
    'Use WS keyword'
    WS.verifyGreaterThanOrEqual(12, 10)
    ```