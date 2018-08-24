---
title: "Execution Settings" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execution-settings.html 
redirect_from: "/display/KD/Execution+Settings" 
description: 
---
Execution settings help users to set preferred behaviors for Katalon Studio during test execution. 

Default Execution Settings
==========================

You can configure general execution preferences by accessing from main menu: **Project > Project Settings > Execution > Default**.

![](../../images/katalon-studio/docs/execution-settings/image2018-7-20 11_9_31.png)

Where:

<table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><p>Default execution</p></td><td><p>The default environment that Katalon Studio will use to execute automation test.</p></td></tr><tr><td><p>Default implicit timeout</p></td><td><p>The default timeout period (in seconds) that Katalon Studio will wait for the application under test to be loaded when executing automation test.</p></td></tr><tr><td><p>Post-Execution Options</p></td><td><p>These options decide the actions that Katalon Studio will perform after finishing automation test.</p><ul><li><strong>Open report</strong>: Specify whether the report generated after your test suite finishes its execution will also be open immediately.</li><li><strong>Terminate drivers</strong>: Specify when any driver remains after execution will be terminated.</li></ul></td></tr></tbody></table>

All the above preferences are saved into **.prefs** files under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in files to change these preference settings.

WebUI Settings
==============

These settings decide the general behavior of Katalon Studio when executing WebUI testing. You can configure WebUI execution preferences by accessing from main menu: 

**Window > Katalon Studio Preferences > Katalon > Execution > WebUI**.

![](../../images/katalon-studio/docs/execution-settings/image2017-11-14 16_31_35.png)

Where:

<table><thead><tr><th>Preference Setting</th><th>Description</th></tr></thead><tbody><tr><td><p>Delay between actions</p></td><td><p>The time for Katalon Studio to wait between test steps when executing test cases</p></td></tr><tr><td>Default wait when IE hangs</td><td>Specify the default period of waiting that Katalon Studio should use in case IE hangs</td></tr><tr><td>Default page load timeout</td><td><ul><li><strong>Wait until the page is loaded</strong>: Katalon Studio will wait for web page to load completely</li><li><strong>Wait for (in seconds)</strong>: The default timeout period (in seconds) that Katalon Studio will wait for Web page to load</li></ul></td></tr></tbody></table>

All the above preferences are saved into **.prefs** files under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in files to change these preference settings.

Desired Capabilities 
=====================

Desired Capabilities are essential in an automation test project. For more information, refer to [this guide](https://docs.katalon.com/x/ywbR). 

Custom Execution
================

Custom execution is a bit different from other execution settings. Follow these steps to create a custom execution with its desired capabilities:

1.  Click the Add button of command toolbar above the custom execution list.  
    ![](../../images/katalon-studio/docs/execution-settings/image2016-11-1 14_17_48.png)
2.  A custom execution will be added to the list  
    ![](../../images/katalon-studio/docs/execution-settings/image2016-11-1 14_19_51.png)
3.  Change the name if needed, then click on the **More** icon under Value column  
    ![](../../images/katalon-studio/docs/execution-settings/image2016-11-1 14_26_29.png)
4.  The **Custom Execution Configuration Builder** dialog will be displayed. Specify the **Driver Type** for your custom execution.   
    ![](../../images/katalon-studio/docs/execution-settings/image2016-11-1 14_29_6.png)
    
    You can have at most one web driver and one mobile driver here (because there will be potential conflict if multiple web drivers or multiple mobile drivers are used in the same test execution).
    
5.  Click on the **More** icon under **Preferences** column  
    ![](../../images/katalon-studio/docs/execution-settings/image2016-11-1 14_30_6.png)
6.  The **Driver Builder** dialog will be displayed. This is the form to set Desired Capabilities for the selected Driver. The steps to add new Desired Capabilities here is similar to other settings above.  
    ![](../../images/katalon-studio/docs/execution-settings/image2016-11-1 14_35_10.png)
7.  Click **OK** when you're done.  
    ![](../../images/katalon-studio/docs/execution-settings/image2016-11-1 14_38_39.png)

> Location of Desired Capabilities files
> 
> Defined configuration settings are saved in separated files under the “**<your test project location>\\settings\\internal**” location (or “**<your test project location>\\settings\\external\\execution**” in case of custom execution), as below:
> 
> <table><thead><tr><th>Driver</th><th>Settings’ file</th></tr></thead><tbody><tr><td><p>Chrome</p></td><td><p>com.kms.katalon.core.webui.chrome.properties</p></td></tr><tr><td><p>Firefox</p></td><td><p>com.kms.katalon.core.webui.firefox.properties</p></td></tr><tr><td><p>IE</p></td><td><p>com.kms.katalon.core.webui.ie.properties</p></td></tr><tr><td><p>Safari</p></td><td><p>com.kms.katalon.core.webui.safari.properties</p></td></tr><tr><td><p>Edge</p></td><td><p>com.kms.katalon.core.webui.edge.properties</p></td></tr><tr><td>Remote Web</td><td>com.kms.katalon.core.webui.remote.properties</td></tr><tr><td><p>Android</p></td><td><p>com.kms.katalon.core.mobile.android.properties</p></td></tr><tr><td><p>iOS</p></td><td><p>com.kms.katalon.core.mobile.ios.properties</p></td></tr></tbody></table>