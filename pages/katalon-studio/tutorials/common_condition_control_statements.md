---
title: "Common Condition and Control statements with Katalon Studio"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/common_condition_control_statements.html
description: "Katalon Studio provides the ability to dictate the flow of execution by supporting control statements which are common concepts in programming language."
---
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

Statement

Description

If

This statement requires a boolean condition as input value. Katalon Studio will execute all the steps within once the condition is triggered.

 Else If

Using Else If after If, you can create a combination of conditions where the steps within the _first_ satisfied condition will be executed.

 Else

 This statement serves as the conclusion of the If – Else If – Else structure. The steps within this statement will be executed if all the conditions above it are not triggered.

![you can create a combination of conditions](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2014%3A23%3A17.png)

Statement

Description

Switch

This statement requires an expression, which is often referred to as the control expression (or control variable), as input value.

Case

The Cases indicate the assumed value for the control expression, with the corresponding steps to be executed when a match occurs.  
Each Case will have a Break by default which should be positioned at the end of the Case block to mark the end of it.

Default

This statement is included automatically within every Switch statement. In situations where there is no case matched, all the steps under default will be executed.

![Common Condition and Control statements with Katalon Studio](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2014%3A47%3A59.png)

### In the Script view

The Script view of test cases allows you to programmatically define and handle If-ElseIf-Else or Switch-Case structure easily using either Groovy or Java language. Refer to [conditional structure](http://groovy-lang.org/semantics.html#_conditional_structures) in Groovy for more details.

For example:

Decision-making statement

Screenshot

**If – Else If – Else**

Here is an example on how to use **if-else if-else** in the Script View where the Click action will be carried out based on the condition

![Script View Katalon Studio](../../images/katalon-studio/tutorials/common_condition_control_statements/10.png)

**Switch – Case**

Here is an example on how to use **switch-case** in the Script View where _varB_ is calculated based on the passing value of _varA._

![switch-case in the Script View](../../images/katalon-studio/tutorials/common_condition_control_statements/Katalon-switch-case-150x150.png)

Looping statements
------------------

### In the Manual view

Open a test case in Manual view, then navigate to **Looping Statements** from the command toolbar.

![Katalon Studio looping statement](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2015%3A29%3A14.png)

Refer to the following table for the usage of each statement:

**Statement**

**Description**

**For**

This statement accepts a _range_, _list_ or _array_ as input value so that Katalon Studio knows how many times to execute all steps within the For structure.

![how many times to execute all steps within the For structure](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2015%3A49%3A5.png)

Statement

Description

**While**

This statement requires a boolean condition as input value so that Katalon Studio will keep executing all steps within until the condition fails.

![ Katalon Studio will keep executing all steps within until the condition fails](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2015%3A53%3A44.png)

### In the Script view

The Script View of test cases allows you to programmatically define and handle For or While structure easily using either Groovy or Java language. Refer to [looping structures](http://groovy-lang.org/semantics.html#_looping_structures) in Groovy for more details.

For example:

Looping statement

Screenshot

**For**

Here is an example on how to use **For** in the Script View where the _acceptAlert_ keyword will be executed 10 times

![how to use For in the Script View](../../images/katalon-studio/tutorials/common_condition_control_statements/24.png)

**While**

Here is an example on how to use **For** in the Script View where the value of **varA** is **true**

![how to use For in the Script View](../../images/katalon-studio/tutorials/common_condition_control_statements/25.png)

Branching statements
--------------------

### In the Manual view

Open a test case in the Manual view, then navigate to **Branching Statements** from the command toolbar.

![Katalon Studio Branching Statements](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2016%3A17%3A13.png)

Refer to the following table for the usage of each statement:

**Statement**

Description

**Break**

Katalon Studio exits the current code block and continues to the next code block/test step.

![the next code block/test step](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2016%3A36%3A37.png)

Statement

Description

**Continue**

Katalon Studio will skip the remainder of the current loop and continue with the next iteration of the loop.

![ the next iteration of the loop.](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2016%3A42%3A13.png)

**Statement**

**Description**

**Return**

Katalon exits from the current method/step, and the flow control is returned to where the method/step is previously invoked.

![the flow control is returned](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2016%3A47%3A44.png)

### In the Script view

The Script view of test cases allows you to programmatically define and handle Break, Continue & Return easily using either Groovy or Java language.

For example:

Decision-making statement

Screenshot

**Break**

Here is an example on how to use **Break** in the Scripts View in order to exit current code block and move to next code block.

![Break-in-the-Scripts-Katalon-Studio](../../images/katalon-studio/tutorials/common_condition_control_statements/Break-in-the-Scripts-Katalon-Studio.png)

**Continue**

Here is an example on how to use **Continue** in the Script View in order to skip the remainder of the current loop and continue with the next iteration of the loop.

![how to use Continue in the Script View](../../images/katalon-studio/tutorials/common_condition_control_statements/Continue-in-the-Script-View.png)

**Return**

Here is an example on how to use **Return** in the Script View in order to exit from the current method, and the flow control is returned to where the method was invoked.

![how to use Return in the Script View](../../images/katalon-studio/tutorials/common_condition_control_statements/Return-in-the-Script-View.png)

Exception handling block
------------------------

### In the Manual view

Open a test case in Manual view, then navigate to **Exception Handling Statements** from the command toolbar.

![Katalon Studio Exception Handling Statements](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9%2017%3A0%3A13.png)

Refer to the following table for the usage of each statement:

Statement

Description

**Try**

This statement indicates that all steps within it will be monitored by exception handlers.

**Throw**

Before you can catch an exception, some code must throw it. Regardless of what throws the exception, it’s always involved with the Throw statement.

**Catch**

Katalon Studio executes all steps within the Catch block when there is any issue occurring during execution of the Try block.

**Finally**

This is the last part of the Try-Catch-Finally structure and all steps within this block will be executed regardless of what exceptions and whether they are handled in the Catch block.

![the usage of each statement](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-28%2011%3A51%3A55.png)

### In the Script view

The Script view of test cases allows you to programmatically define and handle exception easily using either Groovy or Java language. Refer to [this guide](http://groovy-lang.org/semantics.html#_try_catch_finally) for more details about exception handling in Groovy.

For example:

![Katalon Studio Script View](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-28%2013%3A20%3A32.png)