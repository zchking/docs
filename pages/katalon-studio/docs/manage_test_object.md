---
title: "Manage Test Object" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/manage_test_object.html 
description: 
---
Create a Test Object
--------------------

1.  Select **File > New > Test Object** from the main menu. The **New Test Object** dialog will be displayed.  
    ![](../../images/katalon-studio/docs/manage_test_object/image2017-1-24 11_25_41.png)  
      
    
2.  Provide the name for the new test object, then click **OK** button. A new test object is created under **Object Repository** of Katalon Studio.  
    ![](../../images/katalon-studio/docs/manage_test_object/image2017-1-24 11_34_54.png)

Add an object property
----------------------

There cannot be two properties with the same name existed in the same test object.

1.  In the **Test Object Editor**, click on the **Add** command.  
    ![](../../images/katalon-studio/docs/manage_test_object/image2017-10-17 11_33_4.png)  
      
    
2.  The **Add property** dialog is displayed.   
    ![](../../images/katalon-studio/docs/manage_test_object/image2017-10-17 11_33_56.png)
    
    where:
    
    <table class="wrapped confluenceTable"><colgroup><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Field</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd">Name</td><td class="xtd-1-1 confluenceTd">The name of the object property. The dropdownlist provide some common option for your selection (xpath, css, class, id, title) or you can enter manually if wanted.</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd">Match condition</td><td class="xtd-2-1 confluenceTd">The condition which will be used to search for the “<em>actual</em>” object in the application under test when executing automation tests.</td></tr></tbody></table>
    
    Click **OK** when you finish with configuring.
    
3.  The new property is added to properties list as specified. Provide the value which will be used to search for the “_actual_” object in the application under test when executing automation tests.  
    ![](../../images/katalon-studio/docs/manage_test_object/image2017-10-17 11_36_7.png)

Manage parent object
--------------------

