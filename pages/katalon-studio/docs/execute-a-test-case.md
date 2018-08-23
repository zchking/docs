---
title: "Execute a test case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execute-a-test-case.html 
description: 
---
Currently, Katalon Studio supports executing automation test in following environments:

<table class="wrapped relative-table confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Execution Environment</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><p style="">Chrome</p></td><td class="xtd-1-1 confluenceTd" style=""><p style="">Execute a test case in Chrome, using the Desired Capabilities settings defined in <a href="/display/KD/Execution+Settings" style="">Execution Settings</a>.</p></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><p style="">Firefox</p></td><td class="xtd-2-1 confluenceTd" style=""><p style="">Execute a test case in Firefox, <span style="">using the Desired Capabilities settings defined in <a href="/display/KD/Execution+Settings" style="">Execution Settings</a>.</span></p></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><p style="">IE</p></td><td class="xtd-3-1 confluenceTd" style=""><p style="">Execute a test case in Internet Explorer, <span style="">using the Desired Capabilities settings defined in <a href="/display/KD/Execution+Settings" style="">Execution Settings</a>.</span></p></td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style=""><p style="">Safari</p></td><td class="xtd-4-1 confluenceTd" style=""><p style="">Execute a test case in Safari, <span style="">using the Desired Capabilities settings defined in <a href="/display/KD/Execution+Settings" style="">Execution Settings</a>.</span></p></td></tr><tr class="xtr-5" style=""><td class="xtd-5-0 confluenceTd" style=""><p style="">Remote</p></td><td class="xtd-5-1 confluenceTd" style=""><p style="">Execute a test case in a remote environment, <span style="">using the Desired Capabilities settings defined in <a href="/display/KD/Execution+Settings" style="">Execution Settings</a>.</span></p></td></tr><tr class="xtr-6" style=""><td class="xtd-6-0 confluenceTd" style=""><p style="">Android</p></td><td class="xtd-6-1 confluenceTd" style=""><p style="">Execute a test case on Android device, <span style="">using the Desired Capabilities settings defined in <a href="/display/KD/Execution+Settings" style="">Execution Settings</a>.</span></p></td></tr><tr class="xtr-7" style=""><td class="xtd-7-0 confluenceTd" style=""><p style="">iOS</p></td><td class="xtd-7-1 confluenceTd" style=""><p style="">Execute a test case on an iOS device, <span style="">using the Desired Capabilities settings defined in <a href="/display/KD/Execution+Settings" style="">Execution Settings</a>.</span></p></td></tr><tr class="xtr-8" style=""><td class="xtd-8-0 confluenceTd" style=""><p style="">Custom</p></td><td class="xtd-8-1 confluenceTd" style=""><p style="">Execute a test case in a custom environment, <span style="">using the Desired Capabilities settings defined in <a href="/display/KD/Execution+Settings" style="">Execution Settings</a>.</span></p></td></tr></tbody></table>

Execute on a web application
----------------------------

1.  Open a test case, then select the web browser (Chrome, Firefox, IE, Safari or Edge) to run the test case from **Run** command of the main toolbar.
    
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2018-8-2 15_14_24.png)
    
    If you simply click on the **Run** button, the test case will be executed using the default browser defined in [Execution Preferences (Version 5.0 and below)](/pages/viewpage.action?pageId=3179873).
    
2.  The test case will be executed using the selected web browser.
    

Execute in a remote environment
-------------------------------

1.  Setup default configuration for the remote environment in project settings. Refer to [Execution Settings](/display/KD/Execution+Settings) for more details.  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2017-6-30 20_53_9.png)  
      
    
2.  Open a test case, then select **Remote** option to run the test case from **Run** command of main toolbar.  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2018-8-2 15_18_13.png)
    
3.  The test case will be executed on a predefined remote environment.

Execute on a mobile application
-------------------------------

1.  Open a test case, then select the preferred mobile OS to run the test case from **Run** command of main toolbar (iOS option is only available in macOS).  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2018-8-2 15_18_26.png)  
      
    
2.  Select the device from the listed devices.  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2018-1-26 18_54_41.png)
    
    If there is no device in the list, please make sure the Developer Mode on the phone is turned on, try to unplug and reconnect several times until you are prompted for accepting/trusting this device, make sure you accepted it (Refer to [Mobile on Windows](/pages/viewpage.action?pageId=1606325) & [Mobile on macOS](/display/KD/Mobile+on+macOS) for more details).  
    
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2018-8-2 15_18_54.png)
    
3.  The test case will be executed using selected mobile device.

Execute on a custom environment
-------------------------------

1.  Setup desired capabilities for custom execution in project settings. Refer to [Execution Settings](/display/KD/Execution+Settings) for more details.  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2017-6-30 20_53_51.png)  
      
    
2.  Open a test case, then select your preferred custom option to run the test case from **Run** command of the main toolbar.  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2017-2-14 17_34_14.png)  
      
    
3.  The test case will be executed on selected custom option.

Job Progress
------------

The Job Progress will be triggered automatically to show the progress while your test case is being executed.

![](../../images/katalon-studio/docs/execute-a-test-case/image2017-6-30 20_54_25.png)