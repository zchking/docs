---
title: "Desired Capabilities for Chrome/Chrome (headless)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/desired-capabilities-for-chromechrome-headless.html 
description: 
---
The Desired Capabilities available for Chrome is listed here. You can locate Chrome settings file at this path: **_<Project folder>\\settings\\internal\\com.kms.katalon.core.webui.chrome.properties._**

Please refer to some common examples below regard to how to manage Desired Capabilities for Chrome in Katalon Studio: 

1.  To start Chrome maximized by default: --start-maximized

```
{"CHROME_DRIVER":{"args":["--start-maximized"]}}

```

2\. To disable notification bars : --disable-infobars

```
{"CHROME_DRIVER":{"args":["--start-maximized","--disable-infobars"]}}

```

  
  

3\. To start Chrome in incognito (private) mode : --incognito

```
{"CHROME_DRIVER":{"args":["--start-maximized","--disable-infobars","--incognito"]}}

```

Code sample can be found in this project: https://github.com/katalon-studio-samples/tips-and-tricks