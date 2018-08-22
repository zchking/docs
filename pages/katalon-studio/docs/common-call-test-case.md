---
title: "[Common] Call Test Case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-call-test-case.html 
description: 
---
Description  
-------------

Call another test case and execute it separately.

Parameters  
------------

<table class="relative-table wrapped confluenceTable" style="width: 72.3404%;"><colgroup><col style="width: 10.0327%;"><col style="width: 15.9215%;"><col style="width: 10.0327%;"><col style="width: 64.0131%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">arg0</span></td><td class="xtd-1-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">TestCase</span></td><td class="xtd-1-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-1-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Represent the called test case's path.</span></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">arg1</span></td><td class="xtd-2-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Map&lt;String,Object&gt;</span></td><td class="xtd-2-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-2-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Represent the list of parameters will be used in the called test case.</span></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-3-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-3-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Optional</span></td><td class="xtd-3-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="relative-table wrapped confluenceTable" style="width: 34.1744%;"><colgroup><col style="width: 27.6527%;"><col style="width: 72.3473%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param Type</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">Object</span></td><td class="xtd-1-1 confluenceTd"><p><span style="color: rgb(0,0,0);">Value of called test case if any.</span></p></td></tr></tbody></table>

Example 
--------

You want to verify if the returned message after logging in successfully does not match the expected message.

*   Manual view    
    ![](../../images/katalon-studio/docs/common-call-test-case/image2017-3-3 17_49_2.png)
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
    WebUI.callTestCase(findTestCase('DDR_NavigateToPageThenVerifyPageTitle'), ['p_Protocol' : null, 'p_DomainName' : null, 'p_Path' : null
            , 'p_WindowTitle' : null])
    
    'Use Mobile keyword'
    Mobile.callTestCase(findTestCase('DDR_NavigateToPageThenVerifyPageTitle'), ['p_Protocol' : null, 'p_DomainName' : null, 'p_Path' : null
            , 'p_WindowTitle' : null])
    
    'Use WS keyword'
    WS.callTestCase(findTestCase('DDR_NavigateToPageThenVerifyPageTitle'), ['p_Protocol' : null, 'p_DomainName' : null, 'p_Path' : null
            , 'p_WindowTitle' : null])
    
    
    
    ```