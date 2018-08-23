---
title: "Executing in console mode"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/executing_console_mode.html
description: "This easy-to-follow guide will walk you through steps on how to execute test cases using the console mode in Katalon Studio."
---
One of the advantages of Katalon Studio is that you can execute automation test without launching Katalon Studio IDE by using command line mode execution. Users use this function to run execution batch files or planning jobs in CI Tools. This easy-to-follow guide will walk you through steps on how to execute test cases using the command prompt.

Execute Katalon in CMD
----------------------

1\. Open the command prompt and navigate to the Katalon Studio folder that contains **katalon.exe** file. For example:

![open Katalon.exe](../../images/katalon-studio/tutorials/executing_console_mode/command-prompt.png)

2\. Enter the following syntax to execute automation test:

```groovy
katalon {option1} {option2} ... {optionN}

```

This command includes:

<table><tbody><tr><td style="text-align: center; border: 1px solid black;"><b>Item</b></td><td style="text-align: center; border: 1px solid black;"><b>Description</b></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">katalon</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">The command of Katalon Studio to execute automation test.</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">{option(s)}</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">The additional </span><a href="https://docs.katalon.com/display/KD/Console+Mode+Execution#ConsoleModeExecution-KatalonCommandLineoptions"><span style="font-weight: 400;">options</span></a><span style="font-weight: 400;"> for the execution (see the description below for details).</span></td></tr></tbody></table>

For example:

```groovy
C:
 
cd C:\Katalon\4.7
 
katalon -runMode=console -projectPath="C:\Project\Sample Project.prj" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome"

```

3\. Press Enter to start execution.

Katalon Command Line options
----------------------------

Here’s the list of options supported in the “_katalon_” command:

<table><tbody><tr><td style="text-align: center; border: 1px solid black;"><b>Katalon Command Line Option</b></td><td style="text-align: center; border: 1px solid black;"><b>Description</b></td><td style="text-align: center; border: 1px solid black;"><b>Required?</b></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-runMode=console</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Enable the console mode.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Yes</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-projectPath=&lt;path&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Specify the project folder that includes the .prj file. The absolute path must be used in this case.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Yes</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-testSuitePath=&lt;path&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Specify the test suite file (without extension .ts). The relative path (relative to the project folder) must be used in this case.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Yes</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-testSuiteCollectionPath=&lt;path&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Specify the test suite file (without extension .tsc). The relative path (relative to the project folder) must be used in this case.</span><p></p><p><span style="font-weight: 400;">Note: Available only from version 4.4 and later</span></p></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Yes (</span><i><span style="font-weight: 400;">If -testSuitePath is not used. Otherwise it’s optional</span></i><span style="font-weight: 400;">)</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-browserType=&lt;browser&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Specify the browser type used for test suite execution.</span><p></p><p><span style="font-weight: 400;">The following browsers are supported in Katalon:</span></p><ul><li style="font-weight: 400; text-align: left;"><span style="font-weight: 400;">Firefox</span></li><li style="font-weight: 400; text-align: left;"><span style="font-weight: 400;">Chrome</span></li><li style="font-weight: 400; text-align: left;"><span style="font-weight: 400;">IE</span></li><li style="font-weight: 400; text-align: left;"><span style="font-weight: 400;">Safari</span></li><li style="font-weight: 400; text-align: left;"><span style="font-weight: 400;">Remote</span></li><li style="font-weight: 400; text-align: left;"><span style="font-weight: 400;">Android</span></li><li style="font-weight: 400; text-align: left;"><span style="font-weight: 400;">iOS</span></li></ul></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Yes</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-remoteWebDriverType=&lt;Selenium, Appium&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Remote web’s driver type (Selenium or Appium)</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Yes </span><i><span style="font-weight: 400;">(If -remoteWebDriverUrl is used)</span></i></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-deviceId=&lt;device Id for Android/device uuid for ios&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Specify the device’s ID to execute test scripts</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Y</span><i><span style="font-weight: 400;"> (If -browserType=Android or -browserType=iOS is used)</span></i></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-consoleLog</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Display log in the console.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-noExit</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Keep the console open after the execution is completed.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-summaryReport</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Send summary report of a batch run.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-statusDelay=&lt;seconds&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">System will update the test case’s execution status after the specified seconds.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-retry=&lt;number of retry times&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Number of times running test cases in the test suite.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-retryFailedTestCases=&lt;true, false&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Retry failed test cases (overriding the setting in the test suite file). Set true if you want to rerun failed test cases and false otherwise.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-qTestDestId=&lt;destination’s id&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Id of the destination where the result will be uploaded to</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-qTestDestType=&lt;destination’s type&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Type of the destination. There are 4 types, including “test-suite”, “test-cycle”, &nbsp;“release”, and “root”.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-reportFolder=&lt;path&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Specify the destination folder to store report files. Can use an absolute path or relative path (relative to the project folder).</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-reportFileName=&lt;name&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Specify the name of report files (.html, .csv, .log). If not provided, system uses the name “report” (report.html, report.csv, report.log). This option only takes effect when being used with “-reportFolder” option.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-remoteWebDriverUrl=&lt;remote web server url&gt;</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Specify the remote web driver’s URL</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-email</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">The email used to register </span><a href="https://www.katalon.com/"><span style="font-weight: 400;">Katalon Studio</span></a></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No </span><i><span style="font-weight: 400;">(If Katalon Studio is already activated)</span></i></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">-password</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">The corresponding password for the registered email above.</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">No </span><i><span style="font-weight: 400;">(If Katalon Studio is already activated)</span></i></td></tr></tbody></table>

