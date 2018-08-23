---
title: "Set cookies for browsers" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/set-cookies-for-browsers.html 
description: 
---
To set cookies for browsers:

```
import org.openqa.selenium.Cookie
import org.openqa.selenium.WebDriver
import com.kms.katalon.core.webui.driver.DriverFactory

WebUI.openBrowser('')
Cookie ck = new Cookie("name", "value");
WebDriver driver = DriverFactory.getWebDriver()
driver.manage().addCookie(ck)
```

**References:**

*   Open Browser

_Credit to Ana Hong_