---
title: "Control Statements" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/control-statements.html 
redirect_from: "/display/KD/Control+Statements" 
description: 
---
Katalon Studio provides the ability to dictate the logical flow of execution by supporting **control statements** such as _If/Else_, _for/while_ or _Try/Catch_… which are very common concepts in programming language.

The following control statements are supported in Katalon Studio:

*   [Decision-making statements](https://docs.katalon.com/display/KD/Control+Statements#ControlStatements-Decision-makingstatements) 
*   [Looping statements](https://docs.katalon.com/display/KD/Control+Statements#ControlStatements-Loopingstatements)
*   [Branching statements](https://docs.katalon.com/display/KD/Control+Statements#ControlStatements-Branchingstatements)
*   [Exception handling block](https://docs.katalon.com/display/KD/Control+Statements#ControlStatements-Exceptionhandlingblock)

Once a test step is added as any of the control statements, it will **not** be allowed to change it into another keyword.

Decision-making statements 
---------------------------

### In Manual view 

Open a test case in **Manual** view, then navigate to **Decision-making Statements** from command toolbar.

![](../../images/katalon-studio/docs/control-statements/image2017-6-30 20_40_1.png)

Refer to the following table for the usage of each statement:

<table><thead><tr><th>Statement</th><th>Description</th><th>Screenshot</th></tr></thead><tbody><tr><td>If</td><td>This statement requires a <strong>boolean condition</strong> as <strong>input value</strong>. Katalon Studio will execute all steps within once the condition is triggered.</td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/image2017-2-9 14_23_17.png" data-image-src="/download/attachments/786604/image2017-2-9%2014%3A23%3A17.png?version=1&amp;modificationDate=1486624997000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112260" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-9 14:23:17.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></p></div></td></tr><tr><td>Else If</td><td>Using <strong>Else If</strong> after <strong>If</strong>, you can create a combination of conditions where the steps within the <em>first</em> satisfied condition will be executed.</td></tr><tr><td>Else</td><td>This statement serves as the conclusion of the <strong>If - Else If - Else</strong> structure. The steps within this statement will be executed if <strong>all</strong> the conditions above it are <strong>not</strong> triggered.</td></tr><tr><td>Switch</td><td>This statement requires an expression, which is often referred to as <strong>the control expression</strong> (or <strong>control variable</strong>), as <strong>input value</strong>.</td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/image2017-2-9 14_47_59.png" data-image-src="/download/attachments/786604/image2017-2-9%2014%3A47%3A59.png?version=1&amp;modificationDate=1486626480000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112261" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-9 14:47:59.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></p></div></td></tr><tr><td>Case</td><td><p>The <strong>Cases</strong> indicate the assumed value for the <strong>control expression</strong>, <span>with corresponding steps to be executed when a match occurs.</span></p><p>Each <strong>Case</strong> will have a <strong>Break</strong> by default which should be positioned at the end of the <strong>Case</strong> block to mark the end of it.</p></td></tr><tr><td>Default</td><td>This statement is included automatically within every <strong>Switch</strong> statement. In situation which <strong>no</strong> <strong>Case</strong> value can be matched, the steps within <strong>Default</strong> will be taken.</td></tr></tbody></table>

### In Scripting view

The **Script** view of test cases allows you to programmatically define and handle **If-ElseIf-Else** or **Switch-Case** structure easily using either Groovy or Java language. Refer to [http://groovy-lang.org/semantics.html#\_conditional\_structures](http://groovy-lang.org/semantics.html#_conditional_structures) for more details about conditional structure in Groovy.

For example:

<table><thead><tr><th>Decision-making statement</th><th>Screenshot</th></tr></thead><tbody><tr><td><p>If - Else If - Else</p></td><td><div class="content-wrapper"><p>&nbsp;<span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/10.png" data-image-src="/download/attachments/786604/10.png?version=1&amp;modificationDate=1452064114000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="787287" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="10.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></p></div></td></tr><tr><td><p>Switch - Case</p></td><td><div class="content-wrapper">&nbsp;<span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/11.png" data-image-src="/download/attachments/786604/11.png?version=1&amp;modificationDate=1452064115000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="787288" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="11.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></div></td></tr></tbody></table>

Looping statements 
-------------------

### In Manual view 

Open a test case in **Manual** view, then navigate to **Looping Statements** from command toolbar.

![](../../images/katalon-studio/docs/control-statements/image2017-6-30 20_40_53.png)

Refer to following table for the usage of each statement:

<table><thead><tr><th>Statement</th><th>Description</th><th>Screenshot</th></tr></thead><tbody><tr><td>For</td><td><span>This statement accepts a <em>range</em>,<em> list</em> or <em>array</em> as <strong>input value</strong> so that Katalon Studio knows <strong>how many times</strong> to execute all steps within the <strong>For</strong> structure.</span></td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/image2017-2-9 15_49_5.png" data-image-src="/download/attachments/786604/image2017-2-9%2015%3A49%3A5.png?version=1&amp;modificationDate=1486630146000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112268" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-9 15:49:5.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></p></div></td></tr><tr><td>While</td><td><span>This statement requires a <strong>boolean condition</strong> as <strong>input value</strong> so that Katalon Studio will keep executing all steps within <strong>until the condition fails</strong>.</span></td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/image2017-2-9 15_53_44.png" data-image-src="/download/attachments/786604/image2017-2-9%2015%3A53%3A44.png?version=1&amp;modificationDate=1486630424000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112269" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-9 15:53:44.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></p></div></td></tr></tbody></table>

### In Scripting view 

The **Script** View of test cases allows you to programmatically define and handle **For** or **While** structure easily using either Groovy or Java language. Refer to [http://groovy-lang.org/semantics.html#\_looping\_structures](http://groovy-lang.org/semantics.html#_looping_structures) for more details about looping structures in Groovy.

For example:

<table><thead><tr><th>Looping statement</th><th>Screenshot</th></tr></thead><tbody><tr><td><p>For</p></td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/24.png" data-image-src="/download/attachments/786604/24.png?version=1&amp;modificationDate=1452064128000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="787301" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="24.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></p></div></td></tr><tr><td><p>While</p></td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/25.png" data-image-src="/download/attachments/786604/25.png?version=1&amp;modificationDate=1452064129000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="787302" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="25.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></p></div></td></tr></tbody></table>

Branching statements 
---------------------

### In Manual view 

Open a test case in **Manual** view, then navigate to **Branching Statements** from command toolbar.

![](../../images/katalon-studio/docs/control-statements/image2017-6-30 20_41_31.png)

Refer to following table for the usage of each statement:

<table><thead><tr><th>Statement</th><th>Description</th><th>Screenshot</th></tr></thead><tbody><tr><td>Break</td><td><p>Katalon Studio will exit current code block and continue to next code block / test step.</p></td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/image2017-2-9 16_36_37.png" data-image-src="/download/attachments/786604/image2017-2-9%2016%3A36%3A37.png?version=1&amp;modificationDate=1486632997000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112272" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-9 16:36:37.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></p></div></td></tr><tr><td>Continue</td><td><span>Katalon Studio will skip the remainder of the current loop and continue with the next iteration of the loop.</span></td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/image2017-2-9 16_42_13.png" data-image-src="/download/attachments/786604/image2017-2-9%2016%3A42%3A13.png?version=1&amp;modificationDate=1486633334000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112273" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-9 16:42:13.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></p></div></td></tr><tr><td>Return</td><td><span>Katalon will exit from the current method/step, and the flow control is returned to where the method/step was invoked.</span></td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/image2017-2-9 16_47_44.png" data-image-src="/download/attachments/786604/image2017-2-9%2016%3A47%3A44.png?version=1&amp;modificationDate=1486633665000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112274" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-9 16:47:44.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></p></div></td></tr></tbody></table>

### In Scripting view

The **Script** view of test cases allows you to programmatically define and handle **Break**, **Continue** & **Return** easily using either Groovy or Java language. 

For example:

<table><thead><tr><th>Decision-making statement</th><th>Screenshot</th></tr></thead><tbody><tr><td><p>Break</p></td><td><div class="content-wrapper"><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/36.png" data-image-src="/download/attachments/786604/36.png?version=1&amp;modificationDate=1452064141000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="787313" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="36.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></div></td></tr><tr><td><p>Continue</p></td><td><div class="content-wrapper"><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/37.png" data-image-src="/download/attachments/786604/37.png?version=1&amp;modificationDate=1452064142000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="787314" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="37.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></div></td></tr><tr><td><p>Return</p></td><td><div class="content-wrapper"><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/38.png" data-image-src="/download/attachments/786604/38.png?version=1&amp;modificationDate=1452064142000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="787315" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="38.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></div></td></tr></tbody></table>

Exception handling block 
-------------------------

### In Manual view 

Open a test case in **Manual** view, then navigate to **Exception Handling Statements** from command toolbar.

![](../../images/katalon-studio/docs/control-statements/image2017-6-30 20_42_21.png)

Refer to following table for the usage of each statement:

<table><thead><tr><th>Statement</th><th>Description</th><th>Screenshot</th></tr></thead><tbody><tr><td>Try</td><td>This statement indicates that all steps within will be monitored by<span><strong> exception handlers</strong>.</span></td><td><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/control-statements/image2017-2-28 11_51_55.png" data-image-src="/download/attachments/786604/image2017-2-28%2011%3A51%3A55.png?version=1&amp;modificationDate=1488257515000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5113399" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-28 11:51:55.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786604" data-linked-resource-container-version="1"></span></p></div></td></tr><tr><td>Throw</td><td>Before you can <strong>Catch</strong> an exception, some code must throw one. Regardless of what throws the exception, it's always involved with the <strong>Throw</strong> statement</td></tr><tr><td>Catch</td><td><span>Katalon Studio will&nbsp;</span><span>execute all steps within when there is any issue occurred during execution of the <strong>Try</strong> block.</span></td></tr><tr><td>Finally</td><td>This is the last part of the <strong>Try-Catch-Finally</strong> structure and <span>all steps within this will be executed regardless of any exception.</span></td></tr></tbody></table>

### In Scripting view

The **Script** view of test cases allows you to programmatically define and handle exception easily using either Groovy or Java language. Refer to [http://groovy-lang.org/semantics.html#\_try\_catch_finally](http://groovy-lang.org/semantics.html#_try_catch_finally) for more details about exception handling in Groovy.

For example:

![](../../images/katalon-studio/docs/control-statements/image2017-2-28 13_20_32.png)