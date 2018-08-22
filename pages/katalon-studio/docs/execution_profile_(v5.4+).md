---
title: "Execution Profile (v5.4+)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execution_profile_(v5.4+).html 
description: 
---
Available since Katalon Studio v5.4

Katalon Studio v5.4 introduces another flexible way to extend your current automation test scripts to cover multiple and different environments with ease. We call it '**Execution Profile**'. You can find below the changes related to this improvement:

*   The current [Global Variables](https://docs.katalon.com/display/KD/Variable+Types#VariableTypes-Globalvariables) list now become the **Default Profile**. There will be **NO** 'Global Variables' interface anymore and you will need to create Global Variables in the profile you want.
*   By **default**, Katalon Studio will use a **default profile** as indicated on the top right of Katalon Studio's interface. There is also a drop-down menu that allows you to select any available execution profile.  
    Just like any other test artifacts, you can quickly _create_, _rename_, _copy_, _cut_ your profile directly from _Test Explorers_.   
    ![](../../images/katalon-studio/docs/execution_profile_(v5.4+)/Untitled3.png)  
      
      
    After a profile is created, the interface will be similar to Global Variables interface. You can create as many profiles as you want to depend on the needs of the project. In the example below, there are 3 profiles: **local**, **staging**, **production** based on testing environments.  
      
    
*   There are many ways to use your profile:
    *   **For test cases/ test suites**: Select your desired profile from top right. After your profile is changed, **all Global Variables** within your current project will **use** these **values**   
        ![](../../images/katalon-studio/docs/execution_profile_(v5.4+)/Untitled2.png)  
          
        
    *   **For Test Suite Collection**: Select your desired profile to be executed with your Test Suite on '**Profile**' column.  
        ![](../../images/katalon-studio/docs/execution_profile_(v5.4+)/4.png)  
          
        
    *   **For [Console Mode](https://docs.katalon.com/display/KD/Console+Mode+Execution) execution**: Select your desired profile on Profile field.  
        ![](../../images/katalon-studio/docs/execution_profile_(v5.4+)/5.png)  
          
        The generated command line will have '**executionProfile**' parameter so that you can change it manually, e.g

```groovy
katalon -noSplash  -runMode=console -consoleLog -projectPath="C:\Users\Admin\Katalon Studio\yourProject.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -executionProfile="local" -browserType="Chrome (headless)"

```