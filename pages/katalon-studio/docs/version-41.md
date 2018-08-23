---
title: "Version 4.1" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-41.html 
description: 
---
New Features
------------

### Kobiton Integration

Katalon Studio now provides Kobiton users with option to leverage their devices in Kobiton Favorited List for mobile execution. Kobiton is a clould based service for mobile testing. You can register new account for free [here](https://portal-test.kobiton.com/login).

![](../../images/katalon-studio/docs/version-41/image2016-10-3 15_48_30.png)

### New Version Notification

Users will be informed about any **new version** when opening Katalon Studio. You can change this notification settings in **Settings -> Preferences -> Katalon.**

![](../../images/katalon-studio/docs/version-41/image2016-10-3 15_39_56.png)

Improvements
------------

### General

1.  Replace test artifacts and toolbar icons.
    
    ![](../../images/katalon-studio/docs/version-41/image2016-10-3 15_55_41.png)  
      
    
2.  Update Dialog icons.
    
    <table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Infomation</th><th class="" style=""></th></tr></thead><tbody class="" style=""><tr class="" style=""><th class="" style="">Error</th><td class="" style=""><div class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/version-41/image2016-10-3 15_59_52.png" data-image-src="/download/attachments/2851102/image2016-10-3%2015%3A59%3A52.png?version=1&amp;modificationDate=1475485193000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="2851315" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2016-10-3 15:59:52.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="2851102" data-linked-resource-container-version="1" style=""></span></div></td></tr><tr class="" style=""><th style="" class="">Warning</th><td class="" style=""><div class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/version-41/image2016-10-3 16_0_53.png" data-image-src="/download/attachments/2851102/image2016-10-3%2016%3A0%3A53.png?version=1&amp;modificationDate=1475485253000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="2851318" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2016-10-3 16:0:53.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="2851102" data-linked-resource-container-version="1" style=""></span></div></td></tr></tbody></table>
    
3.  Rename 'Mobile Object Inspector' into 'Mobile Object Spy' Dialog  
    ![](../../images/katalon-studio/docs/version-41/image2016-10-3 11_35_10.png)  
      
    
4.  Auto wraps text in ‘Message’ field of Log Viewer under Tree View  
    ![](../../images/katalon-studio/docs/version-41/image2016-10-3 14_13_26.png)  
      
    
5.  Automatically detect and install SafariDriver on macOS if it's not installed

### Console mode

1.  Allow user to input project folder path into -projectPath argument
2.  Add –email and –password in [Console Mode Execution](/display/KD/Console+Mode+Execution) for Katalon Studio activation
3.  'Generate Command Lines for Console Mode' will create appropriated command in macOS now.

### Test Case

1.  Add hotkey for context menu in test case's editor

*   Delete: Del
*   Copy: Ctrl-C
*   Cut: Ctrl-X
*   Paste: Ctrl-V
*   Disable: Ctrl-D
*   Enable: Ctrl-E  
      
    ![](../../images/katalon-studio/docs/version-41/image2016-10-3 12_40_8.png)

2\. Change default scripting font to be '**Courier New**' for both Windows and macOS

![](../../images/katalon-studio/docs/version-41/image2016-10-2 16_45_23.png)

### Test Suite Collection

1.  Add context menu and hotkey for test suite collection

*   Add: Ctrl + N
*   Delete: Del
*   Move up: Ctrl + Up Arrow
*   Move down: Ctrl + Down Arrow
*   Execute: Ctrl + E  
    ![](../../images/katalon-studio/docs/version-41/image2016-10-3 12_40_34.png)  
      
    2\. Display warning message when executing an empty Test Suite Collection  
      
    ![](../../images/katalon-studio/docs/version-41/image2016-10-3 17_8_45.png)  
      
    3\. Support option for parallel execution in test suite collection. Default option for execution settings will be 'Sequential' where Test Suites will be run in order.  
      
    ![](../../images/katalon-studio/docs/version-41/image2016-10-3 14_14_23.png)

### Record/Spy

1.  Automatically select all captured objects in ‘Add Element to Object Repository’ dialog  
      
    ![](../../images/katalon-studio/docs/version-41/image2016-10-3 13_13_38.png)  
      
    
2.  Display details regarding XPath of focused elements when recording Test Case  
      
    ![](../../images/katalon-studio/docs/version-41/image2016-10-3 12_42_55.png)

Customer Support
----------------

1.  \[macOS\] Texts are cut off in menu tree in Preferences and Project Settings
2.  \[macOS\] Fix blurry icons and intro images on Retina display
3.  Fix NullPointerException in qTest integration