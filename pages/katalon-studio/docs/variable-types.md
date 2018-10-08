---
title: "Variable Types" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/variable-types.html 
redirect_from:
    - "/display/KD/Variable+Types"
    - "/x/RoIw"
description: 
---
There are three types of variables supported in Katalon Studio, as below:

| Variable Type | Description |
| --- | --- |
| Private variable | A private variable can be referred only within the scope of the test case where it is defined. |
| Local Variable | A public variable can be exposed as the parameter for the test case where it is defined |
| Global Variable | A global variable can be referred anywhere of your project. |

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
    ![](../../images/katalon-studio/docs/variable-types/image2017-6-30-203A263A5.png)  
      
    
2.  A new row is added to the variable list. Modify the variable details and save the test case when you're done.  
    ![](../../images/katalon-studio/docs/variable-types/image2017-6-30-203A263A59.png)  
      
    
3.  Variables defined in this list can be utilized as parameters for the test case in other configurations. (e.g. input data for keywords in [Manual View](/display/KD/Manual+View) or params when [binding Data for Test Execution](/display/KD/Execute+a+test+suite#Executeatestsuite-VariableBinding))

Global variables
----------------

> *   Only for version **5.3** and **below**.
> *   Since version **5.4** and **above**, Global Variables are called **Execution Profile**. For more details, refer to this [documentaion](/x/xAHR).

You can manage the list of global variables in your project by using the **Global Variables** view.

1.  Expand the **Global Variable** view. Then click **Add**.   
    ![](../../images/katalon-studio/docs/variable-types/image2017-6-30-203A273A48.png)  
      
    
2.  The **New variable** dialog is displayed. Specify details for the variable then click **OK**.  
    ![](../../images/katalon-studio/docs/variable-types/image2017-1-24-153A413A17.png)  
      
    
3.  The variable will be added to the **Global Variable** list accordingly.  
    ![](../../images/katalon-studio/docs/variable-types/image2017-6-30-203A283A43.png)  
      
    
4.  Global variables can be utilized by any test case across a project. (e.g. input data for keywords in [Manual View](/display/KD/Manual+View) or params when [binding Data for Test Execution](/display/KD/Design+a+Test+Suite#DesignaTestSuite-VariableBinding))