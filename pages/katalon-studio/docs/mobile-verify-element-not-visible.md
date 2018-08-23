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

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" style="">Mandatory</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><span style="" class="">to</span></td><td class="" style=""><span style="" class="">TestObject&nbsp;</span></td><td class="" style=""><span style="" class="">Required</span></td><td class="" style="">Represent a mobile element</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">timeout&nbsp;</span></td><td class="" style=""><span style="" class="">int</span></td><td class="" style=""><span style="" class="">Required</span></td><td class="" style="">System will wait at most timeout (seconds) to return a result</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" style=""><span style="" class="">Optional</span></td><td class="" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

**true** if the element is NOT visible; otherwise,** false**

Example
-------

You want to verify if 'Go to TimePicker' button is NOT visible.

```
Mobile.verifyElementNotExist(findTestObject('android.widget.Button5 - Go to TimePicker'), 10)
```