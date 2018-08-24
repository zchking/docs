---
title: "[Mobile] Verify Element Not Checked" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-not-checked.html 
redirect_from: "/display/KD/%5BMobile%5D+Verify+Element+Not+Checked" 
description: 
---
Description
===========

Verify if a mobile element is not checked.    

Parameters:  
=============

<table><thead><tr><th>Parameter</th><th>Parameter Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>to</span></td><td><span>TestObject&nbsp;</span></td><td><span>required</span></td><td>represent a mobile element</td></tr><tr><td><span>timeout&nbsp;</span></td><td><span>int</span></td><td><span>required</span></td><td>system will wait at most timeout (seconds) to return a result</td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>optional</span></td><td><span>Spec</span><span>ify </span><a>failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
=======

**true** if the element is NOT checked; otherwise, **false**

Example
=======

You want to verify if a checkbox is NOT checked 

Manual: 

** ![](../../images/katalon-studio/docs/mobile-verify-element-not-checked/image2016-8-15 9_56_9.png)**

Script:

```groovy
Mobile.verifyElementNotChecked(findTestObject('SampleApp.apk/android.widget.CheckBox - Checkbox0'), 10)
```