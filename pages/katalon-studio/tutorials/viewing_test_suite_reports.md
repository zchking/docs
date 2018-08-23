---
title: "Viewing test suite reports"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/viewing_test_suite_reports.html
description: "This guide will give you an overview of test suite reports and related supported basic functions when testing with Katalon Studio."
---
Katalon Studio is designed to ease many challenges that manual testers are facing. In a large project, there may be hundreds or even thousands of test cases and test executions. Test suite reports produced by Katalon Studio allow users to monitor their test status and have a better understanding of their project’s test coverage. This guide will give you an overview of reports and related supported basic functions.

Once a test suite finishes its execution, a historical report is automatically generated and stored in the Reports section of Tests Explorer. Test suite execution reports are placed in chronological order with the most recent one on top.

For example:

The report will be named with following the naming convention: _YYYYMMDD_HHmmss_, which is the datetime when the test suite starts its execution.

Report Overview
---------------

In **Test Explorer** view, double-click on a historical execution of a test suite to view its details:

where:

<table><tbody><tr><td><b>Component</b></td><td><b>Description</b></td></tr><tr><td><span>Test Cases Table</span></td><td><span>List of executed test cases.</span></td></tr><tr><td><span>Summary</span></td><td><span>Summary information of executed environment.</span></td></tr><tr><td><span>Execution Settings</span></td><td><span>Settings for execution which include information about how to handle a failed test case, page loading timeout, etc. For example:</span><p></p><p><img></p></td></tr><tr><td><span>Execution Environment</span></td><td><span>Information concerning the execution environment, including Host Name, Operating System (os), Katalon Studio version, browser, etc. For example:</span><p></p><p><img></p></td></tr></tbody></table>

Test Cases List
---------------

*   The Test Case Table displays the list of all executed test cases in a test suite. If data-driven testing is used, each test case will be executed through a number of times (iterations) that are defined in the Data Iteration column of the current test suite as shown in the steps No. 5 to 7 below.

Users can easily determine what information to display by using the filters.

<table><tbody><tr><td><b>Filter</b></td><td><b>Description</b></td></tr><tr><td><p><span><img></span><span>Passed</span></p></td><td><span>Show only iterations which are passed.</span></td></tr><tr><td><span><img><br>Failed</span></td><td><span>Show only iterations which are failed.</span></td></tr><tr><td><span><img><br>Error</span></td><td><span>Show only iterations having errors.</span></td></tr><tr><td><span><img><br>Incomplete</span></td><td><span>Show only incomplete iterations</span></td></tr></tbody></table>

*   By selecting an **iteration** in **Test Case Table** and click **Show Test Case Details**, you can view details regarding its executed logs.
*   If **qTest** and **JIRA** are configured in Project Settings, you can submit the results to these systems. Refer to qTest Integration and JIRA Integration for more details.

Test Suite Summary
------------------

This section explains the information on the test execution summary report for a test suite, as shown below.

The fields include:

<table><tbody><tr><td><b>Field</b></td><td><b>Description</b></td></tr><tr><td><span>Test Suite ID</span></td><td><span>The ID of the executed test suite in Katalon Studio. Once clicked, the test suite is opened.</span></td></tr><tr><td><span>Hostname / OS / Platform</span></td><td><span>The environment where the test suite is executed</span></td></tr><tr><td><span>Start / End / Elapse</span></td><td><span>Execution start/end date time and duration</span></td></tr><tr><td><span>Total TC</span></td><td><span>The total number of test cases, grouped into four status groups, Passed, Failed, Error, and Incomplete.</span></td></tr></tbody></table>

Test Case’s Log
---------------

**Test Case’s Log** shows the detail of a test case after execution. Users can view such details in three tabs **Test Log**, **Information**, and **Integration**. Double-click on a test case in **Test Cases Table** to display the **Test Case’s Log** window.

### Test Log Tab

*   Details of the executed steps and their status are displayed in this tab.  
    

