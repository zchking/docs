---
title: "Emails Settings" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/emails_settings.html 
description: 
---
*   **Send test email** button only available once **Mail Server Settings** and **Recipients** are filled correctly.

These settings allow you to define global email configurations to be used in other features of Katalon Studio. You can access the settings at **Project > Settings > Email**. 

![](../../images/katalon-studio/docs/emails_settings/image2018-3-1 17_23_36.png)

Where:

<table class="wrapped relative-table confluenceTable" style="width: 100.0%;"><colgroup><col style="width: 63.2911%;"><col style="width: 36.7089%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Section</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd"><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/emails_settings/image2018-3-1 17_25_39.png" data-image-src="/download/attachments/5112244/image2018-3-1%2017%3A25%3A39.png?version=1&amp;modificationDate=1519899940000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="13697365" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2018-3-1 17:25:39.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="5112244" data-linked-resource-container-version="6"></span></p></div></td><td class="xtd-1-1 confluenceTd"><p>This section defines the mail server which Katalon Studio will use to send emails.</p><ul><li><strong>Host</strong>: the domain name of the mail server</li><li><strong>Port</strong>: the port to be used for that server</li><li><strong>Username &amp; Password</strong>: the account to authenticate with the server</li><li><strong>Protocol</strong>: the protocol to communicate with the mail server</li><li><strong>Encrypt authentication data</strong> is recommended for sensitive data protection</li></ul></td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd"><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/emails_settings/image2017-11-15 9_43_0.png" data-image-src="/download/attachments/5112244/image2017-11-15%209%3A43%3A0.png?version=1&amp;modificationDate=1510713781000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5119082" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-11-15 9:43:0.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="5112244" data-linked-resource-container-version="6"></span></p></div></td><td class="xtd-2-1 confluenceTd"><p>This section defines the list of emails to receive reports from Katalon Studio. You can also customize the body of the email by click <strong>Edit Template</strong>.</p><p>Selecting <strong>Include report as email attachment</strong> will enable all the options to include <span><strong>execution log</strong> and <strong>report format</strong> of the test suite will be sent as attachments in the notification email.</span></p></td></tr></tbody></table>

Configure Email Settings in Email Preferences
---------------------------------------------

Katalon Studio allows users to receive summary reports via **Email **after **Test Suites** execution. You can access this setting at **Project > Settings > Email **

![](../../images/katalon-studio/docs/emails_settings/image2017-11-15 10_20_54.png)

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

![](../../images/katalon-studio/docs/emails_settings/image2017-8-25 16_35_27.png)

Where:

<table class="wrapped confluenceTable"><colgroup><col><col></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh">Variable</th><th class="xtd-0-1 confluenceTh">Description</th></tr><tr class="xtr-1"><td class="xtd-1-0 confluenceTd">hostName</td><td class="xtd-1-1 confluenceTd">Host's name</td></tr><tr class="xtr-2"><td class="xtd-2-0 confluenceTd">os</td><td class="xtd-2-1 confluenceTd">Operating system</td></tr><tr class="xtr-3"><td class="xtd-3-0 confluenceTd">Browser</td><td class="xtd-3-1 confluenceTd">Browser name and version</td></tr><tr class="xtr-4"><td class="xtd-4-0 confluenceTd">deviceId</td><td class="xtd-4-1 confluenceTd">Id of executed device</td></tr><tr class="xtr-5"><td class="xtd-5-0 confluenceTd">deviceName</td><td class="xtd-5-1 confluenceTd">Name of executed device</td></tr><tr class="xtr-6"><td class="xtd-6-0 confluenceTd">suiteId</td><td class="xtd-6-1 confluenceTd">Id of test suite</td></tr><tr class="xtr-7"><td class="xtd-7-0 confluenceTd">suiteName</td><td class="xtd-7-1 confluenceTd">Name of test suite</td></tr><tr class="xtr-8"><td class="xtd-8-0 confluenceTd">totalTestCases</td><td class="xtd-8-1 confluenceTd">total executed test cases</td></tr><tr class="xtr-9"><td class="xtd-9-0 confluenceTd">totalPassed</td><td class="xtd-9-1 confluenceTd">total passed test cases</td></tr><tr class="xtr-10"><td class="xtd-10-0 confluenceTd">totalFailed</td><td class="xtd-10-1 confluenceTd">total failed test cases</td></tr><tr class="xtr-11"><td class="xtd-11-0 confluenceTd">totalError</td><td class="xtd-11-1 confluenceTd">total error test cases</td></tr></tbody></table>