Command Builder
---------------

Instead of typing directly in the command prompt, you can quickly generate commands to execute test suites by following the steps below:    
1\. Click on **Build CMD** from the main toolbar.  
![Build CMD Katalon Studio](../../images/katalon-studio/tutorials/executing_console_mode/Build-CMD.png)

2\. The **Generate Command for Console Mode** dialog is displayed as below. Configure your options as needed.

![Generate Command for Console Mode](../../images/katalon-studio/tutorials/executing_console_mode/Generate-Command-for-Console-Mode.png)  
This dialog has the following options:

<table><tbody><tr><td style="text-align: center; border: 1px solid black;"><b>Section</b></td><td style="text-align: center; border: 1px solid black;"><b>Description</b></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Test Suite</span></td><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">The Test Suite or Test Suite Collection to be executed</span></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Executed Platform</span></td><td style="text-align: center; border: 1px solid black;"><p style="text-align: left;"><span style="font-weight: 400;">The platform used to execute the test:</span></p><p style="text-align: left;"><img class="alignnone wp-image-2155 size-full" src="../../images/katalon-studio/tutorials/executing_console_mode/Executed-Platform.png" alt="Executed Platform Katalon Studio" width="524" height="136" srcset="https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/08/22174456/Executed-Platform.png 524w, https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/08/22174456/Executed-Platform-300x78.png 300w" sizes="(max-width: 524px) 100vw, 524px"></p><p style="text-align: left;"><b>Remote Web Driver URL</b><span style="font-weight: 400;">&nbsp;is&nbsp;enabled if&nbsp;you choose to run with a&nbsp;</span><b>Remote</b><span style="font-weight: 400;">&nbsp;option.</span></p><p style="text-align: left;"><b>Mobile Device</b><span style="font-weight: 400;">&nbsp;is enabled if you choose to run with&nbsp;</span><b>Android</b><span style="font-weight: 400;">&nbsp;or&nbsp;</span><b>iOS</b><span style="font-weight: 400;">.</span></p><p style="text-align: left;"><b>Custom Execution</b><span style="font-weight: 400;">&nbsp;is enabled if you choose to run with&nbsp;</span><b>Custom&nbsp;</b><span style="font-weight: 400;">option.</span></p></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Report Configuration</span></td><td style="text-align: center; border: 1px solid black;"><p style="text-align: left;"><span style="font-weight: 400;">Extra settings for&nbsp;report&nbsp;after the execution is completed:</span></p><p style="text-align: left;"><img class="alignnone wp-image-2156 size-full" src="../../images/katalon-studio/tutorials/executing_console_mode/Report-Configuration.png" alt="Extra settings for report" width="524" height="211" srcset="https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/08/22174524/Report-Configuration.png 524w, https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/08/22174524/Report-Configuration-300x121.png 300w" sizes="(max-width: 524px) 100vw, 524px"></p><p style="text-align: left;"><b>Output Location</b><span style="font-weight: 400;">: the local folder to export the report.</span></p><p style="text-align: left;"><b>Use relative path to current project</b><span style="font-weight: 400;">: display the relative path to the output location, starting from the current project location.</span></p><p style="text-align: left;"><b>Report File Name</b><span style="font-weight: 400;">: the name for your generated report.</span></p><p style="text-align: left;"><b>Send Summary Report to recipients below</b><span style="font-weight: 400;">: enable sending the summary report to recipients who emails are specified Mail Recipients.</span></p></td></tr><tr><td style="text-align: center; border: 1px solid black;"><span style="font-weight: 400;">Other Options</span></td><td style="text-align: center; border: 1px solid black;"><img class="alignnone wp-image-2157 size-full" src="../../images/katalon-studio/tutorials/executing_console_mode/Other-Options.png" alt="Other Report Options" width="524" height="115" srcset="https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/08/22174557/Other-Options.png 524w, https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2017/08/22174557/Other-Options-300x66.png 300w" sizes="(max-width: 524px) 100vw, 524px"></td></tr></tbody></table>

3\. Click on **Generate Command **after you complete the configuration. The command is generated and shown in a dialog as below  
![Generate Command Katalon Studio](../../images/katalon-studio/tutorials/executing_console_mode/Generate-Command.png)

4\. You can **Copy to Clipboard** and paste it into the command prompt for execution.

Use console.properties file
---------------------------

Instead of specifying command settings for each execution, you can place all settings in the **console.properties** and use this file in the command prompt. This file can be generated using the same Command Builder as above.  
1\. Generate **console.properties** file using Command Builder

![Command Builder Katalon Studio](../../images/katalon-studio/tutorials/executing_console_mode/console.properties.png)  
2\. The **console.properties** file will be generated to your preferred location. You can open and update the parameters manually as needed.For example:  
![open and update the parameters manually](../../images/katalon-studio/tutorials/executing_console_mode/console_properties.png)

3\. Run the **console.properties** file in the console mode using the following syntax:

```groovy
katalon -propertiesFile="<absolute path to console.properties file>" -runMode=console

```

For example:

```groovy
katalon -propertiesFile="D:\Katalon\Demo_Project\console.properties" -runMode=console

```

4\. You can add extra Katalon command options to this command. Any option already defined in the **console.properties** file will be overwritten by the one declared on the command line.

```groovy
katalon -propertiesFile="<absolute path to console.properties file" -runMode=console -browserType=IE

```

This command runs the test on IE instead of Chrome as _browserType_ is set to IE.