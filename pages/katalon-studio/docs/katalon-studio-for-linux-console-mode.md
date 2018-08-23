---
title: "Katalon Studio for Linux (Console Mode)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon-studio-for-linux-console-mode.html 
description: 
---
Currently, Katalon Studio for Linux has a **Lite** version (Ubuntu tested) which supports only [console mode execution](https://docs.katalon.com/display/KD/Console+Mode+Execution). Katalon Studio **UI** as an IDE is **not** supported yet. This guide will cover basic setups and installation steps for **Linux** version.

#### Download

Sign in with the registered account on Katalon [website](https://www.katalon.com/) and select **Linux version** to download.![](../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/image2018-2-2 11_43_19.png)

#### Activation

Since **only console mode** execution is supported, users **DON'T** need to activate Katalon Studio.   

#### Execution

**VERY IMPORTANT:**

Be

sure to install OpenJDK 8 on your Ubuntu (NOT Oracle JDK). You can find installation steps from here: [http://openjdk.java.net/install/](http://openjdk.java.net/install/). Make sure that after installation, your OpenJDK information is displayed when you execute 'java -version' command:  
![](../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/Screen Shot 2018-02-07 at 11.50.50.png)  
To execute tests, follow the following steps:  
- **Prepare project**: If you have an existing project from **Windows** or **MacOS** or from your **source control**, be **SURE** to delete **.project** file first **after** it is delivered on Linux machine.  
- **Generate**[console mode command](https://docs.katalon.com/display/KD/Console+Mode+Execution#ConsoleModeExecution-CommandBuilder). This command line builder is **NOT** available in Linux version due to lack of IDE UI. Users can generate CMD directly using either Katalon Studio on **Windows** or **Mac OS**.  
\- After a console mode command is generated or built, ensure to adjust the first parameter to be ./katalon . The correct command should look like as below:

```
./katalon -noSplash  -runMode=console -consoleLog -projectPath="/Users/nguyenvinh/Katalon Studio/WebTesting/WebTesting.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome (headless)"
```

  
\- Now use that console mode command in CLI interface to run the command, e.g:

```
cd /home/katalon/Katalon_5.3 ./katalon -noSplash -runMode=console -consoleLog -projectPath="/Users/nguyenvinh/Katalon Studio/WebTesting/WebTesting.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome (headless)"
```

#### Troubleshooting

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Description</th><th class="" style="">Causes (one of the following)</th><th class="" colspan="1" style="">Solutions</th></tr><tr class="" style=""><td class="" style=""><strong class="" style="">Invalid Project Description</strong></td><td class="" style=""><div class="" style="">.project file contains invalid information.<br class="" style=""><br class="" style="">Katalon command was executed lines in the SAME folder of project folder <span class="" style=""><img class="" width="600" src="../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/Screen Shot 2018-02-02 at 11.07.44.png" data-image-src="/download/attachments/13697253/Screen%20Shot%202018-02-02%20at%2011.07.44.png?version=1&amp;modificationDate=1517544706000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697256" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-02-02 at 11.07.44.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697253" data-linked-resource-container-version="1" style=""></span></div></td><td class="" colspan="1" style=""><div class="" style="">-&nbsp;Delete .project file to let Katalon Studio generate back the valid information<br class="" style=""><br class="" style="">-&nbsp;Execute commands outside of executed project folder<br class="" style=""><br class="" style=""><span class="" style=""><img class="" width="600" src="../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/Screen Shot 2018-02-02 at 11.08.52.png" data-image-src="/download/attachments/13697253/Screen%20Shot%202018-02-02%20at%2011.08.52.png?version=1&amp;modificationDate=1517544729000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697258" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-02-02 at 11.08.52.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697253" data-linked-resource-container-version="1" style=""></span></div></td></tr><tr class="" style=""><td class="" colspan="1" style="">'NoClassDefFoundError' error</td><td class="" colspan="1" style="">Oracle JDK is used</td><td class="" colspan="1" style="">-&nbsp;Uninstall current Oracle JDK - Install Open JDK8 after that: <a class="" href="http://openjdk.java.net/install/" rel="nofollow" style="">http://openjdk.java.net/install/</a>.</td></tr></tbody></table>