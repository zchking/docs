---
title: "Test Suite Report" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/test-suite-report.html 
description: 
---
Once a test suite finishes its execution, a historical report will be automatically generated and stored in Reports. 

For example:

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_1_55.png)

The report will be named with following the naming convention: _YYYYMMDD_HHmmss_, which is the datetime when the test suite starts its execution.

Report Overview
---------------

In **Test Explorer** view, double-click on a historical execution of a test suite to view its details:  
![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 20_27_2.png)  
where:

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Component</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style="">Test Cases Table</td><td class="" style="">List of executed test cases.</td></tr><tr class="" style=""><td class="" style="">Summary</td><td class="" style="">Summary information of executed environment.</td></tr><tr class="" style=""><td colspan="1" class="" style="">Execution Settings</td><td colspan="1" class="" style=""><div class="" style=""><p class="" style="">Settings of executed browsers/devices. For example:</p><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_40_50.png" data-image-src="/download/attachments/1606335/image2017-2-24%2019%3A40%3A50.png?version=1&amp;modificationDate=1487940051000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5113204" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-24 19:40:50.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="1606335" data-linked-resource-container-version="1" style=""></span></p></div></td></tr><tr class="" style=""><td colspan="1" class="" style="">Execution Environment</td><td colspan="1" class="" style=""><div class="" style=""><p class="" style="">Other information about the executed system. For example:</p><p class="" style=""><span class="" style=""><img class="" src="../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_42_41.png" data-image-src="/download/attachments/1606335/image2017-2-24%2019%3A42%3A41.png?version=1&amp;modificationDate=1487940161000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5113205" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-24 19:42:41.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="1606335" data-linked-resource-container-version="1" style=""></span></p></div></td></tr></tbody></table>

Test Cases List
---------------

*   The summary information of all executed iterations done in the test suite is displayed here. Each time when a test case is executed with a test data row is considered an **iteration**.  
    ![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_15_33.png)
*   Users can easily determine which type of information to be displayed by using the provided filters:
    
    <table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style=""><p class="" style=""><strong class="" style="">Filter</strong></p></th><th class="" style=""><p class="" style=""><strong class="" style="">Description</strong></p></th></tr><tr class="" style=""><td class="" style=""><p class="" style="">Passed</p></td><td class="" style=""><p class="" style="">Show only iterations which are passed.</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">Failed</p></td><td class="" style=""><p class="" style="">Show only iterations which are failed.</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">Error</p></td><td class="" style=""><p class="" style="">Show only iterations having errors.</p></td></tr><tr class="" style=""><td colspan="1" class="" style="">Incomplete</td><td colspan="1" class="" style="">Show only incomplete iterations</td></tr></tbody></table>
    
*   By selecting an **iteration** in **Test Case Table** and click **Show Test Case Details**, you can view details regarding its executed logs.
*   If **qTest** and **JIRA** are configured in project settings, you can submit data to those systems. Refer to [Enable qTest Integration](/display/KD/Enable+qTest+Integration) and [Configure JIRA Integration](/display/KD/Configure+JIRA+Integration) for more details.

Test Suite Summary
------------------

This section gives the summary information of the test suite:

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_29_56.png)

where:

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Field</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style="">Test Suite ID</td><td class="" style="">The ID of the executed test suite in Katalon Studio.</td></tr><tr class="" style=""><td colspan="1" class="" style=""><p class="" style="">Hostname / OS / Platform</p></td><td colspan="1" class="" style="">The environment where the test suite was executed</td></tr><tr class="" style=""><td class="" style=""><p class="" style="">Start / End / Elapse</p></td><td class="" style="">Execution start/end date time and duration</td></tr><tr class="" style=""><td class="" style="">Total TC</td><td class="" style="">Total number of test cases, along with their executed status.</td></tr></tbody></table>

Test Logs Details
-----------------

This section shows all information regarding the iteration selected in the **Test Cases Table** section.

### Test Log Tab

