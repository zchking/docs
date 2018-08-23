---
title: "Change CSS selector of an object at runtime" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/change-css-selector-of-an-object-at-runtime.html 
description: 
---
To change a Test Object's CSS value at runtime:

```
import com.kms.katalon.core.testobject.SelectorMethod

TestObject to = findTestObject('your_test_object_id')

//Change value of CSS selector
to.setSelectorValue(SelectorMethod.CSS, 'your_desired_value')

//Change selection method from another selector to CSS selector
to.setSelectorMethod(SelectorMethod.CSS)
```

**References:**

*   **getSelectorCollection**
*   **getSelectorMethod**
*   **setSelectorMethod**
*   **setSelectorValue**