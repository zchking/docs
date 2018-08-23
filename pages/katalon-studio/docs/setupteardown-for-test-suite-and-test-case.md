---
title: "Setup/Teardown for Test Suite and Test Case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/setupteardown-for-test-suite-and-test-case.html 
description: 
---
Available since Katalon Studio v5.3

For full lifecycle of Tests in Katalon Studio, refer to this [documentation](https://docs.katalon.com/x/7zhO).

Every test suite from your projects now has been equipped with the ability to run either **SetUp** or **Teardown** methods, which are groups of your own defined test steps before or after executing a Test Suite. This feature is another great extension besides [Test Listener](https://docs.katalon.com/pages/viewpage.action?pageId=5126383) to extend your current testing flow as much as possible.

There will a **new tab** called '**Script**' in **Test Suite**'s interface. This interface will generate sample **Setup** and **TearDown** methods to be used.

![](../../images/katalon-studio/docs/setupteardown-for-test-suite-and-test-case/image2018-1-8 16_25_42.png)**Supported methods**

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Method</th><th class="xtd-0-1 confluenceTh" style="">Description</th><th class="xtd-0-2 confluenceTh" colspan="1" style="">Trigger Condition</th><th class="xtd-0-3 confluenceTh" colspan="1" style="">Common Usages</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><p style="">setUp</p></td><td class="xtd-1-1 confluenceTd" style=""><p style="">Setup test suite environment<br style=""><br style=""></p></td><td class="xtd-1-2 confluenceTd" colspan="1" style="">Before executed test suites</td><td class="xtd-1-3 xtd-2-3 confluenceTd" rowspan="2" style=""><p style="">Prepare testing environment</p><p style="">Call required test cases for the executed test suite</p></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" colspan="1" style="">setUpTestCase</td><td class="xtd-2-1 confluenceTd" colspan="1" style="">Run before each test case starts</td><td class="xtd-2-2 confluenceTd" style="">Before executed test cases</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><p style="">tearDown</p></td><td class="xtd-3-1 confluenceTd" style=""><p class="p1" style="">Clean test suites environment</p></td><td class="xtd-3-2 confluenceTd" colspan="1" style="">After executed test suites</td><td class="xtd-3-3 xtd-4-3 confluenceTd" rowspan="2" style=""><p style="">Clean-up testing environment</p><p style="">Call TearDown test cases for the executed test suite</p><p style="">&nbsp;</p><p style="">&nbsp;</p></td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style=""><p class="p1" style="">tearDownTestCase</p></td><td class="xtd-4-1 confluenceTd" style=""><p class="p1" style="">Run after each test case ends</p></td><td class="xtd-4-2 confluenceTd" style=""><p class="p1" style="">After executed test cases</p></td></tr></tbody></table>

#### How it works

By default, these **Setup** and **Teardown** methods will not be triggered even if they match with provided trigger condition above. You need to **set skipped value from false** to true to activate related methods.

#### Methods consideration

*   Execution progress from these methods still have execution logs as usual and they will be stored in execution logs files of Katalon Studio.
    
*   You can't see setUp and teardown executed reports from generated Test Suite report. Only **setUpTestCase** and **tearDownTestCase** can be seen in generated Test Suite report
*   Test Listeners will always be triggered first if you define both Test Listeners and activate Setup / Teardown methods at the same time.  
    ![](../../images/katalon-studio/docs/setupteardown-for-test-suite-and-test-case/Screen Shot 2018-01-05 at 14.24.23.png)