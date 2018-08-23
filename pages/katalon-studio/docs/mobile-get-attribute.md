---
title: "[Mobile] Get Attribute" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-get-attribute.html 
description: 
---
Description  
-------------

Get a specific attribute of a mobile element.

Parameters  
------------

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Param</th><th class="xtd-0-1 confluenceTh" style="">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" colspan="1" style=""><span style="">to</span></td><td class="xtd-1-1 confluenceTd" colspan="1" style=""><span style="">TestObject</span></td><td class="xtd-1-2 confluenceTd" colspan="1" style=""><span style="">Required</span></td><td class="xtd-1-3 confluenceTd" colspan="1" style=""><span style="">Represent a mobile element.</span></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" colspan="1" style=""><span style="">name</span></td><td class="xtd-2-1 confluenceTd" colspan="1" style=""><span style="">String</span></td><td class="xtd-2-2 confluenceTd" colspan="1" style=""><span style="">Required</span></td><td class="xtd-2-3 confluenceTd" colspan="1" style=""><span style="">Name of the attribute to get.</span></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" colspan="1" style=""><span style="">timeout</span></td><td class="xtd-3-1 confluenceTd" colspan="1" style=""><span style="">int</span></td><td class="xtd-3-2 confluenceTd" colspan="1" style=""><span style="">Required</span></td><td class="xtd-3-3 confluenceTd" colspan="1" style=""><span style="">Maximum period of time (in seconds) that system will wait to return a result.</span></td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-4-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-4-2 confluenceTd" colspan="1" style=""><span style="">Optional</span></td><td class="xtd-4-3 confluenceTd" colspan="1" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead style=""><tr style=""><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Param Type</div></th><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Description</div></th></tr></thead><tbody style=""><tr class="xtr-0" style=""><td class="xtd-0-0 confluenceTd" style=""><span style="">String</span></td><td class="xtd-0-1 confluenceTd" style=""><p style="">Value<span style="">&nbsp;of the attribute.</span></p></td></tr></tbody></table>

Example 
--------

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