---
title: "Console Mode Execution" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/console-mode-execution.html 
description: 
---
Only **Chrome, Firefox and Remote** options are supported for console mode execution **using Linux version.**

You can execute automation test without launching Katalon Studio by using command line mode execution. 

Execute Katalon in CMD
----------------------

1.  Open the command prompt and navigate to the folder of your Katalon Studio build, which contains katalon.exe **(**Windows**) **or Applications folder (Mac OS) or katalon (Linux) file.
    
2.  Enter the following syntax to execute automation test:
    
    **Windows:**
    
    ```
    katalon {option1} {option2} ... {optionN}
    ```
    
    **Mac OS:**
    
    ```
    ./Katalon\ Studio.app/Contents/MacOS/katalon --args {option1} {option2} ... {optionN}
    ```
    
    **Linux**:
    
    ```
    ./katalon {option1} {option2} ... {optionN}
    ```
    
      
    where:
    
    | Item | Description |
    | --- | --- |
    | katalon | The command of Katalon Studio to execute automation test. |
    | {option(s)} | The additional [options](https://docs.katalon.com/display/KD/Console+Mode+Execution#ConsoleModeExecution-KatalonCommandLineoptions) for the execution. |
    
    For example:
    
    ![](../../images/katalon-studio/docs/console-mode-execution/image2016-4-6 13_15_3.png)  
      
    
3.  Press Enter to start execution.

Katalon Command Line options 
-----------------------------

Here’s the list of options supported for the “_katalon_” command:

| Katalon Command Line Option | Description | Mandatory? |
| --- | --- | --- |
| 
-runMode=console

 | 

Enable console mode.

 | 

Y

 |
| 

-consoleLog

 | 

Display log in the console.

 | 

N

 |
| 

--config -kobiton.authentication.username=\[yourKobitonusername\]-kobiton.authentication.password=xxxxx





 | Passing Kobiton username and password | N |
| 

-noExit

 | 

Keep the console open after the execution is completed.

 | 

N

 |
| 

-summaryReport

 | 

Send summary report for a batch run.

 | 

N

 |
| 

-statusDelay=<seconds>

 | 

System will update execution status of the test suite after the delay period (in seconds) specified.

 | 

N

 |
| 

-projectPath=<path>

 | 

Specify the project location (include .prj file). The absolute path must be used in this case.

 | 

Y

 |
| 

-testSuitePath=<path>

 | 

Specify the test suite file (without extension .ts). The relative path (root being project folder) must be used in this case.

 | 

Y

 |
| -testSuiteCollectionPath=<path> | 

Specify the test suite file (without extension .tsc). The relative path (root being project folder) must be used in this case.

Note: Available only in 4.4+

 | Y (_If -testSuitePath is not used. Otherwise it's optional_) |
| 

-browserType=<browser>

 | 

Specify the browser type used for test suite execution.

The following browsers are supported in Katalon:

*   Firefox
*   Chrome
*   IE
*   Safari
*   Remote
*   Android
*   iOS

 | 

Y

**Only Chrome, Firefox and Remote is available for use in Linux version**

 |
| -retry=<number of retry times> | Number of times running test cases in the test suite. | N |
| -retryFailedTestCases=<true, false> | Retry failed test cases fail in test suite ( override setting in test suite file ). There are 2 options for retry: true if you want run fail test case and otherwise false | N |
| -qTestDestId=<destination's id> | Id of the destination where the result will be uploaded on it | N |
| -qTestDestType=<destination's type> | Type of the destination. There are 4 options for destination's type:"test-suite", "test-cycle", "release", and "root". | N |
| 

-reportFolder=<path>

 | 

Specify the destination folder for saving report files. Can use absolute path or relative path (root being project folder).

 | 

N

 |
| 

-reportFileName=<name>

 | 

Specify the name for report files (.html, .csv, .log). If not provide, system uses the name "report" (report.html, report.csv, report.log). This option is only taken into account when being used with “-reportFolder” option.

 | 

N

 |
| 

-remoteWebDriverUrl=<remote web server url>

 | 

Specify the remote web driver URL

 | 

N

 |
| -remoteWebDriverType=<Selenium, Appium> | Remote web's driver type | Y _(If -remoteWebDriverUrl is used)_ |
| 

-deviceId=<device Id for Android/device uuid for ios>

 | 

Specify the device's ID to execute test scripts using this device

 | 

Y _(If -browserType=Android or -browserType=iOS is used)_

 |
| -email | Registered email on [Katalon Studio](https://www.katalon.com/) page | N _(If Katalon Studio is already activated)_ |
| **These proxy options below must be used with --config parameter** |
| -proxy.option | NO\_PROXY, USE\_SYSTEM, MANUAL_CONFIG | Y |
| -proxy.server.type |  HTTP, HTTPS, or SOCKS | Y |
| -proxy.server.address | Example: locahost, [http://katalon.com](http://katalon.com/) | Y |
| -proxy.server.port | Example: 80, 8080, 9999 | Y |
| -proxy.username | Example: MyProxyUsername | Optional (YES if your proxy server requires authentication) |
| -proxy.password | Example: MyProxyPassword | Optional (YES if your proxy server requires authentication) |
| Example: `katalon -noSplash  -runMode=console -consoleLog -noExit -projectPath=``"C:\Users\Katalon Studio\Project\YourProject.prj"``-retry=``0``-testSuitePath=``"Test Suites/TS_RegressionTest"``-browserType=``"Chrome (headless)"``--config -proxy.option=MANUAL_CONFIG -proxy.server.type=HTTP -proxy.server.address=``"http://192.168.12.32"``-proxy.server.port=``"8888"`

 |
| -executionProfile | 

**Since 5.4**

Specify the [execution profile](/pages/viewpage.action?pageId=13697476) to be executed with

 | N |

Command Builder
---------------

You can quickly generate commands to use in console mode by following the steps below:  

1.  Click on **Build CMD** from the main toolbar.  
    ![](../../images/katalon-studio/docs/console-mode-execution/Screenshot at Jun 20 15-42-46.png)  
      
    
2.  The **Generate Command for Console Mode** is displayed. Configure your options as needed.  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2018-2-9 11_44_30.png)  
    where:
    
    | Section | Description |
    | --- | --- |
    | Test Suite | The Test Suite or Test Suite Collection to be executed |
    | Executed Platform | 
    The platform to execute the test on. Select an environment
    
    ![](../../images/katalon-studio/docs/console-mode-execution/image2018-2-9 12_1_31.png)
    
    
    
     |
    | Other Options | 
    
    ![](../../images/katalon-studio/docs/console-mode-execution/image2017-2-17 16_19_15.png)
    
    
    
     |
    
3.  Click **Generate Command** after you're done with the configuration.  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2017-2-17 17_15_41.png)  
      
    
4.  You can **Copy to Clipboard** and paste to command prompt for execution.  
      
    

Use console.properties file
---------------------------

We support running console mode using **console.properties** file where you can manually modify the content if needed. 

1.  Generate **console.properties** file using our generator:  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2018-2-9 12_3_30.png)  
      
    
2.  The **console.properties** file will be generated at your preferred location. You can open and update the parameters manually as needed.   
    For example:  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2017-2-20 10_30_2.png)  
      
    
3.  Run the **console.properties** file in console mode with the following syntax:
    
    ```
    katalon -propertiesFile="<absolute path to console.properties file>" -runMode=console
    ```
    
    For example:
    
    ```
    katalon -propertiesFile="D:\Katalon\Demo_Project\console.properties" -runMode=console
    ```
    
4.  You can add extra Katalon command options if needed. Any option already defined in the **console.properties** file will be overwritten by the one declared in command line.  
    
    ```
    katalon -propertiesFile="<absolute path to console.properties file" -runMode=console -browserType=IE 
    ```
    
    In the above example, since we also declare _browserType_ option in command line, the automation test will be executed using IE instead of Chrome.