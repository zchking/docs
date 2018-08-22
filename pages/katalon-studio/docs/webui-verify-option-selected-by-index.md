---
title: "[WebUI] Verify Option Selected By Index" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-option-selected-by-index.html 
description: 
---
**Verify if the options at the given indices are selected.**

**Parameters:  **

*   to - TestObject (required): represent a web element
*   range - Object (required): list of indexes of the options to be verified if being
*   timeout - int (requiredl): system will wait at most timeout (seconds) to return result
*   flowControl - FailureHandling (optional): specify failure handling schema to determine whether the execution should be allowed to continue or stop. More details are in this page: [Failure handling](https://docs.katalon.com/x/qAAM)

#### Returns

*   **true:** if options with given indices are selected
*   **false:** if options with given indices are not selected

#### **Example: You want to verify if the option 1 is selected in the list**

Manual: 

![](../../images/katalon-studio/docs/webui-verify-option-selected-by-index/image2016-8-15 19_28_13.png)

Script:

```groovy
WebUI.verifyOptionSelectedByIndex(findTestObject('The Second Landing Page/select_js-intent'), 1, 2)
```