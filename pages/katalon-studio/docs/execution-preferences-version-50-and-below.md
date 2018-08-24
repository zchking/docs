---
title: "Execution Preferences (Version 5.0 and below)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execution-preferences-version-50-and-below.html 
redirect_from: "/pages/viewpage.action?pageId=3179873" 
description: 
---
*   **For Version 5.0 and Below**
*   **For Version 5.1 and Above**
    *   **Execution Preference** can be found in **Project Settings**

All the preferences under **Execution** are for default behaviors that Katalon Studio should perform during test execution. 

General Execution Preferences
-----------------------------

You can configure general execution preferences by accessing from main menu: **Window > Katalon Studio Preferences > Katalon > Execution**.

![](../../images/katalon-studio/docs/execution-preferences-version-50-and-below/image2017-6-29 16_0_23.png)

Where:

<table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><p>Default execution</p></td><td><p>The default environment that Katalon Studio will use to execute automation test.</p></td></tr><tr><td><p>Default load timeout</p></td><td><p>The default timeout period (in seconds) that Katalon Studio will wait for the application under test to be loaded when executing automation test.</p></td></tr><tr><td><p>Post-Execution Options</p></td><td><p>These options decide the actions that Katalon Studio will perform after finishing automation test.</p><ul><li><strong>Notify me</strong>: S<span><span>pecify whether you want to send email notification.</span></span><ul><li>Refer to <a href="/display/KD/Emails+Settings">Emails Settings</a> for how to register the list of report recipients.</li><li>Refer to <a href="/pages/viewpage.action?pageId=786668">Test suite &gt; Manage execution information</a> for how to register a list of recipients who will be receiving the execution report of a specific test suite.</li></ul></li><li><strong>Open report</strong>: S<span>pecify whether the report generated after your test suite finishes its execution will also be open immediately.</span></li><li><span><strong>Terminate drivers</strong>: Specify whether any driver remains after execution will be terminated.</span></li></ul></td></tr></tbody></table>

All the above preferences are saved into the file “**com.kms.katalon.composer.execution.prefs**” under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in this file to change these preference settings.

WebUI Preferences
-----------------

You can configure WebUI execution preferences by accessing from main menu: **Window > Katalon Studio Preferences > Katalon > Execution > WebUI**.

![](../../images/katalon-studio/docs/execution-preferences-version-50-and-below/image2017-6-29 16_1_20.png)

Where:

<table><thead><tr><th>Preference Setting</th><th>Description</th></tr></thead><tbody><tr><td><p>Default wait when IE hangs</p></td><td><p>Specify the default period of waiting that Katalon Studio should use in case IE hangs.</p></td></tr></tbody></table>

The above preference is saved into the file “**com.kms.katalon.composer.webui.prefs**” under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in this file to change these preference settings.