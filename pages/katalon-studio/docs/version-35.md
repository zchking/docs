---
title: "Version 3.5" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-35.html 
redirect_from: "/display/KD/Version+3.5" 
description: 
---
Notes
=====

Selenium 2.53.0 is not compatible with Firefox 47+ (more info [here](https://github.com/SeleniumHQ/selenium/issues/2110) and [here](https://github.com/SeleniumHQ/selenium/issues/1862) ). This release adds [Marionette driver](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Marionette/WebDriver) to Katalon to fix issues when using Firefox 47+ and Selenium 2.53.0 for execution. However, we suggest Firefox 45 or 46 for stable execution.

Improvements
============

General
-------

*   Add settings to enable/disable 'Screen Capture' when executed steps failed. You can access this settings at _**Project > Settings > Report**_  
    ![](../../images/katalon-studio/docs/version-35/image2016-6-16 14_55_39.png)  
      
    
*   Display 'Splash Screen' and 'Loading Progress Bar' when starting Katalon  
    ![](../../images/katalon-studio/docs/version-35/image2016-6-16 14_55_9.png)  
      
    

Data Files
----------

*   Support 'Database Data' as a new test data type. You can set default database settings through **_Project > Settings > Database_**  
    ![](../../images/katalon-studio/docs/version-35/image2016-6-16 14_59_37.png)  
      
    

New mobile keywords
-------------------

<table><thead><tr><th>No.</th><th>Keyword's name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Tap And Hold</td><td>Tap and hold on a mobile element for a duration</td></tr><tr><td>2</td><td>Check Element</td><td>Check a check-box mobile element (android.widget.checkbox for Android, UIASwitch for iOS)</td></tr><tr><td>3</td><td>Uncheck Element</td><td>Unheck a check-box mobile element (android.widget.checkbox for Android, UIASwitch for iOS)</td></tr><tr><td>4</td><td>Hide Keyboard</td><td>Hide a keyboard if it is showing</td></tr><tr><td>5</td><td>Verify Element Checked</td><td>Verify if a mobile element is checked</td></tr><tr><td>6</td><td>Verify Element Not Checked</td><td>Verify of a mobile element is not checked</td></tr><tr><td>7</td><td>Drag and Drop</td><td>Drag and drop an element into another element</td></tr></tbody></table>

Record/Playback
---------------

*   Record and Object Spy now can be used on current opened Chrome browsers. Users need to install Katalon's [Record](https://chrome.google.com/webstore/detail/katalon-recorder/bnaalgpdhfjepeanejkicnidgbpbmkhh?hl=en-US) and [Object Spy](https://chrome.google.com/webstore/detail/katalon-object-spy/gblkfilmbkbkjgpcoihaeghdindcanom?hl=en-US) extension on Chrome first in order to utilize this feature.![](../../images/katalon-studio/docs/version-35/image2016-6-17 17_18_24.png)  
      
    

Mobility
--------

*   Improve UX by relocating 'Device View' window to be next to 'Mobile Object Inspector' window (instead of displaying one on top of the other in previous versions)  
    ![](../../images/katalon-studio/docs/version-35/image2016-6-16 14_57_11.png)  
      
    

Test Case
---------

*   Hide FailureHandling value when users add new test step using built-in keyword. You can configure it through _**Project > Settings > Test Case > Default FailureHandling for Test Step**_  
    _**![](../../images/katalon-studio/docs/version-35/image2016-6-16 14_57_45.png)**_  
    

Test Suite
----------

*   Support the ability to execute multiple test suites using 'Test Suites Collection'  
    ![](../../images/katalon-studio/docs/version-35/image2016-6-16 14_59_3.png)  
      
    

Execution
---------

Execution on IE will now generate IEDriverServer logs  
  

Fixed Bugs
==========

*   KAT-845 Fix bug with using statement without surrounding code with brackets in Script Mode
    
*   KAT-870 Tests Explorer tree is not expanded after reopening Katalon with a saved session
    
*   KAT-874 Keyword's description is not displayed when hovered on in Keyword Browser
    
*   KAT-877 \[Mobile Keyword\] Application is closed unexpectedly when user runs Mobile keyword (Start Application, Set Text...
    
*   KAT-912 'Number' option is not shown for 'Object' param type in Input form
    
*   KAT-918 \[Generate Command\] Lack of "reportFolder" option when user saves report in default folder and don't use relative path
    
*   KAT-920 \[Command Line\] Cannot execute test suite when user indicates a different report folder using absolute path to the project
    
*   KAT-926 Can't get specific attribute's value using 'getAttribute' keyword
    
*   KAT-949 'Device Name' settings is not stored after changed on 'Project Settings' form
    
*   KAT-915 Remove redundant tooltips in 'Global Variable' view and 'Test Case' Manual view
    
*   KAT-847 Generated scripts from recording sessions will automatically import all default packages in Script mode
    

Customer Requests
=================

 \[CoreInformatics\] Fix issue with executing test scripts using enum in console mode