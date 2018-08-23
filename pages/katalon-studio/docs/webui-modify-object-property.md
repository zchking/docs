---
title: "[WebUI] Modify Object Property" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-modify-object-property.html 
description: 
---
Description  
=============

Modify existing property or add a new property to test object. Use when test object has attributes changing in runtime. This keyword does not modify the object saved in Object Repository, instead, it creates another test object, modifies and returns this test object. Hence, users must use a variable to store the returned object.

Parameters  
============

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>testObject</span></td><td><span>Test Object</span></td><td><span>Required</span></td><td><span>Represent a web element.</span></td></tr><tr><td><span>propertyName</span></td><td><span>String</span></td><td><span>Required</span></td><td><span>Name of the property, for example, xpath, id, name,... If the property already exists in the object, the keyword will modify its related artifacts; if not, the keyword will add a new property.</span></td></tr><tr><td><span>matchCondition</span></td><td><span>String</span></td><td><span>Required</span></td><td><span>Condition to match property name with property value, for example, equals, not equals,... In case the property already exists, input null to this argument to keep the old value of match condition.</span></td></tr><tr><td><span>modifyValue</span></td><td><span>String</span></td><td><span>Required</span></td><td><span>Value of the property. In case the property already exists, input null to this argument to keep the old property value.</span></td></tr><tr><td><span>isActive</span></td><td><span>Boolean</span></td><td><span>Required</span></td><td><span>True if the property is checked (used to find the test object); otherwise, false. In case the property already exists, input null to this argument to keep the old value.</span></td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td><span>Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
=======

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td><span>TestObject</span></td><td><p><span>The newly created TestObject.</span></p></td></tr></tbody></table>

Example 
========

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