---
title: "Test Suite Collection" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/test-suite-collection.html 
description: 
---
A Test Suite Collection contains a list of test suites to allow users more options for planning their test execution. 

Manage Execution Information
----------------------------

You can manage additional configurations for test suite collection execution by expanding the **Execution Information** section, as below:

![](../../images/katalon-studio/docs/test-suite-collection/image2017-2-17 11_46_21.png)

where:

| Field | Description |
| --- | --- |
| 
![](../../images/katalon-studio/docs/test-suite-collection/image2017-2-17 11_47_25.png)



 | 

The order to execute test suites within the collection.

*   **Sequential**: the test suites will be executed one after another.
*   **Parallel**: the test suites will be executed at the same time.

 |

Manage Test Suite List
----------------------

You can add a test suite into a collection by following the steps below:

1.  Open a test suite collection, then select an option to add **Add Test Suite** from command toolbar.  
    ![](../../images/katalon-studio/docs/test-suite-collection/image2017-2-17 13_24_44.png)  
      
    
2.  All test suites in Katalon Studio are displayed in **Test Suite Browser**. Select your test suites to be executed then click **OK**.  
    ![](../../images/katalon-studio/docs/test-suite-collection/image2017-2-17 13_28_17.png)  
      
    
3.  The selected test suites will be added to the test suite collection accordingly  
    ![](../../images/katalon-studio/docs/test-suite-collection/image2018-5-7 15_37_21.png)  
    where:
    
    | Field | Description |
    | --- | --- |
    | Run with | 
    The environment to be executed with the Test Suite.
    
    
    
     |
    | Run configuration | 
    
    Extra information for executing with the selected environment.
    
    **For example:** Select mobile devices to be executed for Android environment
    
    ![](../../images/katalon-studio/docs/test-suite-collection/image2017-2-17 13_53_7.png)
    
    
    
     |
    | Profile | [Execution Profile](https://docs.katalon.com/x/xAHR) that contains all variables values for each Test Suite execution. |
    | Run | 
    
    This is checked by default. It means that the test case will be executed when running the collection.
    
     |
    
      
    
    You can add one test suite to the collection multiple times. This is particularly helpful when the users want to execute the same suite on different environments.
    

Execute a Test Suite Collection
-------------------------------

1.  To run a Test Suite Collection, click **Execute** at toolbar as illustrated below:  
    ![](../../images/katalon-studio/docs/test-suite-collection/image2018-5-7 16_3_11.png)  
      
    
2.  All test suites will be executed accordingly.
3.  Data of historical execution can be found in Reports. Refer to [Test Suite Collection Report](/display/KD/Test+Suite+Collection+Report) for more details.