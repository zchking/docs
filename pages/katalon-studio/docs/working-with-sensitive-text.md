---
title: "Working with Sensitive Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/working-with-sensitive-text.html 
description: 
---
**Since Katalon Studio v5.4**

Katalon Studio supports text encryption and set them right into the test script. This feature is useful in case of project team need to share tests that contain sensitive information with other team members or key stakeholders. There are two ways to leverage this feature in **Manual Mode** and **Scripts Mode**:

### Manual Mode

*   Select **setEncryptedText** from the built-in keywords dropdown list. Click on **Input** field and a pop-up will be displayed to help encrypt any raw text.  
      
    
*   Next, enter the raw text and select **Insert**. Katalon Studio will **automatically** encrypt and insert into the test step. 

### Script Mode

Raw text must be encrypted before using in Script Mode

*   Select **Help > Encrypt Text** on the Main Menu. Enter the Raw Text and Click Copy and Close

*   In Script Mode, simply paste the encrypted text as param of the **setEncryptedText** built-in keyword