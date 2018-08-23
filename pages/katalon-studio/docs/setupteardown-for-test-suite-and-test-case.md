---
title: "Setup/Teardown for Test Suite and Test Case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/setupteardown-for-test-suite-and-test-case.html 
description: 
---
Available since Katalon Studio v5.3

For full lifecycle of Tests in Katalon Studio, refer to this documentation.

Every test suite from your projects now has been equipped with the ability to run either **SetUp** or **Teardown** methods, which are groups of your own defined test steps before or after executing a Test Suite. This feature is another great extension besides Test Listener to extend your current testing flow as much as possible.

There will a **new tab** called '**Script**' in **Test Suite**'s interface. This interface will generate sample **Setup** and **TearDown** methods to be used.

**Supported methods**

| Method | Description | Trigger Condition | Common Usages |
| --- | --- | --- | --- |
| 
setUp

 | 

Setup test suite environment  
  


 | Before executed test suites | 

Prepare testing environment

Call required test cases for the executed test suite

 |
| setUpTestCase | Run before each test case starts | Before executed test cases |
| 

tearDown

 | 

Clean test suites environment

 | After executed test suites | 

Clean-up testing environment

Call TearDown test cases for the executed test suite

 |
| 

tearDownTestCase

 | 

Run after each test case ends

 | 

After executed test cases

 |

#### How it works

By default, these **Setup** and **Teardown** methods will not be triggered even if they match with provided trigger condition above. You need to **set skipped value from false** to true to activate related methods.

#### Methods consideration

*   Execution progress from these methods still have execution logs as usual and they will be stored in execution logs files of Katalon Studio.
    
*   You can't see setUp and teardown executed reports from generated Test Suite report. Only **setUpTestCase** and **tearDownTestCase** can be seen in generated Test Suite report
*   Test Listeners will always be triggered first if you define both Test Listeners and activate Setup / Teardown methods at the same time.