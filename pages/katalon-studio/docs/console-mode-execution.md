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
    
    ```
    katalon {option1} {option2} ... {optionN}
    ```
    
    **Mac OS:**
    
    ```
    ./Katalon\ Studio.app/Contents/MacOS/katalon --args {option1} {option2} ... {optionN}
    ```
    
    **Linux**:
    
    ```
    ./katalon {option1} {option2} ... {optionN}
    ```
    
      
    where:
    
    <table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Item</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style="">katalon</td><td class="" style="">The command of Katalon Studio to execute automation test.</td></tr><tr class="" style=""><td class="" style="">{option(s)}</td><td class="" style="">The additional <a href="https://docs.katalon.com/display/KD/Console+Mode+Execution#ConsoleModeExecution-KatalonCommandLineoptions" rel="nofollow" class="" style="">options</a> for the execution.</td></tr></tbody></table>
    
    For example:
    
    ![](../../images/katalon-studio/docs/console-mode-execution/image2016-4-6 13_15_3.png)  
      
    
3.  Press Enter to start execution.

Katalon Command Line options 
-----------------------------

Here’s the list of options supported for the “_katalon_” command:

<table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Katalon Command Line Option</th><th class="" style="">Description</th><th class="" style="">Mandatory?</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style=""><p class="" style="">-runMode=console</p></td><td class="" style=""><p class="" style="">Enable console mode.</p></td><td class="" style=""><p class="" style="">Y</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">-consoleLog</p></td><td class="" style=""><p class="" style="">Display log in the console.</p></td><td class="" style=""><p class="" style="">N</p></td></tr><tr class="" style=""><td class="" colspan="1" style=""><div class="" style=""><div class="" style=""><div class="" style=""><span class="" style="">--config -kobiton.authentication.username=[yourKobitonusername]-kobiton.authentication.password=xxxxx</span></div></div></div></td><td class="" colspan="1" style="">Passing Kobiton username and password</td><td class="" colspan="1" style="">N</td></tr><tr class="" style=""><td class="" style=""><p class="" style="">-noExit</p></td><td class="" style=""><p class="" style="">Keep the console open after the execution is completed.</p></td><td class="" style=""><p class="" style="">N</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">-summaryReport</p></td><td class="" style=""><p class="" style="">Send summary report for a batch run.</p></td><td class="" style=""><p class="" style="">N</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">-statusDelay=&lt;seconds&gt;</p></td><td class="" style=""><p class="" style="">System will update execution status of the test suite after the delay period (in seconds) specified.</p></td><td class="" style=""><p class="" style="">N</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">-projectPath=&lt;path&gt;</p></td><td class="" style=""><p class="" style="">Specify the project location (include .prj file). The absolute path must be used in this case.</p></td><td class="" style=""><p class="" style="">Y</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">-testSuitePath=&lt;path&gt;</p></td><td class="" style=""><p class="" style="">Specify the test suite file (without extension .ts). The relative path (root being project folder) must be used in this case.</p></td><td class="" style=""><p class="" style="">Y</p></td></tr><tr class="" style=""><td class="" colspan="1" style="">-testSuiteCollectionPath=&lt;path&gt;</td><td class="" colspan="1" style=""><p class="" style=""><span class="" style="">Specify the test suite file (without extension .tsc). The relative path (root being project folder) must be used in this case.</span></p><p class="" style=""><span class="" style=""><span class="" style="">Note: Available only in 4.4+</span></span></p></td><td class="" colspan="1" style="">Y (<em class="" style="">If -testSuitePath is not used. Otherwise it's optional</em>)</td></tr><tr class="" style=""><td class="" style=""><p class="" style="">-browserType=&lt;browser&gt;</p></td><td class="" style=""><p class="" style="">Specify the browser type used for test suite execution.</p><p class="" style="">The following browsers are supported in Katalon:</p><ul class="" style=""><li class="" style="">Firefox</li><li class="" style="">Chrome</li><li class="" style="">IE</li><li class="" style="">Safari</li><li class="" style="">Remote</li><li class="" style="">Android</li><li class="" style="">iOS</li></ul></td><td class="" style=""><p class="" style="">Y</p><p class="" style=""><strong class="" style="">Only Chrome, Firefox and Remote is available for use in Linux version</strong></p></td></tr><tr class="" style=""><td class="" colspan="1" style="">-retry=&lt;number of retry times&gt;</td><td class="" colspan="1" style="">Number of times running test cases in the test suite.</td><td class="" colspan="1" style="">N</td></tr><tr class="" style=""><td class="" colspan="1" style="">-retryFailedTestCases=&lt;true, false&gt;</td><td class="" colspan="1" style="">Retry failed test cases fail in test suite ( override setting in test suite file ). There are 2 options for retry: true if you want run fail test case and otherwise false</td><td class="" colspan="1" style="">N</td></tr><tr class="" style=""><td class="" colspan="1" style="">-qTestDestId=&lt;destination's id&gt;</td><td class="" colspan="1" style="">Id of the destination where the result will be uploaded on it</td><td class="" colspan="1" style="">N</td></tr><tr class="" style=""><td class="" colspan="1" style="">-qTestDestType=&lt;destination's type&gt;</td><td class="" colspan="1" style="">Type of the destination. There are 4 options for destination's type:"test-suite", "test-cycle", <span class="" style="">&nbsp;</span>"release", and "root".</td><td class="" colspan="1" style="">N</td></tr><tr class="" style=""><td class="" style=""><p class="" style="">-reportFolder=&lt;path&gt;</p></td><td class="" style=""><p class="" style="">Specify the destination folder for saving report files. Can use absolute path or relative path (root being project folder).</p></td><td class="" style=""><p class="" style="">N</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">-reportFileName=&lt;name&gt;</p></td><td class="" style=""><p class="" style="">Specify the name for report files (.html, .csv, .log). If not provide, system uses the name "report" (report.html, report.csv, report.log). This option is only taken into account when being used with “-reportFolder” option.</p></td><td class="" style=""><p class="" style="">N</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">-remoteWebDriverUrl=&lt;remote web server url&gt;</p></td><td class="" style=""><p class="" style="">Specify the remote web driver URL</p></td><td class="" style=""><p class="" style="">N</p></td></tr><tr class="" style=""><td class="" colspan="1" style="">-remoteWebDriverType=&lt;Selenium, Appium&gt;</td><td class="" colspan="1" style="">Remote web's driver type</td><td class="" colspan="1" style="">Y <em class="" style="">(If -remoteWebDriverUrl is used)</em></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">-deviceId=&lt;device Id for Android/device uuid for ios&gt;</p></td><td class="" style=""><p class="" style="">Specify the device's ID to execute test scripts using this device</p></td><td class="" style=""><p class="" style="">Y<em class="" style=""> (If -browserType=Android or -browserType=iOS is used)</em></p></td></tr><tr class="" style=""><td class="" colspan="1" style="">-email</td><td class="" colspan="1" style="">Registered email on <a class="" href="https://www.katalon.com/" rel="nofollow" style="">Katalon Studio</a> page</td><td class="" colspan="1" style="">N <em class="" style="">(If Katalon Studio is already activated)</em></td></tr><tr class="" style=""><td class="" colspan="3" style=""><strong class="" style="">These proxy options below must be used with --config parameter</strong></td></tr><tr class="" style=""><td class="" style="">-proxy.option</td><td class="" style=""><span class="" style="">NO_PROXY, USE_SYSTEM, MANUAL_CONFIG</span></td><td class="" style="">Y</td></tr><tr class="" style=""><td class="" style="">-proxy.server.type</td><td class="" style=""><span class="" style="">&nbsp;HTTP, HTTPS, or SOCKS</span></td><td class="" style="">Y</td></tr><tr class="" style=""><td class="" style="">-proxy.server.address</td><td class="" style=""><span class="" style="">Example: locahost,&nbsp;</span><a class="" href="http://katalon.com/" rel="nofollow" style="">http://katalon.com</a></td><td class="" style="">Y</td></tr><tr class="" style=""><td class="" style="">-proxy.server.port</td><td class="" style=""><span class="" style="">Example: 80, 8080, 9999</span></td><td class="" style="">Y</td></tr><tr class="" style=""><td class="" style="">-proxy.username</td><td class="" style=""><span class="" style="">Example:&nbsp;MyProxyUsername</span></td><td class="" style=""><span class="" style="">Optional (YES if your proxy server requires authentication)</span></td></tr><tr class="" style=""><td class="" style="">-proxy.password</td><td class="" style=""><span class="" style="">Example: MyProxyPassword</span></td><td class="" style=""><span class="" style="">Optional (YES if your proxy server requires authentication)</span></td></tr><tr class="" style=""><td class="" colspan="3" style="">Example: <code class="" style="">katalon -noSplash&nbsp; -runMode=console -consoleLog -noExit -projectPath=</code><code class="" style="">"C:\Users\Katalon Studio\Project\YourProject.prj"</code><span class="" style="">&nbsp;</span><code class="" style="">-retry=</code><code class="" style="">0</code><span class="" style="">&nbsp;</span><code class="" style="">-testSuitePath=</code><code class="" style="">"Test Suites/TS_RegressionTest"</code><span class="" style="">&nbsp;</span><code class="" style="">-browserType=</code><code class="" style="">"Chrome (headless)"</code><span class="" style="">&nbsp;</span><code class="" style="">--config -proxy.option=MANUAL_CONFIG -proxy.server.type=HTTP -proxy.server.address=</code><code class="" style="">"http://192.168.12.32"</code><span class="" style="">&nbsp;</span><code class="" style="">-proxy.server.port=</code><code class="" style="">"8888"</code><div class="" style=""><div class="" style=""><p class="" style="">&nbsp;</p><p class="" style="">&nbsp;</p></div></div></td></tr><tr class="" style=""><td class="" colspan="1" style="">-executionProfile</td><td class="" colspan="1" style=""><p class="" style=""><strong class="" style="">Since 5.4</strong></p><p class="" style="">Specify the&nbsp;<a href="/pages/viewpage.action?pageId=13697476" class="" style="">execution profile</a>&nbsp;to be executed with</p></td><td class="" colspan="1" style="">N</td></tr></tbody></table>

