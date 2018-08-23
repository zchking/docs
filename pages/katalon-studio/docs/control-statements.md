---
title: "Control Statements" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/control-statements.html 
description: 
---
Katalon Studio provides the ability to dictate the logical flow of execution by supporting **control statements** such as _If/Else_, _for/while_ or _Try/Catch_… which are very common concepts in programming language.

The following control statements are supported in Katalon Studio:

*   Decision-making statements 
*   Looping statements
*   Branching statements
*   Exception handling block

Once a test step is added as any of the control statements, it will **not** be allowed to change it into another keyword.

Decision-making statements 
---------------------------

### In Manual view 

Open a test case in **Manual** view, then navigate to **Decision-making Statements** from command toolbar.

Refer to the following table for the usage of each statement:

| Statement | Description | Screenshot |
| --- | --- | --- |
| If | This statement requires a **boolean condition** as **input value**. Katalon Studio will execute all steps within once the condition is triggered. | 
 |
| Else If | Using **Else If** after **If**, you can create a combination of conditions where the steps within the _first_ satisfied condition will be executed. |
| Else | This statement serves as the conclusion of the **If - Else If - Else** structure. The steps within this statement will be executed if **all** the conditions above it are **not** triggered. |
| Switch | This statement requires an expression, which is often referred to as **the control expression** (or **control variable**), as **input value**. | 

 |
| Case | 

The **Cases** indicate the assumed value for the **control expression**, with corresponding steps to be executed when a match occurs.

Each **Case** will have a **Break** by default which should be positioned at the end of the **Case** block to mark the end of it.

 |
| Default | This statement is included automatically within every **Switch** statement. In situation which **no** **Case** value can be matched, the steps within **Default** will be taken. |

### In Scripting view

The **Script** view of test cases allows you to programmatically define and handle **If-ElseIf-Else** or **Switch-Case** structure easily using either Groovy or Java language. Refer to http://groovy-lang.org/semantics.html#\_conditional\_structures for more details about conditional structure in Groovy.

For example:

<table><tbody><tr><td><p><strong>Decision-making statement</strong></p></td><td><p><strong>Screenshot</strong></p></td></tr><tr><td><p>If - Else If - Else</p></td><td><div><p>&nbsp;<span><img></span></p></div></td></tr><tr><td><p>Switch - Case</p></td><td><div>&nbsp;<span><img></span></div></td></tr></tbody></table>

Looping statements 
-------------------

### In Manual view 

Open a test case in **Manual** view, then navigate to **Looping Statements** from command toolbar.

Refer to following table for the usage of each statement:

| Statement | Description | Screenshot |
| --- | --- | --- |
| For | This statement accepts a _range_, _list_ or _array_ as **input value** so that Katalon Studio knows **how many times** to execute all steps within the **For** structure. | 
 |
| While | This statement requires a **boolean condition** as **input value** so that Katalon Studio will keep executing all steps within **until the condition fails**. | 

 |

### In Scripting view 

The **Script** View of test cases allows you to programmatically define and handle **For** or **While** structure easily using either Groovy or Java language. Refer to http://groovy-lang.org/semantics.html#\_looping\_structures for more details about looping structures in Groovy.

For example:

<table><tbody><tr><td><p><strong>Looping statement</strong></p></td><td><p><strong>Screenshot</strong></p></td></tr><tr><td><p>For</p></td><td><div><p><span><img></span></p></div></td></tr><tr><td><p>While</p></td><td><div><p><span><img></span></p></div></td></tr></tbody></table>

Branching statements 
---------------------

### In Manual view 

Open a test case in **Manual** view, then navigate to **Branching Statements** from command toolbar.

Refer to following table for the usage of each statement:

| Statement | Description | Screenshot |
| --- | --- | --- |
| Break | 
Katalon Studio will exit current code block and continue to next code block / test step.

 | 

 |
| Continue | Katalon Studio will skip the remainder of the current loop and continue with the next iteration of the loop. | 

 |
| Return | Katalon will exit from the current method/step, and the flow control is returned to where the method/step was invoked. | 

 |

### In Scripting view

The **Script** view of test cases allows you to programmatically define and handle **Break**, **Continue** & **Return** easily using either Groovy or Java language. 

For example:

<table><tbody><tr><td><p><strong>Decision-making statement</strong></p></td><td><p><strong>Screenshot</strong></p></td></tr><tr><td><p>Break</p></td><td><div><span><img></span></div></td></tr><tr><td><p>Continue</p></td><td><div><span><img></span></div></td></tr><tr><td><p>Return</p></td><td><div><span><img></span></div></td></tr></tbody></table>

Exception handling block 
-------------------------

### In Manual view 

Open a test case in **Manual** view, then navigate to **Exception Handling Statements** from command toolbar.

Refer to following table for the usage of each statement:

| Statement | Description | Screenshot |
| --- | --- | --- |
| Try | This statement indicates that all steps within will be monitored by **exception handlers**. | 
 |
| Throw | Before you can **Catch** an exception, some code must throw one. Regardless of what throws the exception, it's always involved with the **Throw** statement |
| Catch | Katalon Studio will execute all steps within when there is any issue occurred during execution of the **Try** block. |
| Finally | This is the last part of the **Try-Catch-Finally** structure and all steps within this will be executed regardless of any exception. |

### In Scripting view

The **Script** view of test cases allows you to programmatically define and handle exception easily using either Groovy or Java language. Refer to http://groovy-lang.org/semantics.html#\_try\_catch_finally for more details about exception handling in Groovy.

For example: