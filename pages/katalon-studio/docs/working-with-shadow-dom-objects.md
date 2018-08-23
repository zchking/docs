---
title: "Working with Shadow DOM Objects" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/working-with-shadow-dom-objects.html 
description: 
---
Shadow DOM provides a powerful and useful solution for Web Developers. However, it becomes a challenge for automation testing because Shadow DOM elements inside a shadow root technically do not exist in the main document. Therefore, test automation frameworks that relying on XPath or querySelector to discover elements will not work with Shadow DOM.

Katalon Studio allows users to work with Shadow DOM elements. First, users need to use Spy Web feature to capture parent objects that contains Shadow DOM elements.

Next step is to identify the properties of Shadow DOM element and create a new object in Katalon Studio with properties defined accordingly.

In the new object setting, select **Shadow Root Parent** option and define with parent object from the firs step. This allows Katalon Studio traverse through parent object via generated CSS selector to detect Shadow DOM object by its properties (Refer to Object Properties).

For example, the following test execution log shows Katalon Studio tried to find parent object first. Once parent object was found, Katalon Studio will try to find Shadow DOM element by CSS selector:

Limitation
----------

*   Only for **Chrome** browser (53 to latest Version). Other browsers will be considered for future releases.
*   Only allow 1 level of nested Shadow DOM parent
    
*   Record and Spy feature will not work with Shadow DOM (due to elements do not exist in the DOM).