Command Builder
---------------

You can quickly generate commands to use in console mode by following the steps below:  

1.  Click on **Build CMD** from the main toolbar.  
    ![](../../images/katalon-studio/docs/console-mode-execution/Screenshot at Jun 20 15-42-46.png)  
      
    
2.  The **Generate Command for Console Mode** is displayed. Configure your options as needed.  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2018-2-9 11_44_30.png)  
    where:
    
    <table class="" style="table-layout: fixed;"><thead><tr><th class="" style="">Section</th><th class="" style="">Description</th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" style="">Test Suite</td><td class="" style="">The Test Suite or Test Suite Collection to be executed</td></tr><tr class="" style=""><td class="" style="">Executed Platform</td><td class="" style=""><div class="" style=""><p class="" style="">The platform to execute the test on. Select an environment</p><p class="" style=""><span class="" style=""><img class="" height="400" src="../../images/katalon-studio/docs/console-mode-execution/image2018-2-9 12_1_31.png" data-image-src="/download/attachments/786521/image2018-2-9%2012%3A1%3A31.png?version=1&amp;modificationDate=1518152491000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697307" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-2-9 12:1:31.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786521" data-linked-resource-container-version="2" style=""></span></p><p class="" style="">&nbsp;</p></div></td></tr><tr class="" style=""><td class="" style="">Other Options</td><td class="" style=""><div class="" style=""><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/console-mode-execution/image2017-2-17 16_19_15.png" data-image-src="/download/attachments/786521/image2017-2-17%2016%3A19%3A15.png?version=1&amp;modificationDate=1487323155000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112643" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-17 16:19:15.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786521" data-linked-resource-container-version="2" style=""></span></p></div></td></tr></tbody></table>
    
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
    
    ```
    katalon -propertiesFile="<absolute path to console.properties file>" -runMode=console
    ```
    
    For example:
    
    ```
    katalon -propertiesFile="D:\Katalon\Demo_Project\console.properties" -runMode=console
    ```
    
4.  You can add extra Katalon command options if needed. Any option already defined in the **console.properties** file will be overwritten by the one declared in command line.  
    
    ```
    katalon -propertiesFile="<absolute path to console.properties file" -runMode=console -browserType=IE 
    ```
    
    In the above example, since we also declare _browserType_ option in command line, the automation test will be executed using IE instead of Chrome.