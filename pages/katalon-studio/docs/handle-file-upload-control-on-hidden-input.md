---
title: "Handle file upload control on hidden input" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handle-file-upload-control-on-hidden-input.html 
description: 
---
Hidden input controls have CSS display property of none. To handle this case, we have two approaches below:

1.  CSS Overwrite:

```
WebDriver driver = DriverFactory.getWebDriver();
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("document.getElementById('chooseFile0').style.display='inline-block'");
WebUI.uploadFile(findTestObject('input_FrontImage'), path+imagePath)
js.executeScript("document.getElementById('chooseFile0').style.display='none'");
```

  
2\. Java Robot:

```
StringSelection s = new StringSelection(filePath);
Toolkit.getDefaultToolkit().getSystemClipboard().setContents(s, null);
Robot robot = new Robot();
robot.keyPress(java.awt.event.KeyEvent.VK_CONTROL);
robot.keyPress(java.awt.event.KeyEvent.VK_V);
Thread.sleep(1000);
robot.keyPress(java.awt.event.KeyEvent.VK_ENTER);
```

**References:**

*   **Java Robot**
*   **JavascriptExecutor**
*   **getWebDriver()**

_Credit to Jason Truman_