---
title: "[WebUI] Modify Object Property" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-modify-object-property.html 
description: 
---
Description  
-------------

Modify existing property or add a new property to test object. Use when test object has attributes changing in runtime. This keyword does not modify the object saved in Object Repository, instead, it creates another test object, modifies and returns this test object. Hence, users must use a variable to store the returned object.

Parameters  
------------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" colspan="1" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">testObject</span></td><td class="" colspan="1" style=""><span style="" class="">Test Object</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style=""><span style="" class="">Represent a web element.</span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">propertyName</span></td><td class="" colspan="1" style=""><span style="" class="">String</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style=""><span style="" class="">Name of the property, for example, xpath, id, name,... If the property already exists in the object, the keyword will modify its related artifacts; if not, the keyword will add a new property.</span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">matchCondition</span></td><td class="" colspan="1" style=""><span style="" class="">String</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style=""><span style="" class="">Condition to match property name with property value, for example, equals, not equals,... In case the property already exists, input null to this argument to keep the old value of match condition.</span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">modifyValue</span></td><td class="" colspan="1" style=""><span style="" class="">String</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style=""><span style="" class="">Value of the property. In case the property already exists, input null to this argument to keep the old property value.</span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">isActive</span></td><td class="" colspan="1" style=""><span style="" class="">Boolean</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style=""><span style="" class="">True if the property is checked (used to find the test object); otherwise, false. In case the property already exists, input null to this argument to keep the old value.</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" colspan="1" style=""><span style="" class="">Optional</span></td><td class="" colspan="1" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param Type</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><span style="" class="">TestObject</span></td><td class="" style=""><p class="" style=""><span style="" class="">The newly created TestObject.</span></p></td></tr></tbody></table>

Example 
--------

You want to modify property "xpath" of the object "btn\_Login" and saved the modified object as "new\_btn".

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