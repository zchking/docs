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

![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 14_49_29.png)

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Field</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style=""><div class="" style=""><p class="" style="">Page load timeout:</p><p class="" style="">&nbsp;<span class="" style=""><img class="" height="91" width="300" src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 14_56_48.png" data-image-src="/download/attachments/13699992/image2017-2-15%2014%3A56%3A48.png?version=1&amp;modificationDate=1531370623000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13699981" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-15 14:56:48.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699992" data-linked-resource-container-version="4" style=""></span></p></div></td><td class="" style=""><div class="" style=""><p class="" style="">The timeout period allowed to wait for a page to be loaded. You can choose among the following options:</p><ul class="" style=""><li class="" style=""><strong class="" style="">Use default</strong>: the default value defined will be used. Refer to <a href="/pages/viewpage.action?pageId=3179873" class="" style="">Execution Preferences (Version 5.0 and below)</a> for more details.</li><li class="" style=""><strong class="" style="">User-defined value</strong>: the entered timeout value (in seconds) will be used.</li></ul><p class="" style="">&nbsp;</p></div></td></tr><tr class="" style=""><td class="" style=""><div class="" style=""><p class="" style="">Retry:</p><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 15_9_6.png" data-image-src="/download/attachments/13699992/image2017-2-15%2015%3A9%3A6.png?version=1&amp;modificationDate=1531370623000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13699980" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-15 15:9:6.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699992" data-linked-resource-container-version="4" style=""></span></p></div></td><td class="" style=""><div class="" style=""><p class="" style="">The <strong class="" style="">maximum</strong> number of retries for execution until it is successfully passed. You can opt to retry only <strong class="" style="">failed</strong> test cases.</p><p class="" style="">&nbsp;</p></div></td></tr><tr class="" style=""><td class="" style=""><div class="" style=""><p class="" style="">Mail Recipients</p><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 15_12_46.png" data-image-src="/download/attachments/13699992/image2017-2-15%2015%3A12%3A46.png?version=1&amp;modificationDate=1531370623000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13699979" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-15 15:12:46.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699992" data-linked-resource-container-version="4" style=""></span></p></div></td><td class="" style=""><div class="" style=""><p class="" style="">The list of recipients who would receive the execution report once the test suite finishes its execution.</p><div class="" data-hasbody="true" data-macro-name="note" style=""><span class="" style=""></span><div class="" style=""><p class="" style="">There’s also another list of recipients who will be receiving all the reports from Katalon by default. Refer to <a href="/display/KD/Emails+Settings" class="" style="">Emails Settings</a> for more details.</p></div></div></div></td></tr><tr class="" style=""><td class="" style=""><div class="" style=""><p class="" style="">Last run:</p><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 15_14_55.png" data-image-src="/download/attachments/13699992/image2017-2-15%2015%3A14%3A55.png?version=1&amp;modificationDate=1531370623000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13699978" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-15 15:14:55.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699992" data-linked-resource-container-version="4" style=""></span></p></div></td><td class="" style=""><div class="" style=""><p class="" style="">The datetime when the test suite was last executed. You can quickly open the report of this execution by clicking on the <strong class="" style="">Last run</strong> hyperlink.</p><p class="" style="">&nbsp;</p></div></td></tr></tbody></table>

Manage Test Case List
---------------------

Using the Test Suite editor, you can add a test case into a test suite.

Open a test suite, then select option to add **Add Test Case** from command toolbar.  
![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 14_33_40.png)

All test cases in Katalon Studio are displayed in the **Test Case Browser** dialog for you to select your preferred options. The selected test cases will be added in the test case list accordingly.  
  

The checkbox at the end of test case row is checked by default. It means that the test case will be executed when running a test suite.

Data-Driven Testing
-------------------

