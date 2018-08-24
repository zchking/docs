---
title: "[Mobile] Get Attribute" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-get-attribute.html 
description: 
---
Description  
=============

Get a specific attribute of a mobile element.

Parameters  
============

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>to</span></td><td><span>TestObject</span></td><td><span>Required</span></td><td><span>Represent a mobile element.</span></td></tr><tr><td><span>name</span></td><td><span>String</span></td><td><span>Required</span></td><td><span>Name of the attribute to get.</span></td></tr><tr><td><span>timeout</span></td><td><span>int</span></td><td><span>Required</span></td><td><span>Maximum period of time (in seconds) that system will wait to return a result.</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
=======

<table><thead><tr><th><div>Param Type</div></th><th><div>Description</div></th></tr></thead><tbody><tr><td><span>String</span></td><td><p>Value<span>&nbsp;of the attribute.</span></p></td></tr></tbody></table>

Example 
========

You want to get the attribute "text" of the object "android.widget.TextView - App".

*   Manual view    
    ![](../../images/katalon-studio/docs/mobile-get-attribute/image2017-3-3 11_11_38.png)
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
    
    'Start application on current selected android device'
    Mobile.startApplication(GlobalVariable.G_AndroidApp, false)
    
    'Get text of android.widget.TextView - App'
    Mobile.getAttribute(findTestObject('Application/android.widget.TextView - App'), 'text', 5)
    
    'Close application on current selected android device'
    Mobile.closeApplication()
    
    
    ```