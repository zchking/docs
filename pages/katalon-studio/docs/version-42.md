---
title: "Version 4.2" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-42.html 
description: 
---
New Features
------------

### JIRA Integration

Bugs can be submitted directly fromKatalonStudio failed test results using embedded native JIRA interface. Teststeps,captured screenshots and logs will be attached automatically to the JIRA ticket. Failed execution results can also be created as sub-task or associated with an existing JIRA ID. Ticket status' synced back toKatalonStudio providing necessary information for validation.  

### Undo Actions

Support Undo/Redo actions (within 20 steps) for following objects:

1.  Global Variables
2.  Test Case
3.  Test Data
4.  Checkpoint

  
  

### Headless execution

This new option is available for web automation execution without launching the browser interface which increases execution performance and time.

The following keywords are not supported with headless execution

<table><tbody><tr><td><p><strong>Keyword</strong></p></td><td><p><strong>Known Issues</strong></p></td><td><p><strong>Impact</strong></p></td></tr><tr><td><p><a>Accept Alert</a></p></td><td><p>Alert is not recognizable in headless execution</p><p>(<a>https://github.com/MachinePublishers/jBrowserDriver/issues/147</a>)</p></td><td><p>Alert keywords can’t be used for verification</p></td></tr><tr><td><p><a>Dismiss Alert</a></p></td></tr><tr><td><a>Get Alert Text</a></td></tr><tr><td><p><a>Set Alert Text</a></p></td></tr><tr><td><a>Verify Alert Not Present</a></td></tr><tr><td><p><a>Verify Alert Present</a></p></td></tr><tr><td><a>Wait For Alert</a></td></tr><tr><td><p><a>Select Option By Value</a></p></td><td><p>Wrong option is selected</p><p>(<a>https://github.com/MachinePublishers/jBrowserDriver/issues/148</a>)</p></td><td><p>Options could not be selected as expected</p></td></tr><tr><td><p><a>Select Option By Label</a></p></td></tr><tr><td><p><a>Select All Options</a></p></td></tr><tr><td><p><a>Select Option By Index</a></p></td></tr></tbody></table>

Improvements
------------

### General

1.  Address keywords incompatible issues with Firefox 47+ (as mentioned in Version 3.5).
2.  Update ChromeDriver's version to 2.25 to resolve execution issue with Chrome 54.
3.  Fix compatible issue with macOS 10 Sierra. 
4.  Several minor UX enhancements and bug fixes.   
      
    

### Test Project

1.  Include ‘JRE’ settings on Preferences. Users can change to other JRE version if needed.  
    
2.  Add option in context menu of editors (Test Case, Test Suite, Test Suite Collection) to quickly navigate to selected test artifacts.  
      
      
    

### Test Case

1.  Support defining closure syntax of Groovy in test case’s manual.  
      
      
    
2.   Links to Javadoc for keywords in manual editing mode.   
      
      
    
3.  Support drag and drop test objects to ‘Object’ field of test case  
      
      
    

### Test Suite Collection

1.  Add ‘Run Configuration’ column to setup required information for the following execution modes:
    
    1.  Android
    2.  iOS
    3.  Remote Web Server
    
      
      
    
2.  Add ‘Custom’ configuration list on ‘Select Environment’ dialog to execute using defined custom configuration.  
      
      
    
3.  Support drag and drop Test Suite to Test Suite Collection  
    

Known Issues
------------

Appium 1.6 is not supported. Besides of that, Appium has problem running tests on the latest iOS as reported at: 

https://github.com/appium/appium/issues/6857.

This problem also affects Katalon Studio execution function on the latest iOS devices. We are working on this limitation. Meanwhile, we recommend users to use Katalon Studio on the previous version of iOS and not use Appium 1.6 for execution