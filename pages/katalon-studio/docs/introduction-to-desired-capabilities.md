---
title: "Introduction to Desired Capabilities" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/introduction-to-desired-capabilities.html 
description: 
---
What are Desired Capabilities?
------------------------------

Desired Capabilities are key/value pairs that tell the browser properties such as browser name, browser version, the path of the browser driver in the system, etc. to determine the behavior of the browser at runtime. Besides SeleniumWebDriver, desired capabilities can be used to configure additional driver instances like FirefoxDriver, ChromeDriver, InternetExplorerDriver. Desired Capabilities are useful in cases like:

*   In mobile application automation, where the browser properties and the device properties can be set.
*   In web application automation, where additional settings can be added to the browser.

Katalon Studio allows you to define these Desired Capabilities in [Execution Settings](https://docs.katalon.com/display/KD/Execution+Settings).

Understand the Settings
-----------------------

Before adding Desired Capabilities in Katalon Studio, you need to identify which the environment you want to customize its behaviors. Below is the list of supported environments as well as their locations in Katalon Studio settings

<table class="wrapped confluenceTable"><colgroup><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Settings</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd" colspan="1"><div class="content-wrapper"><p><strong>Project &gt; Settings &gt; Execution &gt; Custom</strong></p></div></td><td class="xtd-1-1 confluenceTd" colspan="1"><div class="content-wrapper"><p>Define a custom option for execution along with its Desired Capabilities.</p></div></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><div class="content-wrapper"><p><strong>Project &gt; Settings &gt; Execution &gt; Default &gt; WebUI &gt; Chrome</strong> (Firefox, IE, Safari, Edge)</p></div></td><td class="xtd-2-1 confluenceTd"><div class="content-wrapper"><p>Define Desired Capabilities for local execution using Chrome, Firefox, IE, Safari or Edge.</p></div></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd" colspan="1"><div class="content-wrapper"><p><strong><strong>Project &gt; Settings &gt; </strong>Execution &gt; Default &gt; WebUI &gt; Remote Web</strong></p></div></td><td class="xtd-3-1 confluenceTd" colspan="1"><div class="content-wrapper"><p>Define Desired Capabilities for execution on a remote web server.</p></div></td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd"><div class="content-wrapper"><p><strong><strong>Project &gt; Settings &gt; </strong>Execution &gt; Default &gt; Mobile &gt; Android</strong> (iOS is only available in macOS)</p></div></td><td class="xtd-4-1 confluenceTd"><div class="content-wrapper"><p>Define Desired Capabilities for execution with Android and iOS devices.</p></div></td></tr><tr class="xtr-5"><td class="xtd-5-0 confluenceTd"><div class="content-wrapper"><p><strong><strong>Project &gt; Settings &gt; </strong>Execution &gt; Default &gt; WebUI &gt; Chrome (Headless)</strong></p></div></td><td class="xtd-5-1 confluenceTd"><div class="content-wrapper"><p>Define Desired Capabilities for execution with a headless instance using Chrome.</p></div></td></tr><tr class="xtr-6"><td class="xtd-6-0 confluenceTd" colspan="1"><strong><strong>Project &gt; Settings &gt; </strong>Execution &gt; Default &gt; WebUI &gt; Firefox (Headless)</strong></td><td class="xtd-6-1 confluenceTd" colspan="1">Define Desired Capabilities for execution with a headless instance using Firefox.</td></tr></tbody></table>

As indicated above, any changes made '**Default**' settings will apply to the current environment immediately when you [execute a test](https://docs.katalon.com/display/KD/Execute+a+Test+Case+or+a+Test+Suite#ExecuteaTestCaseoraTestSuite-ExecuteanEntireTestCaseorTestSuite). If you want to make a list of your own custom Desired Capabilities for some environments, then it's suggested to use '**Custom**' settings in this case.

Modify Desired Capabilities in Katalon Studio
---------------------------------------------

After you select the environment you want to modify its desired capabilities, there will a simple dialog displayed to let you add the settings you want. This section covers how to add or remove these desired capabilities. 

*   **Add**:
    *   Click the **Add** button of command toolbar above the Desired Capabilities list. A new row will be added to the list.
    *   Provide the name of the property that you’d like to configure and its type under the Type column.
    *   Define value for the property. Refer to [Value Types](/display/KD/Value+Types) for details regarding how to input value for different types.
*   **Delete**: This will delete selected records.
*   **Clear**: This will clear all existing records

Please refer to specific guides below for the environment you want to set up

Desired Capabilities for Mobile

In case of Mobile execution, you need to select the device when configuring Desired Capabilities.

![](../../images/katalon-studio/docs/introduction-to-desired-capabilities/image2016-11-1 13_59_38.png)

Where:

*   **Device Name**: the device to apply Desired Capabilities settings on.

*   [Desired Capabilities for Firefox/Firefox (headless)](/pages/viewpage.action?pageId=13700172)
*   [Desired Capabilities for Chrome/Chrome (headless)](/pages/viewpage.action?pageId=13700170)
*   [Desired Capabilities for Internet Explorer](/display/KD/Desired+Capabilities+for+Internet+Explorer)
*   [Remote Desired Capabilities](/display/KD/Remote+Desired+Capabilities)