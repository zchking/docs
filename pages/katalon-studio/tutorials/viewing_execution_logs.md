---
title: "Viewing execution logs"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/viewing_execution_logs.html
description: "Katalon Studio allows users to review test execution in Log Viewer. This guide shows you to view execution results of automation tests."
---
Katalon Studio allows users to review test execution in Log Viewer. You can choose to view **ALL** logs of your test execution or just certain specific ones such as **PASSED, FAILED, ERROR** and **NOT RUN**. This guide provides you basic information when viewing execution results of the automation tests.

Once your test cases/test suites finish execution, you can review the results on the **Log Viewer** views.

Using the filter options, you can specify what type of logs to be displayed:

<table><tbody><tr><td><b>Filter</b></td><td><b>Description</b></td></tr><tr><td><img> <span>All</span></td><td><span>Show all the log messages.</span></td></tr><tr><td><img> <span>Info</span></td><td><span>Show only log messages for information/reference.</span></td></tr><tr><td><img><span>Passed</span></td><td><span>Show only log messages indicating that a step is successfully executed.</span></td></tr><tr><td><img>Failed</td><td><span>Show only log messages indicating that a test step is failed to execute.</span></td></tr><tr><td><img><span>Error</span></td><td><span>Show only log messages indicating that some error occurs at a given step.</span></td></tr><tr><td><span><img>Warning</span></td><td><span>Show only log messages indicating that a test step is failed but accepted as a warning.</span></td></tr><tr><td><span><img> </span><span>Not Run</span></td><td><span>Show only log messages indicating that a test step is skipped.</span></td></tr></tbody></table>

Standard View vs. Tree View
---------------------------

The **Log Viewer** can be viewed in two different modes: **standard** view and **tree** view. You can switch to the tree view by selecting the **Tree View** toggle as illustrated below:

The **Tree View** display logs in a structural way that relates to how the test case/test suite organized:

Scroll Lock
-----------

While the test is being executed, the **Log Viewer** will be updated with real-time log messages, where the most recent log message is shown at the bottom of the view. Therefore, the **Log Viewer** keeps scrolling down during the test execution. However, users may want to keep the **Log Viewer** standing still so that they can verify certain log messages. In order to do so, you can select **Scroll Lock**.

As mentioned above, users can view execution result using two different views in **Log Viewer**. These views allow users to quickly track the test execution and thus make a modification to the test scripts accordingly.