---
title: "[Mobile] Verify Element Not Checked" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-not-checked.html 
description: 
---
Description
-----------

Verify if a mobile element is not checked.    

Parameters:  
-------------

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Parameter</th><th class="xtd-0-1 confluenceTh" style="">Parameter Type</th><th class="xtd-0-2 confluenceTh" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><span style="">to</span></td><td class="xtd-1-1 confluenceTd" style=""><span style="">TestObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd" style=""><span style="">required</span></td><td class="xtd-1-3 confluenceTd" style="">represent a mobile element</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><span style="">timeout&nbsp;</span></td><td class="xtd-2-1 confluenceTd" style=""><span style="">int</span></td><td class="xtd-2-2 confluenceTd" style=""><span style="">required</span></td><td class="xtd-2-3 confluenceTd" style="">system will wait at most timeout (seconds) to return a result</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-3-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-3-2 confluenceTd" style=""><span style="">optional</span></td><td class="xtd-3-3 confluenceTd" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true** if the element is NOT checked; otherwise, **false**

Example
-------

You want to verify if a checkbox is NOT checked 

Manual: 

** ![](../../images/katalon-studio/docs/mobile-verify-element-not-checked/image2016-8-15 9_56_9.png)**

Script:

```groovy
Mobile.verifyElementNotChecked(findTestObject('SampleApp.apk/android.widget.CheckBox - Checkbox0'), 10)
```