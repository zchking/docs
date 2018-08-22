---
title: "[Mobile] Verify Element Not Visible" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-not-visible.html 
description: 
---
Description
-----------

Verify if a mobile element is NOT visible.

Parameters  
------------

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh">Mandatory</th><th class="xtd-0-3 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><span style="color: rgb(0,0,0);">to</span></td><td class="xtd-1-1 confluenceTd"><span style="color: rgb(0,0,0);">TestObject&nbsp;</span></td><td class="xtd-1-2 confluenceTd"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-1-3 confluenceTd">Represent a mobile element</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><span style="color: rgb(0,0,0);">timeout&nbsp;</span></td><td class="xtd-2-1 confluenceTd"><span style="color: rgb(0,0,0);">int</span></td><td class="xtd-2-2 confluenceTd"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-2-3 confluenceTd">System will wait at most timeout (seconds) to return a result</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-3-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-3-2 confluenceTd"><span style="color: rgb(0,0,0);">Optional</span></td><td class="xtd-3-3 confluenceTd"><span style="color: rgb(0,0,0);">Spec</span><span>ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a><span> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true** if the element is NOT visible; otherwise,** false**

Example
-------

You want to verify if 'Go to TimePicker' button is NOT visible.

```groovy
Mobile.verifyElementNotExist(findTestObject('android.widget.Button5 - Go to TimePicker'), 10)
```