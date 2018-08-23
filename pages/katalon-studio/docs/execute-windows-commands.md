---
title: "Execute Windows commands" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execute-windows-commands.html 
description: 
---
To execute Windows command line, simply use this script in your test case:

```
String cmd = "Your command"
Runtime.getRuntime().exec(cmd)
```

**Example 1:**

*   Call taskkill command

```
String cmd = "taskkill /F firefox.exe"
Runtime.getRuntime().exec(cmd)
```

*   Launch external program:

```
Runtime.runtime.exec("path/to/vlc.exe")

```

*   Execute a batch file

```
import com.kms.katalon.core.configuration.RunConfiguration
  /**
   * Execute a batch file situated in the KS project directory.
   * @param batchFile (String) e.g. "myfile.bat"
   */
  static void runBatchFile(String batchFile) {
    String bf = RunConfiguration.getProjectDir() + '/' + batchFile
    comment("Running batch file: " + bf)
    Runtime.runtime.exec(bf)
  }
```

References
----------

*   RunConfiguration
    
*   Runtime
*   Windows command line