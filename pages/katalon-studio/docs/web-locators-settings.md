---
title: "Web Locators Settings" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/web-locators-settings.html 
description: 
---
Since v5.3, Katalon Studio has allowed users to set default Web Locator in **Project Setting** > **Test Design** > **Web Locator**.

This setting helps user eliminate the repetitive tasks of check/un-check locators for each captured objects while recording or spying the application under test. All selected locators in this settings will be applied to all captured objects in Record and Spy Web. 

Custom locators can be added to the list. Pre-selected locators are recommended by Katalon team.

#### Example

1.  By default, **tag** property will be selected. In some cases you really don't want this behavior, so you can change this by:   
    - Add a new property called **tag** and deselect it  
      
      
    When you spy or record test steps, any object having this **tag** property will **not** be used by default  
      
      
    
2.  Working with Angular pages, there are two properties called **ng-model** and **ng-pattern** you would like to use it by default. Added these two properties to the list of current Web Locators.  
      
    These selected properties will be checked by default when you Spy or Record your test steps