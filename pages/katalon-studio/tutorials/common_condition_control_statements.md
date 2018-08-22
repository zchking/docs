---
title: "Common Condition and Control statements with Katalon Studio"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/common_condition_control_statements.html
description: "Katalon Studio provides the ability to dictate the flow of execution by supporting control statements which are common concepts in programming language."
---
[](#)

Katalon Studio provides a capability to dictate the logical flow of execution by supporting **control statements** such as _if/else_, _for/while_ and _try/catch_ which are very common concepts in programming languages. This tutorial will explain in details how to use **control statements** in Katalon Studio along with examples for each case.

The following control statements are supported in Katalon Studio:

*   **[Decision-making statements](https://docs.katalon.com/display/KD/Control+Statements#ControlStatements-Decision-makingstatements)**
*   **[Looping statements](https://docs.katalon.com/display/KD/Control+Statements#ControlStatements-Loopingstatements)**
*   **[Branching statements](https://docs.katalon.com/display/KD/Control+Statements#ControlStatements-Branchingstatements)**
*   **[Exception handling block](https://docs.katalon.com/display/KD/Control+Statements#ControlStatements-Exceptionhandlingblock)**

Note: once a test step is added as any of the control statements, it will not be allowed to change into another keyword.

Decision-making statements
--------------------------

### In the Manual view

Open a test case in the **Manual** view, then navigate to **Decision-making** Statements from command toolbar.

![navigate to Decision-making Statements from command toolbar](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2015%3A16%3A40.png)

Refer to the following table for the usage of each statement:

<table class="relative-table wrapped confluenceTable" border="1px solid black"><colgroup><col> <col></colgroup><tbody><tr style="height: 29.5312px;"><th class="confluenceTh" style="height: 29.5312px; width: 93px;">Statement</th><th class="confluenceTh" style="height: 29.5312px; width: 677px; text-align: center;">Description</th></tr><tr style="height: 24px;"><td class="confluenceTd" style="height: 24px; width: 93px;">If</td><td class="confluenceTd" style="height: 24px; width: 677px;">This statement requires a boolean condition as input value. Katalon Studio will execute all the steps within once the condition&nbsp;is triggered.</td></tr><tr style="height: 24px;"><td class="confluenceTd" style="height: 24px; width: 93px;">&nbsp;Else If</td><td class="confluenceTd" style="height: 24px; width: 677px;">Using Else If after If, you can create a combination of conditions where the steps within the <em>first </em>satisfied condition will be executed.</td></tr><tr style="height: 24px;"><td class="confluenceTd" style="height: 24px; width: 93px;">&nbsp;Else</td><td class="confluenceTd" style="height: 24px; width: 677px;">&nbsp;This statement serves as the conclusion of the If – Else If – Else structure. The steps within this statement will be executed if all the conditions above it are not triggered.</td></tr></tbody></table>

![you can create a combination of conditions](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2014%3A23%3A17.png)

<table class="relative-table wrapped confluenceTable" border="1px solid black"><colgroup><col> <col></colgroup><tbody><tr><th class="confluenceTh" style="width: 93px;">Statement</th><th class="confluenceTh" style="width: 680px;">Description</th></tr><tr><td class="confluenceTd" style="width: 93px;" colspan="1">Switch</td><td class="confluenceTd" style="width: 680px;" colspan="1">This statement requires an expression, which is often referred to as the control expression (or control variable), as input value.</td></tr><tr><td class="confluenceTd" style="width: 93px;" colspan="1">Case</td><td class="confluenceTd" style="width: 680px;" colspan="1">The Cases indicate the assumed value for the control expression, with the corresponding steps to be executed when a match occurs.<br>Each Case will have a Break by default which should be positioned at the end of the Case block to mark the end of it.</td></tr><tr><td class="confluenceTd" style="width: 93px;" colspan="1">Default</td><td class="confluenceTd" style="width: 680px;" colspan="1">This statement is included automatically within every Switch statement. In situations where there is no case matched, all the steps under default will be executed.</td></tr></tbody></table>

![Common Condition and Control statements with Katalon Studio](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2014%3A47%3A59.png)

### In the Script view

The Script view of test cases allows you to programmatically define and handle If-ElseIf-Else or Switch-Case structure easily using either Groovy or Java language. Refer to [conditional structure](http://groovy-lang.org/semantics.html#_conditional_structures) in Groovy for more details.

For example:

<table class="relative-table wrapped confluenceTable" border="1px solid black"><colgroup><col> <col> <col></colgroup><tbody><tr style="height: 48px;"><td class="confluenceTd" style="width: 153px; height: 48px;"><strong>Decision-making statement</strong></td><td class="confluenceTd" style="width: 624px; height: 48px; text-align: center;"><strong>Screenshot</strong></td></tr><tr style="height: 195.969px;"><td class="confluenceTd" style="width: 153px; height: 195.969px;"><strong>If – Else If – Else</strong></td><td class="confluenceTd" style="width: 624px; height: 195.969px;"><div class="content-wrapper"><p>Here is an example on how to use <strong>if-else if-else </strong>in the Script View where the Click action will be carried out based on the condition</p><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image alignleft" src="../../images/katalon-studio/tutorials/common_condition_control_statements/10.png" alt="Script View Katalon Studio" width="577" height="85" data-image-src="/download/attachments/786604/10.png?version=1&amp;modificationDate=1452064114000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="787287" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="10.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="41"></span></p></div></td></tr><tr style="height: 233px;"><td class="confluenceTd" style="width: 153px; height: 233px;"><strong>Switch – Case</strong></td><td class="confluenceTd" style="width: 624px; height: 233px;"><div class="content-wrapper"><p>Here is an example on how to use <strong>switch-case </strong>in the Script View where <i><span style="font-weight: 400;">varB</span></i>&nbsp;is calculated based on the passing value of&nbsp;<i><span style="font-weight: 400;">varA.</span></i></p></div><div class="content-wrapper"><img class="init-size wp-image-1988 size-thumbnail alignleft" src="../../images/katalon-studio/tutorials/common_condition_control_statements/Katalon-switch-case-150x150.png" alt="switch-case in the Script View" width="150" height="150"></div></td></tr></tbody></table>

Looping statements
------------------

### In the Manual view

Open a test case in Manual view, then navigate to **Looping Statements** from the command toolbar.

![Katalon Studio looping statement](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2015%3A29%3A14.png)

Refer to the following table for the usage of each statement:

  
| 
**Statement**

 | 

**Description**

 |
| --- | --- |
| **For** | This statement accepts a _range_, _list_ or _array_ as input value so that Katalon Studio knows how many times to execute all steps within the For structure. |

![how many times to execute all steps within the For structure](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2015%3A49%3A5.png)

  
| 
Statement

 | 

Description

 |
| --- | --- |
| **While** | This statement requires a boolean condition as input value so that Katalon Studio will keep executing all steps within until the condition fails. |

![ Katalon Studio will keep executing all steps within until the condition fails](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2015%3A53%3A44.png)

### In the Script view

The Script View of test cases allows you to programmatically define and handle For or While structure easily using either Groovy or Java language. Refer to [looping structures](http://groovy-lang.org/semantics.html#_looping_structures) in Groovy for more details.

For example:

<table class="relative-table wrapped confluenceTable" border="1px solid black"><colgroup><col> <col></colgroup><tbody><tr style="height: 24px;"><td class="confluenceTd" style="width: 174px; height: 24px;"><strong>Looping statement</strong></td><td class="confluenceTd" style="width: 640px; height: 24px;"><strong>Screenshot</strong></td></tr><tr style="height: 158px;"><td class="confluenceTd" style="width: 174px; height: 158px;"><strong>For</strong></td><td class="confluenceTd" style="width: 640px; height: 158px;"><div class="content-wrapper"><p>Here is an example on how to use <strong>For </strong>in the Script View where the <em>acceptAlert </em>keyword will be executed 10 times</p><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image alignnone" src="../../images/katalon-studio/tutorials/common_condition_control_statements/24.png" alt="how to use For in the Script View" width="300" height="32" data-image-src="/download/attachments/786604/24.png?version=1&amp;modificationDate=1452064128000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="787301" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="24.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="41"></span></p></div></td></tr><tr style="height: 101.094px;"><td class="confluenceTd" style="width: 174px; height: 101.094px;"><strong>While</strong></td><td class="confluenceTd" style="width: 640px; height: 101.094px;"><div class="content-wrapper"><p>Here is an example on how to use <strong>For </strong>in the Script View where the value of <strong>varA </strong>is <strong>true</strong></p><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image alignnone" src="../../images/katalon-studio/tutorials/common_condition_control_statements/25.png" alt="how to use For in the Script View" width="492" height="53" data-image-src="/download/attachments/786604/25.png?version=1&amp;modificationDate=1452064129000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="787302" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="25.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="41"></span></p></div></td></tr></tbody></table>

Branching statements
--------------------

### In the Manual view

Open a test case in the Manual view, then navigate to **Branching Statements** from the command toolbar.

![Katalon Studio Branching Statements](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2016%3A17%3A13.png)

Refer to the following table for the usage of each statement:

  
| 
**Statement**

 | 

Description

 |
| --- | --- |
| **Break** | Katalon Studio exits the current code block and continues to the next code block/test step. |

![the next code block/test step](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2016%3A36%3A37.png)

  
| 
Statement

 | 

Description

 |
| --- | --- |
| **Continue** | Katalon Studio will skip the remainder of the current loop and continue with the next iteration of the loop. |

![ the next iteration of the loop.](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2016%3A42%3A13.png)

  
| 
**Statement**

 | 

**Description**

 |
| --- | --- |
| **Return** | Katalon exits from the current method/step, and the flow control is returned to where the method/step is previously invoked. |

![the flow control is returned](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2016%3A47%3A44.png)

### In the Script view

The Script view of test cases allows you to programmatically define and handle Break, Continue & Return easily using either Groovy or Java language.

For example:

<table class="relative-table wrapped confluenceTable" border="1px solid black"><colgroup><col> <col></colgroup><tbody><tr><td class="confluenceTd" style="width: 203px;"><strong>Decision-making statement</strong></td><td class="confluenceTd" style="width: 566px;"><strong>Screenshot</strong></td></tr><tr><td class="confluenceTd" style="width: 203px;"><strong>Break</strong></td><td class="confluenceTd" style="width: 566px;"><div class="content-wrapper"><p>Here is an example on how to use <strong>Break </strong>in the Scripts View in order to exit current code block and move to next code block.</p></div><div class="content-wrapper"><img class="init-size alignnone wp-image-2371 size-full" src="../../images/katalon-studio/tutorials/common_condition_control_statements/Break-in-the-Scripts-Katalon-Studio.png" alt="Break-in-the-Scripts-Katalon-Studio" width="260" height="144"></div></td></tr><tr><td class="confluenceTd" style="width: 203px;"><strong>Continue</strong></td><td class="confluenceTd" style="width: 566px;"><div class="content-wrapper">Here is an example on how to use <strong>Continue </strong>in the Script View in order to skip the remainder of the current loop and continue with the next iteration of the loop.</div><div class="content-wrapper"><img class="init-size alignnone wp-image-2370 size-full" src="../../images/katalon-studio/tutorials/common_condition_control_statements/Continue-in-the-Script-View.png" alt="how to use Continue in the Script View" width="263" height="143"></div></td></tr><tr><td class="confluenceTd" style="width: 203px;"><strong>Return</strong></td><td class="confluenceTd" style="width: 566px;"><div class="content-wrapper"><p>Here is an example on how to use <strong>Return </strong>in the Script View in order to exit from the current method, and the flow control is returned to where the method was invoked.</p></div><div class="content-wrapper"><img class="init-size alignnone wp-image-2369 size-full" src="../../images/katalon-studio/tutorials/common_condition_control_statements/Return-in-the-Script-View.png" alt="how to use Return in the Script View" width="263" height="143"></div></td></tr></tbody></table>

Exception handling block
------------------------

### In the Manual view

Open a test case in Manual view, then navigate to **Exception Handling Statements** from the command toolbar.

![Katalon Studio Exception Handling Statements](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2017%3A0%3A13.png)

Refer to the following table for the usage of each statement:

<table class="relative-table wrapped confluenceTable" border="1px solid black"><colgroup><col> <col></colgroup><tbody><tr><th class="confluenceTh" style="text-align: center; width: 85px;">Statement</th><th class="confluenceTh" style="width: 661px;">Description</th></tr><tr><td class="confluenceTd" style="width: 85px;"><strong>Try</strong></td><td class="confluenceTd" style="width: 661px;">This statement indicates that all steps within it will be monitored by exception handlers.</td></tr><tr><td class="confluenceTd" style="width: 85px;" colspan="1"><strong>Throw</strong></td><td class="confluenceTd" style="width: 661px;" colspan="1">Before you can catch an exception, some code must throw it. Regardless of what throws the exception, it’s always involved with the Throw statement.</td></tr><tr><td class="confluenceTd" style="width: 85px;"><strong>Catch</strong></td><td class="confluenceTd" style="width: 661px;">Katalon Studio executes all steps within <span style="font-weight: 400;">the Catch block when there is any issue occurring during execution of the Try block</span>.</td></tr><tr><td class="confluenceTd" style="width: 85px;"><strong>Finally</strong></td><td class="confluenceTd" style="width: 661px;"><span style="font-weight: 400;">This is the last part of the Try-Catch-Finally structure and all steps within this block will be executed regardless of what exceptions and whether they are handled in the Catch block.</span></td></tr></tbody></table>

![the usage of each statement](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-28%2011%3A51%3A55.png)

### In the Script view

The Script view of test cases allows you to programmatically define and handle exception easily using either Groovy or Java language. Refer to [this guide](http://groovy-lang.org/semantics.html#_try_catch_finally) for more details about exception handling in Groovy.

For example:

![Katalon Studio Script View](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-28%2013%3A20%3A32.png)

[](#modal-id-popup)