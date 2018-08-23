---
title: "Viewing test execution reports in Katalon Analytics"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics.html
description: "This tutorial will show you how to leverage Katalon Analytics powerful dashboard to pivot your test automation strategy, focus on the high-risk areas."
---
1.  Status Report
2.  Duration Report
3.  Execution Report
4.  Execution Detail View
5.  Performance and History

This tutorial will show you how to leverage Katalon Analytics powerful dashboard to pivot your test automation strategy, focus on the high-risk areas, detect flakiness tests and to have a better control of the product quality.

For this tutorial, let’s assume that you already uploaded Katalon Studio execution reports to Katalon Analytics. If not, refer to this tutorial.

Status Report
-------------

The graph presents an overview of test status over a series of executions within the report. This is the quickest way to check the status of Automation Test of the AUT, which also indicates the quality of Automation Test. There are 4 possible results when a test is run: **Passed**, **Failed**, **Error**, **Incomplete**. You can **click** on an **unwanted result** on the Status Report graph to **filter** it out.

As shown in the chart above, the 1st execution has most test cases which were passed while most test cases were failed in the second test execution. The last execution has many passed and failed test cases. This chart gives you an idea of trends in test execution.

Hovering the mouse cursor over the graph line, you will be able to see how many test cases with their status in each execution.

Incomplete test cases are shown as failed test cases. To view Incomplete test cases only, click on Passed, Failed, Error status to filter.

As depicted in the chart above, there are two incomplete test cases and the other test cases are not shown.

Duration Report
---------------

The duration reports graph indicates how much time each execution took to complete. Any significant changes in execution time can be a sign to let you know that there are performance issues.

Let’s take a look at Duration Report Graph of the Katalon Keywords project below, the execution #2 took more than 21 hrs to complete while the execution #5 took only 18 minutes. These differences indicate which execution needs to be reviewed.

Execution Report
----------------

The Execution Report displays a list of all test executions and their details within a report. Execution Report contains a table that combines data from Status Report and Duration Report.

You can also filter a preferred status by clicking the icon on top of the Status column.

For example, select Passed in Status if you want to see only executions that are passed. To reset, simply click on the x icon or on Clear all.

Execution Detail View
---------------------

Katalon Analytics provides a detail view to help you have a better understanding of each execution. To view details, simply click on a preferred execution **ID**. A dashboard for the selected execution will be displayed.

Let’s take Katalon Keywords as an example. By viewing the Result section, you can obtain a quick summary of the execution.

<table><tbody><tr><td><span>Status: Failed</span></td><td><span>The overall status of the 7th execution is Failed</span></td></tr><tr><td><span>Total: 242 (+228)</span></td><td><span>The total number of test cases is 247, and there are 228 test cases added since the last execution (execution #6)</span></td></tr><tr><td><span>Passed: </span><span>179 ( +168)</span></td><td><span>Execution #7 has 179 passed test cases. There are additional 168 passed test cases since the last execution</span></td></tr><tr><td><span>Failed: </span><span>63 ( +61)</span></td><td><span>Execution #7 has 63 failed test case. This execution has 61 more failed test cases compared to the last execution</span></td></tr><tr><td><span>Error: </span><span>0</span></td><td><span>Zero erroneous test case</span></td></tr><tr><td><span>Incomplete: </span><span>0 ( -1)</span></td><td><span>Zero incomplete test case compared to 1 incomplete test case in the last execution.</span></td></tr><tr><td><span>Started and Duration</span></td><td><span>Exact date and time of the execution, and the time taken to complete.</span></td></tr></tbody></table>

Next, you can hover the mouse over the pie chart to see the total percentage of passed and failed test cases. (e.g. 73.97% fassed, 26.03% failed for the Katalon Keyword Project).

All Failed Tests report is designed for a quick access to all test cases with failed status for a specific execution. This list shows ID, Name, Folder (test case folder), Started (time and date), Duration (time), Status, Age, and Flakiness of each test case. Katalon Analytics groups test cases according to their status. You can drill down to a specific status by filtering through the Status column.

**Test Result Age: Age** is an interesting and useful metric in Katalon Analytics. **Age** is the number of consecutive test executions that have the same present status. For example, the Age of 2 for the test case 839 indicates that this test case consecutively failed two times in the previous two executions. This metric suggest how persistent a test case is in its current status.  

**Test Result Flakiness:** One of the most useful features of Katalon Analytics is **flaky analysis**. Flaky tests are those producing both passed and failed results for the same configuration. They are critical to the quality of automation test executions and hard to detect. Sometimes tests failed due to various reasons such as data synchronization, improper test management, and dependency issues. As your project grows, which means more features and complex test case structures, flaky tests are even harder to detect. Katalon Analytics helps you solve this problem by visualizing and analyzing test execution reports to help you easily identify which test cases are likely to cause the problem.

Flakiness is the percentage of changes in the results (passed and failed) over the total number of executions employing the same configuration for the same test case. The **higher** the **flakiness** percentage the **less stable** of that test case.

Katalon Analytics also maps the structure of Test Suites and Folders from Katalon Studio Project into its dashboard. You can view detailed information about Test Suites in a table containing execution environment (OS, browsers), filterable status, total test cases, the number of test cases on each status category.

For example, refer to the screenshot below, the Katalon Keywords project has a test suite named **TS_Alert Keywords**. It was run on Mac OS X 64bit, FF v54.0, on 8/29/2017 09:03:17, taking 4m46s to run with all 7 passed test cases.

You can view the same detailed information with the Folders table

You can also view all tests in one table, as shown in the screenshot below. From this table, you can filter the list based on test status.

Performance and History
-----------------------

Katalon Analytics takes users even deeper into the performance and history of executions of test suites, test cases, and folders. Performance and history charts allow users to have a more comprehensive view of their tests in order to take actions concerning the quality of the application under test.

Let’s continue with the Katalon Keywords project, click on **ID** of the test suite **TS_Alert Keywords** to view its detailed execution information. Next, click on **View all executions of this Test Suite**. Katalon Analytics will show the **History** dashboard of TS_Alert Keywords test suite where you can view its **Performance** graph and execution history.

The Performance line graph shows the execution time of each run for the test suite. Hovering on each point on the graph to see the execution time. By detecting possible trends on the Performance graph, you can quickly figure out performance issues.

Next, the **History** table displays the execution history of for the selected test suite where you can view execution environment, the number of test cases, and status. As shown above, the **TS_Alert Keyword**’s **Performance** graph indicates that the executions #21, #35 and #45 are all failed. The **History** table below provides  insights on why these test executions failed.

For example, the execution #45 has 6 passed test cases and 1 failed test case. This one failed test case causes the whole execution to fail. To examine further, click on the execution ID to view key metrics at the test case level, as shown below.

The Result report above shows 7 total test cases (6 passed and 1 failed) in this execution. The number in the parentheses indicates the difference between this and the previous execution.  On this screen, you can also view all failed tests with information about age and flakiness.

Click on the **ID** of the failed test case (ID: 495) to view the execution history, detailed execution information, and logs.

To investigate further, click **View all executions of this Test Case**. The **History** and **Performance** graphs will be displayed, and you will able to get insights on how this test case performs over time.

Congratulation! Now you know how to navigate around the Katalon Analytics dashboard, investigate test executions, and detect potential problems and their causes. Katalon Analytics visualizes test execution reports in such a way that product owners and project teams can quickly evaluate execution tests, make informed decisions to improve the quality of the application under test.