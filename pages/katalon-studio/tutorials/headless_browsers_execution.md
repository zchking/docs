---
title: "Headless Browsers Execution in Katalon Studio"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/headless_browsers_execution.html
description: "Katalon supports Headless Browsers (Chrome & Firefox) which can save project team tremendous amount of time and smoothly integrate in the CD/CI process."
---
What is Headless Browser Testing?
---------------------------------

Headless browser testing is simply testing a web pages functionality, without a GUI present. One of the biggest reasons for using a headless browser/carrying out headless testing is performance since it lets you run tests more quickly in a real browser environment. Headless Browsers can save project team the tremendous amount of time and smoothly integrate in the CD/CI process.

Katalon Studio supports Headless Browsers execution for both Chrome and Firefox. This tutorial will walk you through the steps to execute tests using Headless Browsers and also additional configurations (if needed) to tweak your Headless browsers.

Configuring headless browsers
-----------------------------

By default, executing automation tests using either Firefox or Chrome headless will add necessary desired capabilities to the browsers. You don’t need to add any additional configurations.

In case you really need to add more desired capabilities to headless browsers, then:

*   Go to **Project** -\> **Settings** -\> **Execution** -\> **Default** -\> Select either **Chrome** (headless) or **Firefox** (headless)
*   Add your desired capabilities in these settings. For example, I want my Chrome (headless) to be started in smaller Window size:

To find out more about desired capabilities, refer to this guide.

Executing automation tests
--------------------------

### 1  Execute Test Case/ Test Suite

*   Open a test case or a test suite you want to execute
*   Select either **Chrome** (**headless**) or **Firefox** (**headless**) from the list of execution items

*   After selected, your current Test Case / Test Suite will be executed using selected headless browser

### 2  Execute Test Suite Collection

*   Open a test suite collection you want to execute
*   Add a Test Suite into this Test Suite Collection
*   Select ‘**Run with**’ field and then select either **Chrome** (**headless**) or **Firefox** (**headless**)

*   Save changes to your current **Test Suite Collection**

*   Execute this Test Suite Collection and Katalon Studio will use the selected environment to run.

### 2.3  Execute using console mode execution

*   Generate your console mode commands by selecting either **Chrome** (**headless**) or **Firefox** (**headless**) and click on **Build CMD** button on the main toolbar.

*   Execute your tests in console mode using the **generated CMD script** from Katalon Studio.

**Note**: Browsers will NOT be displayed while executing (Headless Browsers)

Furthermore, using Headless browser in console mode execution is recommended for CI/CD process to help project team faster quality releases and continuously.

Refer to this guide for leveraging Katalon Studio in CI/CD process.

For further instructions and help, please refer to Katalon Studio Tutorials and Katalon Forum.