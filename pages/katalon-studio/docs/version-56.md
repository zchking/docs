---
title: "Version 5.6" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-56.html 
description: 
---
[Enhance In-app Support](/display/KD/Katalon+Help)
--------------------------------------------------

**Online Help **and **Community Chat **are now available within Katalon Studio, and we also update Katalon Studio in-app help links to match with our latest user guide. With all the resources at your fingertips, you can get help right away from the Katalon Team and our community to support your automation testing journey.

![](../../images/katalon-studio/docs/version-56/image2018-8-1 14_14_40.png)

[Improve Katalon Analytics Integration](/display/KD/Katalon+Analytics+%28Beta%29+Integration)
---------------------------------------------------------------------------------------------

**Test Execution History** can be viewed directly at a specific Test Case or Test Suite View. The project team can quickly know the performance of the test and identify the trouble areas to optimize overall test executions. You can also access a specific test report on Katalon Analytics directly from Katalon Studio, reducing the time it takes to identify an execution on Katalon Analytics.

![](../../images/katalon-studio/docs/version-56/Screen Shot 2018-07-31 at 11.52.48 AM.png)

Improve Web [Record](/pages/viewpage.action?pageId=13699399)/[Spy](/pages/viewpage.action?pageId=5117668) Utility 
------------------------------------------------------------------------------------------------------------------

*   **Web ****Record/Spy** Utility is improved to support **Firefox Active Mode**. Now you can record right on the opened Firefox browser without wasting system resource to open a new browser instance. 
*   **Improve execution mechanism when 'element can't be found' error**: Katalon Studio will try to use other element's properties using heuristic method to locate the element and log the result for you. Test execution still returns FAILURE, since it is not guaranteed to be correct and the decision should be made by users.
    
*   **Better** objects recognition for **dropdown**using **Record Web** Utility. 
    

Bugs Fixed & Improvements
-------------------------

*   **Add Sample Project option within 'Create New Project' dialogue: **'Create new project' pop-up now have the options to create a new sample project to help save time and cut down repetitive steps.
    
*   **Reduce Katalon Studio** package size by 10%