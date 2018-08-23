---
title: "Variable Types" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/variable-types.html 
description: 
---
There are three types of variables supported in Katalon Studio, as below:

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Variable Type</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><p style="">Private variable</p></td><td class="xtd-1-1 confluenceTd" style=""><p style="">A private variable can be referred only within the scope of the test case where it is defined.</p></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><p style="">Local Variable</p></td><td class="xtd-2-1 confluenceTd" style=""><p style="">A public variable can be exposed as the parameter for the test case where it is defined</p></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><p style="">Global Variable</p></td><td class="xtd-3-1 confluenceTd" style=""><p style="">A global variable can be referred anywhere of your project.</p></td></tr></tbody></table>

Refer to the subsequence sections for how to define a variable of each type.

Private variables
-----------------

Variables defined in **Scripting view** of Test Cases are classified as private variables. These variables will only be accessible within the scope of your Groovy class. For example:

```groovy
// x is defined as a variable of String type
	String x = "Hello";
 
// y is defined as a variable of int type
    int y = 5;
		
// The value of the variables are printed to the console 
    println(x);
    println(y);
```

Local variables
---------------

You can manage the list of public variables of your test case by using the **Variables** tab in your **Test Case Editor**.

1.  Switch to **Variables** tab of your Test Case. Then click **Add**.  
    ![](../../images/katalon-studio/docs/variable-types/image2017-6-30 20_26_5.png)  
      
    
2.  A new row is added to the variable list. Modify the variable details and save the test case when you're done.  
    ![](../../images/katalon-studio/docs/variable-types/image2017-6-30 20_26_59.png)  
      
    
3.  Variables defined in this list can be utilized as parameters for the test case in other configurations. (e.g. input data for keywords in [Manual View](/display/KD/Manual+View) or params when [binding Data for Test Execution](https://docs.katalon.com/display/KD/Execute+a+test+suite#Executeatestsuite-VariableBinding))

Global variables
----------------

*   Only for version **5.3** and **below**.
*   Since version **5.4** and **above**, Global Variables are called **Execution Profile**. For more details, refer to this [documentaion](https://docs.katalon.com/x/xAHR).

You can manage the list of global variables in your project by using the **Global Variables** view.

1.  Expand the **Global Variable** view. Then click **Add**.   
    ![](../../images/katalon-studio/docs/variable-types/image2017-6-30 20_27_48.png)  
      
    
2.  The **New variable** dialog is displayed. Specify details for the variable then click **OK**.  
    ![](../../images/katalon-studio/docs/variable-types/image2017-1-24 15_41_17.png)  
      
    
3.  The variable will be added to the **Global Variable** list accordingly.  
    ![](../../images/katalon-studio/docs/variable-types/image2017-6-30 20_28_43.png)  
      
    
4.  Global variables can be utilized by any test case across a project. (e.g. input data for keywords in [Manual View](/display/KD/Manual+View) or params when [binding Data for Test Execution](https://docs.katalon.com/display/KD/Design+a+Test+Suite#DesignaTestSuite-VariableBinding))