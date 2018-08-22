---
title: "Viewing test suite reports"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/viewing_test_suite_reports.html
description: "This guide will give you an overview of test suite reports and related supported basic functions when testing with Katalon Studio."
---
[](#)

Katalon Studio is designed to ease many challenges that manual testers are facing. In a large project, there may be hundreds or even thousands of test cases and test executions. Test suite reports produced by Katalon Studio allow users to monitor their test status and have a better understanding of their project’s test coverage. This guide will give you an overview of reports and related supported basic functions.

Once a test suite finishes its execution, a historical report is automatically generated and stored in the Reports section of Tests Explorer. Test suite execution reports are placed in chronological order with the most recent one on top.

For example:

![test suite reports](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Tests-Explorer.png)

The report will be named with following the naming convention: _YYYYMMDD_HHmmss_, which is the datetime when the test suite starts its execution.

**Report Overview**
-------------------

In **Test Explorer** view, double-click on a historical execution of a test suite to view its details:

![Test Explorer view](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Report-Overview.png)

where:

<table><tbody><tr><td style="text-align: center; border: 1px solid black;"><b>Component</b></td><td style="text-align: center; border: 1px solid black;"><b>Description</b></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Test Cases Table</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">List of executed test cases.</span></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Summary</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Summary information of executed environment.</span></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Execution Settings</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Settings for execution which include information about how to handle a failed test case, page loading timeout, etc. For example:</span><p></p><p><img class="alignleft wp-image-2198" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Execution-Settings1.png" alt="page loading timeout" width="527" height="218" srcset="https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/08/22185517/Execution-Settings1.png 556w, https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/08/22185517/Execution-Settings1-300x124.png 300w" sizes="(max-width: 527px) 100vw, 527px"></p></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Execution Environment</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Information concerning the execution environment, including Host Name, Operating System (os), Katalon Studio version, browser, etc. For example:</span><p></p><p><img class="alignnone wp-image-2199" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Execution-Environment.png" alt="Information concerning the execution environment" width="532" height="222" srcset="https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/08/22185532/Execution-Environment.png 556w, https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/08/22185532/Execution-Environment-300x125.png 300w" sizes="(max-width: 532px) 100vw, 532px"></p></td></tr></tbody></table>

**Test Cases List**
-------------------

*   The Test Case Table displays the list of all executed test cases in a test suite. If [data-driven testing](https://www.katalon.com/resources-center/tutorials/data-driven-testing/) is used, each test case will be executed through a number of times (iterations) that are defined in the Data Iteration column of the current test suite as shown in the steps No. 5 to 7 below.

![Katalon Studio Test Case Table](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Test-Cases-List.png)

Users can easily determine what information to display by using the filters.

<table><tbody><tr><td style="text-align: center; border: 1px solid black; width: 81px;"><b>Filter</b></td><td style="text-align: center; border: 1px solid black; width: 274px;"><b>Description</b></td></tr><tr><td style="border: 1px solid black; text-align: left; width: 81px;"><p style="text-align: center;"><span style="font-weight: 400;"><img class="init-size aligncenter wp-image-2201 size-full" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Passed1.png" alt="Passed status Katalon Studio" width="32" height="32"></span><span style="font-weight: 400;">Passed</span></p></td><td style="border: 1px solid black; text-align: left; width: 274px;"><span style="font-weight: 400;">Show only iterations which are passed.</span></td></tr><tr><td style="border: 1px solid black; text-align: center; width: 81px;"><span style="font-weight: 400;"><img class="init-size aligncenter wp-image-2202 size-full" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Failed1.png" alt="Failed status Katalon Studio" width="32" height="32"><br>Failed</span></td><td style="border: 1px solid black; text-align: left; width: 274px;"><span style="font-weight: 400;">Show only iterations which are failed.</span></td></tr><tr><td style="border: 1px solid black; text-align: center; width: 81px;"><span style="font-weight: 400;"><img class="init-size aligncenter wp-image-2203 size-full" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Error1.png" alt="Error status Katalon Studio" width="32" height="32"><br>Error</span></td><td style="border: 1px solid black; text-align: left; width: 274px;"><span style="font-weight: 400;">Show only iterations having errors.</span></td></tr><tr><td style="border: 1px solid black; text-align: center; width: 81px;"><span style="font-weight: 400;"><img class="init-size aligncenter wp-image-2204 size-full" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Incomplete.png" alt="Incomplete status Katalon Studio" width="32" height="32"><br>Incomplete</span></td><td style="border: 1px solid black; text-align: left; width: 274px;"><span style="font-weight: 400;">Show only incomplete iterations</span></td></tr></tbody></table>

*   By selecting an **iteration** in **Test Case Table** and click **Show Test Case Details**, you can view details regarding its executed logs.
*   If **qTest** and **JIRA** are configured in Project Settings, you can submit the results to these systems. Refer to [qTest Integration](https://docs.katalon.com/display/KD/qTest+Integration) and [JIRA Integration](https://docs.katalon.com/display/KD/JIRA+Integration) for more details.

**Test Suite Summary**
----------------------

This section explains the information on the test execution summary report for a test suite, as shown below.

![test execution summary report](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Test-Suite-Summary.png)

The fields include:

<table><tbody><tr><td style="text-align: center; border: 1px solid black;"><b>Field</b></td><td style="text-align: center; border: 1px solid black;"><b>Description</b></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Test Suite ID</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">The ID of the executed test suite in Katalon Studio. Once clicked, the test suite is opened.</span></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Hostname / OS / Platform</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">The environment where the test suite is executed</span></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Start / End / Elapse</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Execution start/end date time and duration</span></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Total TC</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">The total number of test cases, grouped into four status groups, Passed, Failed, Error, and Incomplete.</span></td></tr></tbody></table>

**Test Case’s Log**
-------------------

**Test Case’s Log** shows the detail of a test case after execution. Users can view such details in three tabs **Test Log**, **Information**, and **Integration**. Double-click on a test case in **Test Cases Table** to display the **Test Case’s Log** window.

### **Test Log Tab**

*   Details of the executed steps and their status are displayed in this tab.  
    ![Details of the executed steps](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Test-Case%E2%80%99s-Log.png)

Detail of the items:

<table><tbody><tr><td style="text-align: center; border: 1px solid black;"><b>Component</b></td><td style="text-align: center; border: 1px solid black;"><b>Description</b></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Log Information</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Information of the selected iteration in the </span><b>Test Case’s Log</b><span style="font-weight: 400;"> section:</span><p></p><ul><li style="list-style-type: none;"><ul><li style="font-weight: 400;"><b>Name</b><span style="font-weight: 400;"> of the test step (the name of the keyword used in the test step)</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Execution </span><b>Start/End</b><span style="font-weight: 400;"> date time and duration</span></li><li style="font-weight: 400;"><b>Description</b><span style="font-weight: 400;"> of the test step</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Any system </span><b>Message</b><span style="font-weight: 400;"> raised when the test step is executed.</span></li></ul></li></ul></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Log Image</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">The screenshot taken from the application under test, it is captured in either of the following situations:</span><p></p><ul><li style="list-style-type: none;"><ul><li style="font-weight: 400;"><span style="font-weight: 400;">An error occurs during test execution</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">The </span><a href="https://docs.katalon.com/display/KD/%5BWebUI%5D+Take+Screenshot"><span style="font-weight: 400;">Take Screenshot</span></a><span style="font-weight: 400;"> keyword is used</span></li></ul></li></ul></td></tr></tbody></table>

*   Users can easily determine which type of information to be displayed by using the provided filters:

<table style="height: 609px;" width="458"><tbody><tr style="height: 31px;"><td style="text-align: center; border: 1px solid black; width: 81px; height: 31px;"><b>Filter</b></td><td style="text-align: center; border: 1px solid black; width: 361px; height: 31px;"><b>Description</b></td></tr><tr style="height: 80px;"><td style="border: 1px solid black; text-align: center; width: 81px; height: 80px;"><span style="font-weight: 400;"><img class="init-size aligncenter wp-image-2207 size-full" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Info1.png" alt="Info " width="32" height="32"><br>Info</span></td><td style="border: 1px solid black; text-align: left; width: 361px; height: 80px;"><span style="font-weight: 400;">Show the messages logged for information/reference.</span></td></tr><tr style="height: 80px;"><td style="border: 1px solid black; text-align: center; width: 81px; height: 80px;"><span style="font-weight: 400;"><img class="init-size aligncenter wp-image-2208 size-full" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Passed-2.png" alt="passed status Katalon Studio" width="32" height="32"><br>Passed</span></td><td style="border: 1px solid black; text-align: left; width: 361px; height: 80px;"><span style="font-weight: 400;">Show the steps which are successfully executed.</span></td></tr><tr style="height: 65.3594px;"><td style="border: 1px solid black; text-align: center; width: 81px; height: 65.3594px;"><span style="font-weight: 400;"><img class="init-size aligncenter wp-image-2209 size-full" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Failed-2.png" alt="Failed status Katalon Studio" width="32" height="32"><br>Failed</span></td><td style="border: 1px solid black; text-align: left; width: 361px; height: 65.3594px;"><span style="font-weight: 400;">Show the steps which failed to execute.</span></td></tr><tr style="height: 80px;"><td style="border: 1px solid black; text-align: center; width: 81px; height: 80px;"><span style="font-weight: 400;"><img class="init-size aligncenter wp-image-2210 size-full" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Error-2.png" alt="Error status Katalon Studio" width="32" height="32"><br>Error</span></td><td style="border: 1px solid black; text-align: left; width: 361px; height: 80px;"><span style="font-weight: 400;">Show the steps having errors.</span></td></tr><tr style="height: 80px;"><td style="border: 1px solid black; text-align: center; width: 81px; height: 80px;"><span style="font-weight: 400;"><img class="init-size aligncenter wp-image-2211 size-full" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Incomplete-2.png" alt="Incomplete status Katalon Studio" width="32" height="32"><br>Incomplete</span></td><td style="border: 1px solid black; text-align: left; width: 361px; height: 80px;"><span style="font-weight: 400;">Show incomplete steps.</span></td></tr><tr style="height: 80px;"><td style="border: 1px solid black; text-align: center; width: 81px; height: 80px;"><span style="font-weight: 400;"><img class="init-size aligncenter wp-image-2212 size-full" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Warning1.png" alt="Warning status Katalon Studio" width="32" height="32"><br>Warning</span></td><td style="border: 1px solid black; text-align: left; width: 361px; height: 80px;"><span style="font-weight: 400;">Show the steps which have warning status.</span></td></tr><tr style="height: 80px;"><td style="border: 1px solid black; text-align: center; width: 81px; height: 80px;"><span style="font-weight: 400;"><img class="init-size aligncenter wp-image-2213 size-full" src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Not-Run1.png" alt="Not Run status Katalon Studio" width="32" height="32"><br>Not Run</span></td><td style="border: 1px solid black; text-align: left; width: 361px; height: 80px;"><span style="font-weight: 400;">Show the skipped steps.</span></td></tr></tbody></table>

*   If **JIRA** is configured in Project Settings, users can submit a ticket to this system. Refer to [JIRA Integration](https://docs.katalon.com/display/KD/JIRA+Integration) for more details.
*   Screenshots are taken for the failed steps and users can hover the mouse cursor over the attachment icon to review.

### **Information Tab**

Users can find the summary information of the test case in this tab.

![ summary information of the test case](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Information-Tab.png)

The items include:

<table><tbody><tr><td style="text-align: center; border: 1px solid black;"><b>Field</b></td><td style="text-align: center; border: 1px solid black;"><b>Description</b></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Test Case ID</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">The ID of the executed test case in Katalon Studio. Once clicked, the system navigates users to the respective test case.</span></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Start / End / Elapse</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Execution start/end date time and duration.</span></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Description</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Description of the test case.</span></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Message</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Any system message raised when this </span><b>iteration</b><span style="font-weight: 400;"> is executed.</span></td></tr></tbody></table>

### **Integration Tab**

The information regarding qTest Integration of this iteration is displayed in this tab.

![The information regarding qTest Integration](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Integration-Tab.png)

The fields include:

<table><tbody><tr><td style="text-align: center; border: 1px solid black;"><b>Field</b></td><td style="text-align: center; border: 1px solid black;"><b>Description</b></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Test Log ID</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">The ID of the integrated qTest </span><b>Test Run</b><span style="font-weight: 400;">. Once clicked, the system navigates users to the respective qTest page.</span></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Test Run Alias</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">The alias of the integrated qTest </span><b>Test Run</b><span style="font-weight: 400;">.</span></td></tr><tr><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Attachment</span></td><td style="border: 1px solid black; text-align: left;"><span style="font-weight: 400;">Indicate whether all execution logs and reports are placed in a zipped file to be sent to qTest as an attachment.</span></td></tr></tbody></table>

**Export to other formats**
---------------------------

For the purpose of sharing, users can generate reports of test suites into other formats such as **HTML**, **CSV**, **PDF** and **JUnit** using the context menu in Test Explorer as the example below:

![generate reports of test suites into other formats](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Export-to-other-formats.png)

Katalon Studio’s Reports feature allows users to have an overview of test execution by providing most important details and necessary information from PASSED/FAILED result to details on the execution environment, test summary, or logs. Using this information, test managers and QAs can better manage and track test activities, resulting in improved testing productivity.

[](#modal-id-popup)