---
title: "Basic Report" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/basic-report.html 
redirect_from:
    - "/katalon-studio/docs/basic-report/"

description: Guide on how to use Basic Report plugin
---
Basic Report Plugin is a Custom Keyword that replaces for the current Report feature of Katalon Studio. Since [version 6.1.5](https://docs.katalon.com/katalon-studio/new/version-615.html), the Report feature has been migrated to Basic Report plugin.  Users need to install this plugin to continue using the feature.

> [Install Basic Report now!](https://store.katalon.com/product/59/Basic-Report)

## Basic Report Plugin provides:
- Generates automatically report from Test Suite report after every test execution with various formats: HTML, CSV, JUnit, and PDF.
- Allows users to export manually Test Suite and Test Suite collection report to HTML, CSV, JUnit, and PDF. Right click on the report and choose Export as.

## Limitation:
- Basic Report Plugin only automatically generates reports for Test Suite, not for Test Suite Collection.
- Basic Report Plugin only supports HTML format for Test Suite Collection.

## Usage

### Automatically generate report
1.Open `Project/Settings/Plugin/Report`, select the reports that will be generated automatically after each Test Suite execution.

![Report Setting](https://i.ibb.co/GJK0tR4/report-setting.png)  

2.Run a test suite and observe the *Log Viewer*, the *Report Folder* after the test execution complete. The generated reports will be the same the settings you configured above.

Log Viewer after test execution

![Log Viewer](https://i.ibb.co/z5JpbDp/log-viewer.png)

Report Folder after test execution

![Report Folder](https://i.ibb.co/tLGHXvK/report-folder.png)

### Manually export report
Right click on a report of Test Suite, or Test Suite Collection. Select `Export as` and choose a format to export.
