---
title: "Emails Settings" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/emails-settings.html 
description: 
---
*   **Send test email** button only available once **Mail Server Settings** and **Recipients** are filled correctly.

These settings allow you to define global email configurations to be used in other features of Katalon Studio. You can access the settings at **Project > Settings > Email**. 

Where:

| Section | Description |
| --- | --- |
| 
 | 

This section defines the mail server which Katalon Studio will use to send emails.

*   **Host**: the domain name of the mail server
*   **Port**: the port to be used for that server
*   **Username & Password**: the account to authenticate with the server
*   **Protocol**: the protocol to communicate with the mail server
*   **Encrypt authentication data** is recommended for sensitive data protection

 |
| 

 | 

This section defines the list of emails to receive reports from Katalon Studio. You can also customize the body of the email by click **Edit Template**.

Selecting **Include report as email attachment** will enable all the options to include **execution log** and **report format** of the test suite will be sent as attachments in the notification email.

 |

Configure Email Settings in Email Preferences
---------------------------------------------

Katalon Studio allows users to receive summary reports via **Email **after **Test Suites** execution. You can access this setting at **Project > Settings > Email **

In case your email servers are using two-step authentication, please turn it off.

For those who use Gmail & Yahoo! Mail, make sure to allow low secure apps to access your account. Follow the guide here for Gmail users, or here for Yahoo! Mail users.

Below is SMTP configuration for popular email servers:

**Gmail:**

*   *   Host: _smtp.gmail.com_
        
    *   Port: _465_
        
    *   Username: _Your full Gmail address (e.g. yourusername@gmail.com)_
        
    *   Password: Your Gmail password
        

**Yahoo! Mail:**

*   *   Host: _smtp.mail.yahoo.com_
        
    *   Port: _465_
        
    *   Username: _Your full Yahoo! Mail address (e.g. yourusername@yahoo.com)_
        
    *   Password: _Your Yahoo! Mail password_
        

**Outlook:**

*   *   Host: _smtp-mail.outlook.com_
        
    *   Port: _587 or 25_
        
    *   Username: _Your full Microsoft email address (e.g. yourusername@outlook.com)_
        
    *   Password: _Your Microsoft password_
        
    *   Protocol: _TLS_
        

Template
--------

You can customize the content of email here. All fields in template is editable. Click Apply when finished.

Where:

| Variable | Description |
| --- | --- |
| hostName | Host's name |
| os | Operating system |
| Browser | Browser name and version |
| deviceId | Id of executed device |
| deviceName | Name of executed device |
| suiteId | Id of test suite |
| suiteName | Name of test suite |
| totalTestCases | total executed test cases |
| totalPassed | total passed test cases |
| totalFailed | total failed test cases |
| totalError | total error test cases |