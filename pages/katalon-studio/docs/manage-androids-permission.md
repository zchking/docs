---
title: "Manage Android's permission" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/manage-androids-permission.html 
description: 
---
To manage Android's permission, you need to set the value of 'autoGrantPermissions' desired capabilities:

```
/**
* Enable all permission
* 
* @param isEnable
*/
@Keyword
public static void EnablePermission(boolean isEnable) {
    DesiredCapabilities.android().setCapability("autoGrantPermissions", isEnable);
}
```