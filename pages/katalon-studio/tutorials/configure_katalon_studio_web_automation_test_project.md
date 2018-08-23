---
title: "Configuring Katalon Studio for the Web automation test project"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project.html
description: "Katalon Studio supports functional testing of web applications on many browsers. This tutorial explains how to setup a test project in Katalon Studio."
---
Katalon Studio supports functional testing of web applications on Internet Explorer, Edge, Chrome, Firefox and Safari.  
  
This tutorial explains how to setup a test project in Katalon Studio. We assume that you are familiar with general principles of automated testing and have minimal knowledge of the Katalon Studio IDE.

Internet Explorer Configurations
--------------------------------

Skip this section if you do not wish to run your automated tests on Internet Expolorer. Otherwise, you need the following setup:

– For IE 7 to IE 11, set the **Security** level for all zones (_Internet, Local Intranet, Trusted sites_ and _Restricted sites_) to the same value. To access this setting, choose **Internet Options** from **Control Panel** of Windows, then switch to the **Security** tab:

![Internet Options](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/1.-Katalon-Security.png)

– For IE 10 or later, uncheck **Enable Enhanced Protected Mode*** in the **Advanced** tab.

![Enable Enhanced Protected Mode](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/2.-Katalon-Security.png)

– Set the **Zoom** level on IE to **100%** so that native mouse events can be identified correctly.

![Zoom level on IE for web automation](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/3.-Katalon-IE.png)

– For IE 11, you need to set a registry entry on the target computer so that the Katalon driver can maintain a connection to the IE instances that it creates.

1.Type ‘**_regedit_**‘ into **Command Prompt** to open **Registry Editor**

2\. Locate the **FEATURE_BFCACHE** subkey (create the **FEATURE_BFCACHE** subkey in case it is not there):

2.1 For 32-bit Windows, the key is at _HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Internet Explorer\\Main\\FeatureControl\\FEATURE_BFCACHE_.

2.2. For 64-bit Windows, the key is at _HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Wow6432Node\\Microsoft\\Internet Explorer\\Main\\FeatureControl\\FEATURE_BFCACHE_.

3\. Inside this subkey, create a value named **iexplore.exe** with the Type as **REG_DWORD** and the Data as **0**.

![create a value named iexplore.exe](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/4.-Katalon-Reg_Dword.png)

Katalon Addon for Chrome
------------------------

