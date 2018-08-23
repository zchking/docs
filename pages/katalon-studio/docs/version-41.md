---
title: "Version 4.1" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-41.html 
description: 
---
New Features
------------

### Kobiton Integration

Katalon Studio now provides Kobiton users with option to leverage their devices in Kobiton Favorited List for mobile execution. Kobiton is a clould based service for mobile testing. You can register new account for free here.

### New Version Notification

Users will be informed about any **new version** when opening Katalon Studio. You can change this notification settings in **Settings -> Preferences -> Katalon.**

Improvements
------------

### General

1.  Replace test artifacts and toolbar icons.
    
      
      
    
2.  Update Dialog icons.
    
    <table><tbody><tr><th>Infomation</th><td><div><span><img></span></div></td></tr><tr><th>Error</th><td><div><span><img></span></div></td></tr><tr><th>Warning</th><td><div><span><img></span></div></td></tr></tbody></table>
    
3.  Rename 'Mobile Object Inspector' into 'Mobile Object Spy' Dialog  
      
      
    
4.  Auto wraps text in ‘Message’ field of Log Viewer under Tree View  
      
      
    
5.  Automatically detect and install SafariDriver on macOS if it's not installed

### Console mode

1.  Allow user to input project folder path into -projectPath argument
2.  Add –email and –password in Console Mode Execution for Katalon Studio activation
3.  'Generate Command Lines for Console Mode' will create appropriated command in macOS now.

### Test Case

1.  Add hotkey for context menu in test case's editor

*   Delete: Del
*   Copy: Ctrl-C
*   Cut: Ctrl-X
*   Paste: Ctrl-V
*   Disable: Ctrl-D
*   Enable: Ctrl-E  
      
    

2\. Change default scripting font to be '**Courier New**' for both Windows and macOS

### Test Suite Collection

1.  Add context menu and hotkey for test suite collection

*   Add: Ctrl + N
*   Delete: Del
*   Move up: Ctrl + Up Arrow
*   Move down: Ctrl + Down Arrow
*   Execute: Ctrl + E  
      
      
    2\. Display warning message when executing an empty Test Suite Collection  
      
      
      
    3\. Support option for parallel execution in test suite collection. Default option for execution settings will be 'Sequential' where Test Suites will be run in order.  
      
    

### Record/Spy

1.  Automatically select all captured objects in ‘Add Element to Object Repository’ dialog  
      
      
      
    
2.  Display details regarding XPath of focused elements when recording Test Case  
      
    

Customer Support
----------------

1.  \[macOS\] Texts are cut off in menu tree in Preferences and Project Settings
2.  \[macOS\] Fix blurry icons and intro images on Retina display
3.  Fix NullPointerException in qTest integration