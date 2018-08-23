---
title: "Version 4.0.1" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-401.html 
description: 
---
**General**

Add 'Offline Activation' feature on Activation Screen

**Console mode execution**

Add additional parameters to console mode execution. You can use this parameters for activation automatically when running on console mode:

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th style="" class="">Param name</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style="">-email</td><td class="" style="">Registered email on Katalon Studio site</td></tr><tr class="" style=""><td class="" style="">-password</td><td class="" style="">Your password tied to the above email</td></tr></tbody></table>

**Example**

```
katalon -runMode=console -consoleLog -projectPath="D:\Project\Katalon\Katalon_projects\Regression Test\RegressionTest\RegressionTest.prj" -retry=0 -testSuitePath="Test Suites/New Test Suite78" -browserType="Chrome" -email="vinhtest@gmail.com" -password="12345678"
```