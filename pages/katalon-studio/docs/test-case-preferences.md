---
title: "Test Case Preferences" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/test-case-preferences.html 
description: 
---
All the preferences under **Test Case** group are for controlling the default behavior that Katalon Studio should perform when test cases are designed.

You can configure these preferences by accessing from main menu: **Window > Katalon Studio Preferences > Katalon > Test Case**

![](../../images/katalon-studio/docs/test-case-preferences/image2017-6-29 16_5_23.png)

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

| Options | Description |
| --- | --- |
| 
Generate variable with default value

 | 

Called test case uses default values for its variables.

 |
| 

Generate variable with the same name as the exposed variable of the called test case

 | 

Called test case uses default values which are the same with its variables name.

 |
| 

Expose variables automatically after choosing the called test case

 | 

Called test case uses default values which are the same with its variables name.

The variables are also added into current test case at 'Variables' tab.

 |

You might need to refer back to [Variable Types](/display/KD/Variable+Types) section for which types of variables are supported in Katalon Studio.

 |
| 

Default Failure Handling

 | 

The default Failure Handling schema that should be used when a new step is added in your test case. Refer to [Failure Handling](/display/KD/Failure+Handling) section for more settings to control Failure Handling.

 |
| 

Default Keyword

 | 

The default keyword that should be used when a new step is added in your test case.

 |

All the above preferences are saved into the file “**com.kms.katalon.composer.testcase.prefs**” under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in this file to change these preference settings.