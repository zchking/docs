---
title: "Execute a Test Case or a Test Suite" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execute-a-test-case-or-a-test-suite.html 
description: 
---
Katalon Studio allows you to run the entire test suite, or an individual test case. Before executing a test case or a test suite, keep in mind the supported execution environments by Katalon Studio. 

Execute an Entire Test Case or Test Suite
-----------------------------------------

Open a test case/test suite, then select the environment to run the test case from **Run** command of the main toolbar. You can also execute the test case using console mode. 

If you simply click on the **Run** button, the test case will be executed using the default browser defined in Execution Settings.

| Execution Environment | Execution Guide |
| --- | --- |
| **Browsers** | Simply select to execute your test on one of the supported browsers (Chrome, Firefox, IE, Safari, Edge) |
| **Mobile Browsers** | Simply select to execute your test on one of the supported devices (Android, iOS) |
| **Mobile** | 
Before executing your test, check if you have set up the environment for mobile testing for Windows or for macOS. Select your device among those listed in Katalon Studio.

Troubleshooting

If there is no device listed, please make sure the Developer Mode on the phone is turned on, try to unplug and reconnect several times until you are prompted for accepting/trusting this device.







 |
| **Remote** | Make sure you have set up default configuration for the remote environment in project settings. Refer to Introduction to Desired Capabilities for more details. |
| **Custom** | Make sure you have set up default configuration for the remote environment in project settings. Refer to Custom Execution for more details. When you have set up your custom environment, simply select it from the drop-down list. |

Execute Parts of a Test Case
----------------------------

Creating automation test cases is a repetitive task that requires a lot of editing and re-running. In many automation tools, when the test case failed and the user makes certain changes to the script, the users usually has to execute the whole script all over again to make sure the test is executed as expected. To save users the trouble of having to run all unnecessary steps, Katalon Studio provides two ways so that users can start the test at their preferred steps.

### Execute from a Selected Step

From the Manual view of the test case:

1\. Start a browser in Katalon script using 'Open Browser' step. Else, you must have a current session running.

2. Ensure this browser's session is NOT terminated (**Project -> Settings -> Default -> Post-Execution -> Terminate...** options are unchecked based on your testing needs).

3\. Right click on one of the step you want to execute from, and execute the sesssion.

### Enable/Disable steps

Katalon Studio also allows users to disable one or more test steps before executing the test case as shown in the screenshot below. Using the shortcuts  Ctrl + D (disable) and Ctrl + E (enable) on selected steps, the users can leverage this feature to skip unwanted steps when executing test cases.

Job Progress
------------

The Job Progress will be triggered automatically to show the progress while your test case/test suite is being executed.

Troubleshooting
---------------

Troubleshooting

Some factors can affect your execution:  
\- Failure Handling  
\- Test Listeners  
\- Setup/Teardown Test Case/Suite

You can also refer to this guide to troubleshoot problems relating to test execution.