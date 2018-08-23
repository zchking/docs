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

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Param</th><th class="" style="">Param Type</th><th class="" colspan="1" style="">Mandatory</th><th class="" colspan="1" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">script</span></td><td class="" colspan="1" style=""><span style="" class="">String</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style="">The JavaScript to execute.</td></tr><tr class="" style=""><td class="" colspan="1" style="">argument</td><td class="" colspan="1" style="">List</td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style="">The arguments to the script. Can be empty or null.</td></tr><tr class="" style=""><td class="" style=""><span style="" class="">flowControl</span></td><td class="" style=""><span style="" class="">FailureHandling</span></td><td class="" colspan="1" style=""><span style="" class="">Optional</span></td><td class="" colspan="1" style="">Specify <a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a> <span style="" class="">schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Returns
-------

*   Boolean, Long, Double, String, List, Web Element, or Null

Example 

Make an alert on the web page

```
'Use Javascript to make an alert'
WebUI.executeJavaScript("alert('This is an alert')", null)
```

Return WebElement based on its id:

```
WebElement element = WebUI.executeJavaScript("return document.getElementById('someId');", null)
```

Interact with returned WebElement

```
WebElement element = WebUiCommonHelper.findWebElement(findTestObject('your/object'),30)
WebUI.executeJavaScript("arguments[0].style.border='3px solid blue'", Arrays.asList(element))
```

Click on returned WebElement:

```
WebElement element = WebUiCommonHelper.findWebElement(findTestObject('your/object'),30)
WebUI.executeJavaScript("arguments[0].click", Arrays.asList(element))
```