---
title: "Headless Browsers Execution" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/headless-browsers-execution.html 
description: 
---
Headless browser testing is simply testing a webpage functionality without a GUI present. One of the biggest reasons for using a headless browser/carrying out headless testing is effificiency since it lets you run tests more quickly in a real browser environment. Headless Browsers can save project team the tremendous amount of time and smoothly integrate into the CD/CI process.

Configuring Headless Browsers
-----------------------------

By default, executing automation tests using either Firefox or Chrome headless will add the necessary desired capabilities to the browsers. You don’t need to add any additional configurations. In case you really need to add more desired capabilities to the headless browsers, then:

*   Go to **Project -> Settings -> Execution -> ****Default** -\> Select either Chrome (headless) orFirefox (headless)
*   Add your desired capabilities in these settings. For example, I want my Chrome (headless) to be started in smaller Window size:

To find out more about desired capabilities, refer to this guide.

Executing Automation Tests
--------------------------

### Execute a Test Case/ Test Suite

*   Open a test case or a test suite you want to execute
    
*   Select either Chrome (headless) or Firefox (headless) from the list of execution items
    

*   After selected, your current Test Case / Test Suite will be executed using selected headless browser
    

### Execute Test Suite Collection

*   Open a test suite collection you want to execute
    
*   Add a Test Suite into this Test Suite Collection
    
*   Select ‘Run with’ field and then select either Chrome (headless) or Firefox (headless)
    

*   Save changes to your current Test Suite Collection
    

*   Execute this Test Suite Collection and Katalon Studio will use the selected environment to run.
    

### Execute using console mode execution

*   Generate your console mode commands by selecting either Chrome (headless) or Firefox (headless) and click on Build CMD button on the main toolbar.
    

*   Execute your tests in console mode using the generated CMD script from Katalon Studio.
    

Note: Browsers will NOT be displayed while executing (Headless Browsers)Furthermore, using Headless browsers in console mode execution is recommended for CI/CD process to help project team faster quality releases and continuously. Refer to this guide for leveraging Katalon Studio in CI/CD process.