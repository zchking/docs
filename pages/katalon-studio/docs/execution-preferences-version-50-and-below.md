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

![](../../images/katalon-studio/docs/execution-preferences-version-50-and-below/image2017-6-29 16_0_23.png)

Where:

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Field</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><p class="" style="">Default execution</p></td><td class="" style=""><p class="" style="">The default environment that Katalon Studio will use to execute automation test.</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">Default load timeout</p></td><td class="" style=""><p class="" style="">The default timeout period (in seconds) that Katalon Studio will wait for the application under test to be loaded when executing automation test.</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">Post-Execution Options</p></td><td class="" style=""><p class="" style="">These options decide the actions that Katalon Studio will perform after finishing automation test.</p><ul class="" style=""><li class="" style=""><strong class="" style="">Notify me</strong>: S<span class="" style=""><span class="" style="">pecify whether you want to send email notification.</span></span><ul class="" style=""><li class="" style="">Refer to <a href="/display/KD/Emails+Settings" class="" style="">Emails Settings</a> for how to register the list of report recipients.</li><li class="" style="">Refer to <a href="/pages/viewpage.action?pageId=786668" class="" style="">Test suite &gt; Manage execution information</a> for how to register a list of recipients who will be receiving the execution report of a specific test suite.</li></ul></li><li class="" style=""><strong class="" style="">Open report</strong>: S<span class="" style="">pecify whether the report generated after your test suite finishes its execution will also be open immediately.</span></li><li class="" style=""><span class="" style=""><strong class="" style="">Terminate drivers</strong>: Specify whether any driver remains after execution will be terminated.</span></li></ul></td></tr></tbody></table>

All the above preferences are saved into the file “**com.kms.katalon.composer.execution.prefs**” under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in this file to change these preference settings.

WebUI Preferences
-----------------

You can configure WebUI execution preferences by accessing from main menu: **Window > Katalon Studio Preferences > Katalon > Execution > WebUI**.

![](../../images/katalon-studio/docs/execution-preferences-version-50-and-below/image2017-6-29 16_1_20.png)

Where:

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Preference Setting</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><p class="" style="">Default wait when IE hangs</p></td><td class="" style=""><p class="" style="">Specify the default period of waiting that Katalon Studio should use in case IE hangs.</p></td></tr></tbody></table>

The above preference is saved into the file “**com.kms.katalon.composer.webui.prefs**” under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in this file to change these preference settings.