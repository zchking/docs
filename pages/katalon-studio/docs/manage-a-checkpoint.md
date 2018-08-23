---
title: "Manage a Checkpoint" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/manage-a-checkpoint.html 
description: 
---
What is Checkpoint
------------------

Checkpoint is the **snapshot** of test data taken at a specific time. A checkpoint is used to verify whether the **current** state of the data source is different from its **previous** taken state. An example where Checkpoints proves to be helpful are database validation cases where value usually changes constantly.

Create a Checkpoint from Test Data
----------------------------------

1.  Select **File > New > Test Data** from the main menu. The **New Checkpoint** dialog will be displayed. Enter the name for your checkpoint and select **Test Data** as **Data Type**. Click **Next**.  
      
      
    
2.  In the next dialog, click **Browse** to select from the list of existing Data Files defined in Katalon Studio. Click **Finish**.  
      
      
    
3.  The state of the selected data source will be captured and displayed in **preview section** below. The checkboxes for the data cells indicate whether they will be used when verifying against other states of this data source later.  
      
      
    
4.  Save the **Checkpoint** when you're done. The data snapshot taken here can be used to compare with the state of the data source later. Refer to \[Common\] Verify Checkpoint keyword for more details.

Create an Excel Checkpoint
--------------------------

1.  Select **File > New > Test Data** from the main menu. The **New Checkpoint** dialog will be displayed. Enter the name for your checkpoint and select **Excel File** as **Data Type**. Click **Next**.  
      
      
    
2.  In the next dialog, click **Browse** to select the excel file. Specify the excel sheet to be loaded as needed then click **Finish**.  
      
      
    
3.  The state of the selected data source will be captured and displayed in **preview section** below. The checkboxes for the data cells indicate whether they will be used when verifying against other states of this data source later.  
      
      
    
4.  Save the **Checkpoint** when you're done. The data snapshot taken here can be used to compare with the state of the data source later. Refer to \[Common\] Verify Checkpoint keyword for more details.

Create a CSV Checkpoint
-----------------------

1.  Select **File > New > Test Data** from the main menu. The **New Checkpoint** dialog will be displayed. Enter the name for your checkpoint and select **CSV File** as **Data Type**. Click **Next**.  
      
      
    
2.  In the next dialog, click **Browse** to select the CSV file. Specify the character to be used as the separator for CSV file then click **Finish**.  
      
      
    
3.  The state of the selected data source will be captured and displayed in **preview section** below. The checkboxes for the data cells indicate whether they will be used when verifying against other states of this data source later.  
    
4.  Save the **Checkpoint** when you're done. The data snapshot taken here can be used to compare with the state of the data source later. Refer to \[Common\] Verify Checkpoint keyword for more details.

Create a Database Checkpoint
----------------------------

1.  Select **File > New > Test Data** from the main menu. The **New Checkpoint** dialog will be displayed. Enter the name for your checkpoint and select **Database Data** as **Data Type**. Click **Next**.  
      
      
    
2.  In the next dialog, enter the database connection details as well as data query then click **Finish**.  
      
      
    
3.  The state of the selected data source will be captured and displayed in **preview section** below. The checkboxes for the data cells indicate whether they will be used when verifying against other states of this data source later.  
    
4.  Save the **Checkpoint** when you're done. The data snapshot taken here can be used to compare with the state of the data source later. Refer to \[Common\] Verify Checkpoint keyword for more details.