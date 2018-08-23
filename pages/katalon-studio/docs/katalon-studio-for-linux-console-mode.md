---
title: "Katalon Studio for Linux (Console Mode)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon-studio-for-linux-console-mode.html 
description: 
---
Currently, Katalon Studio for Linux has a **Lite** version (Ubuntu tested) which supports only console mode execution. Katalon Studio **UI** as an IDE is **not** supported yet. This guide will cover basic setups and installation steps for **Linux** version.

#### Download

Sign in with the registered account on Katalon website and select **Linux version** to download.

#### Activation

Since **only console mode** execution is supported, users **DON'T** need to activate Katalon Studio.   

#### Execution

**VERY IMPORTANT:**

Be

sure to install OpenJDK 8 on your Ubuntu (NOT Oracle JDK). You can find installation steps from here: http://openjdk.java.net/install/. Make sure that after installation, your OpenJDK information is displayed when you execute 'java -version' command:  
  
To execute tests, follow the following steps:  
- **Prepare project**: If you have an existing project from **Windows** or **MacOS** or from your **source control**, be **SURE** to delete **.project** file first **after** it is delivered on Linux machine.  
- **Generate**console mode command. This command line builder is **NOT** available in Linux version due to lack of IDE UI. Users can generate CMD directly using either Katalon Studio on **Windows** or **Mac OS**.  
\- After a console mode command is generated or built, ensure to adjust the first parameter to be ./katalon . The correct command should look like as below:

```
./katalon -noSplash  -runMode=console -consoleLog -projectPath="/Users/nguyenvinh/Katalon Studio/WebTesting/WebTesting.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome (headless)"
```

  
\- Now use that console mode command in CLI interface to run the command, e.g:

```
cd /home/katalon/Katalon_5.3 ./katalon -noSplash -runMode=console -consoleLog -projectPath="/Users/nguyenvinh/Katalon Studio/WebTesting/WebTesting.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome (headless)"
```

#### Troubleshooting

| Description | Causes (one of the following) | Solutions |
| --- | --- | --- |
| **Invalid Project Description** | 
.project file contains invalid information.  
  
Katalon command was executed lines in the SAME folder of project folder 

 | 

- Delete .project file to let Katalon Studio generate back the valid information  
  
- Execute commands outside of executed project folder  
  


 |
| 'NoClassDefFoundError' error | Oracle JDK is used | - Uninstall current Oracle JDK - Install Open JDK8 after that: http://openjdk.java.net/install/. |