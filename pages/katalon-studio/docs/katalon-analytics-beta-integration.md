---
title: "Katalon Analytics (Beta) Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon-analytics-beta-integration.html 
redirect_from: "/display/KD/Katalon+Analytics+%28Beta%29+Integration" 
description: 
---
[Katalon Analytics (Beta)](/display/KA) is a cloud-based application provides in-depth views of test execution reports through powerful visualization including charts, graphs, and metrics. Currently, Katalon Analytics supports integration with Katalon Studio for better test report management.

> Test Reports are only available for **Test Suite/Test Suite Collection** level execution.

Settings 
---------

**Katalon Analytics integration** must be **enabled** in order to submit test execution Reports to Katalon Analytics. In Katalon Studio, select **Project** > **Setting** > **Integration > Katalon Analytics**. Following the below steps to set up the integration properly.

Check '**Enable Integration**' checkbox. All the fields will be visible for edit.

### Authentication

Enter Katalon Analytics credential which is Katalon Studio account. Click **Connect**.

![](../../images/katalon-studio/docs/katalon-analytics-beta-integration/image2018-7-31 11_9_52.png)

### Select Team and Project

Once Katalon Studio **successfully connected** to Katalon Analytics, all relevant Katalon Analytics **Teams** and **Projects** will be retrieved and **displayed** in Teams and Projects drop-down menu. You can also **create New Project** for Katalon Analytics, just click **New Project** button and provide the project's **Name**. 

![](../../images/katalon-studio/docs/katalon-analytics-beta-integration/image2018-7-31 11_10_3.png)

### Test Result

In Test Result, users can **select** preferred **options** for Katalon Studio execution Reports.

![](../../images/katalon-studio/docs/katalon-analytics-beta-integration/image2018-7-31 11_10_16.png)

<table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>Automatically submit test run result</td><td>Katalon Studio will automatically upload Test Suite execution Reports to Katalon Analytics</td></tr><tr><td>Attach Screenshot</td><td>Include execution Screenshots</td></tr></tbody></table>

Click **OK** to complete. 

Upload Reports
--------------

See details document [here](https://docs.katalon.com/x/wBxO).

Access Katalon Analytics to View Reports
----------------------------------------

You can access your reports easily from three windows in Katalon Studio: Test Reports, Test Case View, and Test Suite View. 

### Test Reports View

In the **Test Reports View**, clicking on **Katalon Analytics **button and you will see two options. 

*   **Access Analytics** gives you the options to view a specific report directly on the website. 
*   **Upload **allows you to push a report manually to Katalon Analytics. 

![](../../images/katalon-studio/docs/katalon-analytics-beta-integration/image2018-7-31 14_57_2.png)

> Forget to Integrate?
> 
> If you haven't integrated with Katalon Analytics prior to clicking **Access Analytics**, an integration panel will appear. Enter your authentication information in the provided box.
> 
> ![](../../images/katalon-studio/docs/katalon-analytics-beta-integration/image2018-7-31 10_55_23.png)
> 
> When you are using Katalon Analytics for the first time, Katalon Studio will automatically create a new project and team to push your test reports. However, if you've already had teams and projects on Analytics, Katalon Studio will ask you to select the location to upload your test results.
> 
> ![](../../images/katalon-studio/docs/katalon-analytics-beta-integration/image2018-7-31 10_56_2.png)
> 
> You can change this setting later by going to **Project** > **Setting** > **Integration > Katalon Analytics**. 

### View specific Test Case/Test Suite Execution History

You can also view a specific Test Case or Test Suite entire execution history on Katalon Analytics by clicking on **View Execution History **button on the Test Case or Test Suite View.  

![](../../images/katalon-studio/docs/katalon-analytics-beta-integration/image2018-7-31 11_39_28.png)