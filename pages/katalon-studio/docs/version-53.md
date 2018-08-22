---
title: "Version 5.3" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-53.html 
description: 
---
General
-------

*   In version 5.3, Katalon team enhanced generated **XPath** for Test Objects. With the new robust XPath, test objects can be better located in the AUT. Thus, test quality is improved significantly. 
*   **Auto-saved** last **execution environment** is implemented in Version 5.3 to help save the last selected execution environment as default. Katalon Studio will replace the current default execution environment with the selected one (if it's different).
*   For Katalon to be Docker-ready  
    *   Add extra argument for Chrome in **Console Mode** execution
        *   **--no-sandbox**
    *   Remove splash screen in CLI mode
        
    *   Separate command for generate/update classpath
    *   Fix bugs when using CLI mode with properties file

Test Suite
----------

Implement [**Setup** / **Teardown**](https://docs.katalon.com/pages/viewpage.action?pageId=12419091) for Test Suite. This feature is another great extension besides [Test Listener](https://docs.katalon.com/pages/viewpage.action?pageId=5126383) to extend your current testing flow as much as possible.

![](../../images/katalon-studio/docs/version-53/image2018-1-8 16_25_42.png)

Execution
---------

Introduce all new [**Headless** execution mode for **Firefox**](https://www.katalon.com/resources-center/tutorials/headless-browsers-execution/)  supports user in Continuous Delivery process, UI regression and quick environment coverage. Tests execution will be much faster and more effective.

![](../../images/katalon-studio/docs/version-53/image2018-1-8 16_48_32.png)

Selenium IDE
------------

Introducing Katalon Studio new capability that allow users to **import** Selenium IDE Scripts (Beta) into Katalon Studio for advanced scripting and test execution including advanced conditions, dynamic validation or to be executed with external data sources. 

(This feature is in beta stage. There will be some cases that imported Selenium IDE Scripts will not be converted successfully to Katalon Studio scripts. Katalon team welcomes all of your feedback and suggestions)

![](../../images/katalon-studio/docs/version-53/image2018-1-22 10_36_19.png)

Web UI Testing
--------------

### Record/Spy

*   Added ability to move captured objects in Object Repository pane for Spy and Record Web. Users can **freely move captured objects** to organize test artifacts before saving.   
    ![](../../images/katalon-studio/docs/version-53/image2018-1-8 16_44_6.png)  
      
    
*   **[Default locators](https://docs.katalon.com/x/MwDR)** for captured objects in Record/Spy now can be set in **Project Setting**. Selected locators will be added automatically while Recording or Spying the application under test.  
      
    ![](../../images/katalon-studio/docs/version-53/image2018-1-25 16_56_26.png)

Mobile Testing
--------------

*   Support iOS 11 devices  
      
    
*   Enhance UI of selecting mobile devices window for test execution to improve users experience  
    ![](../../images/katalon-studio/docs/version-53/image2018-1-26 12_6_59.png)