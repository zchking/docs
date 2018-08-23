---
title: "Tutorial: Set up Katalon Studio with Jenkins" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/tutorial-set-up-katalon-studio-with-jenkins.html 
description: 
---
Prerequisites
-------------

1.  Katalon Studio command to be used for console mode execution. Refer to section Console Mode Execution for how to build up a Katalon command. Here is the basic command template:
    
    ```
    katalon -runMode=console -projectPath="<YOUR PROJECT>" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath=<YOUR TEST SUITE PATH> -browserType="Chrome"
    ```
    

Your command should NOT include -noExit and -consoleLog parameters so that CI logs can be displayed directly from the job view

2\. CI tool is installed and setup properly. In this example, we will use Jenkins, which is a popular CI and easy to integrate with.

Configuration Steps
-------------------

1.  Create a New item in Jenkins  
    

2\. Enter job name (e.g "Katalon Studio Tests"), and then choose "Freestyle Project"

3\. Add execution step

**mac OS**

3.1 Add "Execute Shell" step

3.2 Paste in generated Katalon Studio command

```
./Katalon\ Studio.app/Contents/MacOS/katalon --args -runMode=console -projectPath="/Users/admin/Katalon Studio/Samples/Sample Project.prj" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome"
```

**Windows**

3.1 Add "Execute Windows batch command"

3.2 Paste in generated Katalon Studio command.

```
katalon -runMode=console -projectPath="C:\Project\Sample Project.prj" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome"
```

4\. Check on 'Delete workspace before build starts' in current job configuration to prevent corrupted project folder after long run.

Exit Codes
----------

When you execute Katalon Studio command from CI , exit code will be generated as the output of your execution. You can use this exit code to know whether your execution is successful, passed or failed.  

Below is the list of exit codes after console mode execution:

*   0: the execution passed with no failed or error test case.
*   1: the execution has failed test cases.
*   2: the execution has error test cases.
*   3: the execution has failed test cases and error test cases.
*   4: the execution cannot start because of invalid arguments.

Publish JUnit reports
---------------------

From Katalon Studio 4.7, JUnit report is generated when you execute a test suite. In order for Jenkins to store , analyze and show results, please add 'Publish JUnit test result report' item.

  

Set the 'Test Report XMLs' value to your Reports folder to fetch all generated JUnit reports.

  

After executions from Jenkins job, click on 'Test Results Analyzer' item

All test executions from the folder you've specified will be summarized and displayed in visualize way.