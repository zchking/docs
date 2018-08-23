---
title: "Install Chrome extensions at runtime" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/install-chrome-extensions-at-runtime.html 
description: 
---
To install Chrome extensions before you start the browser, you can either use packed or unpacked extensions. The sample code below refer to packed extensions, so if you want to use unpacked extensions, please refer to this page: https://sites.google.com/a/chromium.org/chromedriver/extensions

```
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.chrome.ChromeOptions
import org.openqa.selenium.remote.DesiredCapabilities
import com.kms.katalon.core.webui.driver.DriverFactory

System.setProperty("webdriver.chrome.driver", "C:\\Users\\usuario\\katalon\\Test\\Driver\\chromedriver.exe");
ChromeOptions options = new ChromeOptions()
options.addExtensions(new File("C:\\Users\\usuario\\Desktop\\Firma-con-token.crx"))
DesiredCapabilities capabilities = new DesiredCapabilities()
capabilities.setCapability(ChromeOptions.CAPABILITY, options)
WebDriver driver = new ChromeDriver(capabilities)
DriverFactory.changeWebDriver(driver)
```

**References:**

*   DriverFactory
*   Chrome desired capabilities
*   Install Chrome extensions