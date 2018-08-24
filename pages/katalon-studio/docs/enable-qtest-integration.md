---
title: "Enable qTest Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/enable-qtest-integration.html 
redirect_from: "/display/KD/Enable+qTest+Integration" 
description: 
---
Enable qTest Integration
------------------------

1.  Open qTest integration settings at **Project > Settings > Integration > qTest.**  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2017-8-1 17_0_21.png)  
      
    
2.  Check the **Enable integration** checkbox. Next, you can either manually setup the qTest integration, or let the wizard do it for you.
    

Manual Setup
------------

1.  **qTest Version**: On Authentication form, select the version of your qTest. (_The **7 or higher** option is recommended because APIs of earlier versions might be deprecated soon_).  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2016-11-15 14_49_1.png)  
      
    
2.  **Generate Token**: Click on **Generate** button to create the token to be used during integration session.   
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2016-11-15 14_50_18.png)  
    Fill in valid information on the **Generate new token** dialog. For example:  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2016-11-15 14_48_8.png)  
    Once Katalon Studio successfully connects to your qTest using provided information, the token will be generated.  
      
    
3.  Select other submitting options as following:
    
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2017-8-1 17_3_41.png)  
    Where:
    
    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Automatically submit test run result</td><td><span>Results of executed test cases will be uploaded automatically to qTest.</span></td></tr><tr><td>Submit test run result to latest approved version</td><td><span>Test run result will be submitted to latest&nbsp;</span><strong>approved</strong><span>&nbsp;version of mapped qTest test case.</span></td></tr><tr><td>Report format</td><td><span>Additional attachments for reports to be upload to qTest.</span></td></tr></tbody></table>
    
      
    
4.  **Test Case Mapping**: Select the **Test Case Repositories** setting. You can create mappings between **qTest modules** and **Katalon Test Case folders** here.  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2017-6-29 16_47_10.png)  
    Click on the **Add** command. The **Create Test Case Repository** dialog will be displayed. Click **OK** when you are done with the settings.  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2016-11-15 15_25_8.png)  
      
    
5.  **Test Suite Mapping**: Select the **Test Suite Repositories** setting. You can create mappings between **qTest projects** and **Katalon Test Suite folders** here.  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2017-6-29 16_48_33.png)  
    Click on the **Add** command. The **Create Test Suite Repository** dialog will be displayed. Click **OK** when you are done with the settings.  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2016-11-15 15_37_55.png)  
      
    
    > You should select test suites that contain those test cases defined in **Test Case Repositories** settings
    

Wizard Setup
------------

Click on the **Quick Setup...** link to open the Wizard.

![](../../images/katalon-studio/docs/enable-qtest-integration/image2017-6-29 16_49_31.png)

1.  Step1: Enter authentication information and select your **qTest version**. Once your qTest account is successfully connected, proceed to step 2.  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2017-8-1 18_26_14.png)  
      
    
2.  Step 2: Select your **qTest project**.  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2017-8-1 18_26_32.png)  
      
    
3.  Step 3.1: Select **qTest module**. This is the place to store uploaded Katalon test cases.  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2017-8-4 10_1_24.png)  
      
    
4.  Step 3.2: Select **Katalon Test Case folder** to be uploaded to the **qTest module** of step 3.  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2017-8-4 10_2_46.png)  
      
    
5.  Step 3.3: Select **Katalon Test Suite folder** to be integrated with qTest.  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2017-8-4 10_2_19.png)  
      
    
6.  Step 4: Optional settings when uploading to qTest. Please refer to [Manual Setup](#EnableqTestIntegration-ManualSetup) for more details of each option.  
    ![](../../images/katalon-studio/docs/enable-qtest-integration/image2017-8-1 18_28_21.png)  
      
    
7.  Step 5: Complete all previous steps to finish qTest setup wizard.