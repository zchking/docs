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

```
katalon {option1} {option2} ... {optionN}

```

This command includes:

Item

Description

katalon

The command of Katalon Studio to execute automation test.

{option(s)}

The additional [options](https://docs.katalon.com/display/KD/Console+Mode+Execution#ConsoleModeExecution-KatalonCommandLineoptions) for the execution (see the description below for details).

For example:

```
C:
 
cd C:\Katalon\4.7
 
katalon -runMode=console -projectPath="C:\Project\Sample Project.prj" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome"

```

3\. Press Enter to start execution.

Katalon Command Line options
----------------------------

Here’s the list of options supported in the “_katalon_” command:

Katalon Command Line Option

Description

Required?

-runMode=console

Enable the console mode.

Yes

-projectPath=<path>

Specify the project folder that includes the .prj file. The absolute path must be used in this case.

Yes

-testSuitePath=<path>

Specify the test suite file (without extension .ts). The relative path (relative to the project folder) must be used in this case.

Yes

-testSuiteCollectionPath=<path>

Specify the test suite file (without extension .tsc). The relative path (relative to the project folder) must be used in this case.

Note: Available only from version 4.4 and later

Yes (_If -testSuitePath is not used. Otherwise it’s optional_)

-browserType=<browser>

Specify the browser type used for test suite execution.

The following browsers are supported in Katalon:

*   Firefox
*   Chrome
*   IE
*   Safari
*   Remote
*   Android
*   iOS

Yes

-remoteWebDriverType=<Selenium, Appium>

Remote web’s driver type (Selenium or Appium)

Yes _(If -remoteWebDriverUrl is used)_

-deviceId=<device Id for Android/device uuid for ios>

Specify the device’s ID to execute test scripts

Y _(If -browserType=Android or -browserType=iOS is used)_

-consoleLog

Display log in the console.

No

-noExit

Keep the console open after the execution is completed.

No

-summaryReport

Send summary report of a batch run.

No

-statusDelay=<seconds>

System will update the test case’s execution status after the specified seconds.

No

-retry=<number of retry times>

Number of times running test cases in the test suite.

No

-retryFailedTestCases=<true, false>

Retry failed test cases (overriding the setting in the test suite file). Set true if you want to rerun failed test cases and false otherwise.

No

-qTestDestId=<destination’s id>

Id of the destination where the result will be uploaded to

No

-qTestDestType=<destination’s type>

Type of the destination. There are 4 types, including “test-suite”, “test-cycle”,  “release”, and “root”.

No

-reportFolder=<path>

Specify the destination folder to store report files. Can use an absolute path or relative path (relative to the project folder).

No

-reportFileName=<name>

Specify the name of report files (.html, .csv, .log). If not provided, system uses the name “report” (report.html, report.csv, report.log). This option only takes effect when being used with “-reportFolder” option.

No

-remoteWebDriverUrl=<remote web server url>

Specify the remote web driver’s URL

No

-email

The email used to register [Katalon Studio](https://www.katalon.com/)

No _(If Katalon Studio is already activated)_

-password

The corresponding password for the registered email above.

No _(If Katalon Studio is already activated)_

Command Builder
---------------

Instead of typing directly in the command prompt, you can quickly generate commands to execute test suites by following the steps below:    
1\. Click on **Build CMD** from the main toolbar.  
![Build CMD Katalon Studio](../../images/katalon-studio/tutorials/executing_console_mode/Build-CMD.png)

2\. The **Generate Command for Console Mode** dialog is displayed as below. Configure your options as needed.

![Generate Command for Console Mode](../../images/katalon-studio/tutorials/executing_console_mode/Generate-Command-for-Console-Mode.png)  
This dialog has the following options:

Section

Description

Test Suite

The Test Suite or Test Suite Collection to be executed

Executed Platform

The platform used to execute the test:

![Executed Platform Katalon Studio](../../images/katalon-studio/tutorials/executing_console_mode/Executed-Platform.png)

**Remote Web Driver URL** is enabled if you choose to run with a **Remote** option.

**Mobile Device** is enabled if you choose to run with **Android** or **iOS**.

**Custom Execution** is enabled if you choose to run with **Custom **option.

Report Configuration

Extra settings for report after the execution is completed:

![Extra settings for report](../../images/katalon-studio/tutorials/executing_console_mode/Report-Configuration.png)

**Output Location**: the local folder to export the report.

**Use relative path to current project**: display the relative path to the output location, starting from the current project location.

**Report File Name**: the name for your generated report.

**Send Summary Report to recipients below**: enable sending the summary report to recipients who emails are specified Mail Recipients.

Other Options

![Other Report Options](../../images/katalon-studio/tutorials/executing_console_mode/Other-Options.png)

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

```
katalon -propertiesFile="<absolute path to console.properties file>" -runMode=console

```

For example:

```
katalon -propertiesFile="D:\Katalon\Demo_Project\console.properties" -runMode=console

```

4\. You can add extra Katalon command options to this command. Any option already defined in the **console.properties** file will be overwritten by the one declared on the command line.

```
katalon -propertiesFile="<absolute path to console.properties file" -runMode=console -browserType=IE

```

This command runs the test on IE instead of Chrome as _browserType_ is set to IE.