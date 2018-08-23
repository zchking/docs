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

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">No.</th><th class="" style="">Name</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style="">1</td><td class="" style=""><p class="" style="">Select Item in List by Index</p></td><td class="" style=""><p class="" style="">Select item of list view control by its index. Have not implemented for Android because its list view is async loaded</p></td></tr><tr class="" style=""><td class="" style="">2</td><td class="" style=""><p class="" style="">Select Item in List by Label</p></td><td class="" style=""><p class="" style="">Select item of list view control by its label.</p></td></tr><tr class="" style=""><td class="" style="">3</td><td class="" style=""><p class="" style="">Pinch to Zoom In by Position</p></td><td class="" style=""><p class="" style="">Pinch to zoom in at a specific position on the screen of the mobile device</p></td></tr><tr class="" style=""><td colspan="1" class="" style="">4</td><td colspan="1" class="" style=""><p class="" style="">Pinch to Zoom Out by Position</p></td><td colspan="1" class="" style=""><p class="" style="">Pinch to zoom out at a specific position on the screen of the mobile device</p></td></tr><tr class="" style=""><td colspan="1" class="" style="">5</td><td colspan="1" class="" style="">Tap At Position</td><td colspan="1" class="" style=""><p class="" style="">Tap at a specific position on the screen of the mobile device</p></td></tr><tr class="" style=""><td colspan="1" class="" style="">6</td><td colspan="1" class="" style=""><p class="" style="">Get Element Top Position</p></td><td colspan="1" class="" style=""><p class="" style="">Get the top position of mobile element</p></td></tr><tr class="" style=""><td colspan="1" class="" style="">&nbsp;7</td><td colspan="1" class="" style=""><span style="" class="">Get Element Left Position</span></td><td colspan="1" class="" style=""><span style="" class="">Get the left position of mobile element</span></td></tr><tr class="" style=""><td colspan="1" class="" style="">8&nbsp;</td><td colspan="1" class="" style=""><span style="" class="">Get Element Width</span></td><td colspan="1" class="" style=""><p class="" style="">Get the width of mobile element</p></td></tr><tr class="" style=""><td colspan="1" class="" style="">9</td><td colspan="1" class="" style=""><p class="" style="">Get Element Height</p></td><td colspan="1" class="" style=""><p class="" style="">Get the height of mobile element</p></td></tr><tr class="" style=""><td colspan="1" class="" style="">10</td><td colspan="1" class="" style="">Long Press</td><td colspan="1" class="" style=""><p class="" style="">Tap and hold at a specific position on the screen of the mobile device</p></td></tr><tr class="" style=""><td colspan="1" class="" style="">11</td><td colspan="1" class="" style="">Set Slider Value</td><td colspan="1" class="" style=""><p class="" style="">Set the value for Slider control (android.widget.SeekBar for Android, UIASlider for iOS) at specific percentage</p></td></tr><tr class="" style=""><td colspan="1" class="" style="">12</td><td colspan="1" class="" style="">Unlock Screen</td><td colspan="1" class="" style=""><p class="" style="">Unlock device scree</p></td></tr></tbody></table>

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