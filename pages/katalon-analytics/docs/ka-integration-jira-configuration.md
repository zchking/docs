---
title: "Configure Jira Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/.html 
description: Configuration of Jira integration with Katalon Analytics
---

## Configure Jira Integration

**Requirements:**

* The Katalon BDD Add-on for Jira installed 

**In Jira**

1. Navigate to **Katalon Settings** at the bottom of Project Settings

![](https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/jira-ka-configure/1-jira-ka-config.png)

2. Enter the email registered for Katalon account
3. Enter an **[API Key](https://docs.katalon.com/katalon-analytics/docs/api-key.html)**. 
4. Enter **[Organization ID](https://docs.katalon.com/katalon-analytics/docs/getting-started.html)**.

then click **Save**.

**In Katalon Analytics**

1. Navigate to **Jira Settings** located in the toolbar of the project page.
2. Enter Jira URL, Username and Password.

    Jira Cloud

    1. Jira URL must be in the form _Https://<site_name>.atlassian.net_.
    2. Enter email registered for Jira Cloud.
    2. Use an Atlassian Cloud's API token for Password. See the instructions **[here](https://confluence.atlassian.com/cloud/api-tokens-938839638.html)**.

    Jira Server

    1. Jira URL must be in the form _Http(s)://domain_ without any trailing parts e.g. _/secure_.
    2. Use your username instead of email for Username.
    3. Enter Password for Jira Server.
    
    then click **Save**. 

![](https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/jira-ka-configure/2-jira-ka-config.png)

