---
title: "Record Mobile Utility" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/record-mobile-utility.html 
description: 
---
Follow these basic steps to get familiar with the Record & Playback features for Mobile Tests:

1.  Click on the **New Test Case** button on the main toolbar. Provide a name for your test case and click **OK**. An empty test case will be created.   
      
      
    
2.  Click on **Record Mobile **from the main toolbar.  
      
      
    
3.  The **Mobile Recorder** dialog is displayed. Specify the information at **Configuration** section:  
      
    Where:
    
    | Field | Description |
    | --- | --- |
    | Device Name | The smartphone to capture objects from. All of your connected devices should be displayed in this list. |
    | Application Type | Katalon Studio supports native (local) mobile devices and cloud-based Kobiton devices.  
     |
    | Application File | The absolute path to your mobile application file (**.apk** file for Android or **.ipa** file for iOS). |
    
    Click **Start** when you're done with the settings.
    
4.  The specified mobile application will be deployed and opened on the real device. 
    
      
    
5.  The **Device View** dialog is displayed to show the current screenshot of your real device.  
    All the mobile objects from that screenshot are analyzed and organized in a **hierarchical view** which could be found at **All Objects** section of the **Mobile Recorder**dialog.  
    Click on any object from the **hierarchical view** and it is highlighted in **Device View** accordingly.  
      
      
    
6.  After selecting the element, you can specify the actions to be executed at **Possible Actions** section.   
    
7.  All of the define actions above will be recorded by Katalon Studio as displayed at **Recorded Actions** section.  
      
    The recorded steps and related data are shown below for the actions of going to Google and searching for two keywords on the browser.  
      
    
8.  You can **Stop** and **Start** another application if needed. When you are done with recording, click **OK** to save recorded actions into Katalon Studio.  
      
      
    
9.  You will be prompted to save captured objects into Object Repository of Katalon Studio. Click **OK** to continue.  
      
      
    
10.  Recorded objects and actions are saved in the test case as shown below.  
      
      
    
11.  Select the mobile platform from the **Run** button on the main **Toolbar** to execute the script.    
      
      
    
12.  Specify the device for execution from the drop-down list and click **OK**.  
      
      
    
13.  Katalon Studio will execute the mobile test with recorded steps accordingly.  
      
      
    

The steps above create and run a simple test case. For advanced features such as branching, looping or validation, you can refer to following articles: 

*   Common Validation 
*   Control Statements