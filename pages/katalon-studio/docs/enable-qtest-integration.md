---
title: "Enable qTest Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/enable-qtest-integration.html 
description: 
---
Enable qTest Integration
------------------------

1.  Open qTest integration settings at **Project > Settings > Integration > qTest.**  
      
      
    
2.  Check the **Enable integration** checkbox. Next, you can either manually setup the qTest integration, or let the wizard do it for you.
    

Manual Setup
------------

1.  **qTest Version**: On Authentication form, select the version of your qTest. (_The **7 or higher** option is recommended because APIs of earlier versions might be deprecated soon_).  
      
      
    
2.  **Generate Token**: Click on **Generate** button to create the token to be used during integration session.   
      
    Fill in valid information on the **Generate new token** dialog. For example:  
      
    Once Katalon Studio successfully connects to your qTest using provided information, the token will be generated.  
      
    
3.  Select other submitting options as following:
    
      
    Where:
    
    | Field | Description |
    | --- | --- |
    | Automatically submit test run result | Results of executed test cases will be uploaded automatically to qTest. |
    | Submit test run result to latest approved version | Test run result will be submitted to latest **approved** version of mapped qTest test case. |
    | Report format | Additional attachments for reports to be upload to qTest. |
    
      
    
4.  **Test Case Mapping**: Select the **Test Case Repositories** setting. You can create mappings between **qTest modules** and **Katalon Test Case folders** here.  
      
    Click on the **Add** command. The **Create Test Case Repository** dialog will be displayed. Click **OK** when you are done with the settings.  
      
      
    
5.  **Test Suite Mapping**: Select the **Test Suite Repositories** setting. You can create mappings between **qTest projects** and **Katalon Test Suite folders** here.  
      
    Click on the **Add** command. The **Create Test Suite Repository** dialog will be displayed. Click **OK** when you are done with the settings.  
      
      
    
    You should select test suites that contain those test cases defined in **Test Case Repositories** settings
    

Wizard Setup
------------

Click on the **Quick Setup...** link to open the Wizard.

1.  Step1: Enter authentication information and select your **qTest version**. Once your qTest account is successfully connected, proceed to step 2.  
      
      
    
2.  Step 2: Select your **qTest project**.  
      
      
    
3.  Step 3.1: Select **qTest module**. This is the place to store uploaded Katalon test cases.  
      
      
    
4.  Step 3.2: Select **Katalon Test Case folder** to be uploaded to the **qTest module** of step 3.  
      
      
    
5.  Step 3.3: Select **Katalon Test Suite folder** to be integrated with qTest.  
      
      
    
6.  Step 4: Optional settings when uploading to qTest. Please refer to Manual Setup for more details of each option.  
      
      
    
7.  Step 5: Complete all previous steps to finish qTest setup wizard.