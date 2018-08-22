---
title: "Test Case Preferences" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/test_case_preferences.html 
description: 
---
All the preferences under **Test Case** group are for controlling the default behavior that Katalon Studio should perform when test cases are designed.

You can configure these preferences by accessing from main menu: **Window > Katalon Studio Preferences > Katalon > Test Case**

![](../../images/katalon-studio/docs/test_case_preferences/image2017-6-29 16_5_23.png)

Where:

<table class="wrapped relative-table confluenceTable" style="width: 100.0%;"><colgroup><col style="width: 15.3477%;"><col style="width: 84.6523%;"></colgroup><tbody><tr><th class="confluenceTh"><p><strong>Preference Setting</strong></p></th><th class="confluenceTh"><p><strong>Description</strong></p></th></tr><tr><td class="confluenceTd"><p>Test Case Calling</p></td><td class="confluenceTd"><p>This is to specify how Katalon Studio should behave when you are calling another test case in your current test case.</p><p>&nbsp;</p><div class="table-wrap"><table class="wrapped confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Options</strong></p></td><td class="confluenceTd"><p><strong>Description</strong></p></td></tr><tr><td class="confluenceTd"><p>Generate variable with default value</p></td><td class="confluenceTd"><p>Called test case uses default values for its variables.</p></td></tr><tr><td class="confluenceTd"><p>Generate variable with the same name as the exposed variable of the called test case</p></td><td class="confluenceTd"><p>Called test case uses default values which are the same with its variables name.</p></td></tr><tr><td class="confluenceTd"><p>Expose variables automatically after choosing the called test case</p></td><td class="confluenceTd"><p>Called test case uses default values which are the same with its variables name.</p><p>The variables are also added into current test case at 'Variables' tab.</p></td></tr></tbody></table></div><p>&nbsp;</p><p>You might need to refer back to <a href="/display/KD/Variable+Types">Variable Types</a> section for which types of variables are supported in Katalon Studio.</p></td></tr><tr><td class="confluenceTd"><p>Default Failure Handling</p></td><td class="confluenceTd"><p>The default Failure Handling schema that should be used when a new step is added in your test case. Refer to <a href="/display/KD/Failure+Handling">Failure Handling</a> section for more settings to control Failure Handling.</p></td></tr><tr><td class="confluenceTd"><p>Default Keyword</p></td><td class="confluenceTd"><p>The default keyword that should be used when a new step is added in your test case.</p></td></tr></tbody></table>

All the above preferences are saved into the file “**com.kms.katalon.composer.testcase.prefs**” under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in this file to change these preference settings.