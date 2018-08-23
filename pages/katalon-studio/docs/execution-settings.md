---
title: "Execution Settings" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execution-settings.html 
description: 
---
Execution settings help users to set preferred behaviors for Katalon Studio during test execution. 

Default Execution Settings
--------------------------

You can configure general execution preferences by accessing from main menu: **Project > Project Settings > Execution > Default**.

Where:

| 
Field

 | 

**Description**

 |
| --- | --- |
| 

Default execution

 | 

The default environment that Katalon Studio will use to execute automation test.

 |
| 

Default implicit timeout

 | 

The default timeout period (in seconds) that Katalon Studio will wait for the application under test to be loaded when executing automation test.

 |
| 

Post-Execution Options

 | 

These options decide the actions that Katalon Studio will perform after finishing automation test.

*   **Open report**: Specify whether the report generated after your test suite finishes its execution will also be open immediately.
*   **Terminate drivers**: Specify when any driver remains after execution will be terminated.

 |

All the above preferences are saved into **.prefs** files under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in files to change these preference settings.

WebUI Settings
--------------

These settings decide the general behavior of Katalon Studio when executing WebUI testing. You can configure WebUI execution preferences by accessing from main menu: 

**Window > Katalon Studio Preferences > Katalon > Execution > WebUI**.

Where:

| 
**Preference Setting**

 | 

**Description**

 |
| --- | --- |
| 

Delay between actions

 | 

The time for Katalon Studio to wait between test steps when executing test cases

 |
| Default wait when IE hangs | Specify the default period of waiting that Katalon Studio should use in case IE hangs |
| Default page load timeout | 

*   **Wait until the page is loaded**: Katalon Studio will wait for web page to load completely
*   **Wait for (in seconds)**: The default timeout period (in seconds) that Katalon Studio will wait for Web page to load

 |

All the above preferences are saved into **.prefs** files under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in files to change these preference settings.

Desired Capabilities 
---------------------

Desired Capabilities are essential in an automation test project. For more information, refer to this guide. 

Custom Execution
----------------

Custom execution is a bit different from other execution settings. Follow these steps to create a custom execution with its desired capabilities:

1.  Click the Add button of command toolbar above the custom execution list.  
    
2.  A custom execution will be added to the list  
    
3.  Change the name if needed, then click on the **More** icon under Value column  
    
4.  The **Custom Execution Configuration Builder** dialog will be displayed. Specify the **Driver Type** for your custom execution.   
    
    You can have at most one web driver and one mobile driver here (because there will be potential conflict if multiple web drivers or multiple mobile drivers are used in the same test execution).
    
5.  Click on the **More** icon under **Preferences** column  
    
6.  The **Driver Builder** dialog will be displayed. This is the form to set Desired Capabilities for the selected Driver. The steps to add new Desired Capabilities here is similar to other settings above.  
    
7.  Click **OK** when you're done.  
    

Location of Desired Capabilities files

Defined configuration settings are saved in separated files under the “**<your test project location>\\settings\\internal**” location (or “**<your test project location>\\settings\\external\\execution**” in case of custom execution), as below:

| 
**Driver**

 | 

**Settings’ file**

 |
| --- | --- |
| 

Chrome

 | 

com.kms.katalon.core.webui.chrome.properties

 |
| 

Firefox

 | 

com.kms.katalon.core.webui.firefox.properties

 |
| 

IE

 | 

com.kms.katalon.core.webui.ie.properties

 |
| 

Safari

 | 

com.kms.katalon.core.webui.safari.properties

 |
| 

Edge

 | 

com.kms.katalon.core.webui.edge.properties

 |
| Remote Web | com.kms.katalon.core.webui.remote.properties |
| 

Android

 | 

com.kms.katalon.core.mobile.android.properties

 |
| 

iOS

 | 

com.kms.katalon.core.mobile.ios.properties

 |