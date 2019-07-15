---
title: "View Test Execution, Test Suite and Test Case Details"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/project-management-view-details.html
description: Description of Test Execution, Test Suite and Test Case Details
---

Users can view execution summary and detailed information of each Test execution, Test Suite and Test Case by simply clicking their IDs or name.
> Notes:
> Every test execution is uniquely identified with an ID. There are many test runs within a test execution, which are also granted an ID.

## Details of each Test Execution

To view details of each execution, in the test executions table, click on its ID, then its summary and details will display. In its summary dashboard, there are three sub-pages: Result, Test Runs, and Files.

**Result:**

* **Test Runs**：the total number of test runs in this execution according to test status.
* **Failed Test Runs**: a list of test run records that didn't pass.
* **Coverage**: a list of test suites executed in a test suite collection and their details such as Name, Profile, Platform, Started and Duration.
* **API Performance**: to view API Objects in that execution in terms of ID, Name, Total duration, Average Duration, and Request Count.

**Test Runs:** a list all test runs in that test suite.

**Files:** to store log files of that execution that are available for users to download.

## Details of each Test Suite

Click on the Test Suite’s name, the summary dashboard displays and you can view four sub-pages: Result, Test Runs, Environments and Comments.

**Result**: the total number of test runs in this execution; the status trend, performance trend, and all the test run records that didn't pass.

**Test Runs**: a list of test runs in that test suite.

**Environments**: details of the execution environment.

**Comments**: Users' comments on this test suite.

## Details of each Test Case

Click on a test run's ID, the summary dashboard displays and you can view its details organized in five sub-pages: Result, Steps, Requests, Environments and Comments.

**Summary Fields**: Status, Profile, OS, Started, Duration and History. In History, you can view:

* History: all interative runs of a single test case. To view details, click on a test run's ID.
* Performance:  the performance report of each test case.

**Result**: to view errors and execution log

* **Logs**: the preview of the error logs or reports file from Katalon Studio.
* **Test Suite**: Test Suite containing this test case.
* **Path**: the location path of the test case in Katalon Studio.
* **Jira Issues**: those linked issues in Jira
* **Age**: the number of occurrences of the latest repeating test status (e.g. Status: Failed, Age: 5 → This test case has failed 5 times consecutively).
* **Same Failures**: None/
* **Attachments**: the error logs or reports file from Katalon Studio.
* **Task**: those tasks related to this test case.

**Steps:** the test steps in the test run.\
**Request:**\
**Environments:** the execution environment of the test run.\
**Comments:** Users'comments on this test run.
