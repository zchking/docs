---
title: "Call test case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/call-test-case.html 
description: 
---
Call Test Case in Manual view
-----------------------------

Follow the steps below in order to make a call to another test case in **Manual view**:

1.  Open a test case in **Manual** view, then select option to add **Call Test Case** from command toolbar.  
    ![](../../images/katalon-studio/docs/call-test-case/image2017-6-30 20_38_7.png)  
      
    
2.  The **Test Case Browser** dialog which shows all existing test cases within the project will be displayed. Select the test case to be called and click **OK**.  
    ![](../../images/katalon-studio/docs/call-test-case/image2017-2-9 10_2_56.png)  
      
    
3.  A **Call Test Case** step will be added with the selected test case above as its target.   
    ![](../../images/katalon-studio/docs/call-test-case/image2017-2-9 10_6_5.png)
    
    Once a test step is added as **Call Test Case**, it will not be allowed to change into another keyword.
    

Call Test Case in Scripting view
--------------------------------

In **Scripting view**, the _callTestCase_ method allows users to make a call to another test case. Refer to either of the following syntaxes:

```groovy
//call test case using WebUI Class
WebUI.callTestCase(findTestCase({Test Case ID}), [key1:value1, key2:value2, … , keyN:valueN], FailureHandling.option)
 
//call test case using Mobile Class
Mobile.callTestCase(findTestCase({Test Case ID}), [key1:value1, key2:value2, … , keyN:valueN], FailureHandling.option)
```

where:

| Items | Description |
| --- | --- |
| {Test Case ID} | 
The **ID** of the test case to be called. You can find this info in test case properties.

For example:

![](../../images/katalon-studio/docs/call-test-case/image2017-2-24 14_16_26.png)



 |
| 

Parameters binding:

```groovy
[key1:value1, key2:value2, … , keyN:valueN]
```

 | 

The **list of input parameters** for that test case if any, which consists of following details:

*   _Key(s)_: The [public variables](https://docs.katalon.com/display/KD/Variable+Types#VariableTypes-Publicvariables) defined within the called test case.
*   _Value_: the value to be used for the corresponding public variables.

 |
| FailureHandling.option | 

The _failure handling_ option for the current test step. This parameter is **optional**.

 |

For example:

![](../../images/katalon-studio/docs/call-test-case/image2017-6-30 20_39_15.png)