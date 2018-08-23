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

<table class="wrapped relative-table confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Component</th><th class="confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style="">Test Cases Table</td><td class="confluenceTd" style="">List of executed test cases.</td></tr><tr style=""><td class="confluenceTd" style="">Summary</td><td class="confluenceTd" style="">Summary information of executed environment.</td></tr><tr style=""><td colspan="1" class="confluenceTd" style="">Execution Settings</td><td colspan="1" class="confluenceTd" style=""><div class="content-wrapper" style=""><p style="">Settings of executed browsers/devices. For example:</p><p style=""><span class="confluence-embedded-file-wrapper" style=""><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_40_50.png" data-image-src="/download/attachments/1606335/image2017-2-24%2019%3A40%3A50.png?version=1&amp;modificationDate=1487940051000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5113204" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-24 19:40:50.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="1606335" data-linked-resource-container-version="1" style=""></span></p></div></td></tr><tr style=""><td colspan="1" class="confluenceTd" style="">Execution Environment</td><td colspan="1" class="confluenceTd" style=""><div class="content-wrapper" style=""><p style="">Other information about the executed system. For example:</p><p style=""><span class="confluence-embedded-file-wrapper" style=""><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_42_41.png" data-image-src="/download/attachments/1606335/image2017-2-24%2019%3A42%3A41.png?version=1&amp;modificationDate=1487940161000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5113205" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-24 19:42:41.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="1606335" data-linked-resource-container-version="1" style=""></span></p></div></td></tr></tbody></table>

Test Cases List
---------------

*   The summary information of all executed iterations done in the test suite is displayed here. Each time when a test case is executed with a test data row is considered an **iteration**.  
    ![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_15_33.png)
*   Users can easily determine which type of information to be displayed by using the provided filters:
    
    <table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Filter</th><th class="confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style=""><p style="">Passed</p></td><td class="confluenceTd" style=""><p style="">Show only iterations which are passed.</p></td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Failed</p></td><td class="confluenceTd" style=""><p style="">Show only iterations which are failed.</p></td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Error</p></td><td class="confluenceTd" style=""><p style="">Show only iterations having errors.</p></td></tr><tr style=""><td colspan="1" class="confluenceTd" style="">Incomplete</td><td colspan="1" class="confluenceTd" style="">Show only incomplete iterations</td></tr></tbody></table>
    
*   By selecting an **iteration** in **Test Case Table** and click **Show Test Case Details**, you can view details regarding its executed logs.
*   If **qTest** and **JIRA** are configured in project settings, you can submit data to those systems. Refer to [Enable qTest Integration](/display/KD/Enable+qTest+Integration) and [Configure JIRA Integration](/display/KD/Configure+JIRA+Integration) for more details.

Test Suite Summary
------------------

This section gives the summary information of the test suite:

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 19_29_56.png)

where:

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Field</th><th class="confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style="">Test Suite ID</td><td class="confluenceTd" style="">The ID of the executed test suite in Katalon Studio.</td></tr><tr style=""><td colspan="1" class="confluenceTd" style=""><p style="">Hostname / OS / Platform</p></td><td colspan="1" class="confluenceTd" style="">The environment where the test suite was executed</td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Start / End / Elapse</p></td><td class="confluenceTd" style="">Execution start/end date time and duration</td></tr><tr style=""><td class="confluenceTd" style="">Total TC</td><td class="confluenceTd" style="">Total number of test cases, along with their executed status.</td></tr></tbody></table>

Test Logs Details
-----------------

This section shows all information regarding the iteration selected in the **Test Cases Table** section.

### Test Log Tab

