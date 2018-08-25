---
title: "Katalon with Winium for Desktop Applications" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon-with-winium-for-desktop-applications.html 
redirect_from:
    - "/display/KD/Katalon+with+Winium+for+Desktop+Applications"
    - "/x/xAzR"
description: 
---
As you may know, Katalon Studio only supports WebUI, Mobile, and API automation testing. However, there is a workaround solution to this problem, utilizing Winium .jar package in order to test desktop applications.

First, download the [jar package](https://jar-download.com/?search_box=com.github.2gis.winium). Then see the example below to import the Winium driver into Katalon Studio.

```groovy
import org.openqa.selenium.By
import org.openqa.selenium.WebElement
import org.openqa.selenium.winium.DesktopOptions
import org.openqa.selenium.winium.WiniumDriver
import java.net.MalformedURLException
import java.net.URL
WiniumDriver driver = null
String appPath = "C:/windows/system32/calc.exe"
DesktopOptions option = new DesktopOptions()
option.setApplicationPath(appPath)
option.setDebugConnectToRunningApp(false)
option.setLaunchDelay(2)
driver = new WiniumDriver(new URL("http://localhost:9999"),option)
Thread.sleep(1000)
WebElement window = driver.findElementByClassName("CalcFrame")
WebElement menuItem = window.findElement(By.id("MenuBar")).findElement(By.name("View"))
menuItem.click()
driver.findElementByName("Scientific").click()
window.findElement(By.id("MenuBar")).findElement(By.name("View")).click()
driver.findElementByName("History").click()
window.findElement(By.id("MenuBar")).findElement(By.name("View")).click()
driver.findElementByName("History").click()
window.findElement(By.id("MenuBar")).findElement(By.name("View")).click()
driver.findElementByName("Standard").click()
driver.findElementByName("4").click()
driver.findElementByName("Add").click()
driver.findElementByName("5").click()
driver.findElementByName("Equals").click()
driver.close()
```

Credit to: [Veera Palla](https://forum.katalon.com/discussion/8457/katalon-with-winium)