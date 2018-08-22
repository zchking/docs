---
title: "Introduction to Custom Keywords" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/introduction-to-custom-keywords.html 
description: 
---
In addition to built-in keywords, users can define custom keywords to extend the capability of Katalon Studio. Once created, custom keywords can be used when implementing test cases just like other built-in keywords. 

Create a Package
----------------

A _package_ is a namespace that organizes a set of related classes and interfaces. Because software written in the Java programming language or similar languages can be composed of hundreds or _thousands _of individual classes, it makes sense to keep things organized by placing related classes and interfaces into packages.

1.  Select **File > New > Package** from the main menu. The **New Keyword Package** dialog will be displayed. Enter the name for your package and click **OK**.  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-2-6 15_35_6.png)  
      
    
2.  A new package is created under **Keywords** of Katalon Studio accordingly.  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-2-6 15_36_13.png)

Create a Custom Keyword
-----------------------

1.  Select **File > New > Keyword** from the main menu. The **New Keyword** dialog will be displayed. Enter the name for your keyword and specify a **package** for the keyword. Click **OK**.
    
    Since version 5.4, Katalon Studio provides user option to generate sample custom keywords for Web, Mobile and API Testing.
    
    Refer to this guide: [https://docs.katalon.com/x/3QHR](https://docs.katalon.com/x/3QHR)
    
      
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2018-4-2 14_37_16.png)
    
    Attention
    
    By default, a class name cannot start with a number, contain spaces, or have special characters. The Java naming convention suggests the user to create a class name using a noun or a noun phrase, with the first letter of each word capitalized, to better manage the project.
    
      
      
    
2.  A new keyword is created under the specified **package** accordingly.  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-2-6 15_50_48.png)  
      
    
3.  Enter the following block of code in your class to define one custom keyword:
    
    ```groovy
    @Keyword
    def keywordName(parameters…) {
       // enter your code here
       // you can use either Groovy or Java      
    }
    ```
    
    where:
    
    <table class="wrapped confluenceTable"><colgroup><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Item</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd">@Keyword</td><td class="xtd-1-1 confluenceTd">The annotation to indicate that the block of code below is the definition of a keyword.</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd">keywordName</td><td class="xtd-2-1 confluenceTd">The name that you would like to use for your custom keyword</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd">parameters</td><td class="xtd-3-1 confluenceTd">The list of parameters that would be used in the custom keyword</td></tr></tbody></table>
    
    For example:  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-2-6 16_20_3.png)
    
4.  Save the **Keyword** file when you're done.  
      
    

Custom keywords in Manual view
------------------------------

Follow the steps below in order to use your defined custom keywords in **Manual view** of a Test Case:

1.  Open a test case in **Manual** **view**, then select to add **Custom Keyword** from command toolbar.  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-6-30 20_32_47.png)  
      
    
2.  A new test step is added with a list of all defined custom keywords. Select your recently created keyword here.  
    ![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-2-6 16_44_46.png)

Custom keywords in Scripting view
---------------------------------

Follow the steps below in order to use your defined custom keywords in **Scripting view** of a test case:

*   The **Class** _CustomKeywords_ of Katalon Studio allows you to access all custom keywords. Enter the following syntax into the script editor:
    
    ```groovy
    CustomKeywords.
    ```
    
*   The **Content Assist** function will be invoked immediately after you type the **dot** character. **Content Assist** provides users with the context-sensitive suggestions for code completion. Therefore, all the custom keywords defined in your test project will be displayed as below:

![](../../images/katalon-studio/docs/introduction-to-custom-keywords/image2017-6-30 20_35_9.png)

*   Select the recently created keyword and provide all parameters as required.  
      
    

The following API docs may prove useful when working with custom keywords:

