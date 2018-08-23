---
title: "Version 4.7" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-47.html 
description: 
---
General Improvement
-------------------

The **Katalon Help** page is updated to provide new users with three basic steps regarding how to get start with Katalon Studio quickly. Users can also specify location to create their new sample projects as appropriated.

Test Case
---------

Introduce **Properties** tab for Test Case. The read-only **Comment** field, whose value is extracted from Comment keywords, allows users to annotate their automation script for reviewing purpose. The below screenshot showcases how BDD and its Gherkin syntax is leverage to give description for the test case. Thus, allow business stakeholders such as BA or PM to involve in development process. 

Log Viewer
----------

When viewing execution log in **Log Viewer**, users can now navigate to the respective step by selecting from the context menu. 

Report
------

Allow execution of Test Suites to be generated as JUnit report in XML format.

Execution of Test Suite Collection can now be exported to HTML format.

Test Suite
----------

Add **Map All** button to Variables Binding section so that users can quickly match test variables of test case with respective column of test data.

Execution
---------

Execution speed between actions can be specified based on the preference defined in **Project > Settings > WebUI**. This option provides the possibility for users to slow down test execution to a suitable level for their specific needs (e.g. observing the execution or doing demo...)

Keywords
--------

| Keyword | Description |
| --- | --- |
| \[WebUI\] Verify Element Text | Verify text of an element. |
| \[WebUI\] Verify Options Present | Verify if all expected options are present within the given test object. |
| \[WebUI\] Click Offset | Click on the given element with the relative position (x, y) from the top-left corner of that element |
| \[WebUI\] Right Click Offset | Right click on the given element with the relative position (x, y) from the top-left corner of that element |
| \[WebUI\] Mouse Over Offset | 
Simulate users hovering a mouse over the given element with the relative position (x, y) from the top-left corner of that element.

 |
| \[Mobile\] Send Keys | 

Simulates keystroke events on the specified element, as though you typed the value key-by-key. 

 |
| \[Mobile\] Verify Element Text | 

Verify text of an element.

 |