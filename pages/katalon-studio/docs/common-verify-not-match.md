---
title: "[Common] Verify Not Match" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-verify-not-match.html 
description: 
---
Description  
=============

Verify if two strings do NOT match each other, the second string can be a regular expression.

Parameters  
============

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>actualText</span></td><td><span>String</span></td><td><span>Required</span></td><td><span>Represent the actual text.</span></td></tr><tr><td><span>expectedText</span></td><td><span>String</span></td><td><span>Required</span></td><td><span>Represent the expected text (can be a regular expression).</span></td></tr><tr><td><span>isRegex</span></td><td><span>Boolean</span></td><td><span>Required</span></td><td><span>Indicate whether the expected text is a regular expression.</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
=======

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td><span>Boolean</span></td><td><p><span>true,&nbsp;if two given strings do NOT match each other; otherwise,&nbsp;false.</span></p></td></tr></tbody></table>

Example 
========

You want to verify if the text "Katalon" does not match the regular expression "(L|T)atalon".

*   Manual view    
    ![](../../images/katalon-studio/docs/common-verify-not-match/image2017-3-3 17_41_53.png)
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
    WebUI.verifyNotMatch('Katalon', '(L|T)atalon', true)
     
    'Use Mobile keyword'
    Mobile.verifyNotMatch('Katalon', '(L|T)atalon', true)
    
    'Use Web Service keyword'
    WS.verifyNotMatch('Katalon', '(L|T)atalon', true)
    ```