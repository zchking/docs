---
title: "Execute a Test Case or a Test Suite" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execute-a-test-case-or-a-test-suite.html 
description: 
---
Katalon Studio allows you to run the entire test suite, or an individual test case. Before executing a test case or a test suite, keep in mind the [supported execution environments](/display/KD/Supported+Environments) by Katalon Studio. 

Execute an Entire Test Case or Test Suite
-----------------------------------------

Open a test case/test suite, then select the environment to run the test case from **Run** command of the main toolbar. You can also [execute the test case using console mode](/display/KD/Console+Mode+Execution). 

![](../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2018-8-2 15_20_44.png)

If you simply click on the **Run** button, the test case will be executed using the default browser defined in [Execution Settings](/display/KD/Execution+Settings).

<table class="relative-table wrapped confluenceTable" style="width: 100.0%;"><colgroup><col style="width: 21.4039%;"><col style="width: 78.5961%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Execution Environment</th><th class="xtd-0-1 confluenceTh">Execution Guide</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><strong>Browsers</strong></td><td class="xtd-1-1 confluenceTd">Simply select to execute your test on one of the supported browsers (Chrome, Firefox, IE, Safari, Edge)</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1"><strong>Mobile Browsers</strong></td><td class="xtd-2-1 confluenceTd" colspan="1"><span>Simply select to execute your test on one of the supported devices (Android, iOS)</span></td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd"><strong>Mobile</strong></td><td class="xtd-3-1 confluenceTd"><div class="content-wrapper"><p>Before executing your test, check if you have set up the environment for mobile testing for <a href="/display/KD/Mobile+on+Windows">Windows</a> or for <a href="/display/KD/Mobile+on+macOS">macOS</a>. Select your device among those listed in Katalon Studio.</p><span class="confluence-embedded-file-wrapper image-center-wrapper"><img class="confluence-embedded-image image-center" src="../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2018-1-26 18_54_41.png" data-image-src="/download/attachments/13699864/image2018-1-26%2018%3A54%3A41.png?version=1&amp;modificationDate=1531368628000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13699831" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-1-26 18:54:41.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699864" data-linked-resource-container-version="13"></span><p>&nbsp;</p><div class="confluence-information-macro confluence-information-macro-note conf-macro output-block" data-hasbody="true" data-macro-name="note"><p class="title">Troubleshooting</p><span class="aui-icon aui-icon-small aui-iconfont-warning confluence-information-macro-icon"></span><div class="confluence-information-macro-body"><p>If there is no device listed, please make sure the Developer Mode on the phone is turned on, try to unplug and reconnect several times until you are prompted for accepting/trusting this device.</p><p><span class="confluence-embedded-file-wrapper image-center-wrapper"><img class="confluence-embedded-image image-center" src="../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2018-8-2 15_31_52.png" data-image-src="/download/attachments/13699864/image2018-8-2%2015%3A31%3A52.png?version=1&amp;modificationDate=1533198712000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13700823" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-8-2 15:31:52.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13699864" data-linked-resource-container-version="13"></span></p></div></div></div></td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd"><strong>Remote</strong></td><td class="xtd-4-1 confluenceTd">Make sure you have set up default configuration for the remote environment in project settings. Refer to&nbsp;<a href="/display/KD/Introduction+to+Desired+Capabilities">Introduction to Desired Capabilities</a>&nbsp;for more details.</td></tr><tr class="xtr-5"><td class="xtd-5-0 confluenceTd" colspan="1"><strong>Custom</strong></td><td class="xtd-5-1 confluenceTd" colspan="1">Make sure you have set up default configuration for the remote environment in project settings. Refer to&nbsp;<a href="https://docs.katalon.com/x/cgFO#ExecutionSettings-CustomExecution" rel="nofollow">Custom Execution</a>&nbsp;for more details. When you have set up your custom environment, simply select it from the drop-down list.</td></tr></tbody></table>

Execute Parts of a Test Case
----------------------------

Creating automation test cases is a repetitive task that requires a lot of editing and re-running. In many automation tools, when the test case failed and the user makes certain changes to the script, the users usually has to execute the whole script all over again to make sure the test is executed as expected. To save users the trouble of having to run all unnecessary steps, Katalon Studio provides two ways so that users can start the test at their preferred steps.

### Execute from a Selected Step

From the [Manual view](/display/KD/Manual+View) of the test case:

1\. Start a browser in Katalon script using 'Open Browser' step. Else, you must have a current session running.

2. Ensure this browser's session is NOT terminated (**Project -> Settings -> Default -> Post-Execution -> Terminate...** options are unchecked based on your testing needs).

3\. Right click on one of the step you want to execute from, and execute the sesssion.

![](../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2017-8-18 11_34_23.png)

### Enable/Disable steps

Katalon Studio also allows users to disable one or more test steps before executing the test case as shown in the screenshot below. Using the shortcuts  Ctrl + D (disable) and Ctrl + E (enable) on selected steps, the users can leverage this feature to skip unwanted steps when executing test cases.

![](../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2017-8-18 11_36_13.png)

Job Progress
------------

The Job Progress will be triggered automatically to show the progress while your test case/test suite is being executed.

![](../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2017-6-30 20_54_25.png)

Troubleshooting
---------------

Troubleshooting

Some factors can affect your execution:  
\- [Failure Handling](/display/KD/Failure+Handling)  
\- [Test Listeners](/pages/viewpage.action?pageId=5126383)  
\- [Setup/Teardown Test Case/Suite](/pages/viewpage.action?pageId=12419091)

You can also refer to this [guide](/display/KD/Troubleshooting+common+issues+related+to+interacting+with+an+element) to troubleshoot problems relating to test execution.