---
title: "Spy Web Utility (latest)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/spy-web-utility-latest.html 
description: 
---
*   Available since version 5.0
*   Working with Object Properties
*   Object Identification Best Practices

Enhanced Spy Web Utility is more compact and more intelligent for capturing objects. Object **properties** and **locating method** can be specified by users. Built-in **Verify and Highlight** feature provide users the assurance that Katalon Studio can locate the objects. Spy Web Utility window can be **pinned** or **unpinned** for users convenience while spying.

The guide bellow will show step by step using Spy Web Utility.

Capture objects using Web Object Spy
------------------------------------

1.  Click on **Spy Web** from the main toolbar.  
      
      
    
2.  The **Object Spy** dialog will be displayed.  
      
      
    
3.  Click on **Start** to begin capturing objects from the web browser.
    
    | Type | Description |
    | --- | --- |
    | New Browsers | Launch a new browser and start spying web objects from that browser. |
    | Active Browsers | 
    Focus on **the current active Chrome browser** and start spying web objects from it.
    
    **Supported browsers**:  
    \- Chrome  
    \- Firefox (coming soon)
    
    You will be asked for installation of Katalon Utility:
    
    Refer to Katalon Addon for Chrome for more details.
    
    
    
     |
    
4.  Your selected browser will be launched. Navigate to your website, then hover the **mouse cursor** over the web object to be captured.  
    The web object will be highlighted with a **red border**. An **overlay pane** will also be displayed at the edge of the screen to show relevant **xpath** info.  
      
      
    
5.  Press the combination of **<Alt + back quote>** keys on the keyboard to capture object. The object will be highlighted in the **green border**.   
      
      
    
6.  Captured objects will appear in the **Object Spy** dialog.  
      
    Select the object in the **Captured Objects** tree, its details will be displayed in the **Object Properties** section.  
    Where:
    
    | Field | Description |
    | --- | --- |
    | **Selection Method** | 
    The method which Katalon Studio will be using to detect web elements
    
    | Options |   |
    | --- | --- |
    | **Basic** | Default method. Katalon Studio automatically generate an XPath combine with objects' properties |
    | **XPath** or **CSS** | Advanced method. Users are allowed to input XPath or CSS selector manually into Object Detect Editor |
    
    
    
     |
    | **Properties Grid** | All the captured properties of the selected object. You can edit the value of any property. |
    | **Selector Editor** | 
    
    Display object locator based on **selected** **method**
    
    | Options |   |
    | --- | --- |
    | **Basic** | Katalon Studio generated XPath will be displayed |
    | **XPath** or **CSS** | Editable text field allows users to manually input object's locator |
    
    
    
     |
    
7.  Click on **Save **to **Add** to **Object Repository**.  
      
      
    
8.  Check on those captured objects in the **left pane** that you would like to save into Katalon Studio.   
    The structure of your **Object Repository** is displayed on the **right pane**. Select the folder to add the captured objects into. Click **OK** when done.  
      
      
    
9.  The captured objects will be added to **Object Repository** accordingly.  
    

Define additional objects manually
----------------------------------

1.  **Add a Page element**: Web objects need a web page to hold it. Click on **New page** from toolbar to add a new Page element manually.  
    
    The **name** of the manually added **Page element** is generated automatically by Katalon Studio.
    
      
      
    
2.  **Add a Frame element**: If new object is a nested object, a frame is needed to locate the element. Frames are web elements that usually contain many other web objects. Click on **New frame** from toolbar to manually add a new Frame element.  
    
    The **name** of the newly added **Frame element** is generated automatically by Katalon Studio. 
    
      
      
    
3.  **Add an Object element**: Click on the **New object** from the toolbar to manually add a web object.  
    
    The name of the newly added Object element is generated automatically by Katalon Studio.
    
4.  Click **Delete** to remove any element.   
      
      
    
5.  In Object Properties section, provide **Object Name**, choose **Selection Method** options and specify **properties** for the New object
    
      
      
      
    
6.  Click **Verify and Highlight **to make sure the object can be located by Katalon Studio.   
    If there is a web object with matched **Selector Editor **value, it will be highlighted **red** in opened browser and message **"Found X element using XPath Selector" **will be displayed.    
      
      
    
7.  Once finished, click **Save** to add object to **Object Repository** as normal.
    

How to get web objects XPath or CSS Locator
-------------------------------------------

1.  In active opened spying browser, **Right** click on target web element. Select **Inspect**  
      
      
    
2.  An element **inspector window** will be displayed on the right with highlighted line which indicates the location of the target element in the HTML DOM. **Right** click on the hightlighted line > Select **Copy** \> Choose **Copy XPath** or **Copy Selector**  
      
      
    
3.  Navigate back to Object Spy window and paste into Xpath Selector Editor  
      
      
    
4.  Click Verify and Hightlight button to check if Katalon Studio can locate the object  
      
      
    
5.  Once finished, click **Save** to add object to **Object Repository** as normal.