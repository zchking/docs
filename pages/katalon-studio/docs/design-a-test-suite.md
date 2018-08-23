---
title: "Design a Test Suite" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/design-a-test-suite.html 
description: 
---
A test suite contains a list of test cases that are intended for testing certain aspects of the application under test.

Modify Execution Information
----------------------------

You can manage additional configurations for test suite execution by expanding the **Execution Information** section, as below:

| Field | Description |
| --- | --- |
| 
Page load timeout:

 



 | 

The timeout period allowed to wait for a page to be loaded. You can choose among the following options:

*   **Use default**: the default value defined will be used. Refer to Execution Preferences (Version 5.0 and below) for more details.
*   **User-defined value**: the entered timeout value (in seconds) will be used.



 |
| 

Retry:



 | 

The **maximum** number of retries for execution until it is successfully passed. You can opt to retry only **failed** test cases.



 |
| 

Mail Recipients



 | 

The list of recipients who would receive the execution report once the test suite finishes its execution.

There’s also another list of recipients who will be receiving all the reports from Katalon by default. Refer to Emails Settings for more details.







 |
| 

Last run:



 | 

The datetime when the test suite was last executed. You can quickly open the report of this execution by clicking on the **Last run** hyperlink.



 |

Manage Test Case List
---------------------

Using the Test Suite editor, you can add a test case into a test suite.

Open a test suite, then select option to add **Add Test Case** from command toolbar.  

All test cases in Katalon Studio are displayed in the **Test Case Browser** dialog for you to select your preferred options. The selected test cases will be added in the test case list accordingly.  
  

The checkbox at the end of test case row is checked by default. It means that the test case will be executed when running a test suite.

Data-Driven Testing
-------------------

Katalon Studio provides users the ability to define test data that can be used later when executing automation test. Refer to the Manage Test Data for more detailed information about this function. This section shows how to design your automation test using predefined test data.

### Test Data

Using the test suite editor, you can add a predefined test data file object which will be used later in a test case execution by following the steps below:

1.  In test suite editor, select a test case from the test case list. Click on **Show Data Binding** to load its data details.  
      
      
    
2.  Katalon Studio will expand Data Binding Section with Test Data table and Variable Binding table  
      
      
    
3.  In the expanded **Data Binding** section, select option to add **Test Data** from command toolbar.  
      
      
    
4.  All test data will be displayed in **Test Data Browser**. Select the data for your test case to continue. The selected test data will be added to the list accordingly.
5.  Double click on the **Data Iteration** cell to specify the data range to be used for execution.  
      
    where:
    
    | Option | Description |
    | --- | --- |
    | Run all rows | All the data rows in the data file will be used during test execution. |
    | Run from row ... to row ... | The data range from a certain row to a certain row in the data file will be used during test execution. |
    | Run with specific rows | 
    The data rows which are specified here will be used during test execution. You can use **comma** and **hyphen** characters to define the rows.
    
    For example:
    
    *   to use three data rows (row 1, row 2, row 3), enter: 1,2,3
    *   to use six data rows (row 1, row 2, row 3, row 4, row 5, row 9), enter: 1-5,9
    
     |
    
6.  Click on the **Type** cell to toggle its value. Refer to Manage Test Data Relationship for more details.  
      
      
    

#### Manage test data relationship

If you are specifying multiple test data, then you can further define the relationship among them to decide how the final data set used in the test execution will be. There are two types of relationship supported in Katalon Studio:

| Relationship Type | Description |
| --- | --- |
| One | 
The data set will be indicated as 'One' in the relationship with other data set.

 |
| Many | The data set will be indicated as 'Many' in the relationship with other data set. |

Therefore, we can have the following combinations among data sets:

| Relationship | Example |
| --- | --- |
| One to One | 
Given there are two data sets as below:

Then the final data set used for test execution will be:

*   a1 b1
*   a2 b2



 |
| Many to Many | 

Given there are two data sets as below:

Then the final data set used for test execution will be:

*   a1 b1
*   a1 b2
*   a2 b1
*   a2 b2
*   a3 b1
*   a3 b2



 |
| One to Many | 

Given there are two data sets as below:

Then the final data set used for test execution will be:

*   a1 b1
*   a2 b1
*   a3 b1
*   a4 b1
*   a1 b2
*   a2 b2
*   a3 b2
*   a4 b2



 |
| 

Given there are three data sets as below:

Then the final data set used for test execution will be:

*   a1 b1 c1
*   a1 b1 c2
*   a2 b2 c1
*   a2 b2 c2



 |

### Variable Binding

If there’s any public variable defined in your test case, then you can manage variable binding for your test case executio--that is, to specify which value would be used for which variables during test execution.

Follow the steps below to manage variable binding for a test case within the test suite:

1.  In test suite editor, select a test case from the test case list. Click on **Show Data Binding** to load its data details.  
      
      
    
2.  All the public variables defined in that test case will be loaded into the **Variable Binding** section:  
      
    

#### Bind Variable to Test Data

This option allows you to associate the variables with configured Test Data.

1.  Katalon Studio allows users to **Set Type** for variables all at once if the variables have the **same** t**ype**. In this case Username and Password has the same type as Data Column. Simply highlight both rows. Click on **Set Type** and select **Data Column**:  
      
      
      
    
2.  Both rows are still highlighted. Click on **Set Test Data** to decide which test data from the list to be used for execution:  
      
      
      
    
3.  Click on **Value** cell to specify the data field of test data to be used.  
    
4.  All headers of the related test data will be displayed. Select the header to be referred during execution. The selected header will be displayed accordingly in **Variable Binding** section.
5.  Save the test suite when you're done.

In the above example, the global variable _Username_ will look up to the column _u__sername_ of the test data file "_New Excel Data"_ during execution. Users can specify the number of data rows to be used in **Data Iteration **of Test Data table.

Quick tip

Using the **Map All** button, users can quickly match Variables of the test case with respective columns in the test data:

In order for Katalon to automatically make the variable binding, the Variables need to have its respective columns in Test Data with **the same name**.

For example: the variables 'Username' and 'Password' of the selected test case can be mapped automatically with columns 'Username' and 'Password' of the test data by Katalon Studio when user clicks on the **Map All** button.

#### Bind to Scripting value

This option allows you to associate the variables with other scripting value.

1.  Highlight rows No. 1 and No.2. Click **Set Type** and Select **Script Variable**:  
      
      
    
2.  Specify the data to be used in **Value** cell. This value will be utilized this data during execution.   
    

Execute a Test Suite
--------------------

Executing a test suite is more or less the same as executing a test case. Refer to this documentation for more details.