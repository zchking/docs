---
title: "Type @ character on Internet Explorer" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/type-character-on-internet-explorer.html 
description: 
---
If you are using a non-English keyboard, there will be cases that typing @ character will turn out to be a different character in Internet Explorer. To handle this case, you can replace @ in your input using Keys.chord(Keys.CONTROL, Keys.ALT,'2') instead:

```groovy
WebUI.setText(findTestObject('myEmail'),  'test' +Keys.chord(Keys.CONTROL, Keys.ALT,'2') + 'gmail.com')

```

**References:**

*   [Set Text](https://docs.katalon.com/display/KD/%5BWebUI%5D+Set+Text)
*   [Keys](http://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/Keys.html)

_Credit to [Federico Jimenez](https://forum.katalon.com/discussion/4510/ie-webdriver-cannot-type#latest)_