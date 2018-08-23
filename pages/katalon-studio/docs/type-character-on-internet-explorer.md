---
title: "Type @ character on Internet Explorer" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/type-character-on-internet-explorer.html 
description: 
---
If you are using a non-English keyboard, there will be cases that typing @ character will turn out to be a different character in Internet Explorer. To handle this case, you can replace @ in your input using Keys.chord(Keys.CONTROL, Keys.ALT,'2') instead:

```
WebUI.setText(findTestObject('myEmail'),  'test' +Keys.chord(Keys.CONTROL, Keys.ALT,'2') + 'gmail.com')

```

**References:**

*   Set Text
*   Keys

_Credit to Federico Jimenez_