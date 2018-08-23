---
title: "Version 3.2" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-32.html 
description: 
---
Improvements
------------

### General

*   The Default Browser for execution will be displayed with an indication  
    
*   Have options to let users open the previous working session when opening Katalon  
    
*   Automatically generate destination project's folder in case it's not existed yet when creating new Katalon Projects
*   Support loading **.app** file on Mobile Object Spy (for iOS platform)  
    
*   Automatically focus into first field of some UI components:
    *   In Global Variables, focus on Name field of Add/Edit Variable Dialogs  
        
    *   In Variable tab of Test Case editor, focus on Name field when adding new Variables   
        

### Console mode

*   Allow users to generate command to run in console mode  
    
*   Support the ability to auto send mail function parameters
*   Revamp argument processing for console mode: Console Mode Execution

### Execution

*   \[Infrastructure\] Revamp execution engine
*   Change mechanism to support executing test script upon current active Chrome & Firefox browsers  
    

### Report

*   Display 'Warning' filter in Katalon's generated report  
    

### Object Spy

*   \[Mobile Object Spy\] Support "Object Name" field in MOI  
    

### Test Case

*   Refactor getTestCaseBindingString method

### Record/Playback

*   \[Record\] Add tooltip for recorded actions  
    

### qTest Integration

*   \[Console Mode\] 'qTest' logs will not be displayed if the test project has no integration with qTest

Fixed Bugs
----------

*   \[Mobile\] MOI gets "Not Response" when started without application file
*   \[MOI\] MOI got frozen when users select captured objects on the view
*   System can't execute test scripts if executed browser is Firefox 45.0.1
*   System can't record steps if recorded objects are refreshed
*   Error when 'Take Screenshot' keyword is used
*   \[Test Suite\] Can't execute test suite if selected platform's preferences value used machine's path
*   Correct default generated value to use proper value based on input's value type
*   Global Variable value is kept as original when users changed value in custom keyword script

Customer Requests
-----------------

*   \[Core Informatics\] Change default values for 'Send attachment' settings & memory size of katalon.ini file
*   \[Core Informatics\] Improve performance on 'select Option By ' keyword without using regular expression
*   \[Core Informatics\] Create HTMLTableData based on TestData to support reading HTML content-based file
*   \[Core Informatics\] Add new 'Warning' filter level in 'Log Viewer' panel