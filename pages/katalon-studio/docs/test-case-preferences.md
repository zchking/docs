---
title: "Test Case Preferences" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/test-case-preferences.html 
description: 
---
All the preferences under **Test Case** group are for controlling the default behavior that Katalon Studio should perform when test cases are designed.

You can configure these preferences by accessing from main menu: **Window > Katalon Studio Preferences > Katalon > Test Case**

Where:

| 
**Preference Setting**

 | 

**Description**

 |
| --- | --- |
| 

Test Case Calling

 | 

This is to specify how Katalon Studio should behave when you are calling another test case in your current test case.

<table><tbody><tr><td><p><strong>Options</strong></p></td><td><p><strong>Description</strong></p></td></tr><tr><td><p>Generate variable with default value</p></td><td><p>Called test case uses default values for its variables.</p></td></tr><tr><td><p>Generate variable with the same name as the exposed variable of the called test case</p></td><td><p>Called test case uses default values which are the same with its variables name.</p></td></tr><tr><td><p>Expose variables automatically after choosing the called test case</p></td><td><p>Called test case uses default values which are the same with its variables name.</p><p>The variables are also added into current test case at 'Variables' tab.</p></td></tr></tbody></table>

You might need to refer back to Variable Types section for which types of variables are supported in Katalon Studio.

 |
| 

Default Failure Handling

 | 

The default Failure Handling schema that should be used when a new step is added in your test case. Refer to Failure Handling section for more settings to control Failure Handling.

 |
| 

Default Keyword

 | 

The default keyword that should be used when a new step is added in your test case.

 |

All the above preferences are saved into the file “**com.kms.katalon.composer.testcase.prefs**” under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in this file to change these preference settings.