---
title: "Control Statements" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/control-statements.html 
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
===========================

In Manual view 
---------------

Open a test case in **Manual** view, then navigate to **Decision-making Statements** from command toolbar.

![](../../images/katalon-studio/docs/control-statements/image2017-6-30 20_40_1.png)

Refer to the following table for the usage of each statement:

<table><thead><tr><th>Statement</th><th>Description</th><th>Screenshot</th></tr></thead><tbody><tr><td>If</td><td>This statement requires a <strong>boolean condition</strong> as <strong>input value</strong>. Katalon Studio will execute all steps within once the condition is triggered.</td><td><div><p><span><img></span></p></div></td></tr><tr><td>Else If</td><td>Using <strong>Else If</strong> after <strong>If</strong>, you can create a combination of conditions where the steps within the <em>first</em> satisfied condition will be executed.</td></tr><tr><td>Else</td><td>This statement serves as the conclusion of the <strong>If - Else If - Else</strong> structure. The steps within this statement will be executed if <strong>all</strong> the conditions above it are <strong>not</strong> triggered.</td></tr><tr><td>Switch</td><td>This statement requires an expression, which is often referred to as <strong>the control expression</strong> (or <strong>control variable</strong>), as <strong>input value</strong>.</td><td><div><p><span><img></span></p></div></td></tr><tr><td>Case</td><td><p>The <strong>Cases</strong> indicate the assumed value for the <strong>control expression</strong>, <span>with corresponding steps to be executed when a match occurs.</span></p><p>Each <strong>Case</strong> will have a <strong>Break</strong> by default which should be positioned at the end of the <strong>Case</strong> block to mark the end of it.</p></td></tr><tr><td>Default</td><td>This statement is included automatically within every <strong>Switch</strong> statement. In situation which <strong>no</strong> <strong>Case</strong> value can be matched, the steps within <strong>Default</strong> will be taken.</td></tr></tbody></table>

In Scripting view
-----------------

The **Script** view of test cases allows you to programmatically define and handle **If-ElseIf-Else** or **Switch-Case** structure easily using either Groovy or Java language. Refer to [http://groovy-lang.org/semantics.html#\_conditional\_structures](http://groovy-lang.org/semantics.html#_conditional_structures) for more details about conditional structure in Groovy.

For example:

<table><thead><tr><th>Decision-making statement</th><th>Screenshot</th></tr></thead><tbody><tr><td><p>If - Else If - Else</p></td><td><div><p>&nbsp;<span><img></span></p></div></td></tr><tr><td><p>Switch - Case</p></td><td><div>&nbsp;<span><img></span></div></td></tr></tbody></table>

Looping statements 
===================

In Manual view 
---------------

Open a test case in **Manual** view, then navigate to **Looping Statements** from command toolbar.

![](../../images/katalon-studio/docs/control-statements/image2017-6-30 20_40_53.png)

Refer to following table for the usage of each statement:

<table><thead><tr><th>Statement</th><th>Description</th><th>Screenshot</th></tr></thead><tbody><tr><td>For</td><td><span>This statement accepts a <em>range</em>,<em> list</em> or <em>array</em> as <strong>input value</strong> so that Katalon Studio knows <strong>how many times</strong> to execute all steps within the <strong>For</strong> structure.</span></td><td><div><p><span><img></span></p></div></td></tr><tr><td>While</td><td><span>This statement requires a <strong>boolean condition</strong> as <strong>input value</strong> so that Katalon Studio will keep executing all steps within <strong>until the condition fails</strong>.</span></td><td><div><p><span><img></span></p></div></td></tr></tbody></table>

In Scripting view 
------------------

The **Script** View of test cases allows you to programmatically define and handle **For** or **While** structure easily using either Groovy or Java language. Refer to [http://groovy-lang.org/semantics.html#\_looping\_structures](http://groovy-lang.org/semantics.html#_looping_structures) for more details about looping structures in Groovy.

For example:

<table><thead><tr><th>Looping statement</th><th>Screenshot</th></tr></thead><tbody><tr><td><p>For</p></td><td><div><p><span><img></span></p></div></td></tr><tr><td><p>While</p></td><td><div><p><span><img></span></p></div></td></tr></tbody></table>

Branching statements 
=====================

In Manual view 
---------------

Open a test case in **Manual** view, then navigate to **Branching Statements** from command toolbar.

![](../../images/katalon-studio/docs/control-statements/image2017-6-30 20_41_31.png)

Refer to following table for the usage of each statement:

<table><thead><tr><th>Statement</th><th>Description</th><th>Screenshot</th></tr></thead><tbody><tr><td>Break</td><td><p>Katalon Studio will exit current code block and continue to next code block / test step.</p></td><td><div><p><span><img></span></p></div></td></tr><tr><td>Continue</td><td><span>Katalon Studio will skip the remainder of the current loop and continue with the next iteration of the loop.</span></td><td><div><p><span><img></span></p></div></td></tr><tr><td>Return</td><td><span>Katalon will exit from the current method/step, and the flow control is returned to where the method/step was invoked.</span></td><td><div><p><span><img></span></p></div></td></tr></tbody></table>

In Scripting view
-----------------

The **Script** view of test cases allows you to programmatically define and handle **Break**, **Continue** & **Return** easily using either Groovy or Java language. 

For example:

<table><thead><tr><th>Decision-making statement</th><th>Screenshot</th></tr></thead><tbody><tr><td><p>Break</p></td><td><div><span><img></span></div></td></tr><tr><td><p>Continue</p></td><td><div><span><img></span></div></td></tr><tr><td><p>Return</p></td><td><div><span><img></span></div></td></tr></tbody></table>

Exception handling block 
=========================

In Manual view 
---------------

Open a test case in **Manual** view, then navigate to **Exception Handling Statements** from command toolbar.

![](../../images/katalon-studio/docs/control-statements/image2017-6-30 20_42_21.png)

Refer to following table for the usage of each statement:

<table><thead><tr><th>Statement</th><th>Description</th><th>Screenshot</th></tr></thead><tbody><tr><td>Try</td><td>This statement indicates that all steps within will be monitored by<span><strong> exception handlers</strong>.</span></td><td><div><p><span><img></span></p></div></td></tr><tr><td>Throw</td><td>Before you can <strong>Catch</strong> an exception, some code must throw one. Regardless of what throws the exception, it's always involved with the <strong>Throw</strong> statement</td></tr><tr><td>Catch</td><td><span>Katalon Studio will&nbsp;</span><span>execute all steps within when there is any issue occurred during execution of the <strong>Try</strong> block.</span></td></tr><tr><td>Finally</td><td>This is the last part of the <strong>Try-Catch-Finally</strong> structure and <span>all steps within this will be executed regardless of any exception.</span></td></tr></tbody></table>

In Scripting view
-----------------

The **Script** view of test cases allows you to programmatically define and handle exception easily using either Groovy or Java language. Refer to [http://groovy-lang.org/semantics.html#\_try\_catch_finally](http://groovy-lang.org/semantics.html#_try_catch_finally) for more details about exception handling in Groovy.

For example:

![](../../images/katalon-studio/docs/control-statements/image2017-2-28 13_20_32.png)