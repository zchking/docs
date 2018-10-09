---
title: "Override desired capabilities at runtime" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/override-desired-capabilities-at-runtime.html 
redirect_from:
    - "/display/KD/Override+desired+capabilities+at+runtime/"
    - "/x/dwXR/"
    - "/katalon-studio/docs/override-desired-capabilities-at-runtime/"
description: 
---
If you want to override desired capabilities of a browser before it's started, refer to the sample code below.

```groovy
import com.kms.katalon.core.configuration.RunConfiguration
RunConfiguration.setWebDriverPreferencesProperty("key", "value")
```

  
**References:**

*   [RunConfiguration](https://api-docs.katalon.com/com/kms/katalon/core/configuration/RunConfiguration.html)