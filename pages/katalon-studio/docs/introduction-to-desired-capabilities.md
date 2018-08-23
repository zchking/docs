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

Katalon Studio allows you to define these Desired Capabilities in Execution Settings.

Understand the Settings
-----------------------

Before adding Desired Capabilities in Katalon Studio, you need to identify which the environment you want to customize its behaviors. Below is the list of supported environments as well as their locations in Katalon Studio settings

| Settings | Description |
| --- | --- |
| 
**Project > Settings > Execution > Custom**



 | 

Define a custom option for execution along with its Desired Capabilities.



 |
| 

**Project > Settings > Execution > Default > WebUI > Chrome** (Firefox, IE, Safari, Edge)



 | 

Define Desired Capabilities for local execution using Chrome, Firefox, IE, Safari or Edge.



 |
| 

****Project > Settings >** Execution > Default > WebUI > Remote Web**



 | 

Define Desired Capabilities for execution on a remote web server.



 |
| 

****Project > Settings >** Execution > Default > Mobile > Android** (iOS is only available in macOS)



 | 

Define Desired Capabilities for execution with Android and iOS devices.



 |
| 

****Project > Settings >** Execution > Default > WebUI > Chrome (Headless)**



 | 

Define Desired Capabilities for execution with a headless instance using Chrome.



 |
| ****Project > Settings >** Execution > Default > WebUI > Firefox (Headless)** | Define Desired Capabilities for execution with a headless instance using Firefox. |

As indicated above, any changes made '**Default**' settings will apply to the current environment immediately when you execute a test. If you want to make a list of your own custom Desired Capabilities for some environments, then it's suggested to use '**Custom**' settings in this case.

Modify Desired Capabilities in Katalon Studio
---------------------------------------------

After you select the environment you want to modify its desired capabilities, there will a simple dialog displayed to let you add the settings you want. This section covers how to add or remove these desired capabilities. 

*   **Add**:
    *   Click the **Add** button of command toolbar above the Desired Capabilities list. A new row will be added to the list.
    *   Provide the name of the property that you’d like to configure and its type under the Type column.
    *   Define value for the property. Refer to Value Types for details regarding how to input value for different types.
*   **Delete**: This will delete selected records.
*   **Clear**: This will clear all existing records

Please refer to specific guides below for the environment you want to set up

Desired Capabilities for Mobile

In case of Mobile execution, you need to select the device when configuring Desired Capabilities.

Where:

*   **Device Name**: the device to apply Desired Capabilities settings on.

*   Desired Capabilities for Firefox/Firefox (headless)
*   Desired Capabilities for Chrome/Chrome (headless)
*   Desired Capabilities for Internet Explorer
*   Remote Desired Capabilities