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

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element |
| timeout  | int | Required | System will wait at most timeout (seconds) to return a result |
| flowControl | FailureHandling | Optional | Specify failure handling schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

**true** if the element is NOT visible; otherwise,** false**

Example
-------

You want to verify if 'Go to TimePicker' button is NOT visible.

```
Mobile.verifyElementNotExist(findTestObject('android.widget.Button5 - Go to TimePicker'), 10)
```