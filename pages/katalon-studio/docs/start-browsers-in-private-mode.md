---
title: "Start browsers in private mode" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/start-browsers-in-private-mode.html 
redirect_from:
    - "/display/KD/Start+browsers+in+private+mode/"
    - "/display/KD/Start%20browsers%20in%20private%20mode/"
    - "/x/XAbR/"
    - "/katalon-studio/docs/start-browsers-in-private-mode/"
description: 
---
## Firefox

* Open **Project** -> **Settings**.
* Select **Desired Capabilities** -> **Web UI** -> **Firefox**.
* Add a new property named *firefox_profile* with *dictionary* type and *browser.privatebrowsing.autostart=true* as its value.

![](https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/start-browsers-in-private-mode/1-private-mode.png)  

## Chrome

* Open **Project** -> **Settings**.
* Select **Desired Capabilities** -> **Web UI** ->  **Chrome**.
* Add a new property named  *args* with *list* type and *--incognito* as its value .

![](https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/start-browsers-in-private-mode/2-private-mode.png)