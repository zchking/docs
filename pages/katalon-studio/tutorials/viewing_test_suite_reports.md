---
title: "Viewing test suite reports"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/viewing_test_suite_reports.html
description: "This guide will give you an overview of test suite reports and related supported basic functions when testing with Katalon Studio."
---
Katalon Studio is designed to ease many challenges that manual testers are facing. In a large project, there may be hundreds or even thousands of test cases and test executions. Test suite reports produced by Katalon Studio allow users to monitor their test status and have a better understanding of their project’s test coverage. This guide will give you an overview of reports and related supported basic functions.

Once a test suite finishes its execution, a historical report is automatically generated and stored in the Reports section of Tests Explorer. Test suite execution reports are placed in chronological order with the most recent one on top.

For example:

![test suite reports](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Tests-Explorer.png)

The report will be named with following the naming convention: _YYYYMMDD_HHmmss_, which is the datetime when the test suite starts its execution.

Report Overview
---------------

In **Test Explorer** view, double-click on a historical execution of a test suite to view its details:

![Test Explorer view](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Report-Overview.png)

where:

| Component | Description |
| --- | --- |
| Test Cases Table | List of executed test cases. |
| Summary | Summary information of executed environment. |
| Execution Settings | Settings for execution which include information about how to handle a failed test case, page loading timeout, etc. For example:
![page loading timeout](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Execution-Settings1.png)

 |
| Execution Environment | Information concerning the execution environment, including Host Name, Operating System (os), Katalon Studio version, browser, etc. For example:

![Information concerning the execution environment](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Execution-Environment.png)

 |

Test Cases List
---------------

*   The Test Case Table displays the list of all executed test cases in a test suite. If [data-driven testing](https://www.katalon.com/resources-center/tutorials/data-driven-testing/) is used, each test case will be executed through a number of times (iterations) that are defined in the Data Iteration column of the current test suite as shown in the steps No. 5 to 7 below.

![Katalon Studio Test Case Table](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Test-Cases-List.png)

Users can easily determine what information to display by using the filters.

| Filter | Description |
| --- | --- |
| 
![Passed status Katalon Studio](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Passed1.png)Passed

 | Show only iterations which are passed. |
| ![Failed status Katalon Studio](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Failed1.png)  
Failed | Show only iterations which are failed. |
| ![Error status Katalon Studio](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Error1.png)  
Error | Show only iterations having errors. |
| ![Incomplete status Katalon Studio](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Incomplete.png)  
Incomplete | Show only incomplete iterations |

*   By selecting an **iteration** in **Test Case Table** and click **Show Test Case Details**, you can view details regarding its executed logs.
*   If **qTest** and **JIRA** are configured in Project Settings, you can submit the results to these systems. Refer to [qTest Integration](https://docs.katalon.com/display/KD/qTest+Integration) and [JIRA Integration](https://docs.katalon.com/display/KD/JIRA+Integration) for more details.

Test Suite Summary
------------------

This section explains the information on the test execution summary report for a test suite, as shown below.

![test execution summary report](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Test-Suite-Summary.png)

The fields include:

| Field | Description |
| --- | --- |
| Test Suite ID | The ID of the executed test suite in Katalon Studio. Once clicked, the test suite is opened. |
| Hostname / OS / Platform | The environment where the test suite is executed |
| Start / End / Elapse | Execution start/end date time and duration |
| Total TC | The total number of test cases, grouped into four status groups, Passed, Failed, Error, and Incomplete. |

Test Case’s Log
---------------

**Test Case’s Log** shows the detail of a test case after execution. Users can view such details in three tabs **Test Log**, **Information**, and **Integration**. Double-click on a test case in **Test Cases Table** to display the **Test Case’s Log** window.

### Test Log Tab

*   Details of the executed steps and their status are displayed in this tab.  
    ![Details of the executed steps](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Test-Case%E2%80%99s-Log.png)

Detail of the items:

| Component | Description |
| --- | --- |
| Log Information | Information of the selected iteration in the **Test Case’s Log** section:
*   *   **Name** of the test step (the name of the keyword used in the test step)
    *   Execution **Start/End** date time and duration
    *   **Description** of the test step
    *   Any system **Message** raised when the test step is executed.

 |
| Log Image | The screenshot taken from the application under test, it is captured in either of the following situations:

*   *   An error occurs during test execution
    *   The [Take Screenshot](https://docs.katalon.com/display/KD/%5BWebUI%5D+Take+Screenshot) keyword is used

 |

*   Users can easily determine which type of information to be displayed by using the provided filters:

| Filter | Description |
| --- | --- |
| ![Info ](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Info1.png)  
Info | Show the messages logged for information/reference. |
| ![passed status Katalon Studio](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Passed-2.png)  
Passed | Show the steps which are successfully executed. |
| ![Failed status Katalon Studio](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Failed-2.png)  
Failed | Show the steps which failed to execute. |
| ![Error status Katalon Studio](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Error-2.png)  
Error | Show the steps having errors. |
| ![Incomplete status Katalon Studio](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Incomplete-2.png)  
Incomplete | Show incomplete steps. |
| ![Warning status Katalon Studio](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Warning1.png)  
Warning | Show the steps which have warning status. |
| ![Not Run status Katalon Studio](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Not-Run1.png)  
Not Run | Show the skipped steps. |

*   If **JIRA** is configured in Project Settings, users can submit a ticket to this system. Refer to [JIRA Integration](https://docs.katalon.com/display/KD/JIRA+Integration) for more details.
*   Screenshots are taken for the failed steps and users can hover the mouse cursor over the attachment icon to review.

### Information Tab

Users can find the summary information of the test case in this tab.

![ summary information of the test case](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Information-Tab.png)

The items include:

| Field | Description |
| --- | --- |
| Test Case ID | The ID of the executed test case in Katalon Studio. Once clicked, the system navigates users to the respective test case. |
| Start / End / Elapse | Execution start/end date time and duration. |
| Description | Description of the test case. |
| Message | Any system message raised when this **iteration** is executed. |

### Integration Tab

The information regarding qTest Integration of this iteration is displayed in this tab.

![The information regarding qTest Integration](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Integration-Tab.png)

The fields include:

| Field | Description |
| --- | --- |
| Test Log ID | The ID of the integrated qTest **Test Run**. Once clicked, the system navigates users to the respective qTest page. |
| Test Run Alias | The alias of the integrated qTest **Test Run**. |
| Attachment | Indicate whether all execution logs and reports are placed in a zipped file to be sent to qTest as an attachment. |

Export to other formats
-----------------------

For the purpose of sharing, users can generate reports of test suites into other formats such as **HTML**, **CSV**, **PDF** and **JUnit** using the context menu in Test Explorer as the example below:

![generate reports of test suites into other formats](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Export-to-other-formats.png)

Katalon Studio’s Reports feature allows users to have an overview of test execution by providing most important details and necessary information from PASSED/FAILED result to details on the execution environment, test summary, or logs. Using this information, test managers and QAs can better manage and track test activities, resulting in improved testing productivity.