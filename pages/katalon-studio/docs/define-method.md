---
title: "Define method" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/define-method.html 
description: 
---
A method consists of instructions to perform a specific task. Defined methods can be called for reused later. Refer to [Method Call Statements](/display/KD/Method+Call+Statements) for more details regarding how to call a defined method.

Define a method in Manual view
------------------------------

1.  Open a test case in **Manual** view, then select to add **Method** from command toolbar.  
    ![](../../images/katalon-studio/docs/define-method/image2017-6-30 20_45_48.png)  
      
    
2.  The **Method builder** dialog is displayed.   
    ![](../../images/katalon-studio/docs/define-method/image2017-2-10 15_48_9.png)  
    Specify the required information for your method as following:
    
    | Field | Description |
    | --- | --- |
    | Name | The name of the method. |
    | Return type | 
    The object type that this method will return after its execution.
    
    
    
     |
    | Setup, Teardown options | 
    
    Select any checkbox to indicate whether it should be a setup() or teardown() method. Refer to [SetUp() and TearDown() in Manual view](#Definemethod-SetUp()andTearDown()inManualview) for more details.
    
     |
    | Parameter list | 
    
    Any parameter needed to pass into the method.
    
    By clicking on the **Insert** button, a row will be appended into the grid. You can then change the type and name of the parameter by double clicking and editing the appropriate cell.
    
     |
    
    Click **OK** after configuring the method details.
    
3.  A test step representing the recently defined method is added to the test case. You can switch to **Script** view to [define content for the method](https://docs.katalon.com/display/KD/Define+method#Definemethod-DefineamethodinScriptingview).  
    ![](../../images/katalon-studio/docs/define-method/image2017-2-28 14_55_16.png)  
      
    
4.  Save the test case when you're done.
    
    Once a test step is defined as **Method**, it will **not** be allowed to change into another keyword.
    

### SetUp() and TearDown() in Manual view

Automation testers usually want to specify prerequisite and clean-up configuration for their test cases.

With the prerequisite configuration, certain actions must be taken before starting test execution. For clean-up configuration, some actions must be carried out after the test execution finishes.

This can be achieved using the setup() and teardown() methods. 

| Method | Description | Common Usage |
| --- | --- | --- |
| 
Set Up

 | 

This method is always called **first** prior to executing main test steps.  
  


 | 

Prepare testing environment such as:

*   Starting new browser with clean cookies
*   Creating temporary & proxy databases, directories
*   Starting a server process
*   ...

 |
| 

Tear Down If Failed

 | 

This method will be called after executing all steps of the test case **and** one of those steps has **Failed** status.

 | 

Clean-up testing environment such as:

*   Closing browsers
*   Disclosing opened connections to database or server
*   ...

 |
| 

Tear Down If Passed

 | 

This method will be called after executing all steps of the test case **and** all of those steps have **Pass** status.

 |
| 

Tear Down If Error

 | 

This method will be called after executing all steps of the test case **and** one of those steps has **Error** status.

 |
| 

Tear Down

 | 

This method will be called **finally**.

 |

The SetUp()/TearDown() methods will have **Error** status if there is any issue occurred during their execution. The only exception to this is when _AssertionError_ Class is used or the methods are skipped.

Define a method in Scripting view
---------------------------------

The **Script** view of a test case allows you to programmatically define and handle methods easily using either Groovy or Java language. Refer to [http://groovy-lang.org/structure.html#_methods](http://groovy-lang.org/structure.html#_methods) for details about methods in Groovy.

For example:

![](../../images/katalon-studio/docs/define-method/1.png)

### SetUp() and TearDown() in Scripting view

You can declare a method as setup() or teardown() method using the appropriated annotation above it:

```
@com.kms.katalon.core.annotation.SetUp
@com.kms.katalon.core.annotation.TearDown
@com.kms.katalon.core.annotation.TearDownIfFailed
@com.kms.katalon.core.annotation.TearDownIfPassed
@com.kms.katalon.core.annotation.TearDownIfError
```

For example:

![](../../images/katalon-studio/docs/define-method/image2017-2-28 15_10_1.png)