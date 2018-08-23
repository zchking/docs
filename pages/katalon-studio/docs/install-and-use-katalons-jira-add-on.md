---
title: "Install and Use Katalon's JIRA add-on" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/install-and-use-katalons-jira-add-on.html 
description: 
---
Katalon Studio provides a free JIRA add-on to help create a seamlessly integration. This add-on gives you several benefits:

*   Adding a Gherkin custom field to help you design your test case in a consistent and concise way. The content will be populated right into your Katalon Studio automation scripts automatically.
*   Presenting the latest execution result and artifacts right inside the issue page.
*   Looking up Katalon Studio execution result status using JIRA's JQL syntax.

Installation
------------

The add-on is listed at Atlassian Marketplace. Currently, we only suport JIRA server. To install the add-on, please follow Atlassian's instruction.

Gherkin custom field
--------------------

Only availabe for JIRA Server Version

This add-on adds a custom field type to JIRA called Katalon Gherkin. This custom field lets you write descriptions for your test cases and stories in Gherkin syntax. Gherkin keywords such as _Given_, _When_, _Then_ will be highlighted automatically. Once imported to Katalon Studio, the content of Katalon Gherkin field will be populated into test cases description.  

  

  

To create Katalon Gherkin custom field, please follow Atlassian's instruction.

  

Katalon Studio Test Execution Status
------------------------------------

Once integrated, Katalon Studio BDD's will present the latest execution result inside the issue page. The result includes the status (PASSED, FAILED, INCOMPLETE, ERROR) and links to the associated artifacts (e.g. logs, screenshots etc.).

  

JQL Syntax
----------

Katalon Studio test execution status can be queried via JQL. The syntax is as following:

```
"Katalon Status"=<status>
```

Where Status value can be one of the following:

| Status | Description |
| --- | --- |
| PASSED | The automation tests that executed successfully. |
| FAILED | The automation tests that failed to execute at certain steps. |
| 
INCOMPLETE

 | The automation tests that did not finish running all the steps due to other factors such as wrong syntax, power shortage, disconnected network, etc. |
| ERROR | The automation tests that have some errors occurred. |

For example, to search for all issues that have failed in Katalon Studio test execution_:_