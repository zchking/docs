---
title: "[Mobile] Verify Element Has Attribute" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile_verify_element_has_attribute.html 
description: 
---
Description
-----------

Verify if the element has an attribute with a specific name.

Parameters
----------

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh"><span style="color: rgb(0,0,0);">Parameter</span></th><th class="xtd-0-1 confluenceTh"><span style="color: rgb(0,0,0);">Parameter Type</span></th><th class="xtd-0-2 confluenceTh"><span style="color: rgb(0,0,0);">Mandatory</span></th><th class="xtd-0-3 confluenceTh"><span style="color: rgb(0,0,0);">Description</span></th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">to</span></td><td class="xtd-1-1 confluenceTd"><span style="color: rgb(0,0,0);">TestObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-1-3 confluenceTd"><span style="color: rgb(0,0,0);">Represent a mobile element</span></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">attributeName&nbsp;</span></td><td class="xtd-2-1 confluenceTd"><span style="color: rgb(0,0,0);">String&nbsp;</span></td><td class="xtd-2-2 confluenceTd"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-2-3 confluenceTd"><span style="color: rgb(0,0,0);">The name of the attribute to verify</span></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><span style="color: rgb(0,0,0);">timeout&nbsp;</span></td><td class="xtd-3-1 confluenceTd"><span style="color: rgb(0,0,0);">int</span></td><td class="xtd-3-2 confluenceTd"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-3-3 confluenceTd"><span style="color: rgb(0,0,0);">System will wait at most timeout (seconds) to return a result</span></td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-4-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-4-2 confluenceTd"><span style="color: rgb(0,0,0);">Optional</span></td><td class="xtd-4-3 confluenceTd"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true** if the element has the attribute with a specific name; otherwise, **false**

Example
-------

You want to verify 'App' control has 'class' attribute in 10 seconds timeout.

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil
 
'Start application on current selected android\'s device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)
 
'Verify App control has class attribute in 10 seconds timeout'
Mobile.verifyElementExist(findTestObject('Application/android.widget.TextView - App'),'class', 10)
 
Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)
 
Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```