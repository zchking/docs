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
    
    <table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Item</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style="">katalon</td><td class="xtd-1-1 confluenceTd" style="">The command of Katalon Studio to execute automation test.</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style="">{option(s)}</td><td class="xtd-2-1 confluenceTd" style="">The additional <a href="https://docs.katalon.com/display/KD/Console+Mode+Execution#ConsoleModeExecution-KatalonCommandLineoptions" rel="nofollow" style="">options</a> for the execution.</td></tr></tbody></table>
    
    For example:
    
    ![](../../images/katalon-studio/docs/console-mode-execution/image2016-4-6 13_15_3.png)  
      
    
3.  Press Enter to start execution.

Katalon Command Line options 
-----------------------------

Here’s the list of options supported for the “_katalon_” command:

<table class="wrapped relative-table confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Katalon Command Line Option</th><th class="xtd-0-1 confluenceTh" style="">Description</th><th class="xtd-0-2 confluenceTh" style="">Mandatory?</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><p style="">-runMode=console</p></td><td class="xtd-1-1 confluenceTd" style=""><p style="">Enable console mode.</p></td><td class="xtd-1-2 confluenceTd" style=""><p style="">Y</p></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><p style="">-consoleLog</p></td><td class="xtd-2-1 confluenceTd" style=""><p style="">Display log in the console.</p></td><td class="xtd-2-2 confluenceTd" style=""><p style="">N</p></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" colspan="1" style=""><div class="clearfix _o46 _3erg _3i_m _nd_ direction_ltr text_align_ltr" style=""><div class="_3058 _ui9 _hh7 _s1- _52mr _43by _3oh-" style=""><div class="_aok" style=""><span class="_3oh- _58nk" style="">--config -kobiton.authentication.username=[yourKobitonusername]-kobiton.authentication.password=xxxxx</span></div></div></div></td><td class="xtd-3-1 confluenceTd" colspan="1" style="">Passing Kobiton username and password</td><td class="xtd-3-2 confluenceTd" colspan="1" style="">N</td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style=""><p style="">-noExit</p></td><td class="xtd-4-1 confluenceTd" style=""><p style="">Keep the console open after the execution is completed.</p></td><td class="xtd-4-2 confluenceTd" style=""><p style="">N</p></td></tr><tr class="xtr-5" style=""><td class="xtd-5-0 confluenceTd" style=""><p style="">-summaryReport</p></td><td class="xtd-5-1 confluenceTd" style=""><p style="">Send summary report for a batch run.</p></td><td class="xtd-5-2 confluenceTd" style=""><p style="">N</p></td></tr><tr class="xtr-6" style=""><td class="xtd-6-0 confluenceTd" style=""><p style="">-statusDelay=&lt;seconds&gt;</p></td><td class="xtd-6-1 confluenceTd" style=""><p style="">System will update execution status of the test suite after the delay period (in seconds) specified.</p></td><td class="xtd-6-2 confluenceTd" style=""><p style="">N</p></td></tr><tr class="xtr-7" style=""><td class="xtd-7-0 confluenceTd" style=""><p style="">-projectPath=&lt;path&gt;</p></td><td class="xtd-7-1 confluenceTd" style=""><p style="">Specify the project location (include .prj file). The absolute path must be used in this case.</p></td><td class="xtd-7-2 confluenceTd" style=""><p style="">Y</p></td></tr><tr class="xtr-8" style=""><td class="xtd-8-0 confluenceTd" style=""><p style="">-testSuitePath=&lt;path&gt;</p></td><td class="xtd-8-1 confluenceTd" style=""><p style="">Specify the test suite file (without extension .ts). The relative path (root being project folder) must be used in this case.</p></td><td class="xtd-8-2 confluenceTd" style=""><p style="">Y</p></td></tr><tr class="xtr-9" style=""><td class="xtd-9-0 confluenceTd" colspan="1" style="">-testSuiteCollectionPath=&lt;path&gt;</td><td class="xtd-9-1 confluenceTd" colspan="1" style=""><p style=""><span style="">Specify the test suite file (without extension .tsc). The relative path (root being project folder) must be used in this case.</span></p><p style=""><span style=""><span style="">Note: Available only in 4.4+</span></span></p></td><td class="xtd-9-2 confluenceTd" colspan="1" style="">Y (<em style="">If -testSuitePath is not used. Otherwise it's optional</em>)</td></tr><tr class="xtr-10" style=""><td class="xtd-10-0 confluenceTd" style=""><p style="">-browserType=&lt;browser&gt;</p></td><td class="xtd-10-1 confluenceTd" style=""><p style="">Specify the browser type used for test suite execution.</p><p style="">The following browsers are supported in Katalon:</p><ul style=""><li style="">Firefox</li><li style="">Chrome</li><li style="">IE</li><li style="">Safari</li><li style="">Remote</li><li style="">Android</li><li style="">iOS</li></ul></td><td class="xtd-10-2 confluenceTd" style=""><p style="">Y</p><p style=""><strong style="">Only Chrome, Firefox and Remote is available for use in Linux version</strong></p></td></tr><tr class="xtr-11" style=""><td class="xtd-11-0 confluenceTd" colspan="1" style="">-retry=&lt;number of retry times&gt;</td><td class="xtd-11-1 confluenceTd" colspan="1" style="">Number of times running test cases in the test suite.</td><td class="xtd-11-2 confluenceTd" colspan="1" style="">N</td></tr><tr class="xtr-12" style=""><td class="xtd-12-0 confluenceTd" colspan="1" style="">-retryFailedTestCases=&lt;true, false&gt;</td><td class="xtd-12-1 confluenceTd" colspan="1" style="">Retry failed test cases fail in test suite ( override setting in test suite file ). There are 2 options for retry: true if you want run fail test case and otherwise false</td><td class="xtd-12-2 confluenceTd" colspan="1" style="">N</td></tr><tr class="xtr-13" style=""><td class="xtd-13-0 confluenceTd" colspan="1" style="">-qTestDestId=&lt;destination's id&gt;</td><td class="xtd-13-1 confluenceTd" colspan="1" style="">Id of the destination where the result will be uploaded on it</td><td class="xtd-13-2 confluenceTd" colspan="1" style="">N</td></tr><tr class="xtr-14" style=""><td class="xtd-14-0 confluenceTd" colspan="1" style="">-qTestDestType=&lt;destination's type&gt;</td><td class="xtd-14-1 confluenceTd" colspan="1" style="">Type of the destination. There are 4 options for destination's type:"test-suite", "test-cycle", <span class="Apple-tab-span" style="">&nbsp;</span>"release", and "root".</td><td class="xtd-14-2 confluenceTd" colspan="1" style="">N</td></tr><tr class="xtr-15" style=""><td class="xtd-15-0 confluenceTd" style=""><p style="">-reportFolder=&lt;path&gt;</p></td><td class="xtd-15-1 confluenceTd" style=""><p style="">Specify the destination folder for saving report files. Can use absolute path or relative path (root being project folder).</p></td><td class="xtd-15-2 confluenceTd" style=""><p style="">N</p></td></tr><tr class="xtr-16" style=""><td class="xtd-16-0 confluenceTd" style=""><p style="">-reportFileName=&lt;name&gt;</p></td><td class="xtd-16-1 confluenceTd" style=""><p style="">Specify the name for report files (.html, .csv, .log). If not provide, system uses the name "report" (report.html, report.csv, report.log). This option is only taken into account when being used with “-reportFolder” option.</p></td><td class="xtd-16-2 confluenceTd" style=""><p style="">N</p></td></tr><tr class="xtr-17" style=""><td class="xtd-17-0 confluenceTd" style=""><p style="">-remoteWebDriverUrl=&lt;remote web server url&gt;</p></td><td class="xtd-17-1 confluenceTd" style=""><p style="">Specify the remote web driver URL</p></td><td class="xtd-17-2 confluenceTd" style=""><p style="">N</p></td></tr><tr class="xtr-18" style=""><td class="xtd-18-0 confluenceTd" colspan="1" style="">-remoteWebDriverType=&lt;Selenium, Appium&gt;</td><td class="xtd-18-1 confluenceTd" colspan="1" style="">Remote web's driver type</td><td class="xtd-18-2 confluenceTd" colspan="1" style="">Y <em style="">(If -remoteWebDriverUrl is used)</em></td></tr><tr class="xtr-19" style=""><td class="xtd-19-0 confluenceTd" style=""><p style="">-deviceId=&lt;device Id for Android/device uuid for ios&gt;</p></td><td class="xtd-19-1 confluenceTd" style=""><p style="">Specify the device's ID to execute test scripts using this device</p></td><td class="xtd-19-2 confluenceTd" style=""><p style="">Y<em style=""> (If -browserType=Android or -browserType=iOS is used)</em></p></td></tr><tr class="xtr-20" style=""><td class="xtd-20-0 confluenceTd" colspan="1" style="">-email</td><td class="xtd-20-1 confluenceTd" colspan="1" style="">Registered email on <a class="external-link" href="https://www.katalon.com/" rel="nofollow" style="">Katalon Studio</a> page</td><td class="xtd-20-2 confluenceTd" colspan="1" style="">N <em style="">(If Katalon Studio is already activated)</em></td></tr><tr class="xtr-21" style=""><td class="xtd-21-0 xtd-21-1 xtd-21-2 confluenceTd" colspan="3" style=""><strong style="">These proxy options below must be used with --config parameter</strong></td></tr><tr class="xtr-22" style=""><td class="xtd-22-0 confluenceTd" style="">-proxy.option</td><td class="xtd-22-1 confluenceTd" style=""><span style="">NO_PROXY, USE_SYSTEM, MANUAL_CONFIG</span></td><td class="xtd-22-2 confluenceTd" style="">Y</td></tr><tr class="xtr-23" style=""><td class="xtd-23-0 confluenceTd" style="">-proxy.server.type</td><td class="xtd-23-1 confluenceTd" style=""><span style="">&nbsp;HTTP, HTTPS, or SOCKS</span></td><td class="xtd-23-2 confluenceTd" style="">Y</td></tr><tr class="xtr-24" style=""><td class="xtd-24-0 confluenceTd" style="">-proxy.server.address</td><td class="xtd-24-1 confluenceTd" style=""><span style="">Example: locahost,&nbsp;</span><a class="external-link" href="http://katalon.com/" rel="nofollow" style="">http://katalon.com</a></td><td class="xtd-24-2 confluenceTd" style="">Y</td></tr><tr class="xtr-25" style=""><td class="xtd-25-0 confluenceTd" style="">-proxy.server.port</td><td class="xtd-25-1 confluenceTd" style=""><span style="">Example: 80, 8080, 9999</span></td><td class="xtd-25-2 confluenceTd" style="">Y</td></tr><tr class="xtr-26" style=""><td class="xtd-26-0 confluenceTd" style="">-proxy.username</td><td class="xtd-26-1 confluenceTd" style=""><span style="">Example:&nbsp;MyProxyUsername</span></td><td class="xtd-26-2 confluenceTd" style=""><span style="">Optional (YES if your proxy server requires authentication)</span></td></tr><tr class="xtr-27" style=""><td class="xtd-27-0 confluenceTd" style="">-proxy.password</td><td class="xtd-27-1 confluenceTd" style=""><span style="">Example: MyProxyPassword</span></td><td class="xtd-27-2 confluenceTd" style=""><span style="">Optional (YES if your proxy server requires authentication)</span></td></tr><tr class="xtr-28" style=""><td class="xtd-28-0 xtd-28-1 xtd-28-2 confluenceTd" colspan="3" style="">Example: <code class="java plain" style="">katalon -noSplash&nbsp; -runMode=console -consoleLog -noExit -projectPath=</code><code class="java string" style="">"C:\Users\Katalon Studio\Project\YourProject.prj"</code><span style="">&nbsp;</span><code class="java plain" style="">-retry=</code><code class="java value" style="">0</code><span style="">&nbsp;</span><code class="java plain" style="">-testSuitePath=</code><code class="java string" style="">"Test Suites/TS_RegressionTest"</code><span style="">&nbsp;</span><code class="java plain" style="">-browserType=</code><code class="java string" style="">"Chrome (headless)"</code><span style="">&nbsp;</span><code class="java plain" style="">--config -proxy.option=MANUAL_CONFIG -proxy.server.type=HTTP -proxy.server.address=</code><code class="java string" style="">"http://192.168.12.32"</code><span style="">&nbsp;</span><code class="java plain" style="">-proxy.server.port=</code><code class="java string" style="">"8888"</code><div style=""><div class="syntaxhighlighter sh-confluence nogutter  java" style=""><p style="">&nbsp;</p><p style="">&nbsp;</p></div></div></td></tr><tr class="xtr-29" style=""><td class="xtd-29-0 confluenceTd" colspan="1" style="">-executionProfile</td><td class="xtd-29-1 confluenceTd" colspan="1" style=""><p style=""><strong style="">Since 5.4</strong></p><p style="">Specify the&nbsp;<a href="/pages/viewpage.action?pageId=13697476" style="">execution profile</a>&nbsp;to be executed with</p></td><td class="xtd-29-2 confluenceTd" colspan="1" style="">N</td></tr></tbody></table>

Command Builder
---------------

You can quickly generate commands to use in console mode by following the steps below:  

1.  Click on **Build CMD** from the main toolbar.  
    ![](../../images/katalon-studio/docs/console-mode-execution/Screenshot at Jun 20 15-42-46.png)  
      
    
2.  The **Generate Command for Console Mode** is displayed. Configure your options as needed.  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2018-2-9 11_44_30.png)  
    where:
    
    <table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Section</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style="">Test Suite</td><td class="xtd-1-1 confluenceTd" style="">The Test Suite or Test Suite Collection to be executed</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style="">Executed Platform</td><td class="xtd-2-1 confluenceTd" style=""><div class="content-wrapper" style=""><p style="">The platform to execute the test on. Select an environment</p><p style=""><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size" style=""><img class="confluence-embedded-image" height="400" src="../../images/katalon-studio/docs/console-mode-execution/image2018-2-9 12_1_31.png" data-image-src="/download/attachments/786521/image2018-2-9%2012%3A1%3A31.png?version=1&amp;modificationDate=1518152491000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697307" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-2-9 12:1:31.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786521" data-linked-resource-container-version="2" style=""></span></p><p style="">&nbsp;</p></div></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style="">Other Options</td><td class="xtd-3-1 confluenceTd" style=""><div class="content-wrapper" style=""><p style=""><span class="confluence-embedded-file-wrapper" style=""><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/console-mode-execution/image2017-2-17 16_19_15.png" data-image-src="/download/attachments/786521/image2017-2-17%2016%3A19%3A15.png?version=1&amp;modificationDate=1487323155000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112643" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-17 16:19:15.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786521" data-linked-resource-container-version="2" style=""></span></p></div></td></tr></tbody></table>
    
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