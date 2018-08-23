---
title: "Version 4.8" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-48.html 
description: 
---
General Improvement
-------------------

**Enhanced Katalon Help**

Introducing brand new Katalon Help page for Katalon Studio application. Users can access Katalon Studio resources all in one place such as Tutorials, FAQs, Sample Projects, or User Guides.

**Support Shadow DOM**

Katalon Studio Version 4.8 supports objects with Shadow DOM in Web Testing. Users can identify Shadow DOM objects by specifying the Shadow Root Parent in the Object settings tab.

Test Suite
----------

**Video Capturing**

K-Lite Codec is recommended to play Katalon Studio test execution video.

Introducing Katalon Studio **new** feature **video capturing** for Test Suite reports. Users will be able to video capture test suite execution and replay to review how each test case was executed. Description of test steps will be added as subtitle for users convenience. **Video capturing** feature can be enable in **Project Settings**.

**Variable Binding**

Variable Binding has been improved to allow users to set or update **Type** and **Test Data **column of multiple rows at once.This improvement aims to save testing time and to eliminate several repetitive procedures.

JIRA Integration
----------------

Katalon Studio add-on for JIRA: An add-on for JIRA so that business users can involve with development team. Project Manager or Business Analyst can compose requirements on JIRA under the BDD's format. These requirements will be synced with Katalon Studio so that test script can be generated and associated accordingly.

*   Basic functions and features of this JIRA add-on are as following:
    
    *   Katalon BDD - JIRA custom Gherkin field
    *   Sync JIRA Issues back and forth
    *   Sync Katalon Studio test execution via attachment
        
    
      
    
    The add-on is listed at Atlassian Marketplace. Currently, we only suport JIRA server. To install the add-on, please follow Atlassian's instruction.
    

Mobile Testing
--------------

Record and Spy Mobile is improved to support Kobiton devices, a cloud-based devices platform. Testing team can run test automation on hundreds of Kobiton devices.

*   Users can choose 2 options in **Device Types**:
    *   Local devices: This will list out all local devices and simulators.
    *   Kobiton device: This will list out Kobiton's devices that integrated with Katalon Studio
*   **Device Name**: display all devices name accordingly based on selected type in **Device Types**

Test Case
---------

Introducing **Recent Keywords** and **Recent Objects** features in **Manual** mode when writing a test case. This will optimize time and reduce repetitive tasks for users.

**Recent Keywords** feature allows users to select and add any of the 10 last used **keywords** to Item list.

**Recent objects** feature in _Test Object Input_ dialog allows users to select and add any of the 10 last used **Test Objects.** Users can also quickly jump to **Recent Object Folder** that has recent used objects accordingly.

Web Services
------------

**Support OAuth 1.0 authorization  
**

Katalon Studio now supports OAuth 1.0 authorization for Web Services Testing.  OAuth (Open Standard for Authorization) is an open token-based protocol authentication and authorization that allows application to capture protected information without exposing end user credentials. Testing teams can leverage this support to test any Web Services project that required OAuth 1.0 authorization with Katalon Studio.

Project Settings
----------------

**Email**

This version of Katalon Studio improved **Email** configuration in Project setting. Users able to customize Mail Server, send to multiple recipients, editable subject field.

New **Template** under Email section allows users to customize test execution reports and add extra fields to the report.

Katalon Studio Console Mode for Linux OS
----------------------------------------

Katalon Studio for Linux is now available. Users can execute test automation in Linux environment by using command line mode. Refer to this guide for Console Mode Execution.

*   Tested on Ubuntu, other OSes might have its own problem.
*   Only Chrome, Firefox and Remote options are supported for console mode execution using Linux version.

**Linux OS:** http://download.katalon.com/4.8.0/Katalon\_Studio\_Linux_64-4.8.tar.gz

Keywords
--------

New built-in keywords to help users check for broken links or images.

| Keywords | Description |
| --- | --- |
| 
Get All Links On Current Page

 | 

Get all links on current page

 |
| Verify Response Status Code | 

Verify status code in the returned data from a web service call

 |
| Verify Response Status Code In Range | 

Verify status code valid in a range of status codes in the returned data from a web service call

 |
| Verify Links Accessible | Verify a list of links (URLs) are accessible |
| Verify All Links On Current Page Accessible | Verify all links (URLs) on the current page are accessible |