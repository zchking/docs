---
title: "Record Web Utility (latest)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/record-web-utility-latest.html 
description: 
---
Record
------

### Record a New Test Case

*   Without opening any test case, click on Web Record ![](../../images/katalon-studio/docs/record-web-utility-latest/Screen Shot 2018-06-27 at 09.41.37.png) icon to open Web Recorder
*   Katalon Studio default browser is Chrome, whose icon is displayed in the top right corner, but you can change this default browser in **Preferences → Katalon → Recorder → Default browser**. You can also click on the drop-down button to select the browser you want to use:
    
    <table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Type</th><th class="" style="">Description</th><th class="" colspan="1" style="">Note</th></tr><tr class="" style=""><td class="" style="">New Browsers</td><td class="" style="">Start a new browser</td><td class="" colspan="1" style=""><strong class="" style="">Supported browsers:</strong><br class="" style="">- Firefox<br class="" style="">- Chrome<br class="" style="">- Internet Explorer (only on Windows)</td></tr><tr class="" style=""><td class="" style="">Active Browsers</td><td class="" style="">Use the current browser (only Chrome)</td><td class="" colspan="1" style="">Katalon Studio will install <a class="" href="https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid" rel="nofollow" style="">Katalon Recorder</a> as an add-on to help with recording for this type of browser<br class="" style=""><br class="" style=""><strong class="" style="">Supported browsers:</strong><br class="" style="">- Chrome<br class="" style="">- Firefox (coming soon)</td></tr></tbody></table>
    
*   In this example, just select either Chrome or Firefox from '**New Browser**' type to start recording.
    
    *   The browser will highlight and display its correspondent Xpath when you hover the mouse on that element.
    *   Recorded steps will be generated in Recorded Actions.
    *   When you type in a Password field, Web Recorder will automatically use '[Set Encrypted Text](https://docs.katalon.com/display/KD/%5BWebUI%5D+Set+Encrypted+Text)' keyword and input's value will be encrypted to increase security.
    
    ![](../../images/katalon-studio/docs/record-web-utility-latest/Screen Shot 2018-06-27 at 10.05.19.png)
    

### Record Using Existing Test Case

With the new Web Recorder, instead of having to create a brand new test case whenever there are changes to the UI, the users can be more productive and efficient in modifying existing test cases, minimizing the risks of overlooking how new changes might affect existing features. 

*   Open any existing Test Case you want to continue recording on.
*   Click on Record icon to open Web Recorder.
*   All the existing test steps will be imported as Recorded Actions and current [Test Case's variables](https://docs.katalon.com/display/KD/Variable+Types#VariableTypes-Localvariables) will be imported into the Variables tab in Web Recorder. You won't have record the same test flow again.

![](../../images/katalon-studio/docs/record-web-utility-latest/Screen Shot 2018-06-27 at 11.23.30.png)

Modify Recorded Actions
-----------------------

Unlike previous Web Recorder's version , the list of available actions is the same with Katalon Studio [built-in keywords](https://docs.katalon.com/display/KD/Built-in+Keywords), so you can add whatever actions you want depending on your need. You can call another test case and use Custom Keyword as well.

![](../../images/katalon-studio/docs/record-web-utility-latest/Screen Shot 2018-06-27 at 11.30.37.png)

Modify Recorded Objects
-----------------------

After you finish your recording, **Web Recorder** will export a list of test objects used in the test case. For more information on WebUI test objects, go [here](https://docs.katalon.com/x/tQTR). 

When you are satisfied that your test case has been created correctly, click on **OK** to add the recorded steps to the test case. Choose the directory that you want your test objects to reside to continue. Here, Katalon Studio **automatically** **detect** similar **existing** objects in the Objects Reporsitory and ask you for further action. This will help the users optimize object repositories. 

![](../../images/katalon-studio/docs/record-web-utility-latest/image2018-6-26 14_18_9.png)

Variables
---------

In the new Web Recorder interface, you can directly manage the [variables](https://docs.katalon.com/x/RoIw) directly related to your recording.

Execute
-------

Two new things have been introduced:

*   Logs: a real-time execution raw logs when you execute test steps. 
*   Run (with three types of run)
    *   Run all steps
    *   Run selected steps
    *   Run from selected step

Execution comes with seeing execution logs, and in many cases you don't want to execute all steps, just only some of them. So that's why we have this new feature for Web Recorder. 

![](../../images/katalon-studio/docs/record-web-utility-latest/Screen Shot 2018-06-27 at 11.46.04.png)

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Type of Run</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style="">Run all steps</td><td class="" style="">Execute ALL steps that are enabled on Web Recorder.</td></tr><tr class="" style=""><td class="" style="">Run selected steps</td><td class="" style=""><div class="" style=""><p class="" style="">Execute only one or many selected steps.</p><div class="" data-hasbody="true" data-macro-name="info" style=""><span class="" style=""></span><div class="" style=""><p class="" style="">You can select many steps using either Ctrl or Shift key from your keyword. Selected steps will be highlighted e.g run step #2, #6, #9 and #11 are selected.</p><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/record-web-utility-latest/Screen Shot 2018-06-27 at 11.45.48.png" data-image-src="/download/attachments/13699399/Screen%20Shot%202018-06-27%20at%2011.45.48.png?version=1&amp;modificationDate=1530075143000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13699437" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-06-27 at 11.45.48.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699399" data-linked-resource-container-version="7" style=""></span></p></div></div></div></td></tr><tr class="" style=""><td class="" style="">Run from selected step</td><td class="" style=""><div class="" style=""><p class="" style="">Execute the current selected step and all steps after selected one, e.g run step #4 and all steps after it.</p><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/record-web-utility-latest/Screen Shot 2018-06-27 at 11.51.07.png" data-image-src="/download/attachments/13699399/Screen%20Shot%202018-06-27%20at%2011.51.07.png?version=1&amp;modificationDate=1530075393000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13699438" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-06-27 at 11.51.07.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699399" data-linked-resource-container-version="7" style=""></span></p></div></td></tr></tbody></table>

Upon selecting any types of Run to execute, there will be execution logs displayed on Logs tab

![](../../images/katalon-studio/docs/record-web-utility-latest/Screen Shot 2018-06-27 at 11.54.27.png)

The steps above create and run a simple test case. For advanced features such as branching, looping or validation, you can refer to following articles: 

*   [Common Validation](https://www.katalon.com/tutorials/common-validation/) 
*   [Control Statements](/display/KD/Control+Statements)