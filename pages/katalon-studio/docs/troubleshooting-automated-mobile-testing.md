---
title: "Troubleshooting automated mobile testing" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/troubleshooting-automated-mobile-testing.html 
description: 
---
*   Please read **[Installation and Setup](/display/KD/Before+You+Start)** guide first to set up your mobile. The information below is provided for those who can't get their mobile testing work properly after going through setup guide.
*   The information below is **NOT** exhaustive. For further troubleshooting requests, check out [Katalon Community](https://forum.katalon.com/discussions) or consider subscribing to our [Business Support](https://www.katalon.com/support-service-options/).

| No | Issue | Solution |
| --- | --- | --- |
| 1 | Connected device is not displayed in 'Device Name' list | 
#### iOS

*   Connect your device to Xcode.
*   Go to Settings -> Developer > turn ON UIAutomation.
*   Check if your device is recognized using the following commands on Terminal
    
    ```groovy
    cd /Applications/Katalon\ Studio.app/Contents/Eclipse/configuration/resources/tools/imobiledevice 
    idevice_id -l
    ```
    
    If your iOS version is iOS 11, make sure Katalon Studio's version is 5.3+.
    

#### Android

*   Developer option is turned on.
*   A trusted connection is established by tapping on 'Trust this computer' whenever this dialog is displayed on your device.
*   Check if the device is listed using adb command:
    *   On Windows command line/ MacOS terminal: Navigate to platform-tools folder in <Android SDK folder>\\platform-tools.
    *   Type in "adb devices" and observe devices listed there. Make sure that your corrected device is listed there with online status. 



 |
| 2 | xcodebuild exited with code '65' and signal 'null' | 

Your .ipa application and/or WebDriverAgent is not signed correctly.

Solutions:

*   Sign and rebuild the WebDriverAgent XCode project with your developer certificate.
*   Uncheck 'Automatically Signing' option from WebDriverAgentRunner and select **valid provisioning profile** (profile displayed as Eligible from the list)



 |
| 3 | 

Xcode fails to create a provisioning profile for the `WebDriverAgentRunner` target:

 | 

This necessitates manually changing the bundle id for the target by going into the "Build Settings" tab, and changing the "Product Bundle Identifier" from `com.facebook.WebDriverAgentRunner` to something that Xcode will accept.



 |
| 4 | Fail to start Appium server in 30 seconds | Katalon Studio can't start Appium server within 30 seconds (default timeout). You can increase this timeout value from this settings: Project → Settings → Execution → Default → Default wait for elements timeout (in seconds) |
| 5 | Fail to start the Appium server in 60 seconds | 

Set your Appium Log Level to "Debug" which you can find this option in Windows > Katalon Studio Preferences > Katalon > Mobile to generate debug logs of Appium.

After this change is applied, retry your record/spy session and then open generated .appium file in the project folder.   
Somewhere in this file you are likely will see these lines:

```groovy
[debug] [ADB] Running '..\adb.exe' with args: [...] 
[debug] [ADB] Found package: 'com.abc.def.xyz' and fully qualified activity name : 'com.egh.jik' 
[debug] [ADB] Incorrect package and activity. Retrying.
```

The root cause is Katalon Studio can't start application due to incorrect package and activity by default, so you need to add additional settings to desired capabilities:

 - Navigate to Mobile settings (Project > Settings > Execution > Default > Mobile > Android)   
 - Add the following key  
   Name: appWaitActivity   
   Value: com.* (**based on the prefix of 'Found package' log**)

  




 |
| 6 | Carthage is not found | Known issue of Appium 1.7 with Xcode 9: [https://github.com/appium/appium/issues/9344](https://github.com/appium/appium/issues/9344), so please use Katalon Studio 5.1.0.2+ to avoid this message. |
| 7 | Unable to Start Application on this device: Appium directory is invalid. | 

Katalon Studio cannot locate the provided Appium directory. Please double check your Appium directory to make sure it should be as shown below:

Windows: (Window → Katalon Studio Preferences → Mobile → Appium Directory)

```groovy
C:\Users\<Username>\AppData\Roaming\npm\node_modules\appium
```

        MacOS: (Katalon Studio → Preferences → Mobile → Appium Directory)

```groovy
/usr/local/lib/node_modules/appium
```







 |