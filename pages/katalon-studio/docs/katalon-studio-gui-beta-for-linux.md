---
title: "Katalon Studio GUI (beta) for Linux" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon-studio-gui-beta-for-linux.html 
description: 
---
**Setup guide:**

1\. Install OpenJDK 8 on your Ubuntu (NOT Oracle JDK). You can find installation steps from here: [http://openjdk.java.net/install/](http://openjdk.java.net/install/). Make sure that after installation, your OpenJDK information is displayed when you execute 'java -version' command:  
![](../../images/katalon-studio/docs/katalon-studio-gui-beta-for-linux/Screen Shot 2018-02-07 at 11.50.50.png)

2\. Additional setup for Mobile and Web Services:

*   Mobile:
    
    *   Install Node.js: [https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
    *   Install Appium:
    
    ```
    npm install -g appium 
    ```
    

*   *   If there is an issue with Apium installation command, please use this command instead (source: [https://github.com/appium/appium/issues/10020](https://github.com/appium/appium/issues/10020))
        
        ```
        sudo npm install -g appium --unsafe-perm=true --allow-root
        ```
        

*   *   You may need to [set](https://askubuntu.com/questions/175514/how-to-set-java-home-for-java?utm_medim=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa) JAVA_HOME if you encounter error related to Java 'jar' file can't be found: 
    *   Set Appium directory **manually** in Windows -> Katalon Studio Preferences. Default directory should be: **/usr/lib/node_modules/appium/**  
        
*   To see with Web Service's response section and email's template content: Install **libwebkitgtk-3.0-0**
    
    ```
    apt-get install libwebkitgtk-3.0-0
    ```
    

**Notes:**

*   In Spy/Record dialog, there is no "On top" option. To make it work, please select the Spy/Record dialog -> Right click then choose "Always On Top" option.
*   Generated command line ([https://docs.katalon.com/display/KD/Console+Mode+Execution](https://docs.katalon.com/display/KD/Console+Mode+Execution)) need to be adjusted manually to run on Linux environment.
    
    ```
    ./katalon {option1} {option2} ... {optionN}
    ```
    

**Troubleshooting**

| Description | Causes (one of the following) | Solutions |
| --- | --- | --- |
| Invalid Project Description | 
.project file contains invalid information.  
  
Katalon command was executed lines in the SAME folder of project folder ![](../../images/katalon-studio/docs/katalon-studio-gui-beta-for-linux/Screen Shot 2018-02-02 at 11.07.44.png)



 | 

- Delete .project file to let Katalon Studio generate back the valid information  
  
- Execute commands outside of executed project folder  
  
![](../../images/katalon-studio/docs/katalon-studio-gui-beta-for-linux/Screen Shot 2018-02-02 at 11.08.52.png)



 |
| 'NoClassDefFoundError' error | Oracle JDK is used | - Uninstall current Oracle JDK - Install Open JDK8 after that: [http://openjdk.java.net/install/](http://openjdk.java.net/install/). |