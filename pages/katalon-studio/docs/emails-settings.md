---
title: "Emails Settings" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/emails-settings.html 
redirect_from: "/display/KD/Emails+Settings" 
description: 
---
*   **Send test email** button only available once **Mail Server Settings** and **Recipients** are filled correctly.

These settings allow you to define global email configurations to be used in other features of Katalon Studio. You can access the settings at **Project > Settings > Email**. 

![](../../images/katalon-studio/docs/emails-settings/image2018-3-1 17_23_36.png)

Where:

<table><thead><tr><th>Section</th><th>Description</th></tr></thead><tbody><tr><td><div><p><span><img></span></p></div></td><td><p>This section defines the mail server which Katalon Studio will use to send emails.</p><ul><li><strong>Host</strong>: the domain name of the mail server</li><li><strong>Port</strong>: the port to be used for that server</li><li><strong>Username &amp; Password</strong>: the account to authenticate with the server</li><li><strong>Protocol</strong>: the protocol to communicate with the mail server</li><li><strong>Encrypt authentication data</strong> is recommended for sensitive data protection</li></ul></td></tr><tr><td><div><p><span><img></span></p></div></td><td><p>This section defines the list of emails to receive reports from Katalon Studio. You can also customize the body of the email by click <strong>Edit Template</strong>.</p><p>Selecting <strong>Include report as email attachment</strong> will enable all the options to include <span><strong>execution log</strong> and <strong>report format</strong> of the test suite will be sent as attachments in the notification email.</span></p></td></tr></tbody></table>

Configure Email Settings in Email Preferences
=============================================

Katalon Studio allows users to receive summary reports via **Email **after **Test Suites** execution. You can access this setting at **Project > Settings > Email **

![](../../images/katalon-studio/docs/emails-settings/image2017-11-15 10_20_54.png)

> In case your email servers are using two-step authentication, please turn it off.
> 
> For those who use Gmail & Yahoo! Mail, make sure to allow low secure apps to access your account. Follow the guide [here ](https://support.google.com/accounts/answer/6010255)for Gmail users, or [here](https://help.yahoo.com/kb/account/SLN27791.html) for Yahoo! Mail users.

Below is SMTP configuration for popular email servers:

**Gmail:**

*   *   Host: _[smtp.gmail.com](http://smtp.gmail.com/)_
        
    *   Port: _465_
        
    *   Username: _Your full Gmail address (e.g. [yourusername@gmail.com](mailto:yourusername@gmail.com))_
        
    *   Password: Your Gmail password
        

**Yahoo! Mail:**

*   *   Host: _[smtp.mail.yahoo.com](http://smtp.mail.yahoo.com/)_
        
    *   Port: _465_
        
    *   Username: _Your full Yahoo! Mail address (e.g. [yourusername@yahoo.com](mailto:yourusername@yahoo.com))_
        
    *   Password: _Your Yahoo! Mail password_
        

**Outlook:**

*   *   Host: _[smtp-mail.outlook.com](http://smtp-mail.outlook.com/)_
        
    *   Port: _587 or 25_
        
    *   Username: _Your full Microsoft email address (e.g. [yourusername@outlook.com](mailto:yourusername@outlook.com))_
        
    *   Password: _Your Microsoft password_
        
    *   Protocol: _TLS_
        

Template
========

You can customize the content of email here. All fields in template is editable. Click Apply when finished.

![](../../images/katalon-studio/docs/emails-settings/image2017-8-25 16_35_27.png)

Where:

<table><thead><tr><th>Variable</th><th>Description</th></tr></thead><tbody><tr><td>hostName</td><td>Host's name</td></tr><tr><td>os</td><td>Operating system</td></tr><tr><td>Browser</td><td>Browser name and version</td></tr><tr><td>deviceId</td><td>Id of executed device</td></tr><tr><td>deviceName</td><td>Name of executed device</td></tr><tr><td>suiteId</td><td>Id of test suite</td></tr><tr><td>suiteName</td><td>Name of test suite</td></tr><tr><td>totalTestCases</td><td>total executed test cases</td></tr><tr><td>totalPassed</td><td>total passed test cases</td></tr><tr><td>totalFailed</td><td>total failed test cases</td></tr><tr><td>totalError</td><td>total error test cases</td></tr></tbody></table>