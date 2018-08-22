---
title: "Version 5.3.1" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-531.html 
description: 
---
### **Integration and Email Accounts Encryption**

Provide user an option in Project Settings to encrypt all integration and email accounts with Katalon Studio. This helps to ensure the security of accounts information in sharing such as via Git. 

![](../../images/katalon-studio/docs/version-531/image2018-3-1 11_52_11.png)

### **Masking Password Field in Record Web**

Since version 5.3.1, Katalon Studio will auto-detect and masked the input text of Password field while Recording.

![](../../images/katalon-studio/docs/version-531/image2018-3-1 12_27_59.png)

### **Support Private Kobiton Devices**

Enhance Kobiton integration to support mobile testing with **Private** Kobiton devices. 

### **Support Proxy in Console Mode Execution**

Allow users to pass Proxy settings in Console Mode command

<table class="wrapped confluenceTable" style="margin-left: 2.0px;"><colgroup><col><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh" style="text-align: center;">Option Name</th><th class="xtd-0-1 confluenceTh" colspan="1">Value Type</th><th class="xtd-0-2 confluenceTh" style="text-align: center;">Value</th><th class="xtd-0-3 confluenceTh" colspan="1">Mandatory?</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd">proxy.option</td><td class="xtd-1-1 confluenceTd" colspan="1">Fixed</td><td class="xtd-1-2 confluenceTd">NO_PROXY, USE_SYSTEM, MANUAL_CONFIG</td><td class="xtd-1-3 confluenceTd" colspan="1">YES</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd">proxy.server.type</td><td class="xtd-2-1 confluenceTd" colspan="1">Fixed</td><td class="xtd-2-2 confluenceTd">&nbsp;HTTP, HTTPS, or SOCKS</td><td class="xtd-2-3 confluenceTd" colspan="1">YES</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd">proxy.server.address</td><td class="xtd-3-1 confluenceTd" colspan="1">String</td><td class="xtd-3-2 confluenceTd">Example: http://192.168.12.32,&nbsp;<a class="external-link" href="http://katalon.com/" rel="nofollow">http://katalon.com</a></td><td class="xtd-3-3 confluenceTd" colspan="1">YES</td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd">proxy.server.port</td><td class="xtd-4-1 confluenceTd" colspan="1">Integer</td><td class="xtd-4-2 confluenceTd">Example: 80, 8080, 9999</td><td class="xtd-4-3 confluenceTd" colspan="1">YES</td></tr><tr class="xtr-5"><td class="xtd-5-0 confluenceTd">proxy.username</td><td class="xtd-5-1 confluenceTd" colspan="1">String</td><td class="xtd-5-2 confluenceTd">Example:&nbsp;MyProxyUsername</td><td class="xtd-5-3 confluenceTd" colspan="1">Optional <span>(YES if your proxy server requires authentication)</span></td></tr><tr class="xtr-6"><td class="xtd-6-0 confluenceTd">proxy.password</td><td class="xtd-6-1 confluenceTd" colspan="1">String</td><td class="xtd-6-2 confluenceTd"><span>Example: MyProxyPassword</span></td><td class="xtd-6-3 confluenceTd" colspan="1">Optional (YES if your proxy server requires authentication)</td></tr></tbody></table>

**Example:**

```groovy
katalon -noSplash  -runMode=console -consoleLog -noExit -projectPath="C:\Users\Katalon Studio\Project\YourProject.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome (headless)" --config -proxy.option=MANUAL_CONFIG -proxy.server.type=HTTP -proxy.server.address="http://192.168.12.32" -proxy.server.port="8888"
```

#### Issues fixed

Support negative verification on API error response code (4xx, 5xx, etc)