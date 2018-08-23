---
title: "Recording WebUI Test" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/recording-webui-test.html 
description: 
---
Follow these basic steps to get familiar with the Record & Playback features for WebUI Test:  

1.  Click on the **New Test Case** button on the main toolbar. Provide a name for your test case and click **OK**. An empty test case will be created.   
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-2-23 11_47_35.png)  
      
    
2.  Click on **Record **from the main toolbar.  
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-5-21 13_21_16.png)  
      
    
3.  The **Record** dialog is displayed.  
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-6-30 19_33_17.png)  
      
    
4.  Click on the **Record** button to start recording test case.   
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-1-9 17_8_37.png)  
    Where:
    
    Type
    
    Description
    
    New Browsers
    
    Launch a new browser and start recording actions from that browser.
    
    Active Browsers
    
    Focus on **the current active Chrome browser** and start recording actions from it. You will be asked for installation of Katalon Utility:
    
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-2-23 11_54_29.png)
    
    Refer to [Katalon Addon for Chrome](/pages/viewpage.action?pageId=5123595) for more details.
    
5.  Execute all your test steps on the browser. All of your actions performed on the browser will be recorded by Katalon Studio.   
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-6-28 16_14_6.png)  
    For the scope of this tutorials, let’s access [demoaut.katalon.com](http://demoaut.katalon.com/), click on the Make Appointment button, then click on the Login button.  
      
    
6.  You can **Stop** or **Pause** recording if needed. When you are done with recording, click **OK** to save recorded actions into Katalon Studio.  
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-6-28 16_18_28.png)  
      
    
7.  You will be prompted to save captured objects into Object Repository of Katalon Studio. Click **OK** to continue.  
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-6-28 16_20_9.png)  
      
    
8.  Recorded objects and actions are saved in the test case as shown below.  
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-8-21 13_39_4.png)  
      
    
9.  Click on the **Run** button on the main **Toolbar** to execute the script. You can specify the target browser to run by selecting it from the drop-down list.   
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-2-23 13_9_28.png)  
      
    

The steps above create and run a simple test case. For advanced features such as branching, looping or validation, you can refer to following articles: 

*   [Common Validation](https://www.katalon.com/tutorials/common-validation/) 
*   [Control Statements](/pages/viewpage.action?pageId=5124781)