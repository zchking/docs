---
title: "Verify placeholder of a field" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/verify-placeholder-of-a-field.html 
description: 
---
In case you want to verify placeholder of a field, e.g:

Then using 'Get Attribute' keyword can help you to resolve this issue:

```
String expectedPlaceholder = "Email"
String placeholder = WebUI.getAttribute(emailTestObject, "placeholder")

if(expectedPlaceholder != placeholder) {
	KeywordUtil.markFailed("Placeholder is not as expected.")
}
```

_Credit to Marek Melocik_