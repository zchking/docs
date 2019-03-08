---
title: "Jira Plugin Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/jira-plugin-integration.html

description: 
---


### Integrate Test Case
1. Prepare  [ Jira JQL Script]( https://confluence.atlassian.com/jirasoftwarecloud/advanced-searching-764478330.html )
2. Open **Jira Integration** 
3. Enter the Jira JQL
4. Click **OK**. The **Test Case Folder Selection** window will appear.
5. Choose the destination to store the issues. Click **OK**.
6. The **Jira Issues** window will appear. Click **OK**.

If your test cases has already been synced, Katalon Studio will not sync them again.
<center>
<img src="https://i.ibb.co/ryrTc89/Jira-3.png"  width="650" >
</center>

### Link BDD Content to Feature File
**Jira Integration** allows you to sync feature files with test cases. 
To start, prepare [Jira JQL Script]( https://confluence.atlassian.com/jirasoftwarecloud/advanced-searching-764478330.html ) > Open **Jira Integration** > Enter the Jira JQL > Check **Link to BDD Feature File** > **OK** > Choose the destination to store the issues.
A new Feature File (with the same name as the test case) will be created with the content from Jira BDD. Moreover, a RunFeature step will be created in the linked test case to Jira.
<center>
<img src="https://i.ibb.co/fx4GN44/Jira-6.png"  width="650" >
</center>


### Test Results
Automatically sync test results to the associated Jira. Review the status and attachments of Katalon Studio test cases right inside Jira.
<center>
<img src="https://i.ibb.co/M1jJdWv/Jira-2.png"  width="650" >
</center>

### Submit an Issue to Jira
Submit options will be available in your test reports after **Jira Integration** has been set up.

1. In your reports, open a test execution
2. Select the test case results to be reported
3. Click on the bug icon to manage Jira issues    
4. Create a new issue and submit

<center>
<img src="https://i.ibb.co/jbzNZMy/Jira-5.png"  width="650" >
</center>







