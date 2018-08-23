---
title: "[WebUI] Verify Option Not Selected By Index" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-option-not-selected-by-index.html 
description: 
---
**Verify if the options at the given indices are not selected**

**Parameters:  **

*   to - TestObject (required): represent a web element
*   range - Object (required): the indexes of the options to be verified if not being selected
*   isRegex - boolean (required): true if the label is a regular expression, false by default
*   timeOut - int (required):  system will wait at most timeout (seconds) to return result
    
*   flowControl - FailureHandling (optional): specify failure handling schema to determine whether the execution should be allowed to continue or stop. More details are [here](https://docs.katalon.com/x/qAAM).

#### Returns

*   **true:** if all options at given indices are not selected
*   **false:** if options  at given indices are selected

#### Example: You want to verify if the option 1 in the list is not selected in 5s timeout

Manual: 

![](../../images/katalon-studio/docs/webui-verify-option-not-selected-by-index/image2016-8-21 19_30_39.png)

Script:

```groovy
WebUI.verifyOptionNotSelectedByIndex(findTestObject('The Second Landing Page/select_js-intent'), 1, 5)
```