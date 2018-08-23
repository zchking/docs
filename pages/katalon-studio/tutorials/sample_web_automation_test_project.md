---
title: "A Sample Web Automation Test Project"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/sample_web_automation_test_project.html
description: "Starting a web automation test project for a website can be complicated. The following tutorial will help you ease that process using Katalon Studio."
---
[](#)

Starting a new automation project for a website can be complicated and requires a steep learning curve, especially to those who are new to automation testing. The following tutorial will help you ease that process using [Katalon Studio](https://www.katalon.com).

Test Scenario
-------------

For this tutorial, we are using Katalon Studio to test the dummy web app (CURA) accessible at [http://demoaut.katalon.com](http://demoaut.katalon.com). CURA is a simple health care service that allows patients to book appointments with doctors.

In this tutorial, we create a test case to test the following flow:

*   Login
*   Book an appointment
*   Check if the appointment is booked successfully
*   Logout

**Get Started**

1.  ### Create an automation testing project in Katalon Studio as below
    

![Katalon1](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon1.png)  
![Katalon2](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon2.png)

### Create a test case, where all of your necessary test steps of the scenario will be written

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon3.png)

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon4.png)

The newly created test case is generated in form of a Groovy language script file (also called test script) which can be viewed and edited in Katalon Studio by one of two view modes: [Manual View](https://docs.katalon.com/x/9YEw) and [Script View](https://docs.katalon.com/x/Y4Iw).

### Composing automation test case

Please refer to the [Test Design page](https://docs.katalon.com/display/KD/Test+Design) for detailed instructions to compose test steps in various modes using different utilities. For a starter, we recommend using the Record – Playback function to get familiar with the scripting process. Katalon Studio is capable of generating test steps quickly.

*   Click on the Record Toolbar button to open the Record dialog, then enter “[http://demoaut.katalon.com](http://demoaut.katalon.com)” for the URL field and select Chrome on the dialog to start recording.

![Katalon recording](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon5.png)

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon6.png)

*   A new Chrome browser instance with the CURA website will be activated. Click on Make Appointment.

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon8.png)

*   Enter “John Doe” for username and “ThisIsNotAPassword” for password on the login page.

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon9.png)

*   On the Make Appointment page, fill in necessary appointment information and click on the Book Appointment button to book an appointment.

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon10.png)

*   The Appointment Confirmation page will show up. Click the Logout button to complete the recorded session.

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon11.png)

*   Switch back to Katalon Studio Record dialog and you can see all the actions and web elements recorded. Click on OK to finish the recording and generate necessary test steps and test scripts.

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon12.png)

*   The recorded test scripts can be playback instantly. Click the Run button with a preferred browser to start running your test case.

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon13.png)

*   The recorded test scripts should run smoothly, but you will notice the test fails at Step 14 (Click on “a_Logout” element) with the error message “Unable to click on object ‘Object Repository/Page CURA Healthcare Service (3)/a Logout’”. Don’t worry, this can be fixed using the following steps.

### Complete your first test case

If you investigate to the failed message of the test execution, it includes the message “org.openqa.selenium.WebDriverException: unknown error: Element is not clickable at point”.

It happens because when the Side Menu of CURA website is open, the animation causes the Logout element to appear slowly and so Katalon Studio’s playback is unable to recognize it. To fix this issue, we need to include a _Wait_ step right before the logout step using the keyword _waitForElementClickable_, use “a_Logout” element as the object and change the timeout input to 5 seconds.

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon14.png)

Run the test case again, you will see the Log out button is found and the step passes.

### Generate a report

To generate test reports, we need to have a test suite. A test suite in Katalon Studio is where you group test cases to run them together.

*   To create a test suite, click on the New toolbar button and select the New Test Suite item.

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon15.png)

*   In the New Test Suite dialog, enter the required name and an optional description about your test suite, click OK to create a new test suite:

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon16.png)

*   From the test suite UI, click the Add button and check the “Basic” test case then click OK to add the selected test case to the test suit.

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon17.png)

Execute this test suite as we did with the test case by clicking on the Execution toolbar. After the execution, you will notice that a new report folder is generated. In this folder, each of the child items represents an execution with the name indicating the starting time of the execution.  Click on the first report item to view. The report is shown as below:

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon18.png)

The test report’s detail is shown as below (with “Show Test Case Details” selected)

![Image title](../../images/katalon-studio/tutorials/sample_web_automation_test_project/Katalon19.png)

For additional tutorials and guidelines please visit Katalon Studio [documentation](https://docs.katalon.com). If you have any question, feel free to join the [Forum](https://forum.katalon.com) and chat with other users.

**About the Author:**

**Hieu Mai**

Currently working as a senior full-stack developer for [KMS Technology](http://www.kms-technology.com/), Hieu Mai is one of the developers behind Katalon Studio. With 5 years’ experience in Desktop & Mobile applications development and automation testing, Hieu brings this expertise to develop Katalon Studio.

Contact him at [hieumai@kms-technology.com](mailto:hieumai@kms-technology.com)

[](#modal-id-popup)