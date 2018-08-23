---
title: "Manual View" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/manual-view.html 
description: 
---
KatalonStudio supports Keywords-Driven testing where test cases consist of keywords that represent actions of users on the applications under test. 

Given a sample test case with the steps as below:

*   _Open the browser_
*   _Navigate to a website_
*   _Click on certain control_
*   _Validate if a control exists on the page_
*   _Close the browser_

Follow these steps to automate the above test scenario in **Manual view**:

1.  Select **File > New > Test Case** from the main menu. The **New Test Case** dialog will be displayed. Provide the name for the new test case, then click **OK** button.  
      
      
    
2.  Once a new test case is created, it is opened in **Manual view**. This view allows users to create automation tests easily with little programming skills required.  
      
      
    
3.  Select **Add > Web UI Keyword** from the command toolbar.
    
    **Recent keywords** allow users quickly add any of the last 10 recent used keywords in **Item** list.
    
      
      
      
    
      
    
4.  Select the **Open Browser** keyword. This keyword will open a browser and navigate to the specified URL if provided. (selected keywords will have their description displayed along for reference)  
      
      
    
5.  Add the **Navigate To Url** keyword. This keyword will navigate to a specified URL. Double click on the **Input** cell to provide additional data (parameters) for the keyword.   
      
      
    
6.  The **Input** dialog is displayed.   
      
    Where:
    
    | Field | Description |
    | --- | --- |
    | No | The number of parameter for the selected keyword. |
    | Param Name | The name of the parameter. |
    | Param Type | The required data type for the parameter. |
    | Value Type | The type of your input value (e.g. strings, variables, data sources...) |
    | Value | 
    The input value for this parameter.
    
    Input value can be varied based on **Value Type**. Refer to Value Types in Katalon for more details.
    
    
    
    
    
    
    
     |
    
      
    For now, enter the URL of Katalon demo AUT (http://demoaut.katalon.com) into the **Value** column then click **OK**.   
      
    
7.  Add the **Click** keyword. This keyword represents the click action on a given object. Double click on the **Object** cell to provide the object for the keyword.   
      
      
    
8.  All captured objects in **Object Repository** are displayed in the **Test Object Input** dialog (Refer to Spy Object for details regarding how to capture objects). Select your object then click **OK**.  
      
      
    
9.  Add the **Verify Element Present** keyword. This keyword validates if a certain object is displayed on the executing browser. Similar to the previous step, you need to specify the object to be used with this keyword.  
      
      
    
10.  Add the **Close Browser** keyword and save your test case.  
      
      
    
11.  Click on **Run** in the main toolbar to execute the test case.   
      
      
    Katalon Studio should be able to execute all the steps of the sample test case.

Recent Keywords
---------------

**Recent keywords** allow users quickly add any of the last 10 recent used keywords in **Item** list. For example, let's take test case above. To add another **_Verify Element Present_** after _Step 4_, **recent keywords** feature wouldaccomplished this in seconds.

Highlight _Step 4_. Click on **Recent Keywords** and select **_Verify Element Present_**. An extra step is added after _Step 4_ as illustrated below:

   

Recent Objects and Object Folders
---------------------------------

KatalonStudio allows users to quickly select recently used **Object** or jump directly to recent used **Object Folder** in Object Repository.

Recent list will have two sections: **Object Folder** and **Test Object**

*   **Test Object:** Display the names of the last 5 selected objects
*   **Object Folder:** Display the names of 5 folders that contain anyrecent used objects