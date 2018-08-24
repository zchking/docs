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

| Item | Description |
| --- | --- |
| katalon | The command of Katalon Studio to execute automation test. |
| {option(s)} | The additional [options](https://docs.katalon.com/display/KD/Console+Mode+Execution#ConsoleModeExecution-KatalonCommandLineoptions) for the execution (see the description below for details). |

For example:

```groovy
C:
 
cd C:\Katalon\4.7
 
katalon -runMode=console -projectPath="C:\Project\Sample Project.prj" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome"

```

3\. Press Enter to start execution.

Katalon Command Line options
----------------------------

Here's the list of options supported in the "_katalon_" command:

<table><thead><tr><th>Katalon Command Line Option</th> <th>Description</th> <th>Required?</th> </tr></thead><tbody><tr><td>-runMode=console</td> <td>Enable the console mode.</td> <td>Yes</td> </tr><tr><td>-projectPath=&lt;path&gt;</td> <td>Specify the project folder that includes the .prj file. The absolute path must be used in this case.</td> <td>Yes</td> </tr><tr><td>-testSuitePath=&lt;path&gt;</td> <td>Specify the test suite file (without extension .ts). The relative path (relative to the project folder) must be used in this case.</td> <td>Yes</td> </tr><tr><td>-testSuiteCollectionPath=&lt;path&gt;</td> <td>Specify the test suite file (without extension .tsc). The relative path (relative to the project folder) must be used in this case.<p></p><p>Note: Available only from version 4.4 and later</p></td><td>Yes (<i>If -testSuitePath is not used. Otherwise it's optional</i>)</td> </tr><tr><td>-browserType=&lt;browser&gt;</td> <td>Specify the browser type used for test suite execution.<p></p><p>The following browsers are supported in Katalon:</p><ul><li>Firefox</li><li>Chrome</li><li>IE</li><li>Safari</li><li>Remote</li><li>Android</li><li>iOS</li></ul></td><td>Yes</td> </tr><tr><td>-remoteWebDriverType=&lt;Selenium, Appium&gt;</td> <td>Remote web's driver type (Selenium or Appium)</td> <td>Yes <i>(If -remoteWebDriverUrl is used)</i></td> </tr><tr><td>-deviceId=&lt;device Id for Android/device uuid for ios&gt;</td> <td>Specify the device's ID to execute test scripts </td><td>Y<i> (If -browserType=Android or -browserType=iOS is used)</i></td> </tr><tr><td>-consoleLog</td> <td>Display log in the console.</td> <td>No</td> </tr><tr><td>-noExit</td> <td>Keep the console open after the execution is completed.</td> <td>No</td> </tr><tr><td>-summaryReport</td> <td>Send summary report of a batch run.</td> <td>No</td> </tr><tr><td>-statusDelay=&lt;seconds&gt;</td> <td>System will update the test case's execution status after the specified seconds.</td> <td>No</td> </tr><tr><td>-retry=&lt;number of retry times&gt;</td> <td>Number of times running test cases in the test suite.</td> <td>No</td> </tr><tr><td>-retryFailedTestCases=&lt;true, false&gt;</td> <td>Retry failed test cases (overriding the setting in the test suite file). Set true if you want to rerun failed test cases and false otherwise.</td> <td>No</td> </tr><tr><td>-qTestDestId=&lt;destination's id&gt;</td> <td>Id of the destination where the result will be uploaded to</td> <td>No</td> </tr><tr><td>-qTestDestType=&lt;destination's type&gt;</td> <td>Type of the destination. There are 4 types, including "test-suite", "test-cycle", &nbsp;"release", and "root".</td> <td>No</td> </tr><tr><td>-reportFolder=&lt;path&gt;</td> <td>Specify the destination folder to store report files. Can use an absolute path or relative path (relative to the project folder).</td> <td>No</td> </tr><tr><td>-reportFileName=&lt;name&gt;</td> <td>Specify the name of report files (.html, .csv, .log). If not provided, system uses the name "report" (report.html, report.csv, report.log). This option only takes effect when being used with "-reportFolder" option.</td> <td>No</td> </tr><tr><td>-remoteWebDriverUrl=&lt;remote web server url&gt;</td> <td>Specify the remote web driver's URL</td> <td>No</td> </tr><tr><td>-email</td> <td>The email used to register <a href="https://www.katalon.com/">Katalon Studio</a></td> <td>No <i>(If Katalon Studio is already activated)</i></td> </tr><tr><td>-password</td> <td>The corresponding password for the registered email above. </td><td>No <i>(If Katalon Studio is already activated)</i></td></tr></tbody></table>

Command Builder
---------------

Instead of typing directly in the command prompt, you can quickly generate commands to execute test suites by following the steps below:    
1\. Click on **Build CMD** from the main toolbar.  
![Build CMD Katalon Studio](../../images/katalon-studio/tutorials/executing_console_mode/Build-CMD.png)

2\. The **Generate Command for Console Mode** dialog is displayed as below. Configure your options as needed.

![Generate Command for Console Mode](../../images/katalon-studio/tutorials/executing_console_mode/Generate-Command-for-Console-Mode.png)  
This dialog has the following options:

<table><thead><tr><th>Section</th> <th>Description</th> </tr></thead><tbody><tr><td>Test Suite</td> <td>The Test Suite or Test Suite Collection to be executed</td> </tr><tr><td>Executed Platform</td><td><p>The platform used to execute the test:</p><p><img src="../../images/katalon-studio/tutorials/executing_console_mode/Executed-Platform.png"></p><p><b>Remote Web Driver URL</b>&nbsp;is&nbsp;enabled if&nbsp;you choose to run with a&nbsp;<b>Remote</b>&nbsp;option.</p><p><b>Mobile Device</b>&nbsp;is enabled if you choose to run with&nbsp;<b>Android</b>&nbsp;or&nbsp;<b>iOS</b>.</p><p><b>Custom Execution</b>&nbsp;is enabled if you choose to run with&nbsp;<b>Custom&nbsp;</b>option.</p></td></tr><tr><td>Report Configuration</td><td><p>Extra settings for&nbsp;report&nbsp;after the execution is completed:</p><p><img src="../../images/katalon-studio/tutorials/executing_console_mode/Report-Configuration.png"></p><p><b>Output Location</b>: the local folder to export the report.</p><p><b>Use relative path to current project</b>: display the relative path to the output location, starting from the current project location.</p><p><b>Report File Name</b>: the name for your generated report.</p><p><b>Send Summary Report to recipients below</b>: enable sending the summary report to recipients who emails are specified Mail Recipients.</p></td></tr><tr><td>Other Options</td> <td><img src="../../images/katalon-studio/tutorials/executing_console_mode/Other-Options.png"></td> </tr> </tbody> </table> 

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