Nowadays, there are many web applications which render elements in an [iframe](https://www.w3schools.com/tags/tag_iframe.asp). Therefore, you have to tell your script how to traverse a website’s **iframes** and select the correct **iframe** where the text and its object are present. In order to do so, you have to use '[Switch To Frame](https://docs.katalon.com/display/KD/%5BWebUI%5D+Switch+To+Frame)' keyword before interacting with the elements. 

Katalon Studio does support the ability to define parent iframe object within test object view, so you just only need to select the parent iframe and the execution will automatically switches to that iframe.

![](../../images/katalon-studio/docs/manage_test_object/image2017-10-17 11_38_6.png)

Properties used for detecting object
------------------------------------

*   Available since version 5.0
*   [How to get Web objects XPath or CSS Locator](https://docs.katalon.com/x/5BZO#SpyWebUtility(latest)-HowtogetwebobjectsXPathorCSSLocator)
*   [Object Identification Best Practices](https://docs.katalon.com/display/KD/Optimizing+Object+Identification+and+Tools)

##### Selection Method

Katalon Studio allows users to select methods on how objects will be located.

*   **Basic**
    *   Default mode. Katalon Studio will _automatically_ generated its **XPath** that **combined** with object **properties** to locate the object. This **XPath** will be displayed in **Selector Editor**. 
    *   A test object is typically built up by a number of properties. During test execution, Katalon Studio bases on such information in order to detect an object. Using **Detect object by** field, you can determine the properties to be utilized for recognizing objects.  
        In the following example, during execution, Katalon Studio will try to find any object on AUT with both **_text _**and **_XPath _**that satisfy the defined criteria  
        ![](../../images/katalon-studio/docs/manage_test_object/image2017-10-17 11_44_48.png)
*   **CSS/XPath**
    *   When selected, users are allowed to **manually** input **XPath** or **CSS** locator for objects in **Selector Editor**.  
        For example, let's use the same object from Basic mode.   
        ![](../../images/katalon-studio/docs/manage_test_object/image2017-10-17 12_0_26.png)  
        Click **Save** when finished. 

Validate Test Object on AUT
---------------------------

You can add test objects to **Web Object Spy** dialog to verify whether they are still correctly detected in the application under test. Refer to [Spy Web Utility (version 4.8 and below)](/pages/viewpage.action?pageId=5111951) for details regarding how to validate captured objects against the application under test.

1.  To add an object to **Web Object Spy**, simply right click on the item to open its context menu and select the option.  
    ![](../../images/katalon-studio/docs/manage_test_object/image2017-1-24 14_13_42.png)

Parameterizing Test Object
--------------------------

Katalon Studio provides user with the ability to handle dynamic objects (Objects that have some particular properties change due to certain business rules). By supporting a way to parameterize test objects, users can leverage this approach to control objects dynamically. The example below describes basic steps to do this:

1.  Open your Test Case in Manual View and double click on the object that you want to parameterize its properties.   
    ![](../../images/katalon-studio/docs/manage_test_object/image2017-6-30 20_20_52.png)  
      
    
2.  The **Test Object Input** dialog is displayed. Expand the **Object Parameters** section and declare your expected dynamic properties. These properties will be used to identify the test object during execution. For this example, Katalon Studio will make use of the 'id' property with its value when finding the 'txt_UserName' object.  
    ![](../../images/katalon-studio/docs/manage_test_object/1. declare dynamic object.png)  
      
    
3.  Once the property is declared, you can switch to the Script View of the Test Case and adjust how the value of the property to be perceived. (Typically, users will want to pass property value as variables or make reference to datafiles according to their situation).
    
    The general syntax to find a test object using a dynamic property is as following:
    
    ```groovy
    findTestObject('{your test object}', [('{property}') : '{value of property}'])
    ```
    
    For example: 
    
    \+ One dynamic property
    
    ```groovy
    findTestObject('Page_Login/txtUserName', ['(id)' : '{48415648}'])
    ```
    
    \+ Two dynamic properties
    
    ```groovy
    findTestObject('Page_Login/txtUserName', ['(id)' : '{48415648}', [('{name}') : '{controler14585}']])
    ```
    
    \+ Using variable for value of dynamic property
    
    ![](../../images/katalon-studio/docs/manage_test_object/image2017-6-30 20_22_13.png)
    
      
    \+ Using variable for value in test object:  
    ![](../../images/katalon-studio/docs/manage_test_object/test_object.png)
    

Test Objects in Scripting View
------------------------------

The **Script View** of Test Case allows you to programmatically define and handle **Test Objects** as needed. Following is a simple sample showing you how to do that:

![](../../images/katalon-studio/docs/manage_test_object/5.png)

1.  Refer to existing objects using the _findTestObject()_ method
    
    ```groovy
    // Find an object which was defined already in Object Repository
    myPredefinedObject = findTestObject('Page_Katalon Studio/a_Free Download')
    ```
    
2.  Create a new object programmatically using _TestObject_ class
    
    ```groovy
    // Create a new object programmatically
    myNewObject = new TestObject("TheObjectName")
    ```
    
3.  Add property to an object using _addProperty()_ method
    
    ```groovy
    // Add property to Test Object, a property is defined by:
    //	property name,
    //	condition type,
    //	property value,
    //	a boolean value to indicate if the property will be used to identify the object during execution
    myNewObject.addProperty("xpath", ConditionType.EQUALS, "//html/body", true)
    ```
    

The following API docs may prove useful when working with test objects:

<table class="wrapped confluenceTable"><colgroup><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Class</th><th class="xtd-0-1 confluenceTh">Method</th><th class="xtd-0-2 confluenceTh" colspan="1">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 xtd-2-0 xtd-3-0 xtd-4-0 confluenceTd" rowspan="4"><strong><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html" rel="nofollow">Test Object</a></strong></td><td class="xtd-1-1 confluenceTd"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#addProperty(java.lang.String, com.kms.katalon.core.testobject.ConditionType, java.lang.String)" rel="nofollow">addProperty(String name, ConditionType condition, String value)</a></td><td class="xtd-1-2 confluenceTd" colspan="1">Add a new property to the test object</td></tr><tr class="xtr-2"><td class="xtd-2-1 confluenceTd" colspan="1"><a class="in-cell-link" rel="nofollow">setProperties(List&lt;TestObjectProperty&gt; properties)</a></td><td class="xtd-2-2 confluenceTd" colspan="1">Set the properties of the test object</td></tr><tr class="xtr-3"><td class="xtd-3-1 confluenceTd" colspan="1"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#getObjectId()" rel="nofollow">getObjectId()</a></td><td class="xtd-3-2 confluenceTd" colspan="1">Get object ID.</td></tr><tr class="xtr-4"><td class="xtd-4-1 confluenceTd" colspan="1"><a class="external-link" href="http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#findPropertyValue(java.lang.String, boolean)" rel="nofollow">findPropertyValue(String name, boolean caseSensitive)</a></td><td class="xtd-4-2 confluenceTd" colspan="1">Find the value of a property using the property name</td></tr></tbody></table>