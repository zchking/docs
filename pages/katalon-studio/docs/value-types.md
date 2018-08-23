---
title: "Value Types" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/value-types.html 
description: 
---
While designing automation test in Katalon Studio, users usually need to configure data for certain test steps, such as:

*   Pass input parameters to a test step.
*   Get the output value from a test step.

You can select from a wide range of value types supported by Katalon Studio as showed below:

| 
**Value Type**

 | 

**Description**

 |
| --- | --- |
| 

Constant

 | 

The data is a value that will not change over time.

 |
| 

Variable

 | 

The data is a value that might be changed during execution. This type of data can only be referred within the scope of the test case where it is defined.

 |
| 

Global Variable

 | 

The data is a value that might be changed during execution. This type of data can be referred anywhere in the project.

 |
| 

Test Data Value

 | 

The data is a value coming from a test data file.

 |
| 

Binary

 | 

The data is a binary expression.

 |
| 

Boolean

 | 

The data is a Boolean value that can be evaluated from a Boolean expression.

 |
| 

Test Case

 | 

The data is a test case.

 |
| 

Test Data

 | 

The data is a test data file.

 |
| 

Test Object

 | 

The data is a test object.

 |
| 

Method Call

 | 

The data is a method call.

 |
| 

Property

 | 

The data is a public property value of an object.

 |
| 

List

 | 

The data is a list of values.

 |
| Dictionary | The data is a collection of keys and values. |

This list describes how to provide data for each data type:

| 
**Value Type**

 | 

**How to provide value for the property?**

 |
| --- | --- |
| 

*   String
*   Integer

 | 

Enter value directly into the **Value** cell.

![](../../images/katalon-studio/docs/value-types/image2017-2-24 22_1_4.png)



 |
| 

*   Variable
*   Global Variable

 | 

Select preferred option from the **Value** drop-down list.

![](../../images/katalon-studio/docs/value-types/image2017-2-24 22_3_11.png)



 |
| 

Boolean

 | 

Select preferred option from the **Value** drop-down list.

![](../../images/katalon-studio/docs/value-types/image2017-2-24 21_58_55.png)



 |
| 

List

 | 

*   Click on the **Value** cell.
*   A popup which looks like the following will be displayed:  
    ![](../../images/katalon-studio/docs/value-types/Screen Shot 2017-07-13 at 14.37.49.png)
*   Continue to add as many items as you want in the above popup.  
    ![](../../images/katalon-studio/docs/value-types/Screen Shot 2017-07-13 at 14.26.51.png)
*   Then press the **OK** button.
*   Those defined values will be displayed in the **Value** cell, as illustrated below:  
    ![](../../images/katalon-studio/docs/value-types/Screen Shot 2017-07-13 at 14.27.28.png)



 |
| Dictionary | 

*   Click on the **Value** cell.
*   A popup which looks like the following will be displayed:

![](../../images/katalon-studio/docs/value-types/Screen Shot 2017-07-13 at 14.39.13.png)

Continue to add as many items as you want in the above popup.

![](../../images/katalon-studio/docs/value-types/Screen Shot 2017-07-13 at 14.41.07.png)

*   Then press the **OK** button
*   Those defined values will be displayed in the **Value** cell, as illustrated below.  
    ![](../../images/katalon-studio/docs/value-types/Screen Shot 2017-07-13 at 14.31.40.png)



 |