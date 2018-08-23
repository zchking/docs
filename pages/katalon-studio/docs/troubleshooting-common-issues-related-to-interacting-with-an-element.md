---
title: "Troubleshooting common issues related to interacting with an element" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/troubleshooting-common-issues-related-to-interacting-with-an-element.html 
description: 
---
 There are many cases which can happen to an element. These quick tips and tricks will help you to troubleshoot some common issues and how to handle them as a workaround solution:

**1\. "com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id ... not found":**

The element can't be detected on current page due XPath or CSS selector is incorrect

**Solution**: Refer to here and here

**2. "selenium.ElementNotVisibleException: Element is not currently visible and so may not be interacted"**

*   The element is hidden and is not ready.
*   The element is not visible yet after current page is loaded.

**Solution:**  
Add 'Wait For Element Visible' step before the step having this issue, e.g:

```
WebUI.openBrowser('http://demoaut.katalon.com') 
WebUI.waitForElementVisible(findtestObject('btn_Login'), 30) 
WebUI.click(findTestObject('btn_Login')) 
```

**3\. "Element is not currently interactable and may not be manipulated"**

*   Usually happens on 'Set Text' keyword where input field is read-only.
*   The element is not visible.
*   The element requires some conditions to be displayed.

**Solutions:** One of below solutions

*   Wait until the element is visible
*   Set value to its directly using Javascript:

```
import com.kms.katalon.core.webui.common.WebUiCommonHelper
 
WebElement element = WebUiCommonHelper.findWebElement(findTestObject('your/object'),30)
WebUI.executeJavaScript("arguments[0].value='Your Value'", Arrays.asList(element))
```

  
**4\. "Element is not clickable at point (x,x).** Another element **would receive the click...":**

*   Happens mostly on Chrome (source).
*   The element is clickable but there is a spinner/overlay on top of it.

**Solution:**

Click on the element using Javascript instead:  

```
import com.kms.katalon.core.webui.common.WebUiCommonHelper
 
WebElement element = WebUiCommonHelper.findWebElement(findTestObject('your/object'),30)
WebUI.executeJavaScript("arguments[0].click", Arrays.asList(element))
```