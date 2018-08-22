---
title: "Verify placeholder of a field" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/verify_placeholder_of_a_field.html 
description: 
---
In case you want to verify placeholder of a field, e.g:

![](../../images/katalon-studio/docs/verify_placeholder_of_a_field/w5juifrptxou.jpg)

Then using '[Get Attribute](https://docs.katalon.com/display/KD/%5BWebUI%5D+Get+Attribute)' keyword can help you to resolve this issue:

```groovy
String expectedPlaceholder = "Email"
String placeholder = WebUI.getAttribute(emailTestObject, "placeholder")

if(expectedPlaceholder != placeholder) {
	KeywordUtil.markFailed("Placeholder is not as expected.")
}
```

_Credit to [Marek Melocik](https://forum.katalon.com/discussion/7362/placeholder-visibility-verification#Comment_17113)_