---
title: "Working with JIRA" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/working-with-jira.html 
description: 
---
JIRA icon will be available in Menu Bar after JIRA Integration setup is done.

Integrate Test Case
-------------------

Follow these steps to **Integrate Test** **Case** from JIRA to Katalon Studio:

1.  Prepare JIRA JQL Script from JIRA  
      
      
      
    
2.  Click on JIRA icon on the Menu bar    
      
      
    
3.  Import JIRA dialog will be displayed  
      
      
      
    
4.  Enter prepared JIRA JQL. Then click on 'OK' button, Katalon Studio will sync all the test case from JIRA based on input JQL.  
    _(In case of Test Cases already synced, Katalon Studio will not sync them again)_  
      
      
      
    
5.  A list of JIRA ticket or A number of JIRA ticket to be synced will be displayed after clicking 'OK' button. Here you can specify the location for syncing JIRA test cases. There are two ways:
    
    1.  Users can specify manually
        
    2.  Katalon Studio will automatically generate default location
        
    
      
    
6.  Once the syncing process finished, you can go to Tests Explorer of Katalon Studio to verify that the **JIRA test cases** are downloaded as expected.
    

Test Results
------------

Katalon Studio test results will be synced to associated JIRA Issues automatically. You can review the **status** and **attachments** of Katalon Studio test cases right inside JIRA.

Submit an issue to JIRA
-----------------------

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
      
      
    
5.  Based on your preferences in JIRA Integration settings, the **Summary**, **Screenshots,** and **Logs** will be populated and attached accordingly. Once done, click on the **Create** button at bottom of the form.  
      
    
6.  Created **JIRA Issue** will have its **ID** recorded in the **Linked JIRA issues** list so that you can quickly navigate there from Katalon Studio.