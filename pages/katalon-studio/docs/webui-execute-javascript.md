---
title: "[WebUI] Execute JavaScript" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-execute-javascript.html 
description: 
---
Description  
-------------

Execute JavaScript on the currently selected frame or window. The provided script fragment will be executed as the body of an anonymous function.

###### Since 5.0

Parameters  
------------

<table class="relative-table wrapped confluenceTable" style="width: 86.3412%;"><colgroup><col style="width: 7.62873%;"><col style="width: 7.69231%;"><col style="width: 5.97584%;"><col style="width: 78.7031%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Param</th><th class="xtd-0-1 confluenceTh">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">script</span></td><td class="xtd-1-1 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">String</span></td><td class="xtd-1-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-1-3 confluenceTd" colspan="1">The JavaScript to execute.</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1">argument</td><td class="xtd-2-1 confluenceTd" colspan="1">List</td><td class="xtd-2-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Required</span></td><td class="xtd-2-3 confluenceTd" colspan="1">The arguments to the script. Can be empty or null.</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><span style="color: rgb(0,0,0);">flowControl</span></td><td class="xtd-3-1 confluenceTd"><span style="color: rgb(0,0,0);">FailureHandling</span></td><td class="xtd-3-2 confluenceTd" colspan="1"><span style="color: rgb(0,0,0);">Optional</span></td><td class="xtd-3-3 confluenceTd" colspan="1">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow">failure handling</a> <span style="color: rgb(0,0,0);">schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

*   Boolean, Long, Double, String, List, Web Element, or Null

Example 

Make an alert on the web page

```groovy
'Use Javascript to make an alert'
WebUI.executeJavaScript("alert('This is an alert')", null)
```

Return WebElement based on its id:

```groovy
WebElement element = WebUI.executeJavaScript("return document.getElementById('someId');", null)
```

Interact with returned WebElement

```groovy
WebElement element = WebUiCommonHelper.findWebElement(findTestObject('your/object'),30)
WebUI.executeJavaScript("arguments[0].style.border='3px solid blue'", Arrays.asList(element))
```

Click on returned WebElement:

```groovy
WebElement element = WebUiCommonHelper.findWebElement(findTestObject('your/object'),30)
WebUI.executeJavaScript("arguments[0].click", Arrays.asList(element))
```