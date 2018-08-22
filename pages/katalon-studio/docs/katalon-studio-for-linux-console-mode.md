---
title: "Katalon Studio for Linux (Console Mode)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon-studio-for-linux-console-mode.html 
description: 
---
Currently, Katalon Studio for Linux has a **Lite** version (Ubuntu tested) which supports only [console mode execution](https://docs.katalon.com/display/KD/Console+Mode+Execution). Katalon Studio **UI** as an IDE is **not** supported yet. This guide will cover basic setups and installation steps for **Linux** version.

#### **Download**

Sign in with the registered account on Katalon [website](https://www.katalon.com/) and select **Linux version** to download.![](../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/image2018-2-2 11_43_19.png)

#### **Activation**

Since **only console mode** execution is supported, users **DON'T** need to activate Katalon Studio.   

#### **Execution**

**VERY IMPORTANT:**

Be

sure to install OpenJDK 8 on your Ubuntu (NOT Oracle JDK). You can find installation steps from here: [http://openjdk.java.net/install/](http://openjdk.java.net/install/). Make sure that after installation, your OpenJDK information is displayed when you execute 'java -version' command:  
![](../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/Screen Shot 2018-02-07 at 11.50.50.png)  
To execute tests, follow the following steps:  
- **Prepare project**: If you have an existing project from **Windows** or **MacOS** or from your **source control**, be **SURE** to delete **.project** file first **after** it is delivered on Linux machine.  
- **Generate**[console mode command](https://docs.katalon.com/display/KD/Console+Mode+Execution#ConsoleModeExecution-CommandBuilder). This command line builder is **NOT** available in Linux version due to lack of IDE UI. Users can generate CMD directly using either Katalon Studio on **Windows** or **Mac OS**.  
\- After a console mode command is generated or built, ensure to adjust the first parameter to be ./katalon . The correct command should look like as below:

```groovy
./katalon -noSplash  -runMode=console -consoleLog -projectPath="/Users/nguyenvinh/Katalon Studio/WebTesting/WebTesting.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome (headless)"
```

  
\- Now use that console mode command in CLI interface to run the command, e.g:

```groovy
cd /home/katalon/Katalon_5.3 ./katalon -noSplash -runMode=console -consoleLog -projectPath="/Users/nguyenvinh/Katalon Studio/WebTesting/WebTesting.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome (headless)"
```

####   
**Troubleshooting**

<table class="wrapped relative-table confluenceTable" style="width: 93.0031%;"><colgroup><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Description</th><th class="xtd-0-1 confluenceTh">Causes (one of the following)</th><th class="xtd-0-2 confluenceTh" colspan="1">Solutions</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><strong>Invalid Project Description</strong></td><td class="xtd-1-1 confluenceTd"><div class="content-wrapper">.project file contains invalid information.<br><br>Katalon command was executed lines in the SAME folder of project folder <span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img class="confluence-embedded-image" width="600" src="../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/Screen Shot 2018-02-02 at 11.07.44.png" data-image-src="/download/attachments/13697253/Screen%20Shot%202018-02-02%20at%2011.07.44.png?version=1&amp;modificationDate=1517544706000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697256" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-02-02 at 11.07.44.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697253" data-linked-resource-container-version="1"></span></div></td><td class="xtd-1-2 confluenceTd" colspan="1"><div class="content-wrapper">-&nbsp;Delete .project file to let Katalon Studio generate back the valid information<br><br>-&nbsp;Execute commands outside of executed project folder<br><br><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img class="confluence-embedded-image" width="600" src="../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/Screen Shot 2018-02-02 at 11.08.52.png" data-image-src="/download/attachments/13697253/Screen%20Shot%202018-02-02%20at%2011.08.52.png?version=1&amp;modificationDate=1517544729000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697258" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-02-02 at 11.08.52.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13697253" data-linked-resource-container-version="1"></span></div></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1">'NoClassDefFoundError' error</td><td class="xtd-2-1 confluenceTd" colspan="1">Oracle JDK is used</td><td class="xtd-2-2 confluenceTd" colspan="1">-&nbsp;Uninstall current Oracle JDK - Install Open JDK8 after that: <a class="external-link" href="http://openjdk.java.net/install/" rel="nofollow">http://openjdk.java.net/install/</a>.</td></tr></tbody></table>