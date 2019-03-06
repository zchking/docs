---
title: "Dynamic Querying Test Suite" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/dynamic-querying-test-suite.html

description: 
---

**Dynamic Querying Test Suite** is a built-in feature in Katalon Studio that provides query search function to various plugins and returns any matched test cases or test suites of the query statement.

This function only works when you have already installed the plugin that defines the querying syntax in Dynamic Querying Test Suite. To get these plugins, visit [Katalon Store](https://store.katalon.com/search?search=dynamic+execution); then install one of the two plugins.

After the plugin has been installed from Katalon Store, go to Katalon Studio and click **Reload Plugins**. [Learn more on how to reload plugins](https://docs.katalon.com/katalon-store/docs/user/access-store-in-KS.html#reload-plugins). In case there is no installed plugin, the Query Provider will be set to default as “No query provider available.”


![](../../images/katalon-studio/docs/dynamic-querying-test-suite/Dynamic-querying-test-suite-window.png)

**Query Provider** indicates the currently applied query syntax standard of a plugin.For example:
When you install the Dynamic Test Case Planning and Execution plugin, the option of choosing Dynamic Test Case Planning and Execution query syntax in Query Provider is enabled.

**Query**: This search box allows the user to manually input the query syntax. For example 
Id=(Test Cases/Advance Examples)

**Query Builder**:Provide a convenient way to create and run query in Katalon Studio
- **ID**: to search by to the exact IDs of the test artifact
- **Name**: to search by the name of the test artifact
- **Description**: to search by the description associated with the test artifacts
- **Comment**: to search by the comments attached to the test artifacts
- **Tag**: to search by the tag linked to the test artifacts

*Note*: Search criteria will be applied to all test artifacts including test case, test suite, folder, etc.
Preview: after filling in all the searching criteria, clicking preview to view the results. 












