---
title: "Types of Variables"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/variable-types.html
redirect_from:
    - "/display/KD/Variable+Types/"
    - "/display/KD/Variable%20Types/"
    - "/x/RoIw/"
    - "/katalon-studio/docs/variable-types/"
description:
---
There are three types of variables supported in Katalon Studio, as below:

**Script Variable**

A Script Variable can be referred only within the scope of the test case where it is defined. It is essentially a Groovy variable.

**Test Case Variable**

A Test Case Variable can be used to parameterize a test case or to call that test case with different inputs.

**Global Variable (Execution Profiles)**

A Global Variable can be accessed anywhere inside your project.

Refer to the subsequence sections for how to define a variable of each type.

Script Variables
-----------------

A Script Variable can be referred only within the scope of the test case where it is defined. It is essentially a Groovy variable. For example:

```groovy
// x is defined as a variable of String type
String x = "Hello";
 
// y is defined as a variable of int type
int y = 5;

// The value of the variables are printed to the console
println(x);
println(y);
```

For more details, please [Groovy documentation](http://groovy-lang.org/semantics.html).

Test Case Variables
---------------

> Since version 5.9, Katalon Studio provides Script Mode for Test Case Variables. The scripting interface allows you to quickly create any variables for the test cases without manually filling out the variable table.

You can manage Test Case Variable in the **Variables** tab of the **Test Case Editor**.

To add variable using grid view, switch to **Variables** tab of your Test Case. Then click **Add**. A new row is added to the variable list. Modify the variable details and save the test case once done.

![](../../images/katalon-studio/docs/variable-types/variable-manual-mode.png)

Alternatively, variables can be added using Script Mode. Switch to **Variable (Script Mode)** tab, Katalon Studio will display a Script Editor with XML format. For example:

![](../../images/katalon-studio/docs/variable-types/variable-script-mode.png)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Entity xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="variableEntityWrapper">
   <description></description>
   <tag></tag>
   <variables>
      <defaultValue>'John Doe'</defaultValue>
      <description></description>
      <id>19fe967b-1564-4705-aff2-848d45b84489</id>
      <masked>false</masked>
      <name>Username</name>
   </variables>
   <variables>
      <defaultValue>'ThisIsNotAPassword'</defaultValue>
      <description></description>
      <id>75fa3d79-7e92-4d55-b359-f7c9493ea288</id>
      <masked>false</masked>
      <name>Password</name>
   </variables>
</Entity>
```

Test Case Variables can be referred in test case as Groovy variables, e.g.

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable as GlobalVariable

WebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

WebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)

WebUI.setText(findTestObject('Page_Login/txt_Password'), Password)

WebUI.click(findTestObject('Page_Login/btn_Login'))

landingPage = WebUI.verifyElementPresent(findTestObject('Page_CuraAppointment/div_Appointment'), GlobalVariable.G_Timeout)
```

![](../../images/katalon-studio/test-case-variables-manual-mode.PNG)

Test Case Variables can be utilized as parameters for the test case in other configurations. (e.g. input data for keywords in [Manual View](/display/KD/Manual+View) or params when [binding Data for Test Execution](/display/KD/Execute+a+test+suite#Executeatestsuite-VariableBinding)).

Global Variables
----------------

> *   Only for version **5.3** and **below**.
> *   Since version **5.4** and **above**, Global Variables are called **Execution Profile**. For more details, refer to this [documentation](/x/xAHR).

You can manage the list of Global Variables in your project by using the **Global Variables** view.

Expand the **Global Variable** view. Then click **Add**. 

![](../../images/katalon-studio/docs/variable-types/image2017-6-30-203A273A48.png)

The **New Variable** dialog is displayed. Specify details for the variable then click **OK**.

![](../../images/katalon-studio/docs/variable-types/image2017-1-24-153A413A17.png)


The variable will be added to the **Global Variable** list accordingly.
    ![](../../images/katalon-studio/docs/variable-types/image2017-6-30-203A283A43.png)


Global Variables can be utilized by any test case across a project. (e.g. input data for keywords in [Manual View](/display/KD/Manual+View) or params when [binding Data for Test Execution](/display/KD/Design+a+Test+Suite#DesignaTestSuite-VariableBinding)).

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable as GlobalVariable

WebUI.comment('Story: Login to CURA system')

WebUI.comment('Given that the user has the valid login information')

WebUI.openBrowser(GlobalVariable.G_SiteURL)

WebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

WebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)

WebUI.setText(findTestObject('Page_Login/txt_Password'), Password)

WebUI.comment('When he logins to CURA system')

WebUI.click(findTestObject('Page_Login/btn_Login'))

WebUI.comment('Then he should be able to login successfully')

landingPage = WebUI.verifyElementPresent(findTestObject('Page_CuraAppointment/div_Appointment'), GlobalVariable.G_Timeout)

WebUI.closeBrowser()
```