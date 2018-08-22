---
title: "[WebUI] Select Option By Label" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-select-option-by-label.html 
description: 
---
Description
-----------

 Select the options with the given label (displayed text).

![](../../images/katalon-studio/docs/webui-select-option-by-label/label.jpg)

Parameters
----------

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1">to</td><td class="xtd-1-1 confluenceTd" colspan="1">TestObject</td><td class="xtd-1-2 confluenceTd" colspan="1">Required</td><td class="xtd-1-3 confluenceTd" colspan="1">Represent a web element.</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1">labelText</td><td class="xtd-2-1 confluenceTd" colspan="1">String</td><td class="xtd-2-2 confluenceTd" colspan="1">Required</td><td class="xtd-2-3 confluenceTd" colspan="1">Displayed text of the options to be selected.</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd" colspan="1">isRegex</td><td class="xtd-3-1 confluenceTd" colspan="1">boolean</td><td class="xtd-3-2 confluenceTd" colspan="1">Required</td><td class="xtd-3-3 confluenceTd" colspan="1">true if the label is a regular expression, otherwise false</td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-4-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-4-2 confluenceTd" colspan="1">Optional</td><td class="xtd-4-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Spec</span>ify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop</td></tr></tbody></table>

  
Example
----------

You want to select "Hongkong CURA Healthcare Center" option in the list.

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
import org.openqa.selenium.Keys as Keys

'Open browser and navigate to demo AUT site'
WebUI.openBrowser('http://demoaut.katalon.com/')

'Click on \'Make Appointment\' button'
WebUI.click(findTestObject('Page_CuraAppointment/btn_BookAppointment'))

'Select \"Hongkong CURA Healthcare Center\" option'
WebUI.selectOptionByValue(findTestObject('Page_CuraAppointment/lst_Facility'), 'Hongkong CURA Healthcare Center', false)

'Close Browser'
WebUI.closeBrowser()
```