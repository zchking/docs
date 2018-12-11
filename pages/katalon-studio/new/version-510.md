---
title: "Version 5.10"
sidebar: katalon_studio_new_sidebar
permalink: katalon-studio/new/version-510.html
redirect_from:
    - "/katalon-studio/new/version-510/"

description: Release notes v5.10
---

## **Real-time Monitoring Katalon Studio Test Execution via Katalon Analytics Dashboard
to get the latest status of the test run results for immediate actions. With Katalon Analytics, the project team can make informed decision about testing and quality based on metrics and visualization of centralized test execution data. [Learn more...](https://docs.katalon.com/katalon-analytics/docs/overview.html)

![](../../images/katalon-studio/new/version-59/KAintegration.png)

## **Instantly Add a Test Case to Test Suite**
via "Add to Test Suite" button in Test Case details view. There are two options available either "Add to existing Test Suite" or "Add to a New Test Suite".
![](../../images/katalon-studio/new/version-59/addTS.png)


## **Skip Test Case Method in Test Listener**
to help skip running any undesired Test Cases. Sometimes the project team need to run only a few "hotspot" test cases that are flaky during regession test and to save effort and resources at the same time. It is now possible in Katalon Studio v5.10. In Test Listener, simply call skipThisTestCase() method to skip any Test Case that satisfied the condition. Skipped Test Case will have the status as SKIPPED in test execution result. 
![](../../images/katalon-studio/new/version-510/skipTestCase.png)  


## **Override Profile Variables via Command line Execution Mode
is possible since Katalon Studio v5.10. Simply pass the parameters in command line using: -g_XXX = XXX
Below is example of override an URL variabe:
```
-g_URL=http://demoaut.katalon.com
```

## **Support Custom API Methods**
to expand Katalon Studio Web Service Testing capability to handle custom design APIs on top of the default set of supported methods. Custom APIs can be added in Project Settings > Test Design > API/Web Service Method.

![](../../images/katalon-studio/new/version-59/custAPI.png)


_Bugs Fixed & Improvements_
-----------------------
*   Fixed an issue where test case cannot get variable from Input variable parameters
*   Fixed an issue where parameterized URL of web service object cannot be parsed
*   Adjusted minor logics to detect test object with XPath expression is NULL
