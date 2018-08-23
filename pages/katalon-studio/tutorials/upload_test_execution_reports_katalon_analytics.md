---
title: "Uploading test execution reports to Katalon Analytics"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/upload_test_execution_reports_katalon_analytics.html
description: "This tutorial will show you how to upload Katalon Studio execution reports to Katalon Analytics. Learn more!"
---
1.  Introduction to Katalon Analytics
2.  Uploading your first execution reports from Katalon Studio
3.  Uploading multiple execution reports from CLI

This tutorial will show you how to upload Katalon Studio execution reports to Katalon Analytics and answer the most important question in the QA process: how well does an execution perform? Being able to answer this question, you can improve the quality of your test scripts by reducing execution time, optimizing test suite, and quickly detecting unstable/flaky tests.

For this tutorial, let’s assume that you have been using Katalon Studio as a test automation solution, and there are existing collections of Katalon Studio test execution reports. Great! Let’s get started.

Introduction to Katalon Analytics
---------------------------------

**Katalon Analytics (Beta)** brings users to the next level of visualizing Katalon Studio test execution reports. This web-based application provides an in-depth understanding of test execution through powerful visualization of charts, graphs, and reports. Thus, users can make informed decisions on the quality of application build.

Katalon Analytics is designed to allow users to upload execution reports from both Katalon Studio and CLI (recommended for uploading multiple execution reports)

The Katalon Analytics team welcomes any suggestion and feedback to help make this web application better serve users.

Uploading your first execution reports from Katalon Studio
----------------------------------------------------------

1.  Navigate to the Katalon Analytics portal: https://analytics.katalon.com/ and log in using the same account used with Katalon Studio.
2.  Once logged in, the main dashboard of Katalon Analytics will be displayed.

Create a new Project before uploading any Katalon Studio test execution reports. Click on **Setting icon** \> **Project**. Provide a **name** and click **Create**. A new project will be created with a unique ID.

1.  Next, enable Katalon Analytics integration to upload execution reports. In Katalon Studio, select **Project** \> **Settings** \> **Integration** \> **Katalon Analytics**.
2.  Check the Enable integration box. The configuration setting will be enabled for editing. Enter the required information and click Connect.

*   Server URL: https://analytics.katalon.com
*   Email: Katalon Studio’s email
*   Password: Katalon Studio’s password

1.  After connecting successfully to Katalon Analytics, all relevant teams and projects will be retrieved from Katalon Analytics and displayed. Select a preferred team and project from the drop-down menu. You can also create a new project by clicking on New Project.

1.  Next, select the options to automatically or manually upload execution reports to Katalon Analytics by checking/unchecking **Automatically submit test run result**. If checked, Katalon Studio will automatically upload execution reports to Katalon Analytics in the future. You can also select preferred attachment types (screenshots or logs) for automatically submitting reports.

1.  Click **OK** when done.
2.  Navigate to **Reports** in Test Explorer. Click on any preferred report to view details and upload.

1.  Click on **Katalon Analytics** located at the upper right corner. Select **Upload**.

1.  Once finished, switch to Katalon Analytics to **view** the uploaded report. Select the Team and Project that are integrated with Katalon Studio.

1.  Congratulation! You have just finished uploading the first execution report to **Katalon Analytics**.

Uploading multiple execution reports from CLI
---------------------------------------------

1.  Before uploading a Katalon Studio reports folder to Katalon Analytics, you will need to

*   Have Java JRE installed (How to guide)
*   Download Katalon Studio reports uploader (Jar file). Download Reports Uploader.

1.  In Katalon Analytics, select **Settings** \> **Projects**. If you have already created a project, please note down its **ID**. If not, provide a name for a new project and click create. Once a new project is **created**, Katalon Analytics will generate a **Project ID**. _This tutorial uses the project whose ID is 6_.

1.  Next, the local path of the Katalon Studio Reports folder is required. To get the path, in Katalon Studio, navigate to the **Reports** section of **Test Explorer** and select a preferred report folder. **Right** click > **Open Containing Folder**. You will be redirected to the Katalon Studio report folder on local drive. Copy the report folder’s path. For example, the folder is as follows _C:\\Users\\Katalon\\Katalon Studio\\Katalon Keywords\\Reports_

1.  Start CLI. The Window Command Line is used for this tutorial. Enter the following syntax

```
java -jar ../katalon-report-uploader-0.0.1-SNAPSHOT.jar
 
--kit.server.api=http://analytics.katalon.com --projectId=1 --path=""
 
--email= --password=

```

Where

<table><tbody><tr><td><span>katalon-report-uploader-0.0.1-SNAPSHOT.jar</span></td><td><span>Jar file path can be an absolute path or relative path</span></td></tr><tr><td><span>projectID</span></td><td><span>Katalon Analytics Projects’ ID</span></td></tr><tr><td><span>Path=” “</span></td><td><span>Local path of the Katalon Studio Reports folder</span></td></tr><tr><td><span>Email and Password</span></td><td><span>Your Katalon Studio account’s credentials</span></td></tr></tbody></table>

1.  Once finished, navigate back to Katalon Analytics to view the analyzed reports.

Now you can upload execution reports from Katalon Studio and CI. It’s time to leverage Katalon Analytics powerful dashboard to pivot your test automation strategy, focus on the high-risk areas, detect flakiness tests and to have a better control of the product quality. Please refer to the tutorial **Viewing test execution reports in Katalon Analytics**.