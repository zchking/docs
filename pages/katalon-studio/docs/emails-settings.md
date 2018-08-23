---
title: "Emails Settings" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/emails-settings.html 
description: 
---
*   **Send test email** button only available once **Mail Server Settings** and **Recipients** are filled correctly.

These settings allow you to define global email configurations to be used in other features of Katalon Studio. You can access the settings at **Project > Settings > Email**. 

![](../../images/katalon-studio/docs/emails-settings/image2018-3-1 17_23_36.png)

Where:

<table class="wrapped relative-table confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Section</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><div class="content-wrapper" style=""><p style=""><span class="confluence-embedded-file-wrapper" style=""><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/emails-settings/image2018-3-1 17_25_39.png" data-image-src="/download/attachments/5112244/image2018-3-1%2017%3A25%3A39.png?version=1&amp;modificationDate=1519899940000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697365" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-3-1 17:25:39.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="5112244" data-linked-resource-container-version="6" style=""></span></p></div></td><td class="xtd-1-1 confluenceTd" style=""><p style="">This section defines the mail server which Katalon Studio will use to send emails.</p><ul style=""><li style=""><strong style="">Host</strong>: the domain name of the mail server</li><li style=""><strong style="">Port</strong>: the port to be used for that server</li><li style=""><strong style="">Username &amp; Password</strong>: the account to authenticate with the server</li><li style=""><strong style="">Protocol</strong>: the protocol to communicate with the mail server</li><li style=""><strong style="">Encrypt authentication data</strong> is recommended for sensitive data protection</li></ul></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><div class="content-wrapper" style=""><p style=""><span class="confluence-embedded-file-wrapper" style=""><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/emails-settings/image2017-11-15 9_43_0.png" data-image-src="/download/attachments/5112244/image2017-11-15%209%3A43%3A0.png?version=1&amp;modificationDate=1510713781000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5119082" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-11-15 9:43:0.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="5112244" data-linked-resource-container-version="6" style=""></span></p></div></td><td class="xtd-2-1 confluenceTd" style=""><p style="">This section defines the list of emails to receive reports from Katalon Studio. You can also customize the body of the email by click <strong style="">Edit Template</strong>.</p><p style="">Selecting <strong style="">Include report as email attachment</strong> will enable all the options to include <span style=""><strong style="">execution log</strong> and <strong style="">report format</strong> of the test suite will be sent as attachments in the notification email.</span></p></td></tr></tbody></table>

Configure Email Settings in Email Preferences
---------------------------------------------

Katalon Studio allows users to receive summary reports via **Email **after **Test Suites** execution. You can access this setting at **Project > Settings > Email **

![](../../images/katalon-studio/docs/emails-settings/image2017-11-15 10_20_54.png)

In case your email servers are using two-step authentication, please turn it off.

For those who use Gmail & Yahoo! Mail, make sure to allow low secure apps to access your account. Follow the guide [here ](https://support.google.com/accounts/answer/6010255)for Gmail users, or [here](https://help.yahoo.com/kb/account/SLN27791.html) for Yahoo! Mail users.

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
--------

You can customize the content of email here. All fields in template is editable. Click Apply when finished.

![](../../images/katalon-studio/docs/emails-settings/image2017-8-25 16_35_27.png)

Where:

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Variable</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style="">hostName</td><td class="xtd-1-1 confluenceTd" style="">Host's name</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style="">os</td><td class="xtd-2-1 confluenceTd" style="">Operating system</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style="">Browser</td><td class="xtd-3-1 confluenceTd" style="">Browser name and version</td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style="">deviceId</td><td class="xtd-4-1 confluenceTd" style="">Id of executed device</td></tr><tr class="xtr-5" style=""><td class="xtd-5-0 confluenceTd" style="">deviceName</td><td class="xtd-5-1 confluenceTd" style="">Name of executed device</td></tr><tr class="xtr-6" style=""><td class="xtd-6-0 confluenceTd" style="">suiteId</td><td class="xtd-6-1 confluenceTd" style="">Id of test suite</td></tr><tr class="xtr-7" style=""><td class="xtd-7-0 confluenceTd" style="">suiteName</td><td class="xtd-7-1 confluenceTd" style="">Name of test suite</td></tr><tr class="xtr-8" style=""><td class="xtd-8-0 confluenceTd" style="">totalTestCases</td><td class="xtd-8-1 confluenceTd" style="">total executed test cases</td></tr><tr class="xtr-9" style=""><td class="xtd-9-0 confluenceTd" style="">totalPassed</td><td class="xtd-9-1 confluenceTd" style="">total passed test cases</td></tr><tr class="xtr-10" style=""><td class="xtd-10-0 confluenceTd" style="">totalFailed</td><td class="xtd-10-1 confluenceTd" style="">total failed test cases</td></tr><tr class="xtr-11" style=""><td class="xtd-11-0 confluenceTd" style="">totalError</td><td class="xtd-11-1 confluenceTd" style="">total error test cases</td></tr></tbody></table>