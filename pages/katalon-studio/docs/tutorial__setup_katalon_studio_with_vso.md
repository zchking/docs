---
title: "Tutorial: Setup Katalon Studio with VSO" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/tutorial__setup_katalon_studio_with_vso.html 
description: 
---
Below is a general guide on how to configure Katalon Studio on VSO with the assumptions that you guys know VSO terms such as agent, build, task......

1.     **Setup agent:**

Follow setup guide: [https://www.visualstudio.com/en-us/docs/build/actions/agents/v2-windows](https://www.visualstudio.com/en-us/docs/build/actions/agents/v2-windows) to setup and run a local agent.

Make sure the agent is in **‘Online’ **status. 

![](../../images/katalon-studio/docs/tutorial__setup_katalon_studio_with_vso/image2018-6-15 10_49_47.png)

**2.****Setup build steps:**

Add new build task: “Command Line”:

![](../../images/katalon-studio/docs/tutorial__setup_katalon_studio_with_vso/image2018-6-15 10_49_54.png)

*   · **Tool:** katalon.exe
*   · **Arguments:** Generated command line from Katalon Studio (WITHOUT katalon prefix) to be used in console mode ([https://docs.katalon.com/display/KD/Console+Mode+Execution](https://docs.katalon.com/display/KD/Console+Mode+Execution))
    *   o -projectPath value uses VSO build variable to get project location, e.g: -**runMode=console -projectPath="$(Build.SourcesDirectory)\\Sample Web Testing Project.prj" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome" -noSplash**
*   · **Advanced:**
    *   o Working folder: Select Katalon Studio folder, e.g: C:\\4.6\\Katalon Studio Windows 64

![](../../images/katalon-studio/docs/tutorial__setup_katalon_studio_with_vso/image2018-6-15 10_50_2.png)

3.    **Build your project with the agent:**

Configure your project to be built with the agent. In my case, my agent is in ‘Default’ queue group, so I will choose ‘Default’ queue when selecting new build.

![](../../images/katalon-studio/docs/tutorial__setup_katalon_studio_with_vso/image2018-6-15 10_50_8.png)

That's it!. When the project is built, it will start Katalon Studio and execute the input test suite based on your command.

![](../../images/katalon-studio/docs/tutorial__setup_katalon_studio_with_vso/image2018-6-15 10_50_14.png)