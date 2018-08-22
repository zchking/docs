---
title: "Katalon Studio GUI (beta) for Linux" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon_studio_gui_(beta)_for_linux.html 
description: 
---
**Setup guide:**

1\. Install OpenJDK 8 on your Ubuntu (NOT Oracle JDK). You can find installation steps from here: [http://openjdk.java.net/install/](http://openjdk.java.net/install/). Make sure that after installation, your OpenJDK information is displayed when you execute 'java -version' command:  
![](../../images/katalon-studio/docs/katalon_studio_gui_(beta)_for_linux/Screen Shot 2018-02-07 at 11.50.50.png)

2\. Additional setup for Mobile and Web Services:

*   Mobile:
    
    *   Install Node.js: [https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
    *   Install Appium:
    
    ```groovy
    npm install -g appium 
    ```
    

*   *   If there is an issue with Apium installation command, please use this command instead (source: [https://github.com/appium/appium/issues/10020](https://github.com/appium/appium/issues/10020))
        
        ```groovy
        sudo npm install -g appium --unsafe-perm=true --allow-root
        ```
        

*   *   You may need to [set](https://askubuntu.com/questions/175514/how-to-set-java-home-for-java?utm_medim=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa) JAVA_HOME if you encounter error related to Java 'jar' file can't be found: 
    *   Set Appium directory **manually** in Windows -> Katalon Studio Preferences. Default directory should be: **/usr/lib/node_modules/appium/**  
        
*   To see with Web Service's response section and email's template content: Install **libwebkitgtk-3.0-0**
    
    ```groovy
    apt-get install libwebkitgtk-3.0-0
    ```
    

**Notes:**

*   In Spy/Record dialog, there is no "On top" option. To make it work, please select the Spy/Record dialog -> Right click then choose "Always On Top" option.
*   Generated command line ([https://docs.katalon.com/display/KD/Console+Mode+Execution](https://docs.katalon.com/display/KD/Console+Mode+Execution)) need to be adjusted manually to run on Linux environment.
    
    ```groovy
    ./katalon {option1} {option2} ... {optionN}
    ```
    

**Troubleshooting**

<table class="wrapped relative-table confluenceTable" style="width: 93.0031%;"><colgroup><col><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Description</th><th class="xtd-0-1 confluenceTh">Causes (one of the following)</th><th class="xtd-0-2 confluenceTh" colspan="1">Solutions</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd">Invalid Project Description</td><td class="xtd-1-1 confluenceTd"><div class="content-wrapper"><p>.project file contains invalid information.<br><br>Katalon command was executed lines in the SAME folder of project folder <span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img class="confluence-embedded-image" width="600" src="../../images/katalon-studio/docs/katalon_studio_gui_(beta)_for_linux/Screen Shot 2018-02-02 at 11.07.44.png" data-image-src="/download/attachments/13698175/Screen%20Shot%202018-02-02%20at%2011.07.44.png?version=1&amp;modificationDate=1527772849000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13698172" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-02-02 at 11.07.44.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13698175" data-linked-resource-container-version="1"></span></p></div></td><td class="xtd-1-2 confluenceTd" colspan="1"><div class="content-wrapper"><p>-&nbsp;Delete .project file to let Katalon Studio generate back the valid information<br><br>-&nbsp;Execute commands outside of executed project folder<br><br><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img class="confluence-embedded-image" width="600" src="../../images/katalon-studio/docs/katalon_studio_gui_(beta)_for_linux/Screen Shot 2018-02-02 at 11.08.52.png" data-image-src="/download/attachments/13698175/Screen%20Shot%202018-02-02%20at%2011.08.52.png?version=1&amp;modificationDate=1527772849000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13698171" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Screen Shot 2018-02-02 at 11.08.52.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="13698175" data-linked-resource-container-version="1"></span></p></div></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd" colspan="1">'NoClassDefFoundError' error</td><td class="xtd-2-1 confluenceTd" colspan="1">Oracle JDK is used</td><td class="xtd-2-2 confluenceTd" colspan="1">-&nbsp;Uninstall current Oracle JDK - Install Open JDK8 after that: <a class="external-link" href="http://openjdk.java.net/install/" rel="nofollow">http://openjdk.java.net/install/</a>.</td></tr></tbody></table>