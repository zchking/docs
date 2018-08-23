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

*   [DBData](https://api-docs.katalon.com/com/kms/katalon/core/testdata/DBData.html)

_Credit to [Trong Bui](https://forum.katalon.com/discussion/5799/dynamically-update-sql-generated-test-data-files-before-test-suite-case-execution#Comment_13181)_