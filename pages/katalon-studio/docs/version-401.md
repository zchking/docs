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

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th style="" class="confluenceTh">Param name</th><th class="confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style="">-email</td><td class="confluenceTd" style="">Registered email on Katalon Studio site</td></tr><tr style=""><td class="confluenceTd" style="">-password</td><td class="confluenceTd" style="">Your password tied to the above email</td></tr></tbody></table>

**Example**

```groovy
katalon -runMode=console -consoleLog -projectPath="D:\Project\Katalon\Katalon_projects\Regression Test\RegressionTest\RegressionTest.prj" -retry=0 -testSuitePath="Test Suites/New Test Suite78" -browserType="Chrome" -email="vinhtest@gmail.com" -password="12345678"
```