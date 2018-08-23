---
title: "[Mobile] Verify Element Not Visible" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-not-visible.html 
description: 
---
Description
===========

Verify if a mobile element is NOT visible.

Parameters  
============

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>to</span></td><td><span>TestObject&nbsp;</span></td><td><span>Required</span></td><td>Represent a mobile element</td></tr><tr><td><span>timeout&nbsp;</span></td><td><span>int</span></td><td><span>Required</span></td><td>System will wait at most timeout (seconds) to return a result</td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td><span>Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
=======

**true** if the element is NOT visible; otherwise,** false**

Example
=======

You want to verify if 'Go to TimePicker' button is NOT visible.

```groovy
Mobile.verifyElementNotExist(findTestObject('android.widget.Button5 - Go to TimePicker'), 10)
```