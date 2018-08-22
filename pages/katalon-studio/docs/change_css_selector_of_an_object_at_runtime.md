---
title: "Change CSS selector of an object at runtime" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/change_css_selector_of_an_object_at_runtime.html 
description: 
---
To change a Test Object's CSS value at runtime:

```groovy
import com.kms.katalon.core.testobject.SelectorMethod

TestObject to = findTestObject('your_test_object_id')

//Change value of CSS selector
to.setSelectorValue(SelectorMethod.CSS, 'your_desired_value')

//Change selection method from another selector to CSS selector
to.setSelectorMethod(SelectorMethod.CSS)
```

**References:**

*   **[getSelectorCollection](https://api-docs.katalon.com/com/kms/katalon/core/testobject/SelectorCollector.html#getSelectorCollection())**
*   **[getSelectorMethod](https://api-docs.katalon.com/com/kms/katalon/core/testobject/SelectorCollector.html#getSelectorMethod())**
*   **[setSelectorMethod](https://api-docs.katalon.com/com/kms/katalon/core/testobject/SelectorCollector.html#setSelectorMethod(com.kms.katalon.core.testobject.SelectorMethod))**
*   **[setSelectorValue](https://api-docs.katalon.com/com/kms/katalon/core/testobject/SelectorCollector.html#setSelectorValue(com.kms.katalon.core.testobject.SelectorMethod,%20java.lang.String))**