Katalon Studio provides users the ability to define test data that can be used later when executing automation test. Refer to the [Manage Test Data](https://docs.katalon.com/display/KD/Manage+Test+Data) for more detailed information about this function. This section shows how to design your automation test using predefined test data.

### Test Data

Using the test suite editor, you can add a predefined test data file object which will be used later in a test case execution by following the steps below:

1.  In test suite editor, select a test case from the test case list. Click on **Show Data Binding** to load its data details.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-24 17_54_22.png)  
      
    
2.  Katalon Studio will expand Data Binding Section with Test Data table and Variable Binding table  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31 11_39_32.png)  
      
    
3.  In the expanded **Data Binding** section, select option to add **Test Data** from command toolbar.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-6-30 21_47_37.png)  
      
    
4.  All test data will be displayed in **Test Data Browser**. Select the data for your test case to continue. The selected test data will be added to the list accordingly.
5.  Double click on the **Data Iteration** cell to specify the data range to be used for execution.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 16_5_49.png)  
    where:
    
    <table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Option</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style="">Run all rows</td><td class="" style=""><span class="" style="">All the data rows in the data file will be used during test execution.</span></td></tr><tr class="" style=""><td class="" style="">Run from row ... to row ...</td><td class="" style=""><span class="" style="">The data range from a certain row to a certain row in the data file will be used during test execution.</span></td></tr><tr class="" style=""><td class="" style="">Run with specific rows</td><td class="" style=""><p class="" style="">The data rows which are specified here will be used during test execution. You can use <strong class="" style="">comma</strong> and <strong class="" style="">hyphen</strong> characters to define the rows.</p><p class="" style=""><span class="" style="">For example:</span></p><ul class="" style=""><li class="" style="">to use three data rows (row 1, row 2, row 3), enter: <span style="" class="">1,2,3</span></li><li class="" style="">to use six data rows (row 1, row 2, row 3, row 4, row 5, row 9), enter: <span style="" class="">1-5,9</span></li></ul></td></tr></tbody></table>
    
6.  Click on the **Type** cell to toggle its value. Refer to [Manage Test Data Relationship](#DesignaTestSuite-Managetestdatarelationship) for more details.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31 11_53_51.png)  
      
    

#### Manage test data relationship

If you are specifying multiple test data, then you can further define the relationship among them to decide how the final data set used in the test execution will be. There are two types of relationship supported in Katalon Studio:

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Relationship Type</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style="">One</td><td class="" style=""><p class="" style="">The data set will be indicated as 'One' in the relationship with other data set.</p></td></tr><tr class="" style=""><td class="" style="">Many</td><td class="" style="">The data set will be indicated as 'Many' in the relationship with other data set.</td></tr></tbody></table>

Therefore, we can have the following combinations among data sets:

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Relationship</th><th class="" style="">Example</th></tr><tr class="" style=""><td class="" style="">One to One</td><td class="" style=""><div class="" style=""><p class="" style="">Given there are two data sets as below:</p><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 16_47_9.png" data-image-src="/download/attachments/13699992/image2017-2-15%2016%3A47%3A9.png?version=1&amp;modificationDate=1531370622000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13699958" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-15 16:47:9.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699992" data-linked-resource-container-version="4" style=""></span></p><p class="" style="">Then the final data set used for test execution will be:</p><ul class="" style=""><li class="" style="">a1 b1</li><li class="" style="">a2 b2</li></ul></div></td></tr><tr class="" style=""><td class="" style="">Many to Many</td><td class="" style=""><div class="" style=""><p class="" style="">Given there are two data sets as below:</p><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 16_49_3.png" data-image-src="/download/attachments/13699992/image2017-2-15%2016%3A49%3A3.png?version=1&amp;modificationDate=1531370622000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13699957" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-15 16:49:3.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699992" data-linked-resource-container-version="4" style=""></span></p><p class="" style="">Then the final data set used for test execution will be:</p><ul class="" style=""><li class="" style="">a1 b1</li><li class="" style="">a1 b2</li><li class="" style="">a2 b1</li><li class="" style="">a2 b2</li><li class="" style="">a3 b1</li><li class="" style="">a3 b2</li></ul></div></td></tr><tr class="" style=""><td class="" rowspan="2" style="">One to Many</td><td class="" style=""><div class="" style=""><p class="" style="">Given there are two data sets as below:</p><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 16_50_53.png" data-image-src="/download/attachments/13699992/image2017-2-15%2016%3A50%3A53.png?version=1&amp;modificationDate=1531370622000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13699956" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-15 16:50:53.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699992" data-linked-resource-container-version="4" style=""></span></p><p class="" style="">Then the final data set used for test execution will be:</p><ul class="" style=""><li class="" style="">a1 b1</li><li class="" style="">a2 b1</li><li class="" style="">a3 b1</li><li class="" style="">a4 b1</li><li class="" style="">a1 b2</li><li class="" style="">a2 b2</li><li class="" style="">a3 b2</li><li class="" style="">a4 b2</li></ul></div></td></tr><tr class="" style=""><td class="" style=""><div class="" style=""><p class="" style="">Given there are three data sets as below:</p><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 16_52_41.png" data-image-src="/download/attachments/13699992/image2017-2-15%2016%3A52%3A41.png?version=1&amp;modificationDate=1531370622000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13699955" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-15 16:52:41.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699992" data-linked-resource-container-version="4" style=""></span></p><p class="" style="">Then the final data set used for test execution will be:</p><ul class="" style=""><li class="" style="">a1 b1 c1</li><li class="" style="">a1 b1 c2</li><li class="" style="">a2 b2 c1</li><li class="" style="">a2 b2 c2</li></ul></div></td></tr></tbody></table>

### Variable Binding

If there’s any [public variable](https://docs.katalon.com/display/KD/Variable+Types#VariableTypes-Publicvariables) defined in your test case, then you can manage variable binding for your test case executio--that is, to specify which value would be used for which variables during test execution.

Follow the steps below to manage variable binding for a test case within the test suite:

1.  In test suite editor, select a test case from the test case list. Click on **Show Data Binding** to load its data details.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-24 17_54_22.png)  
      
    
2.  All the public variables defined in that test case will be loaded into the **Variable Binding** section:  
      
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31 11_55_3.png)

