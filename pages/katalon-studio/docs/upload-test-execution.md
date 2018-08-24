---
title: "Upload test execution" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/upload-test-execution.html 
redirect_from: "/display/KD/Upload+test+execution" 
description: 
---
In order for a test execution to be uploaded to qTest, the following conditions need to be fulfilled:

\+ The associated **test case** is integrated to qTest. Refer to [Integrate test case](/display/KD/Integrate+test+case) for more details.

\+ The associated **test suite** is integrated to qTest. Refer to [Integrate test suite](/display/KD/Integrate+test+suite) for more details.

\+ The integrated **qTest location** is set as **default**. Refer to [Integrate test suite](/display/KD/Integrate+test+suite) for more details.

\+ The version of **qTest test case** need to be at least **1.0**. For example:

![](../../images/katalon-studio/docs/upload-test-execution/image2017-8-7 16_15_25.png)

Upload test results automatically
=================================

> The test result from Katalon Studio will be upload to qTest automatically in case the **Automatically submit test run result** option is **checked** in [qTest Integration settings](https://docs.katalon.com/display/KD/qTest+Integration).

1.  Execute an integrated Katalon test suite.
2.  Open the generated test execution report.
3.  In the **Test Cases Table**, the status of all test execution will be displayed accordingly.
    
      
    ![](../../images/katalon-studio/docs/upload-test-execution/image2017-8-7 15_42_26.png)  
    Where:
    
    <table><thead><tr><th>Icon</th><th>Description</th></tr></thead><tbody><tr><td><div><p><span><img></span></p></div></td><td><p>The execution result of the test case is integrated to qTest.</p></td></tr><tr><td><div><p><span><img></span></p></div></td><td><p>The execution result of the test case is <strong>not</strong> integrated to qTest.</p></td></tr></tbody></table>
    
4.  Select an integrated execution from **Test Cases Table** and you can find related information of qTest in **Integration** tab of **Test Case's Log.** (You need to select **Show Test Case Details** to access this section)
    
    ![](../../images/katalon-studio/docs/upload-test-execution/image2017-8-7 15_45_53.png)  
    
      
    where:
    
    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><p>Test Run Alias</p></td><td><p>The alias of the integrated qTest test run.</p></td></tr><tr><td><p>Test Log ID</p></td><td><p>The ID of the test log (i.e., execution history record) created in qTest.</p></td></tr><tr><td><p>Attachment</p></td><td><div><p>This is to let users know whether all the execution log and report are sent to qTest as an attachment. (i.e. Yes or No)</p><p>If yes, you can go to qTest and find them under related execution history record, as illustrated below:</p><p><span><span><img></span></span></p></div></td></tr></tbody></table>
    

Upload test results manually
============================

Upload test execution of a test case
------------------------------------

1.  Execute an integrated Katalon test suite.
2.  Open the generated test execution report.
3.  In the **Test Cases Table**, right click on the test case to trigger its context menu. Select the **qTest > Upload** option.  
    ![](../../images/katalon-studio/docs/upload-test-execution/image2017-8-7 16_3_27.png)  
      
    
4.  Once the uploading process finished, you can go to qTest to verify that the **test execution** is uploaded to **qTest test run** accordingly.  
      
    ![](../../images/katalon-studio/docs/upload-test-execution/image2017-8-7 16_10_23.png)

Upload test execution of a test suite
-------------------------------------

1.  In the **Tests Explorer** view, right click on the test execution to trigger its context menu. Select the **qTest > Upload** option. (You can select the **Upload** option from **Report folders** to upload multiple test execution if needed)  
    ![](../../images/katalon-studio/docs/upload-test-execution/image2017-8-7 16_11_37.png)  
      
    
2.  Once the uploading process finished, you can go to qTest to verify that all **test execution** are uploaded to **qTest test runs** accordingly.