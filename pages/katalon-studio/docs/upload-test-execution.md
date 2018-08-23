---
title: "Upload test execution" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/upload-test-execution.html 
description: 
---
In order for a test execution to be uploaded to qTest, the following conditions need to be fulfilled:

\+ The associated **test case** is integrated to qTest. Refer to Integrate test case for more details.

\+ The associated **test suite** is integrated to qTest. Refer to Integrate test suite for more details.

\+ The integrated **qTest location** is set as **default**. Refer to Integrate test suite for more details.

\+ The version of **qTest test case** need to be at least **1.0**. For example:

Upload test results automatically
---------------------------------

The test result from Katalon Studio will be upload to qTest automatically in case the **Automatically submit test run result** option is **checked** in qTest Integration settings.

1.  Execute an integrated Katalon test suite.
2.  Open the generated test execution report.
3.  In the **Test Cases Table**, the status of all test execution will be displayed accordingly.
    
      
      
    Where:
    
    | 
    **Icon**
    
     | 
    
    **Description**
    
     |
    | --- | --- |
    | 
    
     | 
    
    The execution result of the test case is integrated to qTest.
    
     |
    | 
    
     | 
    
    The execution result of the test case is **not** integrated to qTest.
    
     |
    
4.  Select an integrated execution from **Test Cases Table** and you can find related information of qTest in **Integration** tab of **Test Case's Log.** (You need to select **Show Test Case Details** to access this section)
    
      
    
      
    where:
    
    | 
    **Field**
    
     | 
    
    **Description**
    
     |
    | --- | --- |
    | 
    
    Test Run Alias
    
     | 
    
    The alias of the integrated qTest test run.
    
     |
    | 
    
    Test Log ID
    
     | 
    
    The ID of the test log (i.e., execution history record) created in qTest.
    
     |
    | 
    
    Attachment
    
     | 
    
    This is to let users know whether all the execution log and report are sent to qTest as an attachment. (i.e. Yes or No)
    
    If yes, you can go to qTest and find them under related execution history record, as illustrated below:
    
    
    
     |
    

Upload test results manually
----------------------------

### Upload test execution of a test case

1.  Execute an integrated Katalon test suite.
2.  Open the generated test execution report.
3.  In the **Test Cases Table**, right click on the test case to trigger its context menu. Select the **qTest > Upload** option.  
      
      
    
4.  Once the uploading process finished, you can go to qTest to verify that the **test execution** is uploaded to **qTest test run** accordingly.  
      
    

### Upload test execution of a test suite

1.  In the **Tests Explorer** view, right click on the test execution to trigger its context menu. Select the **qTest > Upload** option. (You can select the **Upload** option from **Report folders** to upload multiple test execution if needed)  
      
      
    
2.  Once the uploading process finished, you can go to qTest to verify that all **test execution** are uploaded to **qTest test runs** accordingly.