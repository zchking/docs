---
title: "Spy Web Utility (version 4.8 and below)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/spy-web-utility-version-48-and-below.html 
redirect_from: "/pages/viewpage.action?pageId=5111951" 
description: 
---
Capture objects using Web Object Spy
====================================

1.  Click on **Spy Web** from the main toolbar.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-2-23 13_20_14.png)  
      
    
2.  The **Object Spy** dialog will be displayed.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-6-30 19_52_37.png)  
      
    
3.  Click on **Start** to begin capturing objects from the web browser.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-6-30 19_46_58.png)  
    Where:
    
    <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>New Browsers</td><td>Launch a new browser and start spying web objects from that browser.</td></tr><tr><td>Active Browsers</td><td><div><p>Focus on <strong>the current active Chrome browser</strong> and start spying web objects from it. You will be asked for installation of Katalon Utility:</p><p><span><img></span></p><p>Refer to <a>Katalon Addon for Chrome</a> for more details.</p></div></td></tr></tbody></table>
    
4.  Your selected browser will be launched. Navigate to your website, then hover the **mouse cursor** over the web object to be captured.  
    The web object will be highlighted with a **red border**. An **overlay pane** will also be displayed at the edge of the screen to show relevant **xpath** info.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2016-12-29 16_55_52.png)  
      
    
5.  Press the combination of **<Alt + back quote>** keys on the keyboard to capture object. The object will be highlighted in the **green border**.   
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2016-12-29 17_4_7.png)  
      
    
6.  You can go back to the **Object Spy** dialog to view the captured objects.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2016-12-29 17_6_29.png)  
    Select the object in the **Captured Objects** tree, its details will be displayed in the **Object Properties** section.  
    Where:
    
    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Object Name</td><td>The name of selected object. Editable</td></tr><tr><td>Properties Grid</td><td>All the captured properties of the selected object. You can edit the value of any property.</td></tr></tbody></table>
    
7.  Click on **Add to Object Repository** from command toolbar.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2016-12-29 17_15_0.png)  
      
    
8.  Check on those captured objects in the **left pane** that you would like to save into Katalon Studio.   
    The structure of your **Object Repository** is displayed on the **right pane**. Select the folder to add the captured objects into. Click **OK** when done.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2016-12-29 17_15_54.png)  
      
    
9.  The captured objects will be added to **Object Repository** accordingly.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2016-12-29 17_22_57.png)

Define additional objects manually
==================================

1.  **Add a Page element**: Whenever activities are taken on a new web page, that page will be captured into the **Object Spy** dialog. Click on **New page** from toolbar to add a new Page element manually.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-1-3 11_50_2.png)
    
    The **name** of the manually added Page element is generated automatically by Katalon Studio.
    
      
      
    
2.  **Add a Frame element**: Frames are web elements that usually contain many other web objects. Click on **New frame** from toolbar to manually add a new Frame element.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-1-3 13_56_48.png)
    
    The **name** of the newly added Frame element is generated automatically by Katalon Studio. 
    
      
      
    
3.  **Add an Object element**: Click on the **New object** from the toolbar to manually add a web object.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-1-3 16_53_2.png)  
    The name of the newly added Object element is generated automatically by Katalon Studio.  
      
    
4.  Click **Delete** to remove any element.   
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-1-3 16_55_12.png)

Find objects in HTML DOM using xpath
====================================

You can load the HTML DOM of the web page to **Object Spy** dialog for detailed analyzing. Katalon Studio provides the ability to **search** for web elements using **xpath** on this HTML DOM content. This helps to verify whether an object with a certain **xpath** value could exist on the page.

1.  Press the combination of **<Ctrl + Alt + back quote>** keys on the keyboard to load **DOM map**.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-1-10 10_34_55.png)  
      
    
2.  The entire HTML code of the page is loaded in **preview section** of the **Object Spy** dialog. For example:  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-6-30 19_59_1.png)  
      
    
3.  Enter the **xpath** value in the **search field** just above the **preview section** then press **Enter**. Any found element that matches with the **xpath** value will be highlighted.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-6-30 20_4_14.png)

Verify captured objects with HTML DOM
=====================================

Katalon Studio allows users to verify if the captured objects still exist on the current web page by checking the **xpath** value of the objects against the **HTML DOM** content.

1.  Press the combination of **<Ctrl + Alt + back quote>** keys on the keyboard to load **DOM map** into **Object Spy** dialog.   
      
    
2.  Right click on the element to open its context menu then select **Verify**.  
    ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-1-10 11_19_30.png)  
      
    
3.  Katalon Studio will start browsing the **HTML DOM** content with the **xpath** value of the selected object.
    1.  If there is a web object with matched **xpath** value, it will be highlighted in the preview section. The selected object in **Capture Objects** section will also be marked as "**existed**".  
        ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-6-30 20_9_27.png)
    2.  If there is no object found, the selected object in **Capture Objects** section will be marked as "**missing**".  
        ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-6-30 20_12_1.png)
    3.  If there are more than one web object found, they will be highlighted in preview section. The selected object in **Capture Objects** section will also be marked as "**multiple found**".  
        ![](../../images/katalon-studio/docs/spy-web-utility-version-48-and-below/image2017-6-30 20_16_50.png)