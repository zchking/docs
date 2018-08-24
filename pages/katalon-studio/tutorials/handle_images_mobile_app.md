---
title: "Handling Images in Mobile Applications"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/handle_images_mobile_app.html
description: "Learn how to handle images in mobile app using Katalon Studio including capture picture from mobile camera, app's screenshots and upload image from gallery."
---
Capturing a Picture from Mobile Camera
--------------------------------------

### Scenario

Most mobile applications have a feature in which a user can upload his/her profile picture. To set the user profile picture, we have to perform few actions.

*   Step 1: **Tap** on profile edit button.
*   Step 2: Select **Take Photo** option and Tap on **Take Photo**
*   Step 3: Take snapshot and exit.

For this illustration, we could not provide an apk file but the behavior of this feature is similar across many applications. If the behavior does differ, please change the test steps accordingly.

### Manual Mode

*   Step 1: **Tap** on icon Camera

*   Step 2: Add wait a wait keyword **Wait for Element Present** and pass the object of **“Take Photo”**

*   Step 3: **Tap** on **“Take Photo”**
*   Step 4: Capture a picture

*   Step 5: Add a **Wait for Element Present** item.
*   Step 6: **Tap** on save button. Image will be uploaded successfully.

As a reminder, many applications require a short delay before executing the next step. Thus, throughout our tutorials, we add **Wait for Element Present** as a delaying step to mimic an application’s behavior.

It is quite simple to automate the same scenario from the **Script Mode**.

### Script Mode

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
 
 
'Tap on Camera icon'
 
Mobile.tap(findTestObject('handle_Camera/button_Camera Pic'), 60)
 
 
 
'Wait for Element Present take Photo'
 
Mobile.waitForElementPresent(findTestObject('handle_Camera/button_Take photo'), 60)
 
 
 
'Tap on take photo'
 
Mobile.tap(findTestObject('handle_Camera/button_Take photo'), 60)
 
 
 
'Wait for Element Present camera layout'
 
Mobile.waitForElementPresent(findTestObject('handle_Camera/camera_Layout2'), 20)
 
 
 
'Tap on camera layout element'
 
Mobile.tapAndHold(findTestObject('handle_Camera/camera_Layout2'), 10, 20)
 
 
 
'Wait for Element Present Button OK'
 
Mobile.waitForElementPresent(findTestObject('handle_Camera/button_OK'), 60)
 
 
 
'Tap on Button Ok'
 
Mobile.tap(findTestObject('handle_Camera/button_OK'), 60)

```

Uploading an Image from Mobile Gallery
--------------------------------------

### What is Android Gallery?

Android devices have a Gallery application installed by default which contains images and videos. It is the place where the images and videos are download from Internet or uploaded by users through camera.

### Scenario

To change the user profile picture by selecting an Image from the Gallery application:

*   Step 1: **Tap** on profile edit button.
*   Step 2: Select **“Choose From Image Gallery”** option.
*   Step 3: Choose **Image** in **Gallery** and exit.

For this illustration, we could not provide an apk file but the behavior of this feature is similar across many applications. If the behavior does differ, please change the test steps accordingly.

### Manual Mode

*   Step 1: Call the **Tap** mobile **keyword** and **pass** the **object**
*   Step 2: Checking whether the **‘Choose from image gallery’** has appeared on the screen through **Wait For Element Present** keyword
*   Step 3: **Tap** on **Choose from image gallery**
*   Step 4: Add a **binary statement** to initialize **Katalon Mobile Driver** to **Appium** Driver
*   Step 5: Capture all the images from Gallery to a **List**
*   Step 6: Add a loop statement (**for loop**) to iterate the list
*   Step 7: Add **If** condition for an expected image
*   Step 8: When the expected image is matched, **Click** on the image from the Gallery and **break** to exit from the loop.
*   Step 9: Add a wait command **Wait For Element Present** and pass the object of camera icon

As a reminder, many applications require a short delay before executing the next step. Thus, throughout our tutorials, we add **Wait for Element Present** as a delaying step to mimic an application’s behavior.

It is quite simple to automate the same scenario from the script mode.

### Script Mode

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import org.openqa.selenium.WebElement as WebElement
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory as MobileDriverFactory
 
import io.appium.java_client.AppiumDriver as AppiumDriver
 
 
 
'Tap on Camera icon'
 
Mobile.tap(findTestObject('handle_Camera and Gallery/button_Camera Pic'), 60)
 
 
 
'Wait for Element Present "Choose from image gallery"'
 
Mobile.waitForElementPresent(findTestObject('handle_Camera and Gallery/button_Choose from image gallery'), 60)
 
 
 
'Tap on "Choose from image gallery"'
 
Mobile.tap(findTestObject('handle_Camera and Gallery/button_Choose from image gallery'), 60)
 
 
 
'Initializing Katalon Mobile Driver to Appium Driver'
 
AppiumDriver<?> driver = MobileDriverFactory.getDriver()
 
 
 
'Store Gallery Iamges in to list'
 
List<WebElement> images = driver.findElementsByXPath('//*[contains(@class,\'com.sec.samsung.gallery.glview.composeView.PositionControllerBase\')]')
 
 
 
'Using For Loop for Iterations'
 
for (int i = 1; i <= images.size(); i++) {
 
     'Condition is applying for When reache to 3rd Image enter in to If block'
 
     if (i == 3) {
 
         'Click on the image'
 
    images.get(i).click()
 
         'Applying Break for exit from loop'
 
    break
 
     }
 
}
 
 
 
'Wait for Element Present of Camera icon'
 
Mobile.waitForElementPresent(findTestObject('handle_Camera and Gallery/button_Camera Pic'), 60)

```

