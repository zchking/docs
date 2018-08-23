---
title: "Update SQL query in a Test Data dynamically" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/update-sql-query-in-a-test-data-dynamically.html 
description: 
---
To update SQL query in a Test Data dynamically, you can refer to sample code below:

```
DBData dbTestData = findTestData('######')
dbTestData.fetchedData = dbTestData.fetchData()
```

  

**References:**

*   DBData

_Credit to Trong Bui_