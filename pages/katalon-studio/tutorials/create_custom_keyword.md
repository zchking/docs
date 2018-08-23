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

<table style="height: 120px; width: 817px; border-color: #423c3c;" border="3"><tbody><tr><td style="width: 142px; text-align: left; border-color: #423c3c;"><strong>Item</strong></td><td style="width: 663px; text-align: left; border-color: #423c3c;"><strong>Description</strong></td></tr><tr><td style="width: 142px; text-align: left;">@Keyword</td><td style="width: 663px; text-align: left;">The annotation to indicate that the block of code below is the definition of a keyword.</td></tr><tr><td style="width: 142px; text-align: left;">keywordName</td><td style="width: 663px; text-align: left;">The name that you would like to use for your custom keyword</td></tr><tr><td style="width: 142px; text-align: left;">parameters</td><td style="width: 663px; text-align: left;">The list of parameters that would be used in the custom keyword</td></tr></tbody></table>

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

<table style="height: 416px; width: 851px; border-color: #363131;" border="3"><tbody><tr><td style="width: 147px; text-align: center;"><strong>Class</strong></td><td style="width: 331px; text-align: center;"><strong>Method</strong></td><td style="width: 353px; text-align: center;"><strong>Description</strong></td></tr><tr><td style="width: 147px;"><span style="text-decoration: underline;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webui/driver/DriverFactory.html"><b>Driver Factory</b></a></span></td><td style="width: 331px;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webui/driver/DriverFactory.html#getWebDriver()"><span style="font-weight: 400;">getWebDriver()</span></a></td><td style="width: 353px;"><span style="font-weight: 400;">Get the currently active web driver.</span></td></tr><tr><td style="width: 147px;" rowspan="4"><span style="text-decoration: underline;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html"><b>Test Object</b></a></span></td><td style="width: 331px;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#addProperty(java.lang.String,%20com.kms.katalon.core.testobject.ConditionType,%20java.lang.String)"><span style="font-weight: 400;">addProperty(String name, ConditionType condition, String value)</span></a></td><td style="width: 353px;"><span style="font-weight: 400;">Add a new property to a test object</span></td></tr><tr><td style="width: 331px;"><span style="font-weight: 400;">setProperties(List&lt;TestObjectProperty&gt; properties)&nbsp;</span></td><td style="width: 353px;"><span style="font-weight: 400;">Set properties of a test object</span></td></tr><tr><td style="width: 331px;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#getObjectId()"><span style="font-weight: 400;">getObjectId()</span></a></td><td style="width: 353px;"><span style="font-weight: 400;">Get object ID.</span></td></tr><tr><td style="width: 331px;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#findPropertyValue(java.lang.String,%20boolean)"><span style="font-weight: 400;">findPropertyValue(String name, boolean caseSensitive)</span></a></td><td style="width: 353px;"><span style="font-weight: 400;">Find the value of a property using its name</span></td></tr><tr><td style="width: 147px;" rowspan="7"><span style="text-decoration: underline;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html"><b>Keyword Util</b></a></span></td><td style="width: 331px;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#logInfo(java.lang.String)"><span style="font-weight: 400;">logInfo(String message)</span></a></td><td style="width: 353px;"><span style="font-weight: 400;">Log message</span></td></tr><tr><td style="width: 331px;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markError(java.lang.String)"><span style="font-weight: 400;">markError(String message)</span></a></td><td style="width: 353px;"><span style="font-weight: 400;">Mark a keyword as an error</span></td></tr><tr><td style="width: 331px;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markErrorAndStop(java.lang.String)"><span style="font-weight: 400;">markErrorAndStop(String message)</span></a></td><td style="width: 353px;"><span style="font-weight: 400;">Mark a keyword as an error and stop execution</span></td></tr><tr><td style="width: 331px;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markFailed(java.lang.String)"><span style="font-weight: 400;">markFailed(String message)</span></a></td><td style="width: 353px;"><span style="font-weight: 400;">Mark a keyword as failed and continue execution</span></td></tr><tr><td style="width: 331px;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markFailedAndStop(java.lang.String)"><span style="font-weight: 400;">markFailedAndStop(String message)</span></a></td><td style="width: 353px;"><span style="font-weight: 400;">Mark a keyword as failed and stop execution</span></td></tr><tr><td style="width: 331px;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markPassed(java.lang.String)"><span style="font-weight: 400;">markPassed(String message)</span></a></td><td style="width: 353px;"><span style="font-weight: 400;">Mark a keyword as passed</span></td></tr><tr><td style="width: 331px;"><a href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markWarning(java.lang.String)"><span style="font-weight: 400;">markWarning(String message)</span></a></td><td style="width: 353px;"><span style="font-weight: 400;">Mark a keyword as warning</span></td></tr></tbody></table>

You can download [this project](https://github.com/katalon-studio/CustomKeywords) for example regarding custom keyword.