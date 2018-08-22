---
title: "Failure Handling" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/failure_handling.html 
description: 
---
Failure handling settings allow users to decide whether Katalon Studio will continue running or not in case of errors occurs during execution.

Currently, Katalon Studio supports the following failure handling options:

<table class="wrapped relative-table confluenceTable" style="width: 72.9233%;"><colgroup><col style="width: 27.7412%;"><col style="width: 72.2588%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh"><p><strong>Option</strong></p></th><th class="xtd-0-1 confluenceTh"><p><strong>Description</strong></p></th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><p>Stop on Failure</p></td><td class="xtd-1-1 confluenceTd"><p>Katalon Studio will stop execution should there be any error occurs.</p><p>The step with errors will have <strong>Failed</strong> status.</p></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><p>Continue on Failure</p></td><td class="xtd-2-1 confluenceTd"><p>Katalon Studio will continue in spite of any error during its execution.</p><p><span>The step with errors will have <strong>Failed</strong> status</span>.</p></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><p>Optional</p></td><td class="xtd-3-1 confluenceTd"><p><span><span>Katalon Studio will continue in spite of any error during its execution.</span></span></p><p><span><span>&nbsp;</span><span>The step with errors will have </span></span><strong>Warning</strong> status.</p></td></tr></tbody></table>

Default failure handling behavior
---------------------------------

Follow these steps to define the default behavior for failure handling to be applied across your project:

1.  From Katalon Studio menu, access **Project > Settings > Test Case**.   
    ![](../../images/katalon-studio/docs/failure_handling/image2017-6-30 20_36_43.png)  
      
    
2.  Select the preferred option for the default behavior of **Failure Handling**. Click **OK** when you're done.
    
    The selected option will be applied to new test steps only. For the steps already existed in your test cases, their failure handling option will not be affected by this change. Thus, you may need to [update them manually](https://docs.katalon.com/display/KD/Failure+handling#Failurehandling-Overridefailurehandlingbehavior).
    

Override failure handling behavior
----------------------------------

You can override the default failure handling behavior for each test step manually in either **Manual view** or **Scripting view** of test case. 

### In Manual View

1.  Right click on the step that you want to change the failure handling behavior to trigger its context menu  
    ![](../../images/katalon-studio/docs/failure_handling/image2017-8-18 15_13_36.png)  
      
    
2.  Select the preferred failure handling option and save your test case.  

### In Scripting View

For all built-in keywords in Katalon Studio, you can add _FailureHandling_ as the last parameter.When editing a keyword in Scripting mode, use any of these option to specify its behavior.

```groovy
FailureHandling.STOP_ON_FAILURE
FailureHandling.CONTINUE_ON_FAILURE
FailureHandling.OPTIONAL
```

For example:

![](../../images/katalon-studio/docs/failure_handling/23.png)