---
title: "Manage a Checkpoint" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/manage-a-checkpoint.html 
redirect_from: "/display/KD/Manage+a+Checkpoint" 
description: 
---
What is Checkpoint
------------------

Checkpoint is the **snapshot** of test data taken at a specific time. A checkpoint is used to verify whether the **current** state of the data source is different from its **previous** taken state. An example where Checkpoints proves to be helpful are database validation cases where value usually changes constantly.

Create a Checkpoint from Test Data
----------------------------------

1.  Select **File > New > Test Data** from the main menu. The **New Checkpoint** dialog will be displayed. Enter the name for your checkpoint and select **Test Data** as **Data Type**. Click **Next**.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 13_54_6.png)  
      
    
2.  In the next dialog, click **Browse** to select from the list of existing [Data Files](https://docs.katalon.com/display/KD/Manage+Test+Data) defined in Katalon Studio. Click **Finish**.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 13_58_28.png)  
      
    
3.  The state of the selected data source will be captured and displayed in **preview section** below. The checkboxes for the data cells indicate whether they will be used when verifying against other states of this data source later.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 14_2_6.png)  
      
    
4.  Save the **Checkpoint** when you're done. The data snapshot taken here can be used to compare with the state of the data source later. Refer to [\[Common\] Verify Checkpoint](/display/KD/%5BCommon%5D+Verify+Checkpoint) keyword for more details.

Create an Excel Checkpoint
--------------------------

1.  Select **File > New > Test Data** from the main menu. The **New Checkpoint** dialog will be displayed. Enter the name for your checkpoint and select **Excel File** as **Data Type**. Click **Next**.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 14_25_30.png)  
      
    
2.  In the next dialog, click **Browse** to select the excel file. Specify the excel sheet to be loaded as needed then click **Finish**.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 14_28_6.png)  
      
    
3.  The state of the selected data source will be captured and displayed in **preview section** below. The checkboxes for the data cells indicate whether they will be used when verifying against other states of this data source later.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 14_33_10.png)  
      
    
4.  Save the **Checkpoint** when you're done. The data snapshot taken here can be used to compare with the state of the data source later. Refer to [\[Common\] Verify Checkpoint](/display/KD/%5BCommon%5D+Verify+Checkpoint) keyword for more details.

Create a CSV Checkpoint
-----------------------

1.  Select **File > New > Test Data** from the main menu. The **New Checkpoint** dialog will be displayed. Enter the name for your checkpoint and select **CSV File** as **Data Type**. Click **Next**.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 14_41_1.png)  
      
    
2.  In the next dialog, click **Browse** to select the CSV file. Specify the character to be used as the separator for CSV file then click **Finish**.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 14_41_52.png)  
      
    
3.  The state of the selected data source will be captured and displayed in **preview section** below. The checkboxes for the data cells indicate whether they will be used when verifying against other states of this data source later.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 14_42_57.png)
4.  Save the **Checkpoint** when you're done. The data snapshot taken here can be used to compare with the state of the data source later. Refer to [\[Common\] Verify Checkpoint](/display/KD/%5BCommon%5D+Verify+Checkpoint) keyword for more details.

Create a Database Checkpoint
----------------------------

1.  Select **File > New > Test Data** from the main menu. The **New Checkpoint** dialog will be displayed. Enter the name for your checkpoint and select **Database Data** as **Data Type**. Click **Next**.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 14_43_42.png)  
      
    
2.  In the next dialog, enter the database connection details as well as data query then click **Finish**.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 14_46_12.png)  
      
    
3.  The state of the selected data source will be captured and displayed in **preview section** below. The checkboxes for the data cells indicate whether they will be used when verifying against other states of this data source later.  
    ![](../../images/katalon-studio/docs/manage-a-checkpoint/image2017-2-6 14_47_42.png)
4.  Save the **Checkpoint** when you're done. The data snapshot taken here can be used to compare with the state of the data source later. Refer to [\[Common\] Verify Checkpoint](/display/KD/%5BCommon%5D+Verify+Checkpoint) keyword for more details.