Detail of the items:

<table><tbody><tr><td><b>Component</b></td><td><b>Description</b></td></tr><tr><td><span>Log Information</span></td><td><span>Information of the selected iteration in the </span><b>Test Case’s Log</b><span> section:</span><p></p><ul><li><ul><li><b>Name</b><span> of the test step (the name of the keyword used in the test step)</span></li><li><span>Execution </span><b>Start/End</b><span> date time and duration</span></li><li><b>Description</b><span> of the test step</span></li><li><span>Any system </span><b>Message</b><span> raised when the test step is executed.</span></li></ul></li></ul></td></tr><tr><td><span>Log Image</span></td><td><span>The screenshot taken from the application under test, it is captured in either of the following situations:</span><p></p><ul><li><ul><li><span>An error occurs during test execution</span></li><li><span>The </span><a><span>Take Screenshot</span></a><span> keyword is used</span></li></ul></li></ul></td></tr></tbody></table>

*   Users can easily determine which type of information to be displayed by using the provided filters:

<table><tbody><tr><td><b>Filter</b></td><td><b>Description</b></td></tr><tr><td><span><img><br>Info</span></td><td><span>Show the messages logged for information/reference.</span></td></tr><tr><td><span><img><br>Passed</span></td><td><span>Show the steps which are successfully executed.</span></td></tr><tr><td><span><img><br>Failed</span></td><td><span>Show the steps which failed to execute.</span></td></tr><tr><td><span><img><br>Error</span></td><td><span>Show the steps having errors.</span></td></tr><tr><td><span><img><br>Incomplete</span></td><td><span>Show incomplete steps.</span></td></tr><tr><td><span><img><br>Warning</span></td><td><span>Show the steps which have warning status.</span></td></tr><tr><td><span><img><br>Not Run</span></td><td><span>Show the skipped steps.</span></td></tr></tbody></table>

*   If **JIRA** is configured in Project Settings, users can submit a ticket to this system. Refer to JIRA Integration for more details.
*   Screenshots are taken for the failed steps and users can hover the mouse cursor over the attachment icon to review.

### Information Tab

Users can find the summary information of the test case in this tab.

The items include:

<table><tbody><tr><td><b>Field</b></td><td><b>Description</b></td></tr><tr><td><span>Test Case ID</span></td><td><span>The ID of the executed test case in Katalon Studio. Once clicked, the system navigates users to the respective test case.</span></td></tr><tr><td><span>Start / End / Elapse</span></td><td><span>Execution start/end date time and duration.</span></td></tr><tr><td><span>Description</span></td><td><span>Description of the test case.</span></td></tr><tr><td><span>Message</span></td><td><span>Any system message raised when this </span><b>iteration</b><span> is executed.</span></td></tr></tbody></table>

### Integration Tab

The information regarding qTest Integration of this iteration is displayed in this tab.

The fields include:

<table><tbody><tr><td><b>Field</b></td><td><b>Description</b></td></tr><tr><td><span>Test Log ID</span></td><td><span>The ID of the integrated qTest </span><b>Test Run</b><span>. Once clicked, the system navigates users to the respective qTest page.</span></td></tr><tr><td><span>Test Run Alias</span></td><td><span>The alias of the integrated qTest </span><b>Test Run</b><span>.</span></td></tr><tr><td><span>Attachment</span></td><td><span>Indicate whether all execution logs and reports are placed in a zipped file to be sent to qTest as an attachment.</span></td></tr></tbody></table>

Export to other formats
-----------------------

For the purpose of sharing, users can generate reports of test suites into other formats such as **HTML**, **CSV**, **PDF** and **JUnit** using the context menu in Test Explorer as the example below:

Katalon Studio’s Reports feature allows users to have an overview of test execution by providing most important details and necessary information from PASSED/FAILED result to details on the execution environment, test summary, or logs. Using this information, test managers and QAs can better manage and track test activities, resulting in improved testing productivity.