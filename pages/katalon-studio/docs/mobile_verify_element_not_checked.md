---
title: "[Mobile] Verify Element Not Checked" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile_verify_element_not_checked.html 
description: 
---
Description
-----------

Verify if a mobile element is not checked.    

Parameters:  
-------------

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Parameter</th><th class="xtd-0-1 confluenceTh">Parameter Type</th><th class="xtd-0-2 confluenceTh">Mandatory</th><th class="xtd-0-3 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">to</span></td><td class="xtd-1-1 confluenceTd"><span style="color: rgb(0,0,0);">TestObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd"><span style="color: rgb(0,0,0);">required</span></td><td class="xtd-1-3 confluenceTd">represent a mobile element</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">timeout&nbsp;</span></td><td class="xtd-2-1 confluenceTd"><span style="color: rgb(0,0,0);">int</span></td><td class="xtd-2-2 confluenceTd"><span style="color: rgb(0,0,0);">required</span></td><td class="xtd-2-3 confluenceTd">system will wait at most timeout (seconds) to return a result</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-3-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-3-2 confluenceTd"><span style="color: rgb(0,0,0);">optional</span></td><td class="xtd-3-3 confluenceTd"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true** if the element is NOT checked; otherwise, **false**

Example
-------

You want to verify if a checkbox is NOT checked 

Manual: 

** ![](../../images/katalon-studio/docs/mobile_verify_element_not_checked/image2016-8-15 9_56_9.png)**

Script:

```groovy
Mobile.verifyElementNotChecked(findTestObject('SampleApp.apk/android.widget.CheckBox - Checkbox0'), 10)
```