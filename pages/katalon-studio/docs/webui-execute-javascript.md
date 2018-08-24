---
title: "[WebUI] Execute JavaScript" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-execute-javascript.html 
redirect_from: "/display/KD/%5BWebUI%5D+Execute+JavaScript" 
description: 
---
Description  
-------------

Execute JavaScript on the currently selected frame or window. The provided script fragment will be executed as the body of an anonymous function.

###### Since 5.0

Parameters  
------------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td><span>script</span></td><td><span>String</span></td><td><span>Required</span></td><td>The JavaScript to execute.</td></tr><tr><td>argument</td><td>List</td><td><span>Required</span></td><td>The arguments to the script. Can be empty or null.</td></tr><tr><td><span>flowControl</span></td><td><span>FailureHandling</span></td><td><span>Optional</span></td><td>Specify <a>failure handling</a> <span>schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

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