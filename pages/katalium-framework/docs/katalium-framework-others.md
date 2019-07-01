---
title: "Other Utilities" 
sidebar: katalon_studio_docs_sidebar
permalink: katalium-framework/docs/katalium-framework-others.html 
description:
---

## Parameterization

TestNG provides a comprehensive mechanism for customizing parameters, which can be referred [here](https://testng.org/doc/documentation-main.html#parameters). In Katalium Framework, you can set default values for all parameters in the file `kata-default.properties` ([example](https://github.com/katalon-studio/katalium-sample/blob/master/src/test/resources/kata-default.properties)).

## Logging

Katalium Framework provides the class `com.katalon.kata.helper.LogHelper` to help retrieve `org.slf4j.Logger` instances with correct class names.

```java
private static final Logger log = LogHelper.getLogger();
```

```java
log.info("Open CURA home page.");
```

## Capture WebDriver's actions

You can attach a custom `org.openqa.selenium.support.events.AbstractWebDriverEventListener` to capture WebDriver events ([source code](https://github.com/katalon-studio/katalium-sample/blob/master/src/test/java/com/katalon/kata/sample/listener/EventListener.java)):

```java
package com.katalon.kata.sample.listener;

import com.katalon.kata.webdriver.WebDriverPool;
import org.testng.IExecutionListener;

public class EventListener implements IExecutionListener {
  @Override
  public void onExecutionStart() {
    WebDriverPool webDriverPool = WebDriverPool.get();
    webDriverPool.setAfterCreateDriverListener(driver -> {
      driver.register(new WebDriverEventListener());
    });
  }

  @Override
  public void onExecutionFinish() {

  }
}
```