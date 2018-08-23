---
title: "Create Global Variables on the fly" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/create-global-variables-on-the-fly.html 
description: 
---
To create Global Variables during runtime using Katalon scripts, there are many approaches as discussed [here](https://forum.katalon.com/discussion/6822/how-to-define-global-variables-within-scripts-ie-on-the-fly). One of the approaches below comes from [Sergii Tyshchenko](https://forum.katalon.com/profile/4921/Sergii%20Tyshchenko):

"You can also define environment variable (with path to external configuration or properties file) in the session will be used to execute Katalon studio and then in the TestListener read the value of variable (path to the file), load that file and override settings for project, Global variables etc. To create new GlobalVariable I used metaprogramming:

```groovy
void addGlobalVariable(String name, def value) {
    MetaClass mc = script.evaluate("internal.GlobalVariable").metaClass
    String getterName = "get" + name.capitalize()
    mc.static."$getterName" = { -> return value }
    //mc.static."$name" = value
}
```

It's possible to add getter/setter as new methods to GlobalVariable class or add new field (commented in this example)

Than in the script code you can use GlobalVariable.VarName where the VarName you new variable."

_Credit to [Sergii Tyshchenko](https://forum.katalon.com/discussion/4586/how-to-pass-user-defined-parameters-from-command-line#Comment_16979)_