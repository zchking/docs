---
title: "[WebUI] Open Browser" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui_open_browser.html 
description: 
---
Description
-----------

Open a browser and navigate to the specified URL. If the URL is left empty then just open a browser.

Parameters
----------

<table class="wrapped relative-table confluenceTable" style="width: 97.9511%;"><colgroup><col style="width: 7.40741%;"><col style="width: 9.74235%;"><col style="width: 7.56844%;"><col style="width: 75.2818%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh" colspan="1">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">rawUrl</span></td><td class="xtd-1-1 confluenceTd" colspan="1">String</td><td class="xtd-1-2 confluenceTd" colspan="1">Optional</td><td class="xtd-1-3 confluenceTd"><p><span style="color: rgb(0,0,0);">URL of the web page to be opened can be left empty or null. If rawUrl doesn't contain protocol prefix, the protocol will be&nbsp;<a rel="nofollow">http://.</a>&nbsp;For e</span><span style="color: rgb(0,0,0);">xample:&nbsp;</span></p><ul><li class="blockList"><p><span style="color: rgb(0,0,0);"><a class="external-link" href="https://www.google.com" rel="nofollow">https://www.google.com</a>&nbsp;</span></p></li><li class="blockList"><p><span style="color: rgb(0,0,0);">file:///D:/Development/index.html&nbsp;</span></p></li><li class="blockList"><p><span style="color: rgb(0,0,0);"><a class="external-link" href="http://kms-technology.com" rel="nofollow">kms-technology.com</a> =&gt; <a class="external-link" href="http://kms-technology.com" rel="nofollow">http://kms-technology.com</a></span></p></li><li class="blockList"><p><a rel="nofollow">http://katalon.com/</a><span style="color: rgb(0,0,0);">&nbsp;</span></p></li></ul></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-2-1 confluenceTd" colspan="1">FailureHandling</td><td class="xtd-2-2 confluenceTd" colspan="1">Optional</td><td class="xtd-2-3 confluenceTd">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Example
-------

1.  You want to open a browser and navigate to '[http://demoaut.katalon.com/](http://demoaut.katalon.com/)' URL:
    
    ```groovy
    import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
    import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
    import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
    import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
    import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
    import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
    import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
    import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
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
    
    WebUI.openBrowser('http://demoaut.katalon.com/')
    
    WebUI.closeBrowser()
    ```
    
2.  You want to open browser only
    
    ```groovy
    import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
    import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
    import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
    import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
    import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
    import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
    import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
    import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
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
    
    WebUI.openBrowser('')
    
    WebUI.closeBrowser()
    ```