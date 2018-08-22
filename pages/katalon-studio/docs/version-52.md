---
title: "Version 5.2" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-52.html 
description: 
---
**Mobile Testing**
------------------

In version 5.2, **Android SDK** files are **removed** to reduce the total download size of Katalon Studio application package. This will save tremendous download time and more testing time for Katalon Studio users. 

In case of users Execute or Record/Spy on Mobile, Katalon Studio will auto-detect and ask permission to download Android SDK files. 

[**Test Listeners **(Test Hooks)](https://docs.katalon.com/x/7zhO)
------------------------------------------------------------------

Introducing Test Hooks feature in Katalon Studio version 5.2 to support users extend testing flows. Test Hooks are events binding that represent automation logic and will be executed once the condition is matched. Katalon Studio introduces 4 types of Hooks:

*   Generate sample Before Test Case method
*   Generate sample After Test Case method
*   Generate sample Before Test Suite method
*   Generate sample After Test Suite method  
    

![](../../images/katalon-studio/docs/version-52/image2017-12-5 10_35_38.png)

**Objects Spy/Record**
----------------------

Enhanced Katalon Studio objects detection approach to auto-select only important captured properties that are used to locate the object instead of selecting all captured properties.

![](../../images/katalon-studio/docs/version-52/image2017-12-5 14_5_33.png)