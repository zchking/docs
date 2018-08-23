---
title: "[WebUI] Open Browser" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-open-browser.html 
description: 
---
Description
-----------

Open a browser and navigate to the specified URL. If the URL is left empty then just open a browser.

Parameters
----------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" colspan="1" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><span style="" class="">rawUrl</span></td><td class="" colspan="1" style="">String</td><td class="" colspan="1" style="">Optional</td><td class="" style=""><p class="" style=""><span style="" class="">URL of the web page to be opened can be left empty or null. If rawUrl doesn't contain protocol prefix, the protocol will be&nbsp;<a rel="nofollow" class="" style="">http://.</a>&nbsp;For e</span><span style="" class="">xample:&nbsp;</span></p><ul class="" style=""><li class="" style=""><p class="" style=""><span style="" class=""><a class="" href="https://www.google.com" rel="nofollow" style="">https://www.google.com</a>&nbsp;</span></p></li><li class="" style=""><p class="" style=""><span style="" class="">file:///D:/Development/index.html&nbsp;</span></p></li><li class="" style=""><p class="" style=""><span style="" class=""><a class="" href="http://kms-technology.com" rel="nofollow" style="">kms-technology.com</a> =&gt; <a class="" href="http://kms-technology.com" rel="nofollow" style="">http://kms-technology.com</a></span></p></li><li class="" style=""><p class="" style=""><a rel="nofollow" class="" style="">http://katalon.com/</a><span style="" class="">&nbsp;</span></p></li></ul></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" colspan="1" style="">FailureHandling</td><td class="" colspan="1" style="">Optional</td><td class="" style="">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Example
-------

1.  You want to open a browser and navigate to '[http://demoaut.katalon.com/](http://demoaut.katalon.com/)' URL:
    
    ```
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
    
    ```
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