*   Details regarding all the executed steps and their status are displayed in this tab.   
    ![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 20_29_56.png)  
    where:
    
    <table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Component</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style="">Log Information</td><td class="" style="">Information of the test step selected in the <strong class="" style="">Test Case’s Log</strong> section:<ul class="" style=""><li class="" style="">The <strong class="" style="">Name</strong> of the test step (the name of the keyword used in the test step)</li><li class="" style="">Execution <strong class="" style="">Start/End</strong> date time and duration</li><li class="" style="">The <strong class="" style="">Description</strong> of the test step</li><li class="" style="">Any system <strong class="" style="">Message</strong> raised when the test step was executed</li></ul></td></tr><tr class="" style=""><td class="" style="">Log Image</td><td class="" style=""><p class="" style="">The screenshot taken from the application under test, it is captured in either of following situations:</p><ul class="" style=""><li class="" style="">An error occurs during test execution</li><li class="" style="">The <a href="https://docs.katalon.com/display/KD/%5BWebUI%5D+Take+Screenshot" rel="nofollow" class="" style="">Take Screenshot</a> keyword is used</li></ul></td></tr></tbody></table>
    
*   Users can easily determine which type of information to be displayed by using the provided filters:
    
    <table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style=""><p class="" style=""><strong class="" style="">Filter</strong></p></th><th class="" style=""><p class="" style=""><strong class="" style="">Description</strong></p></th></tr><tr class="" style=""><td class="" style=""><p class="" style="">Info</p></td><td class="" style=""><p class="" style="">Show the messages logged for information/reference.</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">Passed</p></td><td class="" style=""><p class="" style="">Show the steps which are successfully executed.</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">Failed</p></td><td class="" style=""><p class="" style="">Show the steps which are failed to execute.</p></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">Error</p></td><td class="" style=""><p class="" style="">Show the steps having errors.</p></td></tr><tr class="" style=""><td colspan="1" class="" style="">Incomplete</td><td colspan="1" class="" style="">Show incomplete steps due to other factors such as wrong syntax, power shortage, disconnected network, etc...</td></tr><tr class="" style=""><td colspan="1" class="" style="">Warning</td><td colspan="1" class="" style="">Show the steps which have warning status.</td></tr><tr class="" style=""><td colspan="1" class="" style="">Not Run</td><td colspan="1" class="" style="">Show the skipped steps.</td></tr></tbody></table>
    
*   If **JIRA** is configured in project settings, you can submit a ticket to this system. Refer to [Configure JIRA Integration](/display/KD/Configure+JIRA+Integration) for more details.
*   Screenshots are taken for the failed steps and you can hover the mouse cursor over the attachment icon to review. 

### Information Tab

Users can find the summary information of the test case in this tab.

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 20_4_11.png)

where:

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Field</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style="">Test Case ID</td><td class="" style=""><span class="" style="">The ID of the executed test case in Katalon Studio.</span></td></tr><tr class="" style=""><td class="" style=""><p class="" style="">Start / End / Elapse</p></td><td class="" style="">Execution start/end date time and duration.</td></tr><tr class="" style=""><td class="" style="">Description</td><td class="" style="">The description of the test case.</td></tr><tr class="" style=""><td colspan="1" class="" style="">Message</td><td colspan="1" class="" style="">Any system message raised when this <strong class="" style="">iteration</strong> was executed.</td></tr></tbody></table>

### Integration Tab

The information regarding qTest Integration of this iteration is displayed in this tab.

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 20_15_4.png)

where:

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Field</th><th class="" style="">Description</th></tr><tr class="" style=""><td class="" style="">Test Log ID</td><td class="" style="">The ID of the integrated qTest <strong class="" style="">Test Run</strong>.</td></tr><tr class="" style=""><td class="" style="">Test Run Alias</td><td class="" style="">The alias of the integrated qTest <strong class="" style="">Test Run</strong>.</td></tr><tr class="" style=""><td class="" style="">Attachment</td><td class="" style="">Indicate whether all the execution log and report are placed in a zipped file which is sent to qTest as an attachment.</td></tr></tbody></table>

Export to other formats
-----------------------

For the purpose of sharing, users can generate reports of test suites into other formats such as **HTML**, **CSV**, **PDF** and **JUnit** using the context menu in Test Explorer as example below:   
![](../../images/katalon-studio/docs/test-suite-report/image2017-6-23 16_2_2.png)