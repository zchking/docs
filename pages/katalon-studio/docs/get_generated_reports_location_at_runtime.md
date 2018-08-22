---
title: "Get generated Reports location at runtime" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/get_generated_reports_location_at_runtime.html 
description: 
---
To retrieve current generated reports location, you can use the sample code below:

```groovy
import com.kms.katalon.core.configuration.RunConfiguration
RunConfiguration.getReportFolder()
```

You can also retrieve other information through the RunConfiguartion package, please refer to this documentation: **[RunConfiguration](https://api-docs.katalon.com/com/kms/katalon/core/configuration/RunConfiguration.html)**