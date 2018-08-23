---
title: "Import/Export Keywords" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/importexport-keywords.html 
description: 
---
Katalon Studio allows the users to **import**/**export** for quick and better management of custom keywords. This feature minimizes the risk of moving test artifacts across different test projects. 

### Import Keywords

Currently, Katalon Studio provides two options to import keywords: from a **local folder**, or from a **git** repository.

To import new keywords, navigate to **Menu > File > Import Keywords** and choose your preferred option. Additionally, the users can import keywords from the **Tests Explorer** by right-clicking on the **Keywords** section to display the context menu as shown below.

#### Import from Local Folder

After the **Browse For Folder** panel appears, choose your desired folder to import the keywords to Katalon Studio. If the keywords imported don't belong to any package, Katalon Studio will put them into a default package.

#### Import from Git 

If the user is importing the keywords from a public repository, **NO** authentication is **required**. However, if the repository is private, please provide your Git authentication. 

When Katalon Studio successfully discovers the desired repository, it will ask the user to choose a branch to check out. Please select the branch that contains the keywords you want to import. 

Katalon Studio will clone the Git repository to a default location in your project folder. Choose your initial branch and click **Finish.**

Katalon Studio will notify you whether the keywords are imported successfully. If the keywords imported don't belong to any package, Katalon Studio will put them into a **default** package.

#### Duplicate Keywords

There are instances of similar keywords exist in the project. Katalon Studio will automatically detect and alert users for taking actions. There are 3 options to choose as shown below.

### Export Keywords

To increase code usability, Katalon Studio also let the users to export keyword for sharing across team memebers. Simply right-click on **Keywords **in the Test Explorers, select **Export** from the context-menu. 

The **Browse For Folder** panel will be displayed, choose your desired folder to export the keywords to the local storage.