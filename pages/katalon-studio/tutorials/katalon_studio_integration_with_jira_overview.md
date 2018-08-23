---
title: "Katalon Studio Integration with Jira Overview"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/katalon_studio_integration_with_jira_overview.html
description: "Katalon Studio allows users to integrate with JIRA so that any failed execution can be submitted as defects for tracking purpose"
---
JIRA is a popular bug tracking system, an integral part of any automation team. Katalon Studio allows users to integrate with JIRA so that any failed execution can be submitted as defects for tracking purpose. This tutorial will show you the basic steps to setup JIRA integration for Katalon Studio.

Configuration
-------------

You need to enable JIRA Integration in order to submit issues to JIRA. This setting is available at Project > Settings > Integration > JIRA.
--------------------------------------------------------------------------------------------------------------------------------------------

![enable JIRA Integration](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Configuration.png)

1\. Select the **Enable integration** option. The following settings will be available for configuration.  
![enable JIRA Integration](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Enable-integration.png)

2\. Specify the information about your JIRA Server and login credentials then click **Connect**.  
![login credentials](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Connect.png)

3\. After successfully authenticating with JIRA, all relevant **JIRA Projects** and **Issue Types** will be retrieved and displayed under **Submit Options**. You can specify the default project and issue type for submission here.  
![Submit Options](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Submit-Options.png)  
The fields for setting include:

<table class="" style="table-layout: fixed;"><tbody class="" style=""><tr class="" style=""><td style="" class=""><b class="" style="">Field</b></td><td style="" class=""><b class="" style="">Description</b></td></tr><tr class="" style=""><td style="" class=""><span style="" class="">Default JIRA Project</span></td><td style="" class=""><span style="" class="">The default JIRA project to submit tickets.</span></td></tr><tr class="" style=""><td style="" class=""><span style="" class="">Default JIRA Issue Type</span></td><td style="" class=""><span style="" class="">The default JIRA Issue type to create when submitting tickets.</span></td></tr><tr class="" style=""><td style="" class=""><span style="" class="">Use Test Case name as Summary for JIRA ticket</span></td><td style="" class=""><span style="" class="">The Katalon Test Case Name will be used as a summary for submitted tickets.</span></td></tr><tr class="" style=""><td style="" class=""><span style="" class="">Attach Screenshot to JIRA ticket</span></td><td style="" class=""><span style="" class="">Any taken screenshot during execution will be included in submitted tickets.</span></td></tr><tr class="" style=""><td style="" class=""><span style="" class="">Attach Log to JIRA ticket</span></td><td style="" class=""><span style="" class="">The execution log will be included in submitted tickets.</span></td></tr></tbody></table>

4\. Click **OK** button to complete the JIRA Integration setup.

Submit issue to JIRA
--------------------

Bug submission options will be available in Test Reports after JIRA Integration setup is successfully configured.

1\. Open a test execution in **Reports** that you want to review for issues. In **Test Cases Table**, a dedicated column for JIRA Integration will be enabled.  
![Test-Cases-Table](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Test-Cases-Table.png)  
2\. Click on the bug icon to display the list of related JIRA issues associated with the selected Test Case. The issues are shown in the following screen.  
![JIRA issues associated](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/JIRA-issues.png)

3\. Select submit option under the **Add** command.  
![Create new Jira ticket](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Add-command.png)  
The bug submission options include:

<table class="" style="table-layout: fixed;"><tbody class="" style=""><tr class="" style=""><td style="" class=""><b class="" style="">Option</b></td><td style="" class=""><b class="" style="">Description</b></td></tr><tr class="" style=""><td style="" class=""><span style="" class="">Create as New</span></td><td style="" class=""><span style="" class="">A new Issue will be submitted to JIRA.</span></td></tr><tr class="" style=""><td style="" class=""><span style="" class="">Create as Sub Issue</span></td><td style="" class=""><span style="" class="">A sub-task for an existing JIRA issue will be created. You will be asked to provide the </span><b class="" style="">ID</b><span style="" class=""> of the existing JIRA issue to create a sub-task within.</span><p class="" style=""></p><p class="" style=""><img class="" src="../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/JIRA-sub-task.png" alt="" width="471" height="252" style=""></p></td></tr><tr class="" style=""><td style="" class=""><span style="" class="">Link to existing Issue</span></td><td style="" class=""><span style="" class="">This option will append execution details to an existing JIRA issue. You will be asked to provide the ID of the existing JIRA issue for this.</span><p class="" style=""></p><p class="" style=""><img class="" src="../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Link-to-existing-Issue.png" alt="the ID of the existing JIRA issue" width="478" height="256" srcset="https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/04/23161230/Link-to-existing-Issue.png 521w, https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/04/23161230/Link-to-existing-Issue-300x161.png 300w" sizes="(max-width: 478px) 100vw, 478px" style=""></p></td></tr></tbody></table>

4\. In case of creating a new JIRA issue (or Sub-task), a **JIRA native submission form** will be displayed. The following is an example form for creating a new JIRA issue:  
![JIRA native submission form](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/JIRA-native-submission-form.png)

5\. Based on your preferences in [JIRA Integration settings](https://docs.katalon.com/display/KD/JIRA+Integration#JIRAIntegration-Configuration), the **Summary**, **Screenshots**, **Logs, Reporter, and Description** of test cases will be populated and attached accordingly. Once done, click on the **Create** button at bottom of the form.

6\. A created **JIRA issue** will have its **ID** recorded in the **Linked JIRA issues** list so that you can quickly navigate there from Katalon Studio. You can also edit linked JIRA issue or remove the linking of the created JIRA issue.![Linked JIRA issues](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Linked-JIRA-issues1.png)

Once clicked on **ID**, you will be taken to **JIRA issues** page accordingly as shown below

![JIRA issues page](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/JIRA-issues-page.png)

Congratulations! You have just successfully configured and submitted your issue to JIRA.

_For further instructions and help, please refer to [Katalon User Guide](https://docs.katalon.com/x/oArR) or [Katalon Forum](https://forum.katalon.com/)_