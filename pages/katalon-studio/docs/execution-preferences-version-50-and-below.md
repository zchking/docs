---
title: "Execution Preferences (Version 5.0 and below)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execution-preferences-version-50-and-below.html 
description: 
---
*   **For Version 5.0 and Below**
*   **For Version 5.1 and Above**
    *   **Execution Preference** can be found in **Project Settings**

All the preferences under **Execution** are for default behaviors that Katalon Studio should perform during test execution. 

General Execution Preferences
-----------------------------

You can configure general execution preferences by accessing from main menu: **Window > Katalon Studio Preferences > Katalon > Execution**.

Where:

| 
Field

 | 

**Description**

 |
| --- | --- |
| 

Default execution

 | 

The default environment that Katalon Studio will use to execute automation test.

 |
| 

Default load timeout

 | 

The default timeout period (in seconds) that Katalon Studio will wait for the application under test to be loaded when executing automation test.

 |
| 

Post-Execution Options

 | 

These options decide the actions that Katalon Studio will perform after finishing automation test.

*   **Notify me**: Specify whether you want to send email notification.
    *   Refer to Emails Settings for how to register the list of report recipients.
    *   Refer to Test suite > Manage execution information for how to register a list of recipients who will be receiving the execution report of a specific test suite.
*   **Open report**: Specify whether the report generated after your test suite finishes its execution will also be open immediately.
*   **Terminate drivers**: Specify whether any driver remains after execution will be terminated.

 |

All the above preferences are saved into the file “**com.kms.katalon.composer.execution.prefs**” under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in this file to change these preference settings.

WebUI Preferences
-----------------

You can configure WebUI execution preferences by accessing from main menu: **Window > Katalon Studio Preferences > Katalon > Execution > WebUI**.

Where:

| 
**Preference Setting**

 | 

**Description**

 |
| --- | --- |
| 

Default wait when IE hangs

 | 

Specify the default period of waiting that Katalon Studio should use in case IE hangs.

 |

The above preference is saved into the file “**com.kms.katalon.composer.webui.prefs**” under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in this file to change these preference settings.