<table class="wrapped confluenceTable"><colgroup><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Class</th><th class="xtd-0-1 confluenceTh">Method</th><th class="xtd-0-2 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><strong><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webui/driver/DriverFactory.html" rel="nofollow">Driver Factory</a></strong></td><td class="xtd-1-1 confluenceTd"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webui/driver/DriverFactory.html#getWebDriver()" rel="nofollow">getWebDriver()</a></td><td class="xtd-1-2 confluenceTd" colspan="1">Get the current active web driver.</td></tr><tr class="xtr-2"><td class="xtd-2-0 xtd-3-0 xtd-4-0 xtd-5-0 confluenceTd" rowspan="4"><strong><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html" rel="nofollow">Test Object</a></strong></td><td class="xtd-2-1 confluenceTd"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#addProperty(java.lang.String,%20com.kms.katalon.core.testobject.ConditionType,%20java.lang.String)" rel="nofollow">addProperty(String name, ConditionType condition, String value)</a></td><td class="xtd-2-2 confluenceTd" colspan="1">Add a new property to the test object</td></tr><tr class="xtr-3"><td class="xtd-3-1 confluenceTd" colspan="1"><a class="in-cell-link" rel="nofollow">setProperties(List&lt;TestObjectProperty&gt; properties)</a></td><td class="xtd-3-2 confluenceTd" colspan="1">Set the properties of the test object</td></tr><tr class="xtr-4"><td class="xtd-4-1 confluenceTd" colspan="1"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#getObjectId()" rel="nofollow">getObjectId()</a></td><td class="xtd-4-2 confluenceTd" colspan="1">Get object ID.</td></tr><tr class="xtr-5"><td class="xtd-5-1 confluenceTd" colspan="1"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#findPropertyValue(java.lang.String,%20boolean)" rel="nofollow">findPropertyValue(String name, boolean caseSensitive)</a></td><td class="xtd-5-2 confluenceTd" colspan="1">Find the value of a property using the property name</td></tr><tr class="xtr-6"><td class="xtd-6-0 xtd-7-0 xtd-8-0 xtd-9-0 xtd-10-0 xtd-11-0 xtd-12-0 confluenceTd" rowspan="7"><strong><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html" rel="nofollow">Keyword Util</a></strong></td><td class="xtd-6-1 confluenceTd" colspan="1"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#logInfo(java.lang.String)" rel="nofollow">logInfo(String message)</a></td><td class="xtd-6-2 confluenceTd" colspan="1">Log message as info</td></tr><tr class="xtr-7"><td class="xtd-7-1 confluenceTd" colspan="1"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markError(java.lang.String)" rel="nofollow">markError(String message)</a></td><td class="xtd-7-2 confluenceTd" colspan="1">Mark a keyword to be error</td></tr><tr class="xtr-8"><td class="xtd-8-1 confluenceTd" colspan="1"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markErrorAndStop(java.lang.String)" rel="nofollow">markErrorAndStop(String message)</a></td><td class="xtd-8-2 confluenceTd" colspan="1">Mark a keyword to be error and stop execution</td></tr><tr class="xtr-9"><td class="xtd-9-1 confluenceTd" colspan="1"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markFailed(java.lang.String)" rel="nofollow">markFailed(String message)</a></td><td class="xtd-9-2 confluenceTd" colspan="1">Mark a keyword to be failed and continue execution</td></tr><tr class="xtr-10"><td class="xtd-10-1 confluenceTd" colspan="1"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markFailedAndStop(java.lang.String)" rel="nofollow">markFailedAndStop(String message)</a></td><td class="xtd-10-2 confluenceTd" colspan="1">Mark a keyword to be failed and stop execution</td></tr><tr class="xtr-11"><td class="xtd-11-1 confluenceTd" colspan="1"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markPassed(java.lang.String)" rel="nofollow">markPassed(String message)</a></td><td class="xtd-11-2 confluenceTd" colspan="1">Mark a keyword to be passed</td></tr><tr class="xtr-12"><td class="xtd-12-1 confluenceTd" colspan="1"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markWarning(java.lang.String)" rel="nofollow">markWarning(String message)</a></td><td class="xtd-12-2 confluenceTd" colspan="1">Mark a keyword to be warning</td></tr></tbody></table>