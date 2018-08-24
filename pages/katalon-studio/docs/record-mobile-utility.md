---
title: "Record Mobile Utility" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/record-mobile-utility.html 
redirect_from: "/display/KD/Record+Mobile+Utility" 
description: 
---
Follow these basic steps to get familiar with the Record & Playback features for Mobile Tests:

1.  Click on the **New Test Case** button on the main toolbar. Provide a name for your test case and click **OK**. An empty test case will be created.   
    ![](../../images/katalon-studio/docs/record-mobile-utility/image2017-2-23 11_47_35.png)  
      
    
2.  Click on **Record Mobile **from the main toolbar.  
    ![](../../images/katalon-studio/docs/record-mobile-utility/image2017-5-21 13_20_26.png)  
      
    
3.  The **Mobile Recorder** dialog is displayed. Specify the information at **Configuration** section:  
    ![](../../images/katalon-studio/docs/record-mobile-utility/image2017-8-21 14_0_0.png)  
    Where:
    
    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><span>Device Name</span></td><td><span>The smartphone to capture objects from. All of your connected devices should be displayed in this list.</span></td></tr><tr><td><span>Application Type</span></td><td><span>Katalon Studio supports native (local) mobile devices and cloud-based Kobiton devices.<br></span></td></tr><tr><td><span>Application File</span></td><td><span>The absolute path to your mobile application file (<strong>.apk</strong>&nbsp;file for Android or&nbsp;<strong>.ipa</strong>&nbsp;file for iOS).</span></td></tr></tbody></table>
    
    Click **Start** when you're done with the settings.
    
4.  The specified mobile application will be deployed and opened on the real device. 
    
      
    
5.  The **Device View** dialog is displayed to show the current screenshot of your real device.  
    All the mobile objects from that screenshot are analyzed and organized in a **hierarchical view** which could be found at **All Objects** section of the **Mobile Recorder**dialog.  
    Click on any object from the **hierarchical view** and it is highlighted in **Device View** accordingly.  
    ![](../../images/katalon-studio/docs/record-mobile-utility/image2017-8-21 17_9_54.png)  
      
    
6.  After selecting the element, you can specify the actions to be executed at **Possible Actions** section.   
    ![](../../images/katalon-studio/docs/record-mobile-utility/image2017-5-30 14_34_41.png)
    
7.  All of the define actions above will be recorded by Katalon Studio as displayed at **Recorded Actions** section.  
    ![](../../images/katalon-studio/docs/record-mobile-utility/image2017-5-21 13_51_21.png)  
    The recorded steps and related data are shown below for the actions of going to Google and searching for two keywords on the browser.  
      
    
8.  You can **Stop** and **Start** another application if needed. When you are done with recording, click **OK** to save recorded actions into Katalon Studio.  
    ![](../../images/katalon-studio/docs/record-mobile-utility/image2017-8-24 15_2_49.png)  
      
    
9.  You will be prompted to save captured objects into Object Repository of Katalon Studio. Click **OK** to continue.  
    ![](../../images/katalon-studio/docs/record-mobile-utility/image2017-5-21 13_54_21.png)  
      
    
10.  Recorded objects and actions are saved in the test case as shown below.  
    ![](../../images/katalon-studio/docs/record-mobile-utility/image2017-6-30 19_40_25.png)  
      
    
11.  Select the mobile platform from the **Run** button on the main **Toolbar** to execute the script.    
    ![](../../images/katalon-studio/docs/record-mobile-utility/image2017-5-21 13_57_54.png)  
      
    
12.  Specify the device for execution from the drop-down list and click **OK**.  
    ![](../../images/katalon-studio/docs/record-mobile-utility/image2017-5-21 13_59_45.png)  
      
    
13.  Katalon Studio will execute the mobile test with recorded steps accordingly.  
      
      
    

> The steps above create and run a simple test case. For advanced features such as branching, looping or validation, you can refer to following articles: 
> 
> *   [Common Validation](https://www.katalon.com/tutorials/common-validation/) 
> *   [Control Statements](/display/KD/Control+Statements)