Katalon Utility, a [**Katalon addon**](https://chrome.google.com/webstore/detail/katalon-utility/ljdobmomdgdljniojadhoplhkpialdid) for Chrome, is required if capturing objects on your active Chrome browsers. You can install this Katalon addon for Chrome from [here](https://chrome.google.com/webstore/detail/katalon-utility/ljdobmomdgdljniojadhoplhkpialdid). Refer to [Web Object Spy](https://docs.katalon.com/x/5BZO) and [Record & Playback](https://docs.katalon.com/x/RwnR) for more details.

![Katalon Utility](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/5.-Katalon-Addon.png)

Port Configuration
------------------

This configuration allows you to decide which port to be used for sending data between Katalon Utility and Katalon Studio.

1. Once Katalon Utility is added to Chrome, right-click on its icon at the top right of your browser and open the **Options** setting to specify a preferred port to communicate with Katalon Studio (default value is 50000).

![open the Options setting](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/6.Katalon-Utility.png)

2\. Open preferences for Katalon Utility in Katalon Studio by accessing **Window > Preferences > Katalon > Utility Addon**. Enter the same port number to be used for communicating with Katalon Utility.

![Katalon Utility Addon](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/7.-Katalon-Utility-Addon.png)

Proxy Settings
--------------

There may be a situation when your machine is setup within a restricted network with a policy to only allow Internet connection through a proxy server. In such a case, proxy settings can be configured from **Preferences > Proxy**. The settings affect both WebUI and WebService test execution. (Contact your network administrator to have necessary information for these settings).

![Katalon Proxy Settings](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/8.-Katalon-Proxy-Settings.png)

Certificate Settings
--------------------

Users may find their computers operating in a network that requires some certification in order to access the Internet.

Katalon Studio supports the capability to bypass certificate validation so that users with restricted network policies can work with Katalon Studio as usual. This setting can be found from **Project > Settings > Network**. This setting affects both WebUI and WebService testing.

![Katalon Certificate Settings](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/9.-Katalon-Certificate-settings.png)

Desired Capabilities
--------------------

You can add and modify **Desired Capabilities** to set the properties of browsers for test execution.

To define Desired Capabilities for local execution using Chrome, Firefox, IE, Safari or Edge, please access **Project > Settings > Execution > Default > WebUI > Chrome** (or Firefox, IE, Safari, Edge)

The example below show a desired capabilities setting for the web browser to disable info bar.

![Katalon Desired Capabilities](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/10.-Katalon-Desired-Capabilities.png)

Refer to [https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities) to know which properties of each web browser are supported by Selenium.

Notes: in case you want to have more configuration about desired capabilities (e.g., setup desired capabilities for specific web execution on remote machines), please refer to [Execution Settings](https://docs.katalon.com/display/KD/Execution+Settings#ExecutionSettings-CustomExecution) for more details.

External Library
----------------

With this setting, you can add or remove your external libraries. Please access the setting from **Project > Settings > External Libraries**.

![Katalon External Library](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/11.-Katalon-External-Library.png)

*   **Add**: Click and browse your .jar file to add a library to your external libraries. The selected library will be copied to the **Drivers** folder in the Katalon project.
*   **Remove:** Click to remove existing libraries. They will be removed from the **Drivers** folder for a Katalon project

The added libraries can be imported and utilized in the [Script View](https://docs.katalon.com/x/Y4Iw) of test cases:

![Katalon Studio Script View](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/12.-Katalon-Script-view.png)

Database Settings
-----------------

These settings allow you to define the global database connection to be used in several features of Katalon Studio such as defining [Test Data](https://docs.katalon.com/display/KD/Manage+Test+Data#ManageTestData-CreateaDatabaseData) or [Checkpoints](https://docs.katalon.com/display/KD/Manage+Checkpoint#ManageCheckpoint-CreateaDatabaseCheckpoint). You can access these settings from **Project > Settings > Database**.

![Katalon Database Settings](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/13.-Katalon-Database.png)

The dialog includes the following fields:

<table style="table-layout: fixed;" border="2"><thead><tr><th style="">Field</th><th style="">Description</th></tr></thead><tbody style=""><tr style=""><td style=""><span style="">Username</span></td><td style=""><span style="">The username to authenticate with connected database server</span></td></tr><tr style=""><td style=""><span style="">Password</span></td><td style=""><span style="">The password to authenticate with connected database server</span></td></tr><tr style=""><td style=""><span style="">Connection URL</span></td><td style=""><span style="">The connection string of database server. Katalon Studio supports following databases:</span><p style=""></p><ul style=""><li style=""><span style="">MySQL</span></li><li style=""><span style="">SQLServer</span></li><li style=""><span style="">Oracle</span></li><li style=""><span style="">Postgre</span></li></ul></td></tr></tbody></table>

Git Integration
---------------

Katalon Studio supports Git integration to facilitate team collaboration. Refer to this [guide](https://docs.katalon.com/display/KD/Git+Integration#GitIntegration-Configuration) on how to enable it.

Post-execution options
----------------------

Users can specify what to do next when a test execution finishes. The setting can be accessed from **Windows > Katalon Studio Preferences > Katalon > Execution**

![Katalon Post-execution options](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/14.-Katalon-Post-execution.png)

The options include:

<table style="table-layout: fixed;" border="3"><thead><tr><th style="">Field</th><th style="">Description</th></tr></thead><tbody style=""><tr style=""><td style=""><span style="">Default execution</span></td><td style=""><span style="">The default environment that Katalon Studio will use to execute automation test.</span></td></tr><tr style=""><td style=""><span style="">Default load timeout</span></td><td style=""><span style="">The default timeout period (in seconds) that Katalon Studio will wait for the application under test to be loaded during the execution of tests.</span></td></tr><tr style=""><td style=""><span style="">Post-Execution Options</span></td><td style=""><span style="">These options determine the actions that Katalon Studio will perform after executing tests.</span><p style=""></p><ul style=""><li style=""><b style="">Notify me</b><span style="">: Specify whether you want to send email notification.</span></li></ul><ul style=""><li style=""><span style="">Refer to </span><span style=""><a href="https://docs.katalon.com/display/KD/Emails+Settings" style=""><span style="">Emails Settings</span></a></span><span style=""> on how to register the list of report recipients.</span></li><li style=""><span style="">Refer to </span><span style=""><a href="https://docs.katalon.com/display/KD/Execute+a+test+suite#Executeatestsuite-Manageexecutioninformation" style=""><span style="">Test suite &gt; Manage execution information</span></a></span><span style=""> on how to register a list of recipients who will be receiving the execution report of a specific test suite.</span></li></ul><ul style=""><li style=""><b style="">Open report</b><span style="">: Specify whether the report generated is opened immediately.</span></li></ul><p style=""><b style="">Terminate drivers</b><span style="">: Specify whether any driver remaining after execution will be terminated.</span></p></td></tr></tbody></table>