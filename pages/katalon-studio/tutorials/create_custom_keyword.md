---
title: "How to create a custom keyword"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/create_custom_keyword.html
description: "In addition to the built-in keywords, Katalon Studio users can define custom keyword to extend the capability and reuse them across projects"
---
In addition to the built-in keywords, users can define custom keywords to extend the capability of Katalon Studio. Once created, custom keywords can be used in test cases just like other built-in keywords. This feature allows users to expand keywords and reuse them across projects.

Create a Package
----------------

A package allows you to group custom keywords into a specific category, making keywords easier to search and use.

1. Select **File > New > Package** from the main menu to open the **New Keyword Package** dialog. Enter the name for your package and click **OK**.

![New custom Keyword Package](../../images/katalon-studio/tutorials/create_custom_keyword/1.-Katalon-Keyword-package.png)

2\. A new package is created under **Keywords** of Katalon Studio accordingly.

![Keywords of Katalon Studio](../../images/katalon-studio/tutorials/create_custom_keyword/2.-Katalon-Keyword.png)

Create a Custom Keyword
-----------------------

1. Select **File > New > Keyword** from the main menu to open the **New Keyword** dialog. Enter the name for your keyword and select a **package** for the keyword. Click **OK**.

![New Keyword dialog](../../images/katalon-studio/tutorials/create_custom_keyword/3.-Katalon-New-Keyword.png)

2. A new keyword is created under the specified **package** accordingly.

![new keyword is created](../../images/katalon-studio/tutorials/create_custom_keyword/4.-Katalon-new-keyword.png)

3. Enter the following block of code in your class to define a custom keyword in Java/Groovy:  

where:

<table><thead><tr><th>Item</th><th>Description</th></tr></thead><tbody><tr><td>@Keyword</td><td>The annotation to indicate that the block of code below is the definition of a keyword.</td></tr><tr><td>keywordName</td><td>The name that you would like to use for your custom keyword</td></tr><tr><td>parameters</td><td>The list of parameters that would be used in the custom keyword</td></tr></tbody></table>

For example:

![define a custom keyword in Java/Groovy](../../images/katalon-studio/tutorials/create_custom_keyword/5.-Katalon-keyword-groovy.png)  

4\. Save the **Keyword** file when you’re done.

Custom keywords in Manual view
------------------------------

Follow the steps below to use your defined custom keywords in the **Manual view** of a test case:

1. Open a test case in **Manual** **view**, then add **Custom Keyword** in script from the command toolbar.

![add Custom Keyword in Manual View](../../images/katalon-studio/tutorials/create_custom_keyword/6.-Katalon-Manual-view.png)

2. A new test step is added with a list of all defined custom keywords. Select your recently created keyword here.

![defined custom keywords](../../images/katalon-studio/tutorials/create_custom_keyword/7.-Katalon-new-test-case.png)

Custom keywords in Scripting view
---------------------------------

Follow the steps below to use your defined custom keywords in the **Scripting view** of a test case:

*   The **Class** _CustomKeywords_ allows you to access all custom keywords. Enter the following syntax into the script editor:

```groovy


 
CustomKeywords.

```

*   The **Content Assist** function will be invoked immediately after you type the **dot** character. **Content Assist** provides context-sensitive suggestions for code completion. Therefore, all the custom keywords defined in your test project will be displayed as below:

![Content Assist function](../../images/katalon-studio/tutorials/create_custom_keyword/8.-Katalon-Conten-assist.png)

*   Select the recently created keyword and provide all parameters as required.

The following API docs provide details on the functions used to work with custom keywords:

<table><thead><tr><th>Class</th><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><span><a><b>Driver Factory</b></a></span></td><td><a><span>getWebDriver()</span></a></td><td><span>Get the currently active web driver.</span></td></tr><tr><td><span><a><b>Test Object</b></a></span></td><td><a><span>addProperty(String name, ConditionType condition, String value)</span></a></td><td><span>Add a new property to a test object</span></td></tr><tr><td><span>setProperties(List&lt;TestObjectProperty&gt; properties)&nbsp;</span></td><td><span>Set properties of a test object</span></td></tr><tr><td><a><span>getObjectId()</span></a></td><td><span>Get object ID.</span></td></tr><tr><td><a><span>findPropertyValue(String name, boolean caseSensitive)</span></a></td><td><span>Find the value of a property using its name</span></td></tr><tr><td><span><a><b>Keyword Util</b></a></span></td><td><a><span>logInfo(String message)</span></a></td><td><span>Log message</span></td></tr><tr><td><a><span>markError(String message)</span></a></td><td><span>Mark a keyword as an error</span></td></tr><tr><td><a><span>markErrorAndStop(String message)</span></a></td><td><span>Mark a keyword as an error and stop execution</span></td></tr><tr><td><a><span>markFailed(String message)</span></a></td><td><span>Mark a keyword as failed and continue execution</span></td></tr><tr><td><a><span>markFailedAndStop(String message)</span></a></td><td><span>Mark a keyword as failed and stop execution</span></td></tr><tr><td><a><span>markPassed(String message)</span></a></td><td><span>Mark a keyword as passed</span></td></tr><tr><td><a><span>markWarning(String message)</span></a></td><td><span>Mark a keyword as warning</span></td></tr></tbody></table>

You can download [this project](https://github.com/katalon-studio/CustomKeywords) for example regarding custom keyword.