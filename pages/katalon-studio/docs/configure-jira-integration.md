---
title: "Configure JIRA Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/configure-jira-integration.html 
description: 
---
Configuration
-------------

You need to enable JIRA Integration in order to submit issues to JIRA. This setting is available at **Project > Settings > Integration > JIRA**.

1.  Select **Enable integration** option. The settings will be available for configuration.  
      
    
2.  Specify information regarding your JIRA Server and login credential then click **Connect** button.  
      
    
3.  After successfully authenticating with JIRA, all relevant **JIRA Projects** and **Issue Types** will be retrieved and displayed under **Submit Options**. You can specify the default project and issue type for submission here.   
      
    Where:
    
    | Field | Description |
    | --- | --- |
    | Default JIRA Project | The default JIRA project to submit ticket. |
    | Default JIRA Issue Type | The default JIRA Issue type to create when submitting ticket. |
    | Use Test Case name as Summary for JIRA ticket | The Katalon Test Case Name will be used as summary for submitted ticket. |
    | Attach Screenshot to JIRA ticket | Any taken screenshot during execution will be included in submitted ticket. |
    | Attach Log to JIRA ticket | The execution log will be included in submitted ticket. |
    
4.  Click **OK** button to complete the JIRA Integration setup.
    

Submit issue to JIRA
--------------------

Submit options will be available in Test Reports after JIRA Integration setup is done.

1.  Open a test execution in **Reports** that you want to review for issues. In **Test Cases Table**, a dedicated column for JIRA Integration will be enabled.  
      
      
    
2.  Click on the bug icon to display the list of related JIRA issues for the selected Test Case.  
      
      
    
3.  Select submit option under the **Add** command.  
    
    Where:
    
    | Option | Description |
    | --- | --- |
    | Create as New | A new Issue will be submitted to JIRA. |
    | Create as Sub Issue | 
    A sub-task for an existing JIRA Issue will be created. You will be asked to provide the **ID** of an existing JIRA Issue to create sub-task within.
    
    
    
     |
    | Link to existing Issue | 
    
    This option will append execution details to an existing JIRA Issue. You will be asked to provide the ID of existing JIRA Issue for this.
    
    
    
     |
    
4.  In case of creating new JIRA Issue (or Sub-task), a **JIRA native submission form** will be displayed. Following is an example of creating new JIRA Issue:  
      
      
    
5.  Based on your preferences in JIRA Integration settings, the **Summary**, **Screenshots** and **Logs** will be populated and attached accordingly. Once done, click on the **Create** button at bottom of the form.  
      
    
6.  Created **JIRA Issue** will have its **ID** recorded in the **Linked JIRA issues** list so that you can quickly navigate there from Katalon Studio.