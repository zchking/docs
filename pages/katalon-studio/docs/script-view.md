---
title: "Script View" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/script-view.html 
description: 
---
In addition to the Manual view, Katalon Studio allows expert users to programmatically write automation test in the Script view of test cases. Users with Groovy/Java background can easily modify the test script as needed.

Given a sample test case with the steps as below:

*   _Open the browser_
*   _Navigate to a website_
*   _Click on certain control_
*   _Validate if a control exists on the page_
*   _Close the browser_

Follow these steps to automate the above test scenario in **Script view**:

1.  Select **File > New > Test Case** from the main menu. The **New Test Case** dialog will be displayed. Provide the name for the new test case, then click **OK**.  
      
      
    
2.  Once a new test case is created, you can switch to the **Script view** using the corresponding tab at the footer of the test case editor and observe how test steps of the **Manual view** are translated into a Groovy script in **Script view**.  
      
      
    
3.  To use a built-in **WebUI** keyword, enter the following syntax into the editor. 
    
    ```
    WebUI.
    ```
    
      
    The **Content Assist** function will be invoked after users enter the **dot** character. **Content Assist** provides users with a context-sensitive suggestion for code completion. Therefore, all the built-in keywords for WebUI testing will be displayed as below:  
      
      
    
4.  Select the **Open Browser** keyword. This keyword will open a browser and navigate to the specified URL if provided. Selected keywords will have their description displayed along for reference.  
      
      
    
5.  Enter the **Navigate To Url** keyword. This keyword will navigate to a specified URL. For now, enter the URL of Katalon Studio (katalon.com) as an input parameter.  
      
      
    
6.  Enter the **Click** keyword. This keyword represents the click action on a given object. You need to specify an object for this action.    
      
      
    
7.  Use the following syntax to refer to an object in **Object Repository** (alternatively, you can drag and drop the object to test case editor to generate the syntax):
    
    ```
    findTestObject('{Object ID}')
    ```
    
    Where **Object ID** is the ID of that object in Katalon Studio.
    
    You can find object ID from its Properties dialog. For example:
    
8.  Enter the **Verify Element Present** keyword. This keyword validates if a certain object is displayed on the executing browser. Similar to the previous step, you need to specify the object to be used with this keyword.  
      
      
    
9.  Add the **Close Browser** keyword and save your test case.  
      
      
    The following API docs may prove useful when working in Script view:
    
    | 
    Class
    
     | 
    
    Description
    
     |
    | --- | --- |
    | **Builtin Keywords** | List of common built-in keywords |
    | **WebUI Builtin Keywords** | List of Web UI built-in keywords |
    | **Web Service Builtin Keywords** | List of Web Service built-in keywords |
    | **Mobile Builtin Keywords** | List of Mobile built-in keywords |
    
      
      
    
10.  Click on **Run** in the main toolbar to execute the test case.   
      
      
    Katalon Studio should be able to execute all the steps of the sample test case.