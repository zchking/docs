---
title: "View Test Execution, Test Suite and Test Case Details"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/view-details.html
description: Description of Test Execution, Test Suite and Test Case Details
---
## View Test Execution, Test Suite and Test Case Details

Users can view execution summary and detailed information of each Test execution, Test Suite and Test Case by simply clicking their IDs or name.

### Details of each Test Execution

To view details of each execution, in the test executions table, click on its ID, then its summary and details will display. In its summary dashboard, there are three sub-pages: Result, Test Runs, and Files.

**_Result:_**
*   **Test Runs**: the total number of test runs in this execution
*   **Failed Test Runs**: to show a list of test run records that didn't pass [The testing team will be able to locate quickly where exactly the test has failed.]
*   **Coverage:** to show a list of test suite executed in a test suite collection and its details such as Name, Profile, Platform, Started… 
*   **API Performance**: to view API Objects in that execution in terms of ID, Name, Total duration, Average Duration, and Request Count.

**_Test Runs:_** to list all test runs in that test suite.

**_Files:_** to store log files of that execution that is available for users to download.

### Details of each Test Suite

Click on the Test Suite’s name, the summary dashboard displays and you can view four sub-pages: Result, Test Runs, Environments and Comments.

**_Result_**: to view the total number of test runs in this execution; the status trend, performance trend, and all the test run records that didn't pass.

**_Test Runs_**: to show a list of test runs of that test suite

**_Environments_**: to show details of the execution environment

**_Comments_**: to remark comments on this Test Suite

### Details of each Test Case

Click on a test run's ID, the summary dashboard displays and you can view four sub-pages: Result, Steps, Requests and Environments.

Status, Profile, OS, Started, Duration

History:  users can also view all the iteration execution of a single test case. Performance:  The performance of each test case through the iteration run. The duration of each iteration also shown

History: The list of the number of iterations in a test case. To view details, click on the ID of iteration (This is Katalon Analytics global ID)

**_Result_**: to view errors in that run and its full log file

*   Test Suite
*   Path
*   Jira Issues
*   Age: Show the frequency this test case has the same status consecutively. (e.g. Status: Failed, Age: 5 → This test case has failed 5 times consecutively) 
*   Same Failures
*   Attachments:
*   Task: 

    Test case path: the location path of the test case in Katalon Studio


    Result: Status Platform Test Suite in Katalon Studio Started Duration Flakiness Age Same Failure Attachment – error logs or reports file from Katalon Studio


    Errors: Users can quickly navigate to the error in the log of execution. Extracted from Katalon Studio execution log.


    Console log: Katalon Studio execution log


**_Steps:_**

**_Request:_**

**_Environments:_** execution environment

**_Comments:_**

Notes:

Every test execution is uniquely identified with an ID. There are many test runs within a test execution, which are also granted an ID.

To **view detail** of a failed test case, click on the **ID**. Once clicked on **ID**, Katalon Analytics will display in-depth views about the test case. Users will able to view

<table>
    <tbody>
        <tr>
            <td><strong>Test case path</strong></td>
            <td>The location path of test case in Katalon Studio</td>
        </tr>
        <tr>
            <td><strong>Result</strong></td>
            <td>
                <p>Status</p>
                <p>Platform</p>
                <p>Test Suite in Katalon Studio</p>
                <p>Started</p>
                <p>Duration</p>
                <p>Flakiness</p>
                <p>Age</p>
                <p>Same Failure</p>
                <p>Attachment – error logs or reports file from Katalon Studio</p>
            </td>
        </tr>
        <tr>
            <td><strong>Errors</strong></td>
            <td>Users can quickly navigate to the error in the log of execution. Extracted from Katalon Studio execution log.</td>
        </tr>
        <tr>
            <td><strong>Console log</strong></td>
            <td>Katalon Studio execution log&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</td>
        </tr>
    </tbody>
</table>