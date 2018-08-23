---
title: "[Mobile] Wait For Element Attribute Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-wait-for-element-attribute-value.html 
description: 
---
Description
-----------

Wait until the given mobile element has an attribute with the specified name and value.

Parameters 
-----------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style=""><span style="" class="">Param</span></th><th class="" colspan="1" style=""><span style="" class="">Param Type</span></th><th class="" colspan="1" style=""><span style="" class="">Mandatory</span></th><th class="" style=""><span style="" class="">Description</span></th></tr><tr class="" style=""><td class="" style=""><span style="" class="">to</span></td><td class="" colspan="1" style=""><span style="" class="">TestObject</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" style=""><p class="" style=""><span style="" class="">Represent a mobile element.</span></p></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">attributeName</span></td><td class="" colspan="1" style=""><span style="" class="">String</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style=""><span style="" class="">The name of the attribute to wait for.</span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">attributeValue</span></td><td class="" colspan="1" style=""><span style="" class="">String</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style=""><span style="" class="">The value of the attribute to wait for.</span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">timeout</span></td><td class="" colspan="1" style=""><span style="" class="">int</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style=""><span style="" class="">System will wait at most timeout (seconds) to return a result</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" colspan="1" style=""><span style="" class="">FailureHandling</span></td><td class="" colspan="1" style=""><span style="" class="">Optional</span></td><td class="" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" colspan="1" style=""><span style="" class="">Param Type</span></th><th class="" style=""><span style="" class="">Description</span></th></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">boolean</span></td><td class="" style=""><ul class="" style=""><li class="" style=""><span style="" class=""><strong class="" style="">true:</strong> the element has the attribute with the specified name and value in the given timeout.</span></li><li class="" style=""><span style="" class=""><strong class="" style="">false:</strong> the element doesn't have the attribute with the specified name and value in the given timeout.</span></li></ul></td></tr></tbody></table>

Example
-------

You want to wait until 'App' control has 'class' attribute with value: android.widget.TextView

```
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint

'Start application on current selected android\'s device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)

'Wait until app control has class atribute with value android.widget.TextView'
Mobile.waitForElementAttributeValue(findTestObject(findTestObject('Object Repository/Application/android.widget.TextView - App')), 'class', 'android.widget.TextView', 20)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```