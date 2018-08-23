---
title: "Video Capturing" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/video-capturing.html 
description: 
---
Compatibilty

*   K-Lite Codec is recommended to play Katalon Studio test execution video
*   Support Test Suite level execution
*   Support all browsers **except** Remote | Headless | Kobiton | Custom

*   Recording **parallel execution is NOT** **supported** yet
    

Debugging can be time consuming and challenging tasks to many automation testers. Katalon Studio helps solve this problem by supporting users the ability to capture test execution via video format. Users can simply enable video capturing feature in Project Settings.

Follow the steps below to see how work with Katalon Studio video capturing feature

1.  After creating a test suite in Katalon Studio, select **Project > Settings** to open _Project Settings dialog_ box. Navigate to **Report** section  
      
      
    
2.  Check option "**Enable Video Recorder during execution**". By **default**, Katalon Studio will only capture **Failed** test cases. However, users can select options to capture: only **Passed** test cases, only **Failed** test cases or capture both.  
      
      
    
    Video setting can be specified depend on users preferences. Katalon Studio recommends AVI (.avi) format and Low quality to save disk space. The higher the video qualiy the bigger file size will be.
    
    |   | Options |
    | --- | --- |
    | **Video format** | AVI (.avi)  
    MOV (.mov) |
    | **Video quality** | Low  
    Medium  
    High |
    
      
      
    
3.  After test suite is executed. In **Tests Explorer**, navigate to **Reports** and select the most recent report to view test suite execution results. The list of test cases will be displayed in test case table with its video attached accordingly. Click on the play icon in 'Video' column to play the video. Test steps descriptions are embeded as subtitle. For example, please take a look at below screenshot  
    

By watching how automation test was executed, testing team able to identify exactly where the test had failed. Thus, time and resources are managed more efficiently and effectively.