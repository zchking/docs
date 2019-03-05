---
title: "Basic Search For Dynamic Querying Test Suite" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/basic-search-for-dynamic-querying-test-suite.html

description: 
---


Dynamic Querying Test Suite provides users the flexibility to define the desired query search syntax and manage various query plug-ins from Katalon Store. 
Basic Search For Dynamic Querying Test Suite enables the basic search capability to look for test cases faster in Katalon Studio and help filter which test cases to be executed. 

 

**Create a new dynamic querying test suite**

Right-click on Test Suite > New > Dynamic Querying Test Suite

![](../../images/katalon-studio/docs/basic-search-for-dynamic-querying-test-suite/Dynamic_3.png)

In the dynamic querying test suites, test cases are not manually added to the built-in test suites but through [search](https://docs.katalon.com/katalon-studio/docs/advanced-search.html) queries in Katalon Studio.

Input the search condition, click Preview to query out the matching test cases. The number of matching test cases will also be shown.
 
 ![](../../images/katalon-studio/docs/basic-search-for-dynamic-querying-test-suite/1.png)

For example, to plan the test cases in folder “Jira sync with BDD", you can use this search query: id=(Test Cases/Jira sync with BDD) 

The executed test cases are selected at runtime. In other words, test cases that match the search conditions are chosen when the test suites are executed (unlike in built-in test suites in which test cases are chosen at planning time).














