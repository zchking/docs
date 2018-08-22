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
    
    ```groovy
    katalon {option1} {option2} ... {optionN}
    ```
    
    **Mac OS:**
    
    ```groovy
    ./Katalon\ Studio.app/Contents/MacOS/katalon --args {option1} {option2} ... {optionN}
    ```
    
    **Linux**:
    
    ```groovy
    ./katalon {option1} {option2} ... {optionN}
    ```
    
      
    where:
    
    <table class="wrapped confluenceTable"><colgroup><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Item</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd">katalon</td><td class="xtd-1-1 confluenceTd">The command of Katalon Studio to execute automation test.</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd">{option(s)}</td><td class="xtd-2-1 confluenceTd">The additional <a href="https://docs.katalon.com/display/KD/Console+Mode+Execution#ConsoleModeExecution-KatalonCommandLineoptions" rel="nofollow">options</a> for the execution.</td></tr></tbody></table>
    
    For example:
    
    ![](../../images/katalon-studio/docs/console-mode-execution/image2016-4-6 13_15_3.png)  
      
    
3.  Press Enter to start execution.

Katalon Command Line options 
-----------------------------

Here’s the list of options supported for the “_katalon_” command:

<table class="wrapped relative-table confluenceTable" style="width: 95.6425%;"><colgroup><col style="width: 27.7193%;"><col style="width: 36.9591%;"><col style="width: 21.7544%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh"><p><strong>Katalon Command Line Option</strong></p></th><th class="xtd-0-1 confluenceTh"><p><strong>Description</strong></p></th><th class="xtd-0-2 confluenceTh"><p><strong>Mandatory?</strong></p></th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><p>-runMode=console</p></td><td class="xtd-1-1 confluenceTd"><p>Enable console mode.</p></td><td class="xtd-1-2 confluenceTd"><p>Y</p></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><p>-consoleLog</p></td><td class="xtd-2-1 confluenceTd"><p>Display log in the console.</p></td><td class="xtd-2-2 confluenceTd"><p>N</p></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd" colspan="1"><div class="clearfix _o46 _3erg _3i_m _nd_ direction_ltr text_align_ltr"><div class="_3058 _ui9 _hh7 _s1- _52mr _43by _3oh-"><div class="_aok"><span class="_3oh- _58nk">--config -kobiton.authentication.username=[yourKobitonusername]-kobiton.authentication.password=xxxxx</span></div></div></div></td><td class="xtd-3-1 confluenceTd" colspan="1">Passing Kobiton username and password</td><td class="xtd-3-2 confluenceTd" colspan="1">N</td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd"><p>-noExit</p></td><td class="xtd-4-1 confluenceTd"><p>Keep the console open after the execution is completed.</p></td><td class="xtd-4-2 confluenceTd"><p>N</p></td></tr><tr class="xtr-5"><td class="xtd-5-0 confluenceTd"><p>-summaryReport</p></td><td class="xtd-5-1 confluenceTd"><p>Send summary report for a batch run.</p></td><td class="xtd-5-2 confluenceTd"><p>N</p></td></tr><tr class="xtr-6"><td class="xtd-6-0 confluenceTd"><p>-statusDelay=&lt;seconds&gt;</p></td><td class="xtd-6-1 confluenceTd"><p>System will update execution status of the test suite after the delay period (in seconds) specified.</p></td><td class="xtd-6-2 confluenceTd"><p>N</p></td></tr><tr class="xtr-7"><td class="xtd-7-0 confluenceTd"><p>-projectPath=&lt;path&gt;</p></td><td class="xtd-7-1 confluenceTd"><p>Specify the project location (include .prj file). The absolute path must be used in this case.</p></td><td class="xtd-7-2 confluenceTd"><p>Y</p></td></tr><tr class="xtr-8"><td class="xtd-8-0 confluenceTd"><p>-testSuitePath=&lt;path&gt;</p></td><td class="xtd-8-1 confluenceTd"><p>Specify the test suite file (without extension .ts). The relative path (root being project folder) must be used in this case.</p></td><td class="xtd-8-2 confluenceTd"><p>Y</p></td></tr><tr class="xtr-9"><td class="xtd-9-0 confluenceTd" colspan="1">-testSuiteCollectionPath=&lt;path&gt;</td><td class="xtd-9-1 confluenceTd" colspan="1"><p><span>Specify the test suite file (without extension .tsc). The relative path (root being project folder) must be used in this case.</span></p><p><span><span>Note: Available only in 4.4+</span></span></p></td><td class="xtd-9-2 confluenceTd" colspan="1">Y (<em>If -testSuitePath is not used. Otherwise it's optional</em>)</td></tr><tr class="xtr-10"><td class="xtd-10-0 confluenceTd"><p>-browserType=&lt;browser&gt;</p></td><td class="xtd-10-1 confluenceTd"><p>Specify the browser type used for test suite execution.</p><p>The following browsers are supported in Katalon:</p><ul><li>Firefox</li><li>Chrome</li><li>IE</li><li>Safari</li><li>Remote</li><li>Android</li><li>iOS</li></ul></td><td class="xtd-10-2 confluenceTd"><p>Y</p><p><strong>Only Chrome, Firefox and Remote is available for use in Linux version</strong></p></td></tr><tr class="xtr-11"><td class="xtd-11-0 confluenceTd" colspan="1">-retry=&lt;number of retry times&gt;</td><td class="xtd-11-1 confluenceTd" colspan="1">Number of times running test cases in the test suite.</td><td class="xtd-11-2 confluenceTd" colspan="1">N</td></tr><tr class="xtr-12"><td class="xtd-12-0 confluenceTd" colspan="1">-retryFailedTestCases=&lt;true, false&gt;</td><td class="xtd-12-1 confluenceTd" colspan="1">Retry failed test cases fail in test suite ( override setting in test suite file ). There are 2 options for retry: true if you want run fail test case and otherwise false</td><td class="xtd-12-2 confluenceTd" colspan="1">N</td></tr><tr class="xtr-13"><td class="xtd-13-0 confluenceTd" colspan="1">-qTestDestId=&lt;destination's id&gt;</td><td class="xtd-13-1 confluenceTd" colspan="1">Id of the destination where the result will be uploaded on it</td><td class="xtd-13-2 confluenceTd" colspan="1">N</td></tr><tr class="xtr-14"><td class="xtd-14-0 confluenceTd" colspan="1">-qTestDestType=&lt;destination's type&gt;</td><td class="xtd-14-1 confluenceTd" colspan="1">Type of the destination. There are 4 options for destination's type:"test-suite", "test-cycle", <span class="Apple-tab-span">&nbsp;</span>"release", and "root".</td><td class="xtd-14-2 confluenceTd" colspan="1">N</td></tr><tr class="xtr-15"><td class="xtd-15-0 confluenceTd"><p>-reportFolder=&lt;path&gt;</p></td><td class="xtd-15-1 confluenceTd"><p>Specify the destination folder for saving report files. Can use absolute path or relative path (root being project folder).</p></td><td class="xtd-15-2 confluenceTd"><p>N</p></td></tr><tr class="xtr-16"><td class="xtd-16-0 confluenceTd"><p>-reportFileName=&lt;name&gt;</p></td><td class="xtd-16-1 confluenceTd"><p>Specify the name for report files (.html, .csv, .log). If not provide, system uses the name "report" (report.html, report.csv, report.log). This option is only taken into account when being used with “-reportFolder” option.</p></td><td class="xtd-16-2 confluenceTd"><p>N</p></td></tr><tr class="xtr-17"><td class="xtd-17-0 confluenceTd"><p>-remoteWebDriverUrl=&lt;remote web server url&gt;</p></td><td class="xtd-17-1 confluenceTd"><p>Specify the remote web driver URL</p></td><td class="xtd-17-2 confluenceTd"><p>N</p></td></tr><tr class="xtr-18"><td class="xtd-18-0 confluenceTd" colspan="1">-remoteWebDriverType=&lt;Selenium, Appium&gt;</td><td class="xtd-18-1 confluenceTd" colspan="1">Remote web's driver type</td><td class="xtd-18-2 confluenceTd" colspan="1">Y <em>(If -remoteWebDriverUrl is used)</em></td></tr><tr class="xtr-19"><td class="xtd-19-0 confluenceTd"><p>-deviceId=&lt;device Id for Android/device uuid for ios&gt;</p></td><td class="xtd-19-1 confluenceTd"><p>Specify the device's ID to execute test scripts using this device</p></td><td class="xtd-19-2 confluenceTd"><p>Y<em> (If -browserType=Android or -browserType=iOS is used)</em></p></td></tr><tr class="xtr-20"><td class="xtd-20-0 confluenceTd" colspan="1">-email</td><td class="xtd-20-1 confluenceTd" colspan="1">Registered email on <a class="external-link" href="https://www.katalon.com/" rel="nofollow">Katalon Studio</a> page</td><td class="xtd-20-2 confluenceTd" colspan="1">N <em>(If Katalon Studio is already activated)</em></td></tr><tr class="xtr-21"><td class="xtd-21-0 xtd-21-1 xtd-21-2 confluenceTd" colspan="3"><strong>These proxy options below must be used with --config parameter</strong></td></tr><tr class="xtr-22"><td class="xtd-22-0 confluenceTd">-proxy.option</td><td class="xtd-22-1 confluenceTd"><span>NO_PROXY, USE_SYSTEM, MANUAL_CONFIG</span></td><td class="xtd-22-2 confluenceTd">Y</td></tr><tr class="xtr-23"><td class="xtd-23-0 confluenceTd">-proxy.server.type</td><td class="xtd-23-1 confluenceTd"><span>&nbsp;HTTP, HTTPS, or SOCKS</span></td><td class="xtd-23-2 confluenceTd">Y</td></tr><tr class="xtr-24"><td class="xtd-24-0 confluenceTd">-proxy.server.address</td><td class="xtd-24-1 confluenceTd"><span>Example: locahost,&nbsp;</span><a class="external-link" href="http://katalon.com/" rel="nofollow">http://katalon.com</a></td><td class="xtd-24-2 confluenceTd">Y</td></tr><tr class="xtr-25"><td class="xtd-25-0 confluenceTd">-proxy.server.port</td><td class="xtd-25-1 confluenceTd"><span>Example: 80, 8080, 9999</span></td><td class="xtd-25-2 confluenceTd">Y</td></tr><tr class="xtr-26"><td class="xtd-26-0 confluenceTd">-proxy.username</td><td class="xtd-26-1 confluenceTd"><span>Example:&nbsp;MyProxyUsername</span></td><td class="xtd-26-2 confluenceTd"><span>Optional (YES if your proxy server requires authentication)</span></td></tr><tr class="xtr-27"><td class="xtd-27-0 confluenceTd">-proxy.password</td><td class="xtd-27-1 confluenceTd"><span>Example: MyProxyPassword</span></td><td class="xtd-27-2 confluenceTd"><span>Optional (YES if your proxy server requires authentication)</span></td></tr><tr class="xtr-28"><td class="xtd-28-0 xtd-28-1 xtd-28-2 confluenceTd" colspan="3">Example: <code class="java plain">katalon -noSplash&nbsp; -runMode=console -consoleLog -noExit -projectPath=</code><code class="java string">"C:\Users\Katalon Studio\Project\YourProject.prj"</code><span>&nbsp;</span><code class="java plain">-retry=</code><code class="java value">0</code><span>&nbsp;</span><code class="java plain">-testSuitePath=</code><code class="java string">"Test Suites/TS_RegressionTest"</code><span>&nbsp;</span><code class="java plain">-browserType=</code><code class="java string">"Chrome (headless)"</code><span>&nbsp;</span><code class="java plain">--config -proxy.option=MANUAL_CONFIG -proxy.server.type=HTTP -proxy.server.address=</code><code class="java string">"http://192.168.12.32"</code><span>&nbsp;</span><code class="java plain">-proxy.server.port=</code><code class="java string">"8888"</code><div><div class="syntaxhighlighter sh-confluence nogutter  java"><p>&nbsp;</p><p>&nbsp;</p></div></div></td></tr><tr class="xtr-29"><td class="xtd-29-0 confluenceTd" colspan="1">-executionProfile</td><td class="xtd-29-1 confluenceTd" colspan="1"><p><strong>Since 5.4</strong></p><p>Specify the&nbsp;<a href="/pages/viewpage.action?pageId=13697476">execution profile</a>&nbsp;to be executed with</p></td><td class="xtd-29-2 confluenceTd" colspan="1">N</td></tr></tbody></table>

Command Builder
---------------

You can quickly generate commands to use in console mode by following the steps below:  

1.  Click on **Build CMD** from the main toolbar.  
    ![](../../images/katalon-studio/docs/console-mode-execution/Screenshot at Jun 20 15-42-46.png)  
      
    
2.  The **Generate Command for Console Mode** is displayed. Configure your options as needed.  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2018-2-9 11_44_30.png)  
    where:
    
    <table class="relative-table wrapped confluenceTable" style="width: 66.5571%;"><colgroup><col style="width: 19.0358%;"><col style="width: 80.9642%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Section</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd">Test Suite</td><td class="xtd-1-1 confluenceTd">The Test Suite or Test Suite Collection to be executed</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd">Executed Platform</td><td class="xtd-2-1 confluenceTd"><div class="content-wrapper"><p>The platform to execute the test on. Select an environment</p><p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img class="confluence-embedded-image" height="400" src="../../images/katalon-studio/docs/console-mode-execution/image2018-2-9 12_1_31.png" data-image-src="/download/attachments/786521/image2018-2-9%2012%3A1%3A31.png?version=1&amp;modificationDate=1518152491000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697307" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-2-9 12:1:31.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786521" data-linked-resource-container-version="2"></span></p><p>&nbsp;</p></div></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd">Other Options</td><td class="xtd-3-1 confluenceTd"><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/console-mode-execution/image2017-2-17 16_19_15.png" data-image-src="/download/attachments/786521/image2017-2-17%2016%3A19%3A15.png?version=1&amp;modificationDate=1487323155000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112643" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-17 16:19:15.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786521" data-linked-resource-container-version="2"></span></p></div></td></tr></tbody></table>
    
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
    
    ```groovy
    katalon -propertiesFile="<absolute path to console.properties file>" -runMode=console
    ```
    
    For example:
    
    ```groovy
    katalon -propertiesFile="D:\Katalon\Demo_Project\console.properties" -runMode=console
    ```
    
4.  You can add extra Katalon command options if needed. Any option already defined in the **console.properties** file will be overwritten by the one declared in command line.  
    
    ```groovy
    katalon -propertiesFile="<absolute path to console.properties file" -runMode=console -browserType=IE 
    ```
    
    In the above example, since we also declare _browserType_ option in command line, the automation test will be executed using IE instead of Chrome.