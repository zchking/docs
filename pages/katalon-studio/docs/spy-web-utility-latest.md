---
title: "Spy Web Utility (latest)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/spy-web-utility-latest.html 
description: 
---
*   Available since version 5.0
*   [Working with Object Properties](https://docs.katalon.com/x/ZxlO)
*   [Object Identification Best Practices](https://docs.katalon.com/display/KD/Optimizing+Object+Identification+and+Tools)

Enhanced Spy Web Utility is more compact and more intelligent for capturing objects. Object **properties** and **locating method** can be specified by users. Built-in **Verify and Highlight** feature provide users the assurance that Katalon Studio can locate the objects. Spy Web Utility window can be **pinned** or **unpinned** for users convenience while spying.

The guide bellow will show step by step using Spy Web Utility.

Capture objects using Web Object Spy
------------------------------------

1.  Click on **Spy Web** from the main toolbar.  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-2-23 13_20_14.png)  
      
    
2.  The **Object Spy** dialog will be displayed.  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-13 16_50_44.png)  
      
    
3.  Click on **Start** to begin capturing objects from the web browser.
    
    <table class="wrapped confluenceTable"><colgroup><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Type</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd">New Browsers</td><td class="xtd-1-1 confluenceTd">Launch a new browser and start spying web objects from that browser.</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd">Active Browsers</td><td class="xtd-2-1 confluenceTd"><div class="content-wrapper"><p>Focus on <strong>the current active Chrome browser</strong> and start spying web objects from it.</p><p><strong>Supported browsers</strong>:<br>- Chrome<br>- Firefox (coming soon)</p><p>You will be asked for installation of Katalon Utility:</p><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/spy-web-utility-latest/image2017-2-23 11_54_29.png" data-image-src="/download/attachments/5117668/image2017-2-23%2011%3A54%3A29.png?version=1&amp;modificationDate=1505961187000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5117590" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-23 11:54:29.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="5117668" data-linked-resource-container-version="3"></span></p><p>Refer to <a href="/display/KD/Katalon+Addon+for+Chrome">Katalon Addon for Chrome</a> for more details.</p></div></td></tr></tbody></table>
    
4.  Your selected browser will be launched. Navigate to your website, then hover the **mouse cursor** over the web object to be captured.  
    The web object will be highlighted with a **red border**. An **overlay pane** will also be displayed at the edge of the screen to show relevant **xpath** info.  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2016-12-29 16_55_52.png)  
      
    
5.  Press the combination of **<Alt + back quote>** keys on the keyboard to capture object. The object will be highlighted in the **green border**.   
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2016-12-29 17_4_7.png)  
      
    
6.  Captured objects will appear in the **Object Spy** dialog.  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-14 16_50_53.png)  
    Select the object in the **Captured Objects** tree, its details will be displayed in the **Object Properties** section.  
    Where:
    
    <table class="wrapped relative-table confluenceTable" style="width: 80.115%;"><colgroup><col style="width: 17.2485%;"><col style="width: 82.7515%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Field</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><strong>Selection Method</strong></td><td class="xtd-1-1 confluenceTd"><p>The method which Katalon Studio will be using to detect web elements</p><div class="table-wrap"><table class="wrapped confluenceTable"><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Options</th><th class="xtd-0-1 confluenceTh">&nbsp;</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><strong>Basic</strong></td><td class="xtd-1-1 confluenceTd"><span>Default method. Katalon Studio automatically generate an XPath combine with objects' properties</span></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><strong>XPath</strong> or <strong>CSS</strong></td><td class="xtd-2-1 confluenceTd"><span>Advanced method. Users are allowed to input XPath or CSS selector manually into Object Detect Editor</span></td></tr></tbody></table></div></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><strong>Properties Grid</strong></td><td class="xtd-2-1 confluenceTd">All the captured properties of the selected object. You can edit the value of any property.</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd" colspan="1"><strong>Selector Editor</strong></td><td class="xtd-3-1 confluenceTd" colspan="1"><p>Display object locator based on <strong>selected</strong> <strong>method</strong></p><div class="table-wrap"><table class="wrapped confluenceTable"><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Options</th><th class="xtd-0-1 confluenceTh">&nbsp;</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><strong>Basic</strong></td><td class="xtd-1-1 confluenceTd"><span>Katalon Studio generated XPath will be displayed</span></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><strong>XPath </strong>or <strong>CSS</strong></td><td class="xtd-2-1 confluenceTd"><span>Editable text field allows users to manually input object's locator</span></td></tr></tbody></table></div></td></tr></tbody></table>
    
7.  Click on **Save **to **Add** to **Object Repository**.  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-14 16_58_50.png)  
      
    
8.  Check on those captured objects in the **left pane** that you would like to save into Katalon Studio.   
    The structure of your **Object Repository** is displayed on the **right pane**. Select the folder to add the captured objects into. Click **OK** when done.  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2016-12-29 17_15_54.png)  
      
    
9.  The captured objects will be added to **Object Repository** accordingly.  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2016-12-29 17_22_57.png)

Define additional objects manually
----------------------------------

1.  **Add a Page element**: Web objects need a web page to hold it. Click on **New page** from toolbar to add a new Page element manually.  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-16 10_44_25.png)
    
    The **name** of the manually added **Page element** is generated automatically by Katalon Studio.
    
      
      
    
2.  **Add a Frame element**: If new object is a nested object, a frame is needed to locate the element. Frames are web elements that usually contain many other web objects. Click on **New frame** from toolbar to manually add a new Frame element.  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-16 10_44_47.png)
    
    The **name** of the newly added **Frame element** is generated automatically by Katalon Studio. 
    
      
      
    
3.  **Add an Object element**: Click on the **New object** from the toolbar to manually add a web object.  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-16 10_45_22.png)
    
    The name of the newly added Object element is generated automatically by Katalon Studio.
    
4.  Click **Delete** to remove any element.   
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-16 10_47_20.png)  
      
    
5.  In Object Properties section, provide **Object Name**, choose **Selection Method** options and specify **properties** for the New object
    
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-16 13_19_55.png)  
      
      
    
6.  Click **Verify and Highlight **to make sure the object can be located by Katalon Studio.   
    If there is a web object with matched **Selector Editor **value, it will be highlighted **red** in opened browser and message **"Found X element using XPath Selector" **will be displayed.    
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-16 13_20_41.png)  
      
    
7.  Once finished, click **Save** to add object to **Object Repository** as normal.
    

How to get web objects XPath or CSS Locator
-------------------------------------------

1.  In active opened spying browser, **Right** click on target web element. Select **Inspect**  
    **![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-16 13_26_34.png)**  
      
    
2.  An element **inspector window** will be displayed on the right with highlighted line which indicates the location of the target element in the HTML DOM. **Right** click on the hightlighted line > Select **Copy** \> Choose **Copy XPath** or **Copy Selector**  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-16 13_36_58.png)  
      
    
3.  Navigate back to Object Spy window and paste into Xpath Selector Editor  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-16 13_40_52.png)  
      
    
4.  Click Verify and Hightlight button to check if Katalon Studio can locate the object  
    ![](../../images/katalon-studio/docs/spy-web-utility-latest/image2017-10-16 13_42_14.png)  
      
    
5.  Once finished, click **Save** to add object to **Object Repository** as normal.