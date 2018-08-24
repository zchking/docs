---
title: "Creating test case using Record & Playback"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/create_test_case_using_record_playback.html
description: "Test recording is the easiest way for new automation testers to start learning test automation.This article illustrates how to record the test case easily."
---
Test recording is the easiest way for new automation testers to start learning test automation. Identifying objects on applications is time-consuming and painful. The Web Recorder Utility captures your actions being performed on application and converts them into runnable code in the back-end. Using this you can quickly automate a few functionalities of your app and save your time by recording actions which have to be performed quite many times in iterative builds. This Katalon Studio function supports recording and running the same tests on multiple browsers. This article illustrates how to record your test case with ease.

1.  Recording your first test with Katalon Studio Record Web Function
2.  How to change the Page Folder names and elements names while runtime recording
3.  How to add Katalon Commands while recording

Recording your first test with Katalon Studio Record Web Function
-----------------------------------------------------------------

**Scenario:** To make an appointment

1.  Launch the Application under test (**URL**: http://demoaut.katalon.com/)
2.  Click on Make Appointment button
3.  Enter valid username, password and click on Login button
4.  Make an appointment

Follow the below steps to get familiar with the Record & Playback features for Web UI Test

**Step 1:** Launch Katalon Studio and click **New > Test Case** on the main toolbar. Provide a name for your test case and click **OK**. An empty test case will be created.

**Step 2:** Click on **Record Web** from the main toolbar.

**Step 3:** The **Record** dialog would be displayed.

**Step 4:** Select a browser and click on the **Record** button to start recording test case

**Step 5:** Once your application has been launched, move the cursor to **‘Make Appointment’** button and click on the button (wait till Login page gets loaded)

**Step 6:** Enter valid username & password (John Doe & ThisIsNotAPassword) and click on ‘**Login**‘ button (wait till page gets loaded)

**Step 7:** Once Make Appointment page has been loaded, select the value **“Hongkong CURA Healthcare Center”** from the Facility drop down.

**Step 8:** Move the cursor towards checkbox ‘**Apply for hospital readmission**‘ and click on the check box.

**Step 9:** Move the cursor towards the radio button and click the radio button of **‘Medicaid’.**

**Step 10:** Click the calendar icon of ‘**Visit Date’** and click on the date you needed.

**Step 11:** Move the cursor towards the Comment field and enter the text

**Step 12:** Move the cursor towards **Book Appointment** button and click the button

**Step 13:** You can stop recording anytime by clicking on ‘**Stop**‘. Katalon Studio allows users to select Selection Method for captured objects. **Basic mode** is recommended to manual testers who just started automation journey. With basic mode, Katalon Studio’s intelligent selector generator will **automatically generate** robust and unique **selectors** for captured objects.

For advanced testers who wish to **manually input selectors** have the option to select between **CSS** or **XPath mode**. For more details about Selection Method, refer to this guide.

**Step 14:** When you are done with recording, click **OK** to save recorded actions into Katalon Studio. You will be prompted to save **captured objects** into **Object Repository** which can be reused whenever needed**.** You can also create a folder to maintain page objects in desired structure. Click **OK** to continue**.**

**Step 15:** Recorded objects and actions are saved in the test case as shown below.

Just click on **‘Run’** to execute recorded test cases in desired browser.

**Script Code for Record and Playback**

```groovy
WebUI.openBrowser('')
WebUI.navigateToUrl('http://demoaut.katalon.com/')</p>
WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
WebUI.selectOptionByValue(findTestObject('Page_CURA Healthcare Service (2)/select_facility'), 'Hongkong CURA Healthcare Center',
 
true)
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/input_programs'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/div_input-group-addon'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/td_3'))
 
WebUI.setText(findTestObject('Page_CURA Healthcare Service (2)/textarea_comment'), 'Katalon')
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/button_Book Appointment'))
 
WebUI.closeBrowser()

```

How to change the Page Folder names and elements names while runtime recording
------------------------------------------------------------------------------

To organize your test scripts in page object pattern, we need to add test objects in the folder corresponding to page. This helps us in reusing the object and maintain the objects

**Scenario:** Login with valid data

1.  Launch the Application under test (**URL**: http://demoaut.katalon.com/).
2.  Click on Make Appointment button (change page and element names).
3.  Enter valid username, password and click on Login button (change page and element names).

**Step 1:** Launch Katalon Studio and click on the **First Test Case** button on the main toolbar. Provide a name for your test case and click **OK**. An empty test case will be created.

**Step 2:** Click on **Record Web** from the main toolbar.

**Step 3:** The **Record** dialog would be displayed. Select a browser and click on the **Record** button to start recording test case.

**Step 4:** Once your application has been launched, move the cursor to **‘Make Appointment’** button and click on the button (wait till Login page gets loaded).

**Step 6:** Rename the page Name of **“Page_CURA Healthcare Service”** to **“Page_Home Page”.**

**Step 7:** Select **“a_Make Appointment”** element in Captured Objects Frame.

**Step 8:** Rename element name of **“a_Make Appointment”** to **“button_Make Appointment”.**

**Step 9:** Then again continue recording for that switch to recording browser, move to **Login Button** click on **Login** button**.**

**Step 10:** Repeat same steps above to change the name of object **Login** and its folder.

**Step 11:** Rename the Page Name of **“Page_CURA Healthcare Service”** to **“Page_Login”.**

**Step 12:** You can stop recording anytime by clicking on ‘**Stop**‘. When you are done with recording, click **OK** to save recorded actions into Katalon Studio.

**Step 13:** You will be prompted to save captured objects into Object Repository which can be reused whenever needed**.** You can also create a folder to maintain page objects in desired structure. Click **OK** to continue**.**

**Step 14:** Recorded objects and actions are saved in the test case as shown below.

Just click on **‘Run’** to execute recorded test cases in desired browser

**Source Code:**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject</p>
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
WebUI.openBrowser('')
 
WebUI.navigateToUrl('http://demoaut.katalon.com/')
 
WebUI.click(findTestObject('Page_Home Page/button_Make Appointment'))
 
WebUI.click(findTestObject('Page_Login/button_Login'))
 
WebUI.closeBrowser()

```

How to add Katalon Commands while recording
-------------------------------------------

**Scenario:** Verify the Login functionality with validations

1.  Launch the Application under test (url: http://demoaut.katalon.com/)
2.  Verify the Make Appointment button is present
3.  Click on Make Appointment button
4.  Verify the Login button is visible
5.  Enter valid username, password and click on Login button

At runtime recording, Katalon Studio allow users to add additional commands like

Basic action commands, validation point commands, synchronization commands

**Step 1:** Launch Katalon Studio and click on the **New Test Case** button on the main toolbar. Provide a name for your test case and click **OK**. An empty test case will be created.

**Step 2:** Click on **Record Web** from the main toolbar.

**Step 3:** The **Record** dialog would be displayed.

**Step 4:** Select a browser and click on the **Record** button to start recording test case

**Step 5:** Once your application has been launched, move the cursor to **‘Make Appointment’** button and click on the button (wait till Login page gets loaded)

**Step 6:** We can add validation commands in runtime record for that switch to **Katalon record dialog** box and click on **Add** Button before that we need to select the step where to add the next line of **validations commands**

**Step 7:** Click on **Add Validation Point**

**Step 8:** It will add default command **Verify Element Present**

**Step 9:** We need to give time for **Verify Element Present** Katalon Studio providing the default time 30 seconds\] for that tap on Action data of **Verify Element Present** and give 30 seconds \[as per you needed\] then click on **OK** Button.

**Step 10:** It display the **Verify Element Present** command with time on **record dialog box**

**Step 11:** We need to pass the object for **Verify Element Present** command for that click on element column of **Verify Element Present** it will display the page object dialog box and choose the object of **Login Button** \[as per you needed\] and click on **OK** Button.

**Step 12: Verify Element Present** command displayed with modified object

**Step 13:** Then again continue recording for that switch to recording browser, move to **Make Appointment** button and click on **Make Appointment** button**.**

**Step 14:** We need to add validation for **Make Appointment** button for that we shift to **Record Dialog box**

**Step 15:** Click on **Add** Button it would display the dropdown list of commands list then click on **Add Validation point**

**Step 16:** It will add default command **Verify Element Present**

**Step 17:** Now we need to change **Verify Element Present** command to **Verify Element Visible** for that double click on action column of **Verify Element Present** then it would display the down arrow then again click on down arrow it would display **all** **Validation commands.** Click on **Verify Element Visible** command \[or use others as per you needed\].

**Step 18:** It display the changed validation point on **Record dialog** box

**Step 19:** We need to pass the object for **Verify Element Visible** command for that click on element column of **Verify Element Visible** it would display the **page object** dialog box expand the page objects folder and choose the object of **Login Button** \[as per you needed\] and click on **OK** Button.

**Step 20: Verify Element Visible** command is displayed with modified object.

**Step 21:** You can stop recording anytime by clicking on ‘**Stop**‘. When you are done with recording, click **OK** to save recorded actions into Katalon Studio.

**Step 22:** You will be prompted to save captured objects into Object Repository which can be reused whenever needed**.** You can also create a folder to maintain page objects in desired structure. Click **OK** to continue**.**

**Step 23:** Recorded objects and actions are saved in the test case as shown below.

**Script code:**

```groovy
WebUI.openBrowser('')</p>
WebUI.navigateToUrl('http://demoaut.katalon.com/')
 
WebUI.verifyElementPresent(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'), 30)
 
WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
 
WebUI.verifyElementVisible(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
WebUI.closeBrowser()

```

Thus we can record the actions being performed using Katalon Studio. There are few actions which cannot be recorded.

### What cannot be recorded?

Though recording your tests saves time, we cannot validate few scenarios such as Web Table handling, switching to multiple frames, switching to windows, handling captcha, image recognition, video playbacks. Here are the main drawbacks

a) Using a recorder we cannot handle dynamically changing elements (since we need to customize Xpath/CSS)

b) We cannot reuse the code wherever we need it. And it is quite challenging for debugging.

You can download source code here.

For further instructions and help, please refer to Recording WebUI Test and Record and Playback tutorials.