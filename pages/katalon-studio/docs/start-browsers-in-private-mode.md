---
title: "Start browsers in private mode" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/start-browsers-in-private-mode.html 
description: 
---
**1. Firefox:**

*   Open Project -> Settings  
    
*   Select Execution -> Default -> Web UI -> Firefox settings
*   Add new dictionary 'firefox_profile' key.
*   Add browser.privatebrowsing.autostart key with value = true in that dictionary

  

**2\. Chrome:**

*   Open Project -> Settings
*   Select Execution -> Default -> Web UI -> Chrome settings
*   Add a new list args variable with --incognito contained as its value