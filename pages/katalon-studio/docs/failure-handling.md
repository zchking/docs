---
title: "Failure Handling" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/failure-handling.html 
description: 
---
Failure handling settings allow users to decide whether Katalon Studio will continue running or not in case of errors occurs during execution.

Currently, Katalon Studio supports the following failure handling options:

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style=""><p class="" style=""><strong class="" style="">Option</strong></p></th><th class="" style=""><p class="" style=""><strong class="" style="">Description</strong></p></th></tr><tr class="" style=""><td class="" style=""><p class="" style="">Stop on Failure</p></td><td class="" style=""><p class="" style="">Katalon Studio will stop execution should there be any error occurs.</p><p class="" style="">The step with errors will have <strong class="" style="">Failed</strong> status.</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">Continue on Failure</p></td><td class="" style=""><p class="" style="">Katalon Studio will continue in spite of any error during its execution.</p><p class="" style=""><span class="" style="">The step with errors will have <strong class="" style="">Failed</strong> status</span>.</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">Optional</p></td><td class="" style=""><p class="" style=""><span class="" style=""><span class="" style="">Katalon Studio will continue in spite of any error during its execution.</span></span></p><p class="" style=""><span class="" style=""><span class="" style="">&nbsp;</span><span class="" style="">The step with errors will have </span></span><strong class="" style="">Warning</strong> status.</p></td></tr></tbody></table>

Default failure handling behavior
---------------------------------

Follow these steps to define the default behavior for failure handling to be applied across your project:

1.  From Katalon Studio menu, access **Project > Settings > Test Case**.   
    ![](../../images/katalon-studio/docs/failure-handling/image2017-6-30 20_36_43.png)  
      
    
2.  Select the preferred option for the default behavior of **Failure Handling**. Click **OK** when you're done.
    
    The selected option will be applied to new test steps only. For the steps already existed in your test cases, their failure handling option will not be affected by this change. Thus, you may need to [update them manually](https://docs.katalon.com/display/KD/Failure+handling#Failurehandling-Overridefailurehandlingbehavior).
    

Override failure handling behavior
----------------------------------

You can override the default failure handling behavior for each test step manually in either **Manual view** or **Scripting view** of test case. 

### In Manual View

1.  Right click on the step that you want to change the failure handling behavior to trigger its context menu  
    ![](../../images/katalon-studio/docs/failure-handling/image2017-8-18 15_13_36.png)  
      
    
2.  Select the preferred failure handling option and save your test case.  

### In Scripting View

For all built-in keywords in Katalon Studio, you can add _FailureHandling_ as the last parameter.When editing a keyword in Scripting mode, use any of these option to specify its behavior.

```
FailureHandling.STOP_ON_FAILURE
FailureHandling.CONTINUE_ON_FAILURE
FailureHandling.OPTIONAL
```

For example:

![](../../images/katalon-studio/docs/failure-handling/23.png)