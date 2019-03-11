---
title: "Auto-healing Smart XPath" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/auto-healing-smart-xpath.html

description: 
---


### Prepare the XPath configuration
To start using this plugin, please first make sure that Smart XPath is enabled.

![](../../images/katalon-studio/docs/auto-healing-smart-xpath/xpath-03.png)  
      
Go to **Project Settings** > **Test Design** > **Web Locators** > choose the **XPath** option.
![](../../images/katalon-studio/docs/auto-healing-smart-xpath/xpath-01.png)  

The list contains XPath generator providers which generate the corresponding XPath values for Katalon Studio test objects. Most XPath generator providers are inherited from Selenium except for Neighbor XPath, a unique XPath generator researched and developed by Katalon team.

### Create test objects by Recording/Spying
Once test objects in test cases are created by Recording or Spying feature in Katalon Studio, a set of XPath values will be generated respectively to the XPath generator provider list. The first values in the lists are the default XPath values of the test objects.
<center>
<img src="https://i.ibb.co/pL058gz/xpath-05.png">
</center>

### Execute test cases with Auto Healing, supported by Smart XPath
During execution, if a test object is failed to detect by its default XPath value, the other XPath options in the list will be automatically applied; and the first successful value will be used. The execution will continue as if no failed detection has happened. This will help significantly save time updating test cases, especially when the test cases are executed in batch overnight.
<center>
<img src="https://i.ibb.co/zhr6sp0/xpath-02.png" >
</center>

### Update to the new stable XPath values
After execution, the proposed XPath values can be updated to the test objects via the Auto Healing logs.
![](../../images/katalon-studio/docs/auto-healing-smart-xpath/xpath-07.png)  

Check the **Approve** checkbox and click OK to update the value.
