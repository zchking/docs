---
title: "[WebUI] Modify Object Property" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui_modify_object_property.html 
description: 
---
Description  
-------------

Modify existing property or add a new property to test object. Use when test object has attributes changing in runtime. This keyword does not modify the object saved in Object Repository, instead, it creates another test object, modifies and returns this test object. Hence, users must use a variable to store the returned object.

Parameters  
------------

<table class="relative-table wrapped confluenceTable" style="width: 86.3412%;"><colgroup><col style="width: 7.62873%;"><col style="width: 7.69231%;"><col style="width: 5.97584%;"><col style="width: 78.7031%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">testObject</span></td><td class="xtd-1-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Test Object</span></td><td class="xtd-1-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-1-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Represent a web element.</span></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">propertyName</span></td><td class="xtd-2-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">String</span></td><td class="xtd-2-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-2-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Name of the property, for example, xpath, id, name,... If the property already exists in the object, the keyword will modify its related artifacts; if not, the keyword will add a new property.</span></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">matchCondition</span></td><td class="xtd-3-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">String</span></td><td class="xtd-3-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-3-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Condition to match property name with property value, for example, equals, not equals,... In case the property already exists, input null to this argument to keep the old value of match condition.</span></td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">modifyValue</span></td><td class="xtd-4-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">String</span></td><td class="xtd-4-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-4-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Value of the property. In case the property already exists, input null to this argument to keep the old property value.</span></td></tr><tr class="xtr-5"><td class="xtd-5-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">isActive</span></td><td class="xtd-5-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Boolean</span></td><td class="xtd-5-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-5-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">True if the property is checked (used to find the test object); otherwise, false. In case the property already exists, input null to this argument to keep the old value.</span></td></tr><tr class="xtr-6"><td class="xtd-6-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-6-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-6-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Optional</span></td><td class="xtd-6-3 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="relative-table wrapped confluenceTable" style="width: 31.7608%;"><colgroup><col style="width: 25.2595%;"><col style="width: 74.7405%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param Type</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">TestObject</span></td><td class="xtd-1-1 confluenceTd"><p><span style="color: rgb(0,0,0);">The newly created TestObject.</span></p></td></tr></tbody></table>

Example 
--------

You want to modify property "xpath" of the object "btn\_Login" and saved the modified object as "new\_btn".

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

'Open browser and navigate to AUT'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Input username'
WebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)

'Input password'
WebUI.setText(findTestObject('Page_Login/txt_Password'), Password)
 
'Modify xpath of \'Login\' button'
new_btn = WebUI.modifyObjectProperty(findTestObject('Page_Login/btn_Login'), 'xpath', 'equals', '//*[@type=\"button\"]', false)
 
'Click on new_btn'
WebUI.click(new_btn)

'Close browser'
WebUI.closeBrowser()
```