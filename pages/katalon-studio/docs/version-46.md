---
title: "Version 4.6" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-46.html 
description: 
---
General Improvement
-------------------

**Download Size Reduced **

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th colspan="1" class="confluenceTh" style="">Platform</th><th style="" class="confluenceTh">Katalon Studio 4.5</th><th style="" class="confluenceTh">Katalon Studio 4.6</th></tr></thead><tbody style=""><tr style=""><th colspan="1" class="confluenceTh" style="">Windows 32 bits</th><td colspan="1" style="" class="confluenceTd">430 MB</td><td colspan="1" style="" class="confluenceTd">329 MB</td></tr><tr style=""><th colspan="1" class="confluenceTh" style="">Windows 64 bits</th><td style="" class="confluenceTd">414 MB</td><td style="" class="confluenceTd">333 MB</td></tr><tr style=""><th colspan="1" class="confluenceTh" style="">macOS</th><td style="" class="confluenceTd">414 MB</td><td style="" class="confluenceTd">348 MB</td></tr></tbody></table>

Mobile Testing
--------------

**[Record & Playback for Mobile ](https://docs.katalon.com/display/KD/Recording+Mobile+Test)**

Katalon preferred Recording utility is enhanced to support both iOS and Android to cover mobile platforms. Test objects and actions will be stored and generated as test cases that can be edited using manual/scripting interfaces. The function UI is identical to web recording to help users get started quickly.  

![](../../images/katalon-studio/docs/version-46/record_mobile.png)

Test Object
-----------

**[Parameterizing Test Objects](https://docs.katalon.com/display/KD/Manage+Test+Object#ManageTestObject-ParameterizingTestObject)**

This version provides the capability to handle dynamic objects (objects with particular properties changed due to certain business rules). Users can leverage Katalon Studio parameterization capability to control these objects easily.  
For example, the desired properties for the test object can be declared in the manual mode even without recording & spying the AUT. These properties will be used by Katalon to identify the test object during execution dynamically.

![](../../images/katalon-studio/docs/version-46/1. declare dynamic object.png)

Users can leverage the declared properties further by using Katalon scripting mode and adjust how the value of the properties to be perceived. (Typically, users will want to pass property value as variable or make reference to datafiles according to their situation - Refer to [Parameterizing Test Object](/display/KD/Manage+Test+Object#ManageTestObject-ParameterizingTestObject) for more details).

![](../../images/katalon-studio/docs/version-46/image2017-5-18 11_49_17.png)

Network Configuration
---------------------

**Certificate Settings**

Version 4.6 introduces the capability to bypass certificate validation supporting users with restricted network policy to work with Katalon Studio as usual. This setting can be found at: **Project > Settings > Network** and it affects both WebUI and WebService testings.

![](../../images/katalon-studio/docs/version-46/image2017-5-21 20_34_16.png)

**Proxy Settings**

Proxy setup can be configured at: **Preferences > Proxy**. The setting affects both WebUI and WebService testings. 

![](../../images/katalon-studio/docs/version-46/image2017-5-18 11_52_43.png)

Object Spy
----------

**Hotkeys Settings**

This version supports customizable hotkeys for Object Spy function for users to choose the preferred combination or avoid confliction with UAT hotkeys. 

This ability to change hotkeys for Object Spy only affect Chrome browser. Other browsers will be considered for future releases.

  
![](../../images/katalon-studio/docs/version-46/image2017-5-28 9_38_40.png)

Keywords
--------

**Wait time for Angular/jQuery pages**

New built-in keywords are introduced in this version to help users with the popular JS technologies such as Angular or jQuery loading issue. Click on each keyword for more details and examples. 

<table class="wrapped relative-table confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Keyword</th><th class="confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style=""><p style=""><a href="https://docs.katalon.com/display/KD/%5BWebUI%5D+Wait+For+Angular+Load" rel="nofollow" style="">Wait for Angular Load</a></p></td><td class="confluenceTd" style="">Wait for Angular/AJAX to load within the given time in second unit.</td></tr><tr style=""><td class="confluenceTd" style=""><a href="https://docs.katalon.com/display/KD/%5BWebUI%5D+Wait+for+jQuery+Load" rel="nofollow" style="">Wait for jQuery Load</a></td><td class="confluenceTd" style=""><p style="">Wait for jQuery to load within the given time in second unit.</p></td></tr></tbody></table>

**Location for screenshots**

Similar to the [\[Mobile\] Take Screenshot](https://docs.katalon.com/x/WpQY) keywords, this improvement allows users to specify location for screenshots taken by [\[WebUI\] Take Screenshot](https://docs.katalon.com/display/KD/%5BWebUI%5D+Take+Screenshot) keywords.

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Keyword</th><th class="confluenceTh" style="">Improvement</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style=""><a href="https://docs.katalon.com/display/KD/%5BWebUI%5D+Take+Screenshot" rel="nofollow" style="">[WebUI] Take Screenshot</a></td><td class="confluenceTd" style=""><p style="">Captured screenshot saved to user-defined path. The default location will be used without user-defined value.</p></td></tr></tbody></table>

**Start installed Kobiton application from Katalon Studio**

Katalon Studio no longer requires the mobile UAT to be deployed on the local machine, users can start their tests with application ID generated by Kobiton. 

<table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Keyword</th><th class="confluenceTh" style="">Improvement</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style=""><a href="https://docs.katalon.com/display/KD/%5BMobile%5D+Start+Application" rel="nofollow" style="">[Mobile] Start Application</a></td><td class="confluenceTd" style=""><div class="content-wrapper" style=""><p style="">'Start Application' keyword will start your installed <a class="external-link" href="http://docs.kobiton.com/display/DOC/App+repository" rel="nofollow" style="">Kobiton application</a> directly by passing generated application ID from <a class="external-link" href="http://docs.kobiton.com/display/DOC/App+repository" rel="nofollow" style="">Kobiton application repository</a>.</p><p style=""><strong style="">Example:</strong></p><div class="code panel pdl conf-macro output-block" data-hasbody="true" data-macro-name="code" style=""><div class="codeContent panelContent pdl" style=""><pre style=""><code class="language-groovy" style="">Mobile.startApplication('kobiton-store:136', false)</code></pre></div></div></div></td></tr></tbody></table>