Capturing Screenshots in Mobile App
-----------------------------------

Katalon Studio provides a built-in method to capture a screenshot of the current device screen**.** To use this method, we need to pass a parameter (i.e., the absolute path of the saved screenshot image file).

### Scenario

We want to take Screenshot with Relative and Absolute paths and save them under different extensions (for example, .png, .jpg.).

### Manual Mode

*   Step 1**:** Select **Start Application** from mobile keyword and click on **Input** to open a new dialogue. In **appFile**, select ‘**Value Type**‘ as **Variable**. In **Value**, pass the variable name as ‘**path’**.

*   Step 2: Add a **Wait For Element Present** item.
*   Step 3: Call the **Take Screenshot** method and pass parameter name as fileName, which accepts ‘**String**‘ Value Type. Put ‘**.\\ScreenShots\\HomePage.png**‘ (Relative path) as Value. And click **OK**.

*   Step 4: Call **Scroll To Text** from mobile keyword, pass **Views** as **Input**. **Scroll To Text** accepts **String** type parameter (Text of the element to scroll to)

*   Step 5: Call the **Take Screenshot** method to capture .jpg image type. Pass the filename which accepts ‘**String**‘ **Value Type**, put ‘**.\\ScreenShots\\view.jpg**‘ (Relative path).as **Value**.
*   Step 6: **Tap** on the **Views** menu.
*   Step 7: Call **Scroll To Text** from mobile keyword, pass **Input** as **Tabs**.
*   Step 8: Call the **Take Screenshot** method to capture .jpg image type using absolute path. Pass the filename which accepts **‘String’ Value Type**, put  **‘.\\ScreenShots\\Tab.jpg’** (Absolute path) as **Value**. Your test case will look similar to the screenshot below.

### Script code

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
import com.kms.katalon.core.model.FailureHandling as FailureHandling
 
 
 
'Path of the Apk File Store in path variable'
 
def path = RunConfiguration.getProjectDir() + '/Data Files/ApiDemos.apk'
 
 
 
'Start the application'
 
Mobile.startApplication(path, false)
 
 
 
'Wait for element Present of Heading API Demos'
 
Mobile.waitForElementPresent(findTestObject('API Demos Objects/Article_4/heading_API_Demos'), 45)
 
 
 
'Take ScreenShot and Save with "HomePage" name using relative path'
 
Mobile.takeScreenshot('.\\ScreenShots\\HomePage.png', FailureHandling.STOP_ON_FAILURE)
 
 
 
'Scroll to Views text'
 
Mobile.scrollToText('Views', FailureHandling.STOP_ON_FAILURE)
 
 
 
'Take ScreenShot and Save with "View" name using relative path'
 
Mobile.takeScreenshot('.\\ScreenShots\\View.jpg', FailureHandling.STOP_ON_FAILURE)
 
 
 
'Tap on Views'
 
Mobile.tap(findTestObject('API Demos Objects/Article_4/text_Views'), 20)
 
 
 
'Scroll to Tabs text'
 
Mobile.scrollToText('Tabs', FailureHandling.STOP_ON_FAILURE)
 
 
 
'Take ScreenShot and Save with "Tab" name using absolute path'
 
Mobile.takeScreenshot('E:\\ScreenShots\\Tab.jpg', FailureHandling.STOP_ON_FAILURE)

```

_**Note:**_ Steps 1 to 6 in Manual mode can be optimized by adding a single line in script mode, i.e.,

```groovy
def path = RunConfiguration.getProjectDir() + '/Data Files/ApiDemos.apk'

```

The source code is available here. For further instructions and help, please refer to \[Mobile\] Take Screenshot guideline and join us on Katalon Forum.