*   Details regarding all the executed steps and their status are displayed in this tab.   
    ![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 20_29_56.png)  
    where:
    
    <table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Component</th><th class="confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style="">Log Information</td><td class="confluenceTd" style="">Information of the test step selected in the <strong style="">Test Case’s Log</strong> section:<ul style=""><li style="">The <strong style="">Name</strong> of the test step (the name of the keyword used in the test step)</li><li style="">Execution <strong style="">Start/End</strong> date time and duration</li><li style="">The <strong style="">Description</strong> of the test step</li><li style="">Any system <strong style="">Message</strong> raised when the test step was executed</li></ul></td></tr><tr style=""><td class="confluenceTd" style="">Log Image</td><td class="confluenceTd" style=""><p style="">The screenshot taken from the application under test, it is captured in either of following situations:</p><ul style=""><li style="">An error occurs during test execution</li><li style="">The <a href="https://docs.katalon.com/display/KD/%5BWebUI%5D+Take+Screenshot" rel="nofollow" style="">Take Screenshot</a> keyword is used</li></ul></td></tr></tbody></table>
    
*   Users can easily determine which type of information to be displayed by using the provided filters:
    
    <table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Filter</th><th class="confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style=""><p style="">Info</p></td><td class="confluenceTd" style=""><p style="">Show the messages logged for information/reference.</p></td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Passed</p></td><td class="confluenceTd" style=""><p style="">Show the steps which are successfully executed.</p></td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Failed</p></td><td class="confluenceTd" style=""><p style="">Show the steps which are failed to execute.</p></td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Error</p></td><td class="confluenceTd" style=""><p style="">Show the steps having errors.</p></td></tr><tr style=""><td colspan="1" class="confluenceTd" style="">Incomplete</td><td colspan="1" class="confluenceTd" style="">Show incomplete steps due to other factors such as wrong syntax, power shortage, disconnected network, etc...</td></tr><tr style=""><td colspan="1" class="confluenceTd" style="">Warning</td><td colspan="1" class="confluenceTd" style="">Show the steps which have warning status.</td></tr><tr style=""><td colspan="1" class="confluenceTd" style="">Not Run</td><td colspan="1" class="confluenceTd" style="">Show the skipped steps.</td></tr></tbody></table>
    
*   If **JIRA** is configured in project settings, you can submit a ticket to this system. Refer to [Configure JIRA Integration](/display/KD/Configure+JIRA+Integration) for more details.
*   Screenshots are taken for the failed steps and you can hover the mouse cursor over the attachment icon to review. 

### Information Tab

Users can find the summary information of the test case in this tab.

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 20_4_11.png)

where:

<table class="wrapped relative-table confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Field</th><th class="confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style="">Test Case ID</td><td class="confluenceTd" style=""><span style="">The ID of the executed test case in Katalon Studio.</span></td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Start / End / Elapse</p></td><td class="confluenceTd" style="">Execution start/end date time and duration.</td></tr><tr style=""><td class="confluenceTd" style="">Description</td><td class="confluenceTd" style="">The description of the test case.</td></tr><tr style=""><td colspan="1" class="confluenceTd" style="">Message</td><td colspan="1" class="confluenceTd" style="">Any system message raised when this <strong style="">iteration</strong> was executed.</td></tr></tbody></table>

### Integration Tab

The information regarding qTest Integration of this iteration is displayed in this tab.

![](../../images/katalon-studio/docs/test-suite-report/image2017-2-24 20_15_4.png)

where:

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Field</th><th class="confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style="">Test Log ID</td><td class="confluenceTd" style="">The ID of the integrated qTest <strong style="">Test Run</strong>.</td></tr><tr style=""><td class="confluenceTd" style="">Test Run Alias</td><td class="confluenceTd" style="">The alias of the integrated qTest <strong style="">Test Run</strong>.</td></tr><tr style=""><td class="confluenceTd" style="">Attachment</td><td class="confluenceTd" style="">Indicate whether all the execution log and report are placed in a zipped file which is sent to qTest as an attachment.</td></tr></tbody></table>

Export to other formats
-----------------------

For the purpose of sharing, users can generate reports of test suites into other formats such as **HTML**, **CSV**, **PDF** and **JUnit** using the context menu in Test Explorer as example below:   
![](../../images/katalon-studio/docs/test-suite-report/image2017-6-23 16_2_2.png)