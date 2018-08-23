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

![](../../images/katalon-studio/docs/execution-settings/image2018-7-20 11_9_31.png)

Where:

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Field</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><p style="">Default execution</p></td><td class="xtd-1-1 confluenceTd" style=""><p style="">The default environment that Katalon Studio will use to execute automation test.</p></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><p style="">Default implicit timeout</p></td><td class="xtd-2-1 confluenceTd" style=""><p style="">The default timeout period (in seconds) that Katalon Studio will wait for the application under test to be loaded when executing automation test.</p></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><p style="">Post-Execution Options</p></td><td class="xtd-3-1 confluenceTd" style=""><p style="">These options decide the actions that Katalon Studio will perform after finishing automation test.</p><ul style=""><li style=""><strong style="">Open report</strong>: Specify whether the report generated after your test suite finishes its execution will also be open immediately.</li><li style=""><strong style="">Terminate drivers</strong>: Specify when any driver remains after execution will be terminated.</li></ul></td></tr></tbody></table>

All the above preferences are saved into **.prefs** files under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in files to change these preference settings.

WebUI Settings
--------------

These settings decide the general behavior of Katalon Studio when executing WebUI testing. You can configure WebUI execution preferences by accessing from main menu: 

**Window > Katalon Studio Preferences > Katalon > Execution > WebUI**.

![](../../images/katalon-studio/docs/execution-settings/image2017-11-14 16_31_35.png)

Where:

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Preference Setting</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><p style="">Delay between actions</p></td><td class="xtd-1-1 confluenceTd" style=""><p style="">The time for Katalon Studio to wait between test steps when executing test cases</p></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" colspan="1" style="">Default wait when IE hangs</td><td class="xtd-2-1 confluenceTd" colspan="1" style="">Specify the default period of waiting that Katalon Studio should use in case IE hangs</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" colspan="1" style="">Default page load timeout</td><td class="xtd-3-1 confluenceTd" colspan="1" style=""><ul style=""><li style=""><strong style="">Wait until the page is loaded</strong>: Katalon Studio will wait for web page to load completely</li><li style=""><strong style="">Wait for (in seconds)</strong>: The default timeout period (in seconds) that Katalon Studio will wait for Web page to load</li></ul></td></tr></tbody></table>

All the above preferences are saved into **.prefs** files under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in files to change these preference settings.

Desired Capabilities 
---------------------

Desired Capabilities are essential in an automation test project. For more information, refer to [this guide](https://docs.katalon.com/x/ywbR). 

Custom Execution
----------------

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

Location of Desired Capabilities files

Defined configuration settings are saved in separated files under the “**<your test project location>\\settings\\internal**” location (or “**<your test project location>\\settings\\external\\execution**” in case of custom execution), as below:

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Driver</th><th class="xtd-0-1 confluenceTh" style="">Settings’ file</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><p style="">Chrome</p></td><td class="xtd-1-1 confluenceTd" style=""><p style="">com.kms.katalon.core.webui.chrome.properties</p></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><p style="">Firefox</p></td><td class="xtd-2-1 confluenceTd" style=""><p style="">com.kms.katalon.core.webui.firefox.properties</p></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><p style="">IE</p></td><td class="xtd-3-1 confluenceTd" style=""><p style="">com.kms.katalon.core.webui.ie.properties</p></td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style=""><p style="">Safari</p></td><td class="xtd-4-1 confluenceTd" style=""><p style="">com.kms.katalon.core.webui.safari.properties</p></td></tr><tr class="xtr-5" style=""><td class="xtd-5-0 confluenceTd" style=""><p style="">Edge</p></td><td class="xtd-5-1 confluenceTd" style=""><p style="">com.kms.katalon.core.webui.edge.properties</p></td></tr><tr class="xtr-6" style=""><td class="xtd-6-0 confluenceTd" colspan="1" style="">Remote Web</td><td class="xtd-6-1 confluenceTd" colspan="1" style="">com.kms.katalon.core.webui.remote.properties</td></tr><tr class="xtr-7" style=""><td class="xtd-7-0 confluenceTd" colspan="1" style=""><p style="">Android</p></td><td class="xtd-7-1 confluenceTd" colspan="1" style=""><p style="">com.kms.katalon.core.mobile.android.properties</p></td></tr><tr class="xtr-8" style=""><td class="xtd-8-0 confluenceTd" colspan="1" style=""><p style="">iOS</p></td><td class="xtd-8-1 confluenceTd" colspan="1" style=""><p style="">com.kms.katalon.core.mobile.ios.properties</p></td></tr></tbody></table>