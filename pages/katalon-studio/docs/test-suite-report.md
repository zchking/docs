---
title: "Test Suite Report" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/test-suite-report.html 
redirect_from: "/display/KD/Test+Suite+Report" 
description: 
---
Once a test suite finishes its execution, a historical report will be automatically generated and stored in Reports. 

For example:

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_1_55.png)

The report will be named with following the naming convention: _YYYYMMDD_HHmmss_, which is the datetime when the test suite starts its execution.

Report Overview
---------------

In **Test Explorer** view, double-click on a historical execution of a test suite to view its details:  
![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 20_27_2.png)  
where:

<table><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td>Test Cases Table</td><td>List of executed test cases.</td></tr><tr><td>Summary</td><td>Summary information of executed environment.</td></tr><tr><td>Execution Settings</td><td><div><p>Settings of executed browsers/devices. For example:</p><p><span><img></span></p></div></td></tr><tr><td>Execution Environment</td><td><div><p>Other information about the executed system. For example:</p><p><span><img></span></p></div></td></tr></tbody></table>

Test Cases List
---------------

*   The summary information of all executed iterations done in the test suite is displayed here. Each time when a test case is executed with a test data row is considered an **iteration**.  
    ![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_15_33.png)
*   Users can easily determine which type of information to be displayed by using the provided filters:
    
    <table><thead><tr><th>Filter</th><th>Description</th></tr></thead><tbody><tr><td><p>Passed</p></td><td><p>Show only iterations which are passed.</p></td></tr><tr><td><p>Failed</p></td><td><p>Show only iterations which are failed.</p></td></tr><tr><td><p>Error</p></td><td><p>Show only iterations having errors.</p></td></tr><tr><td>Incomplete</td><td>Show only incomplete iterations</td></tr></tbody></table>
    
*   By selecting an **iteration** in **Test Case Table** and click **Show Test Case Details**, you can view details regarding its executed logs.
*   If **qTest** and **JIRA** are configured in project settings, you can submit data to those systems. Refer to [Enable qTest Integration](/display/KD/Enable+qTest+Integration) and [Configure JIRA Integration](/display/KD/Configure+JIRA+Integration) for more details.

Test Suite Summary
------------------

This section gives the summary information of the test suite:

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_29_56.png)

where:

<table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Test Suite ID</td><td>The ID of the executed test suite in Katalon Studio.</td></tr><tr><td><p>Hostname / OS / Platform</p></td><td>The environment where the test suite was executed</td></tr><tr><td><p>Start / End / Elapse</p></td><td>Execution start/end date time and duration</td></tr><tr><td>Total TC</td><td>Total number of test cases, along with their executed status.</td></tr></tbody></table>

Test Logs Details
-----------------

This section shows all information regarding the iteration selected in the **Test Cases Table** section.

### Test Log Tab

*   Details regarding all the executed steps and their status are displayed in this tab.   
    ![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 20_29_56.png)  
    where:
    
    <table><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td>Log Information</td><td>Information of the test step selected in the <strong>Test Case’s Log</strong> section:<ul><li>The <strong>Name</strong> of the test step (the name of the keyword used in the test step)</li><li>Execution <strong>Start/End</strong> date time and duration</li><li>The <strong>Description</strong> of the test step</li><li>Any system <strong>Message</strong> raised when the test step was executed</li></ul></td></tr><tr><td>Log Image</td><td><p>The screenshot taken from the application under test, it is captured in either of following situations:</p><ul><li>An error occurs during test execution</li><li>The <a>Take Screenshot</a> keyword is used</li></ul></td></tr></tbody></table>
    
*   Users can easily determine which type of information to be displayed by using the provided filters:
    
    <table><thead><tr><th>Filter</th><th>Description</th></tr></thead><tbody><tr><td><p>Info</p></td><td><p>Show the messages logged for information/reference.</p></td></tr><tr><td><p>Passed</p></td><td><p>Show the steps which are successfully executed.</p></td></tr><tr><td><p>Failed</p></td><td><p>Show the steps which are failed to execute.</p></td></tr><tr><td><p>Error</p></td><td><p>Show the steps having errors.</p></td></tr><tr><td>Incomplete</td><td>Show incomplete steps due to other factors such as wrong syntax, power shortage, disconnected network, etc...</td></tr><tr><td>Warning</td><td>Show the steps which have warning status.</td></tr><tr><td>Not Run</td><td>Show the skipped steps.</td></tr></tbody></table>
    
*   If **JIRA** is configured in project settings, you can submit a ticket to this system. Refer to [Configure JIRA Integration](/display/KD/Configure+JIRA+Integration) for more details.
*   Screenshots are taken for the failed steps and you can hover the mouse cursor over the attachment icon to review. 

### Information Tab

Users can find the summary information of the test case in this tab.

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 20_4_11.png)

where:

<table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Test Case ID</td><td><span>The ID of the executed test case in Katalon Studio.</span></td></tr><tr><td><p>Start / End / Elapse</p></td><td>Execution start/end date time and duration.</td></tr><tr><td>Description</td><td>The description of the test case.</td></tr><tr><td>Message</td><td>Any system message raised when this <strong>iteration</strong> was executed.</td></tr></tbody></table>

### Integration Tab

The information regarding qTest Integration of this iteration is displayed in this tab.

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 20_15_4.png)

where:

<table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Test Log ID</td><td>The ID of the integrated qTest <strong>Test Run</strong>.</td></tr><tr><td>Test Run Alias</td><td>The alias of the integrated qTest <strong>Test Run</strong>.</td></tr><tr><td>Attachment</td><td>Indicate whether all the execution log and report are placed in a zipped file which is sent to qTest as an attachment.</td></tr></tbody></table>

Export to other formats
-----------------------

For the purpose of sharing, users can generate reports of test suites into other formats such as **HTML**, **CSV**, **PDF** and **JUnit** using the context menu in Test Explorer as example below:   
![](../../images/katalon-studio/docs/test-suite-report/image2017-6-23 16_2_2.png)