---
title: "Version 3.6" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-36.html 
description: 
---
Improvements
------------

### General

*   Add hotkeys on context menu of test artifacts in Test Explorers  
    ![](../../images/katalon-studio/docs/version-36/image2016-7-26 14_37_39.png)  
      
    
*   Allow users to cancel progressing tasks on 'Loading Logs' dialog
*   \[Preference\] Expose more options of Native Eclipse Preference in Settings -> Preferences  
    ![](../../images/katalon-studio/docs/version-36/image2016-7-26 14_38_10.png)

### New MOBILE  built-in keywords

| No. | Name | Description |
| --- | --- | --- |
| 1 | 
Select Item in List by Index

 | 

Select item of list view control by its index. Have not implemented for Android because its list view is async loaded

 |
| 2 | 

Select Item in List by Label

 | 

Select item of list view control by its label.

 |
| 3 | 

Pinch to Zoom In by Position

 | 

Pinch to zoom in at a specific position on the screen of the mobile device

 |
| 4 | 

Pinch to Zoom Out by Position

 | 

Pinch to zoom out at a specific position on the screen of the mobile device

 |
| 5 | Tap At Position | 

Tap at a specific position on the screen of the mobile device

 |
| 6 | 

Get Element Top Position

 | 

Get the top position of mobile element

 |
|  7 | Get Element Left Position | Get the left position of mobile element |
| 8  | Get Element Width | 

Get the width of mobile element

 |
| 9 | 

Get Element Height

 | 

Get the height of mobile element

 |
| 10 | Long Press | 

Tap and hold at a specific position on the screen of the mobile device

 |
| 11 | Set Slider Value | 

Set the value for Slider control (android.widget.SeekBar for Android, UIASlider for iOS) at specific percentage

 |
| 12 | Unlock Screen | 

Unlock device scree

 |

### Object Spy

*   Users can now do object spy on Firefox which is already being opened through [Katalon Object Spy](https://addons.mozilla.org/en-US/firefox/addon/katalon-object-spy/?src=api) add-on  
    ![](../../images/katalon-studio/docs/version-36/image2016-7-26 14_40_42.png)
*   Improve mobile object spy
    *   Correct highlight on captured object
    *   Generate Xpath value  
        ![](../../images/katalon-studio/docs/version-36/image2016-7-26 14_44_31.png)

### Test Data

*   Improve UX of Internal Data:  
    *   Select will now focus on single cell instead of full row
    *   Press 'Enter' key will enter or exit edit mode
    *   Press 'Tab' key will move to next cell, 'Shift Tab' will move to previous cell

### Mobility

*   Add loading progress bar when 'Mobile Object Spy' dialog is loading
*   Add ability to specify log level for appium execution in Preference setting  
    ![](../../images/katalon-studio/docs/version-36/image2016-7-26 15_38_41.png)
*   Support execution on mobile emulator  
    ![](../../images/katalon-studio/docs/version-36/image2016-7-26 15_39_21.png)

Fixed Bugs
----------

*   \[Studio - Record\] Stop button is cut-off and disappeared when user drag mouse on it and maximize Record window
*   Fix 'Resume' icon on 'Record' window which its layout is broken
*   \[Manual View\] ELSE IF Statement icon and statement number are overlapped
*   \[Test Case\] 'Test Object' input is not shown in 'Input' form in case keyword used 'test object' input
*   A part of tab bar is cut off after opening and closing Job Progress
*   \[Test Data\] Excel data grid does not display data properly when checking "Use first row as header"
*   \[Explorer\] Some object names are cut off when opening Katalon
*   Fix test case's status counting in 'Log Viewer' for test suite collection execution
*   \[Log Viewer\] Incorrect test suite collection execution logs when executing test suite with no test cases are run
*   \[Test Data\] Excel data grid does not display properly