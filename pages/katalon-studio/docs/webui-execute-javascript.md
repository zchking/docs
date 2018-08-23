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

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Param</th><th class="xtd-0-1 confluenceTh" style="">Param Type</th><th class="xtd-0-2 confluenceTh" colspan="1" style="">Mandatory</th><th class="xtd-0-3 confluenceTh" colspan="1" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" colspan="1" style=""><span style="">script</span></td><td class="xtd-1-1 confluenceTd" colspan="1" style=""><span style="">String</span></td><td class="xtd-1-2 confluenceTd" colspan="1" style=""><span style="">Required</span></td><td class="xtd-1-3 confluenceTd" colspan="1" style="">The JavaScript to execute.</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" colspan="1" style="">argument</td><td class="xtd-2-1 confluenceTd" colspan="1" style="">List</td><td class="xtd-2-2 confluenceTd" colspan="1" style=""><span style="">Required</span></td><td class="xtd-2-3 confluenceTd" colspan="1" style="">The arguments to the script. Can be empty or null.</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><span style="">flowControl</span></td><td class="xtd-3-1 confluenceTd" style=""><span style="">FailureHandling</span></td><td class="xtd-3-2 confluenceTd" colspan="1" style=""><span style="">Optional</span></td><td class="xtd-3-3 confluenceTd" colspan="1" style="">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a> <span style="">schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

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