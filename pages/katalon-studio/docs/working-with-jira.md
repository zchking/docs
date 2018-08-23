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

1.  Prepare [JIRA JQL Script](https://confluence.atlassian.com/jirasoftwarecloud/advanced-searching-764478330.html) from JIRA  
      
    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2 11_39_33.png)  
      
    
2.  Click on JIRA icon on the Menu bar    
    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2 11_23_49.png)  
      
    
3.  Import JIRA dialog will be displayed  
      
    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2 11_25_3.png)  
      
    
4.  Enter prepared JIRA JQL. Then click on 'OK' button, Katalon Studio will sync all the test case from JIRA based on input JQL.  
    _(In case of Test Cases already synced, Katalon Studio will not sync them again)_  
      
    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2 11_41_34.png)  
      
    
5.  A list of JIRA ticket or A number of JIRA ticket to be synced will be displayed after clicking 'OK' button. Here you can specify the location for syncing JIRA test cases. There are two ways:
    
    1.  Users can specify manually
        
    2.  Katalon Studio will automatically generate default location
        
    
      
    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2 11_44_41.png)
    
6.  Once the syncing process finished, you can go to Tests Explorer of Katalon Studio to verify that the **JIRA test cases** are downloaded as expected.
    
    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2 11_57_9.png)
    

Test Results
------------

Katalon Studio test results will be synced to associated JIRA Issues automatically. You can review the **status** and **attachments** of Katalon Studio test cases right inside JIRA.

![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2 17_56_40.png)

Submit an issue to JIRA
-----------------------

Submit options will be available in Test Reports after JIRA Integration setup is done.

1.  Open a test execution in **Reports** that you want to review for issues. In **Test Cases Table**, a dedicated column for JIRA Integration will be enabled.  
    ![](../../images/katalon-studio/docs/working-with-jira/image2017-2-22 10_0_4.png)  
      
    
2.  Click on the bug icon to display the list of related JIRA issues for the selected Test Case.  
    ![](../../images/katalon-studio/docs/working-with-jira/image2016-11-3 14_15_20.png)  
      
    
3.  Select submit option under the **Add** command.  
    ![](../../images/katalon-studio/docs/working-with-jira/image2016-11-3 14_16_50.png)
    
    Where:
    
    <table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>Create as New</td><td>A new Issue will be submitted to JIRA.</td></tr><tr><td>Create as Sub Issue</td><td><div class="content-wrapper"><p>A sub-task for an existing JIRA Issue will be created. You will be asked to provide the <strong>ID</strong> of an existing JIRA Issue to create sub-task within.</p><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/working-with-jira/image2017-8-2 16_12_21.png" data-image-src="/download/attachments/5115954/image2017-8-2%2016%3A12%3A21.png?version=1&amp;modificationDate=1501665141000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5116019" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-8-2 16:12:21.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="5115954" data-linked-resource-container-version="1"></span></p></div></td></tr><tr><td>Link to existing Issue</td><td><div class="content-wrapper"><p><span>This option will append execution details to an existing JIRA Issue. You will be asked to provide the ID of existing JIRA Issue for this.</span></p><p><span><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/working-with-jira/image2016-11-3 14_28_29.png" data-image-src="/download/attachments/5115954/image2016-11-3%2014%3A28%3A29.png?version=1&amp;modificationDate=1501664515000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5116014" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2016-11-3 14:28:29.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="5115954" data-linked-resource-container-version="1"></span></span></p></div></td></tr></tbody></table>
    
4.  In case of creating new JIRA Issue (or Sub-task), a **JIRA native submission form** will be displayed. Following is an example of creating new JIRA Issue:  
    ![](../../images/katalon-studio/docs/working-with-jira/image2016-11-3 14_32_53.png)  
      
    
5.  Based on your preferences in [JIRA Integration settings](#WorkingwithJIRA-Configuration), the **Summary**, **Screenshots,** and **Logs** will be populated and attached accordingly. Once done, click on the **Create** button at bottom of the form.  
      
    
6.  Created **JIRA Issue** will have its **ID** recorded in the **Linked JIRA issues** list so that you can quickly navigate there from Katalon Studio.  
    ![](../../images/katalon-studio/docs/working-with-jira/image2016-11-3 14_41_13.png)