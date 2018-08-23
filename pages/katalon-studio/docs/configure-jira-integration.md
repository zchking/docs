---
title: "Configure JIRA Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/configure-jira-integration.html 
description: 
---
Configuration
-------------

You need to enable JIRA Integration in order to submit issues to JIRA. This setting is available at **Project > Settings > Integration > JIRA**.

![](../../images/katalon-studio/docs/configure-jira-integration/image2018-3-1 17_40_26.png)

1.  Select **Enable integration** option. The settings will be available for configuration.  
      
    
2.  Specify information regarding your JIRA Server and login credential then click **Connect** button.  
      
    
3.  After successfully authenticating with JIRA, all relevant **JIRA Projects** and **Issue Types** will be retrieved and displayed under **Submit Options**. You can specify the default project and issue type for submission here.   
    ![](../../images/katalon-studio/docs/configure-jira-integration/image2016-11-3 13_53_20.png)  
    Where:
    
    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Default JIRA Project</td><td>The default JIRA project to submit ticket.</td></tr><tr><td>Default JIRA Issue Type</td><td>The default JIRA Issue type to create when submitting ticket.</td></tr><tr><td>Use Test Case name as Summary for JIRA ticket</td><td>The Katalon Test Case Name will be used as summary for submitted ticket.</td></tr><tr><td>Attach Screenshot to JIRA ticket</td><td>Any taken screenshot during execution will be included in submitted ticket.</td></tr><tr><td>Attach Log to JIRA ticket</td><td>The execution log will be included in submitted ticket.</td></tr></tbody></table>
    
4.  Click **OK** button to complete the JIRA Integration setup.
    

Submit issue to JIRA
--------------------

Submit options will be available in Test Reports after JIRA Integration setup is done.

1.  Open a test execution in **Reports** that you want to review for issues. In **Test Cases Table**, a dedicated column for JIRA Integration will be enabled.  
    ![](../../images/katalon-studio/docs/configure-jira-integration/image2017-2-22 10_0_4.png)  
      
    
2.  Click on the bug icon to display the list of related JIRA issues for the selected Test Case.  
    ![](../../images/katalon-studio/docs/configure-jira-integration/image2016-11-3 14_15_20.png)  
      
    
3.  Select submit option under the **Add** command.  
    ![](../../images/katalon-studio/docs/configure-jira-integration/image2016-11-3 14_16_50.png)
    
    Where:
    
    <table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>Create as New</td><td>A new Issue will be submitted to JIRA.</td></tr><tr><td>Create as Sub Issue</td><td><div class="content-wrapper"><p>A sub-task for an existing JIRA Issue will be created. You will be asked to provide the <strong>ID</strong> of an existing JIRA Issue to create sub-task within.</p><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/configure-jira-integration/image2016-11-3 14_25_54.png" data-image-src="/download/attachments/3178990/image2016-11-3%2014%3A25%3A54.png?version=1&amp;modificationDate=1478157955000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="3179422" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2016-11-3 14:25:54.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="3178990" data-linked-resource-container-version="2"></span></p></div></td></tr><tr><td>Link to existing Issue</td><td><div class="content-wrapper"><p><span>This option will append execution details to an existing JIRA Issue. You will be asked to provide the ID of existing JIRA Issue for this.</span></p><p><span><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/configure-jira-integration/image2016-11-3 14_28_29.png" data-image-src="/download/attachments/3178990/image2016-11-3%2014%3A28%3A29.png?version=1&amp;modificationDate=1478158109000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="3179423" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2016-11-3 14:28:29.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="3178990" data-linked-resource-container-version="2"></span></span></p></div></td></tr></tbody></table>
    
4.  In case of creating new JIRA Issue (or Sub-task), a **JIRA native submission form** will be displayed. Following is an example of creating new JIRA Issue:  
    ![](../../images/katalon-studio/docs/configure-jira-integration/image2016-11-3 14_32_53.png)  
      
    
5.  Based on your preferences in [JIRA Integration settings](#ConfigureJIRAIntegration-Configuration), the **Summary**, **Screenshots** and **Logs** will be populated and attached accordingly. Once done, click on the **Create** button at bottom of the form.  
      
    
6.  Created **JIRA Issue** will have its **ID** recorded in the **Linked JIRA issues** list so that you can quickly navigate there from Katalon Studio.  
    ![](../../images/katalon-studio/docs/configure-jira-integration/image2016-11-3 14_41_13.png)