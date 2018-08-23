---
title: "Console Mode Execution" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/console-mode-execution.html 
description: 
---
Only **Chrome, Firefox and Remote** options are supported for console mode execution **using Linux version.**

You can execute automation test without launching Katalon Studio by using command line mode execution. 

Execute Katalon in CMD
======================

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
    
    <table><thead><tr><th>Item</th><th>Description</th></tr></thead><tbody><tr><td>katalon</td><td>The command of Katalon Studio to execute automation test.</td></tr><tr><td>{option(s)}</td><td>The additional <a href="https://docs.katalon.com/display/KD/Console+Mode+Execution#ConsoleModeExecution-KatalonCommandLineoptions" rel="nofollow">options</a> for the execution.</td></tr></tbody></table>
    
    For example:
    
    ![](../../images/katalon-studio/docs/console-mode-execution/image2016-4-6 13_15_3.png)  
      
    
3.  Press Enter to start execution.

Katalon Command Line options 
=============================

Here’s the list of options supported for the “_katalon_” command:

<table><thead><tr><th>Katalon Command Line Option</th><th>Description</th><th>Mandatory?</th></tr></thead><tbody><tr><td><p>-runMode=console</p></td><td><p>Enable console mode.</p></td><td><p>Y</p></td></tr><tr><td><p>-consoleLog</p></td><td><p>Display log in the console.</p></td><td><p>N</p></td></tr><tr><td><div class="clearfix _o46 _3erg _3i_m _nd_ direction_ltr text_align_ltr"><div class="_3058 _ui9 _hh7 _s1- _52mr _43by _3oh-"><div class="_aok"><span class="_3oh- _58nk">--config -kobiton.authentication.username=[yourKobitonusername]-kobiton.authentication.password=xxxxx</span></div></div></div></td><td>Passing Kobiton username and password</td><td>N</td></tr><tr><td><p>-noExit</p></td><td><p>Keep the console open after the execution is completed.</p></td><td><p>N</p></td></tr><tr><td><p>-summaryReport</p></td><td><p>Send summary report for a batch run.</p></td><td><p>N</p></td></tr><tr><td><p>-statusDelay=&lt;seconds&gt;</p></td><td><p>System will update execution status of the test suite after the delay period (in seconds) specified.</p></td><td><p>N</p></td></tr><tr><td><p>-projectPath=&lt;path&gt;</p></td><td><p>Specify the project location (include .prj file). The absolute path must be used in this case.</p></td><td><p>Y</p></td></tr><tr><td><p>-testSuitePath=&lt;path&gt;</p></td><td><p>Specify the test suite file (without extension .ts). The relative path (root being project folder) must be used in this case.</p></td><td><p>Y</p></td></tr><tr><td>-testSuiteCollectionPath=&lt;path&gt;</td><td><p><span>Specify the test suite file (without extension .tsc). The relative path (root being project folder) must be used in this case.</span></p><p><span><span>Note: Available only in 4.4+</span></span></p></td><td>Y (<em>If -testSuitePath is not used. Otherwise it's optional</em>)</td></tr><tr><td><p>-browserType=&lt;browser&gt;</p></td><td><p>Specify the browser type used for test suite execution.</p><p>The following browsers are supported in Katalon:</p><ul><li>Firefox</li><li>Chrome</li><li>IE</li><li>Safari</li><li>Remote</li><li>Android</li><li>iOS</li></ul></td><td><p>Y</p><p><strong>Only Chrome, Firefox and Remote is available for use in Linux version</strong></p></td></tr><tr><td>-retry=&lt;number of retry times&gt;</td><td>Number of times running test cases in the test suite.</td><td>N</td></tr><tr><td>-retryFailedTestCases=&lt;true, false&gt;</td><td>Retry failed test cases fail in test suite ( override setting in test suite file ). There are 2 options for retry: true if you want run fail test case and otherwise false</td><td>N</td></tr><tr><td>-qTestDestId=&lt;destination's id&gt;</td><td>Id of the destination where the result will be uploaded on it</td><td>N</td></tr><tr><td>-qTestDestType=&lt;destination's type&gt;</td><td>Type of the destination. There are 4 options for destination's type:"test-suite", "test-cycle", <span class="Apple-tab-span">&nbsp;</span>"release", and "root".</td><td>N</td></tr><tr><td><p>-reportFolder=&lt;path&gt;</p></td><td><p>Specify the destination folder for saving report files. Can use absolute path or relative path (root being project folder).</p></td><td><p>N</p></td></tr><tr><td><p>-reportFileName=&lt;name&gt;</p></td><td><p>Specify the name for report files (.html, .csv, .log). If not provide, system uses the name "report" (report.html, report.csv, report.log). This option is only taken into account when being used with “-reportFolder” option.</p></td><td><p>N</p></td></tr><tr><td><p>-remoteWebDriverUrl=&lt;remote web server url&gt;</p></td><td><p>Specify the remote web driver URL</p></td><td><p>N</p></td></tr><tr><td>-remoteWebDriverType=&lt;Selenium, Appium&gt;</td><td>Remote web's driver type</td><td>Y <em>(If -remoteWebDriverUrl is used)</em></td></tr><tr><td><p>-deviceId=&lt;device Id for Android/device uuid for ios&gt;</p></td><td><p>Specify the device's ID to execute test scripts using this device</p></td><td><p>Y<em> (If -browserType=Android or -browserType=iOS is used)</em></p></td></tr><tr><td>-email</td><td>Registered email on <a class="external-link" href="https://www.katalon.com/" rel="nofollow">Katalon Studio</a> page</td><td>N <em>(If Katalon Studio is already activated)</em></td></tr><tr><td><strong>These proxy options below must be used with --config parameter</strong></td></tr><tr><td>-proxy.option</td><td><span>NO_PROXY, USE_SYSTEM, MANUAL_CONFIG</span></td><td>Y</td></tr><tr><td>-proxy.server.type</td><td><span>&nbsp;HTTP, HTTPS, or SOCKS</span></td><td>Y</td></tr><tr><td>-proxy.server.address</td><td><span>Example: locahost,&nbsp;</span><a class="external-link" href="http://katalon.com/" rel="nofollow">http://katalon.com</a></td><td>Y</td></tr><tr><td>-proxy.server.port</td><td><span>Example: 80, 8080, 9999</span></td><td>Y</td></tr><tr><td>-proxy.username</td><td><span>Example:&nbsp;MyProxyUsername</span></td><td><span>Optional (YES if your proxy server requires authentication)</span></td></tr><tr><td>-proxy.password</td><td><span>Example: MyProxyPassword</span></td><td><span>Optional (YES if your proxy server requires authentication)</span></td></tr><tr><td>Example: <code class="java plain">katalon -noSplash&nbsp; -runMode=console -consoleLog -noExit -projectPath=</code><code class="java string">"C:\Users\Katalon Studio\Project\YourProject.prj"</code><span>&nbsp;</span><code class="java plain">-retry=</code><code class="java value">0</code><span>&nbsp;</span><code class="java plain">-testSuitePath=</code><code class="java string">"Test Suites/TS_RegressionTest"</code><span>&nbsp;</span><code class="java plain">-browserType=</code><code class="java string">"Chrome (headless)"</code><span>&nbsp;</span><code class="java plain">--config -proxy.option=MANUAL_CONFIG -proxy.server.type=HTTP -proxy.server.address=</code><code class="java string">"http://192.168.12.32"</code><span>&nbsp;</span><code class="java plain">-proxy.server.port=</code><code class="java string">"8888"</code><div><div class="syntaxhighlighter sh-confluence nogutter  java"><p>&nbsp;</p><p>&nbsp;</p></div></div></td></tr><tr><td>-executionProfile</td><td><p><strong>Since 5.4</strong></p><p>Specify the&nbsp;<a href="/pages/viewpage.action?pageId=13697476">execution profile</a>&nbsp;to be executed with</p></td><td>N</td></tr></tbody></table>

Command Builder
===============

You can quickly generate commands to use in console mode by following the steps below:  

1.  Click on **Build CMD** from the main toolbar.  
    ![](../../images/katalon-studio/docs/console-mode-execution/Screenshot at Jun 20 15-42-46.png)  
      
    
2.  The **Generate Command for Console Mode** is displayed. Configure your options as needed.  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2018-2-9 11_44_30.png)  
    where:
    
    <table><thead><tr><th>Section</th><th>Description</th></tr></thead><tbody><tr><td>Test Suite</td><td>The Test Suite or Test Suite Collection to be executed</td></tr><tr><td>Executed Platform</td><td><div class="content-wrapper"><p>The platform to execute the test on. Select an environment</p><p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img class="confluence-embedded-image" height="400" src="../../images/katalon-studio/docs/console-mode-execution/image2018-2-9 12_1_31.png" data-image-src="/download/attachments/786521/image2018-2-9%2012%3A1%3A31.png?version=1&amp;modificationDate=1518152491000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697307" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-2-9 12:1:31.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786521" data-linked-resource-container-version="2"></span></p><p>&nbsp;</p></div></td></tr><tr><td>Other Options</td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/console-mode-execution/image2017-2-17 16_19_15.png" data-image-src="/download/attachments/786521/image2017-2-17%2016%3A19%3A15.png?version=1&amp;modificationDate=1487323155000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112643" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-17 16:19:15.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786521" data-linked-resource-container-version="2"></span></p></div></td></tr></tbody></table>
    
3.  Click **Generate Command** after you're done with the configuration.  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2017-2-17 17_15_41.png)  
      
    
4.  You can **Copy to Clipboard** and paste to command prompt for execution.  
      
    

Use console.properties file
===========================

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