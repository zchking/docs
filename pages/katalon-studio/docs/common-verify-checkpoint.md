---
title: "[Common] Verify Checkpoint" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-verify-checkpoint.html 
description: 
---
Description  
-------------

Verify if checked data of checkpoint matches their source data.

Parameters  
------------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>checkpoint</span></td><td><span>Checkpoint</span></td><td><span>Required</span></td><td><span>Represent the input checkpoint.</span></td></tr><tr><td><span>logChangedValues</span></td><td><span>Boolean</span></td><td><span>Required</span></td><td><span>true will log all the changed values between checkpoint data and the source, false will not log any changed value.</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td><span>Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td><span>Boolean</span></td><td><ul><li><span><strong>true</strong>, if checked data of checkpoint matches their source data.</span></li><li><span><strong>false</strong>, if checked data of checkpoint NOT matches their source data.</span></li></ul></td></tr></tbody></table>

Example 
--------

You want to verify the checkpoint and don't print out changed values between checkpoint data and the source.

*   Manual view    
    ![](../../images/katalon-studio/docs/common-verify-checkpoint/image2017-3-3 17_56_28.png)
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
    WebUI.verifyCheckpoint(findCheckpoint('Checkpoints/chk_DataSnapshot'), false)
     
    'Use Mobile keyword'
    Mobile.verifyCheckpoint(findCheckpoint('Checkpoints/chk_DataSnapshot'), false)
    
    'Use Web Service keyword'
    WS.verifyCheckpoint(findCheckpoint('Checkpoints/chk_DataSnapshot'), false)
    
    ```