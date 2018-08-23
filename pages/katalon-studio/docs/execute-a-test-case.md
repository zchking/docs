---
title: "Execute a test case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execute-a-test-case.html 
description: 
---
Currently, Katalon Studio supports executing automation test in following environments:

| 
**Execution Environment**

 | 

**Description**

 |
| --- | --- |
| 

Chrome

 | 

Execute a test case in Chrome, using the Desired Capabilities settings defined in Execution Settings.

 |
| 

Firefox

 | 

Execute a test case in Firefox, using the Desired Capabilities settings defined in Execution Settings.

 |
| 

IE

 | 

Execute a test case in Internet Explorer, using the Desired Capabilities settings defined in Execution Settings.

 |
| 

Safari

 | 

Execute a test case in Safari, using the Desired Capabilities settings defined in Execution Settings.

 |
| 

Remote

 | 

Execute a test case in a remote environment, using the Desired Capabilities settings defined in Execution Settings.

 |
| 

Android

 | 

Execute a test case on Android device, using the Desired Capabilities settings defined in Execution Settings.

 |
| 

iOS

 | 

Execute a test case on an iOS device, using the Desired Capabilities settings defined in Execution Settings.

 |
| 

Custom

 | 

Execute a test case in a custom environment, using the Desired Capabilities settings defined in Execution Settings.

 |

Execute on a web application
----------------------------

1.  Open a test case, then select the web browser (Chrome, Firefox, IE, Safari or Edge) to run the test case from **Run** command of the main toolbar.
    
    If you simply click on the **Run** button, the test case will be executed using the default browser defined in Execution Preferences (Version 5.0 and below).
    
2.  The test case will be executed using the selected web browser.
    

Execute in a remote environment
-------------------------------

1.  Setup default configuration for the remote environment in project settings. Refer to Execution Settings for more details.  
      
      
    
2.  Open a test case, then select **Remote** option to run the test case from **Run** command of main toolbar.  
    
3.  The test case will be executed on a predefined remote environment.

Execute on a mobile application
-------------------------------

1.  Open a test case, then select the preferred mobile OS to run the test case from **Run** command of main toolbar (iOS option is only available in macOS).  
      
      
    
2.  Select the device from the listed devices.  
    
    If there is no device in the list, please make sure the Developer Mode on the phone is turned on, try to unplug and reconnect several times until you are prompted for accepting/trusting this device, make sure you accepted it (Refer to Mobile on Windows & Mobile on macOS for more details).  
    
3.  The test case will be executed using selected mobile device.

Execute on a custom environment
-------------------------------

1.  Setup desired capabilities for custom execution in project settings. Refer to Execution Settings for more details.  
      
      
    
2.  Open a test case, then select your preferred custom option to run the test case from **Run** command of the main toolbar.  
      
      
    
3.  The test case will be executed on selected custom option.

Job Progress
------------

The Job Progress will be triggered automatically to show the progress while your test case is being executed.