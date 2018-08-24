---
title: "Running tests from Command Line"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/generate_command_line.html
description: "Command line is the quickest way to launch programs and execute the tests. This tutorial will help you generate commands to use in console mode."
---
If the users want to run a test case, they can utilize either the command-line runner or execute the tests directly from Katalon Studio UI.

**Command line** is the quickest way to launch programs and execute the tests. It is convenient for those users who have familiarity with coding and command-line experience.

Before executing the tests from command line, user needs to create test suite/test suite collection. Refer to the Katalon documentation to get an idea of test suite/test suite collection.

You can quickly generate commands to use in console mode by following the steps below:

*   Step 1: Click on **Build CMD** from the main toolbar. A new dialog will show up.

*   Step 2: Click on **browse**. It **lists** out all the **Test Suites** and **Test Suite Collections**. You can choose the Test Suite or Test Suite Collection to be executed.

*   Step 3: Select **Android** from the list the platform to execute the tests.

The Mobile Device settings will be available when we choose to run with Android. You can configure the location for reports after execution.

*   Step 4: **Report File Name**: the name for your generated report.

*   Step 5: By default, post-execution checkbox “**Send Summary Report to recipients**” will be **unchecked**.

You can select the checkbox to enable email configuration to send report to your recipients’ list. Other options are available for you to configure the options for console log.

*   Step 6: **Retry Test Suite**: Here, you can set the number of times to run test cases in the test suite. There is also a checkbox for failed test cases only, which means test suite will rerun only for the failed tests.
*   Step 7: Click on **Generate Command** once you’re done with the configuration. You can **Copy to Clipboard** and paste to command prompt for execution.

*   Step 8: Open the **command prompt** and navigate to the folder of Katalon Studio, which contains katalon.exe file.

*   Step 9: Paste the **generated command** in Step 9. Enter to start executing the test suite collection.

*   Step 10: After completing execution, a report will be generated in the selected folder with the given name.

The source code is available here. For further instructions and help, please refer to Console Mode Execution guide and join us on Katalon Forum.