#### Bind Variable to Test Data

This option allows you to associate the variables with configured [Test Data](https://docs.katalon.com/display/KD/Manage+Test+Data)[](https://docs.katalon.com/display/KD/Execute+a+test+suite#Executeatestsuite-TestData).

1.  Katalon Studio allows users to **Set Type** for variables all at once if the variables have the **same** t**ype**. In this case Username and Password has the same type as Data Column. Simply highlight both rows. Click on **Set Type** and select **Data Column**:  
      
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31 12_2_55.png)  
      
    
2.  Both rows are still highlighted. Click on **Set Test Data** to decide which test data from the list to be used for execution:  
      
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31 12_4_41.png)  
      
    
3.  Click on **Value** cell to specify the data field of test data to be used.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15 18_9_6.png)
4.  All headers of the related test data will be displayed. Select the header to be referred during execution. The selected header will be displayed accordingly in **Variable Binding** section.
5.  Save the test suite when you're done.

In the above example, the global variable _Username_ will look up to the column _u__sername_ of the test data file "_New Excel Data"_ during execution. Users can specify the number of data rows to be used in **Data Iteration **of Test Data table.

Quick tip

Using the **Map All** button, users can quickly match Variables of the test case with respective columns in the test data:

![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31 14_33_23.png)

In order for Katalon to automatically make the variable binding, the Variables need to have its respective columns in Test Data with **the same name**.

For example: the variables 'Username' and 'Password' of the selected test case can be mapped automatically with columns 'Username' and 'Password' of the test data by Katalon Studio when user clicks on the **Map All** button.

#### Bind to Scripting value

This option allows you to associate the variables with other scripting value.

1.  Highlight rows No. 1 and No.2. Click **Set Type** and Select **Script Variable**:  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31 15_19_20.png)  
      
    
2.  Specify the data to be used in **Value** cell. This value will be utilized this data during execution.   
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31 15_21_10.png)

Execute a Test Suite
--------------------

Executing a test suite is more or less the same as executing a test case. Refer to [this documentation](/display/KD/Execute+a+Test+Case+or+a+Test+Suite) for more details.