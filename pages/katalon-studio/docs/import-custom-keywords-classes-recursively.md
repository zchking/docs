---
title: "Import Custom Keywords classes recursively" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/import-custom-keywords-classes-recursively.html 
description: 
---
Hypothetically, you want to call a Custom Keyword within a Custom Keyword that is defined in another class. Check out the code below for a sample implementation.

  
  
  
Keywords/my.a/Greeting.groovy  

```
package my.aimport com.kms.katalon.core.annotation.Keywordclass Greeting { @Keyword def greet(String someone) { return my.b.AI.sayHelloTo(someone) }}
```

Keywords/my.b/AI.groovy  

```
package my.bclass AI { static def sayHelloTo(String someone) { return "Hello, ${someone}." }}
```

  
TC1:  

```
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUIdef str = CustomKeywords.'my.a.Greeting.greet'("Drunda")WebUI.comment(">>> ${str}")
```

  
The TC1 ran fine:  

  

_Credit to kazurayam_