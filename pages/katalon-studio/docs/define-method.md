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
    
    <table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Field</th><th class="confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style="">Name</td><td class="confluenceTd" style="">The name of the method.</td></tr><tr style=""><td class="confluenceTd" style="">Return type</td><td class="confluenceTd" style=""><div class="content-wrapper" style=""><p style="">The object type that this method will return after its execution.</p></div></td></tr><tr style=""><td class="confluenceTd" style="">Setup, Teardown options</td><td class="confluenceTd" style=""><p style="">Select any checkbox to indicate whether it should be a setup() or teardown() method. Refer to <a href="#Definemethod-SetUp()andTearDown()inManualview" style="">SetUp() and TearDown() in Manual view</a> for more details.</p></td></tr><tr style=""><td colspan="1" class="confluenceTd" style="">Parameter list</td><td colspan="1" class="confluenceTd" style=""><p style="">Any parameter needed to pass into the method.</p><p style="">By clicking on the <strong style="">Insert</strong> button, a row will be appended into the grid. You can then change the type and name of the parameter by double clicking and editing the appropriate cell.</p></td></tr></tbody></table>
    
    Click **OK** after configuring the method details.
    
3.  A test step representing the recently defined method is added to the test case. You can switch to **Script** view to [define content for the method](https://docs.katalon.com/display/KD/Define+method#Definemethod-DefineamethodinScriptingview).  
    ![](../../images/katalon-studio/docs/define-method/image2017-2-28 14_55_16.png)  
      
    
4.  Save the test case when you're done.
    
    Once a test step is defined as **Method**, it will **not** be allowed to change into another keyword.
    

### SetUp() and TearDown() in Manual view

Automation testers usually want to specify prerequisite and clean-up configuration for their test cases.

With the prerequisite configuration, certain actions must be taken before starting test execution. For clean-up configuration, some actions must be carried out after the test execution finishes.

This can be achieved using the setup() and teardown() methods. 

<table class="wrapped relative-table confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Method</th><th class="confluenceTh" style="">Description</th><th colspan="1" class="confluenceTh" style="">Common Usage</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style=""><p style="">Set Up</p></td><td class="confluenceTd" style=""><p style="">This method is always called <strong style="">first</strong> prior to executing main test steps.<br style=""><br style=""></p></td><td colspan="1" class="confluenceTd" style=""><p style="">Prepare testing environment such as:</p><ul style=""><li style="">Starting new browser with clean cookies</li><li style="">Creating temporary &amp; proxy databases, directories</li><li style="">Starting a server process</li><li style="">...</li></ul></td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Tear Down If Failed</p></td><td class="confluenceTd" style=""><p style="">This method will be called after executing all steps of the test case <strong style="">and</strong><span style=""> one of those steps has <strong style="">Failed</strong> status.</span></p></td><td rowspan="4" style="" class="confluenceTd"><p style="">Clean-up testing environment such as:</p><ul style=""><li style="">Closing browsers</li><li style="">Disclosing opened connections to database or server</li><li style="">...</li></ul><p style="">&nbsp;</p></td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Tear Down If Passed</p></td><td class="confluenceTd" style=""><p style=""><span style=""><span style="">This method will be called after executing all steps of the test case <strong style="">and</strong></span><span style=""> all of those steps have <strong style="">Pass</strong> status.</span></span></p></td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Tear Down If Error</p></td><td class="confluenceTd" style=""><p style=""><span style="">This method will be called after executing all steps of the test case </span><strong style="">and</strong><span style=""> one of those steps has <strong style="">Error</strong> status.</span></p></td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Tear Down</p></td><td class="confluenceTd" style=""><p style="">This method will be called <strong style="">finally</strong>.</p></td></tr></tbody></table>

The SetUp()/TearDown() methods will have **Error** status if there is any issue occurred during their execution. The only exception to this is when _AssertionError_ Class is used or the methods are skipped.

Define a method in Scripting view
---------------------------------

The **Script** view of a test case allows you to programmatically define and handle methods easily using either Groovy or Java language. Refer to [http://groovy-lang.org/structure.html#_methods](http://groovy-lang.org/structure.html#_methods) for details about methods in Groovy.

For example:

![](../../images/katalon-studio/docs/define-method/1.png)

### SetUp() and TearDown() in Scripting view

You can declare a method as setup() or teardown() method using the appropriated annotation above it:

```groovy
@com.kms.katalon.core.annotation.SetUp
@com.kms.katalon.core.annotation.TearDown
@com.kms.katalon.core.annotation.TearDownIfFailed
@com.kms.katalon.core.annotation.TearDownIfPassed
@com.kms.katalon.core.annotation.TearDownIfError
```

For example:

![](../../images/katalon-studio/docs/define-method/image2017-2-28 15_10_1.png)