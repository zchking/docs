---
title: "Slack Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/slack-integration.html 
description: 
---
General Settings
----------------

You can receive Katalon Studio notifications for Slack by enabling Slack Integration. This setting is available at **Window > Katalon Studio Preferences > Katalon > Team Collaboration**.

![](../../images/katalon-studio/docs/slack-integration/image2017-6-29 16_57_34.png)

1.  Check on the **Using Slack** checkbox. The entire screen will be changed to editable mode. Where:
    
    <table class="wrapped relative-table confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Field</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><p style="">Authentication Token</p></td><td class="xtd-1-1 confluenceTd" style=""><p style="">The authentication token to make the connection to your Slack’s account. Follow this <a href="https://docs.katalon.com/display/KD/Slack+Integration#SlackIntegration-ObtainSlackauthenticationtoken" rel="nofollow" style="">help</a> to obtain the Slack authentication token.</p></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style=""><p style="">Channel/Group</p></td><td class="xtd-2-1 confluenceTd" style=""><p style="">The channel/group of Slack to get messages regarding activities from Katalon Studio.</p></td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style=""><p style="">Post the message as the authenticated user</p></td><td class="xtd-3-1 confluenceTd" style=""><p style="">Katalon Studio will use your Slack username when posting messages to Slack.</p></td></tr><tr class="xtr-4" style=""><td class="xtd-4-0 confluenceTd" style=""><p style="">Bot Username</p></td><td class="xtd-4-1 confluenceTd" style=""><p style="">You can provide another name here which Katalon Studio will use instead of your Slack username.</p></td></tr></tbody></table>
    
2.  Provide all the required information above and click **Test Connection**.   
    If the connection from Katalon Studio to your Slack team space is successfully established, you can verify as below:  
    ![](../../images/katalon-studio/docs/slack-integration/2.png)  
      
    
3.  The **Send message to Slack when** displays all the actions in Katalon Studio, that will result in sending notifications to Slack.  
    ![](../../images/katalon-studio/docs/slack-integration/3.png)  
      
    
4.  Select your preferred actions to get the notification and click **OK** to save Slack configuration.
    
    All the above preferences are saved into the file “**com.kms.katalon.composer.integration.slack.prefs**” under the “**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**” location in your Katalon Studio build folder. You can manually modify the values in this file to change how Katalon Studio works with Slack.
    

Obtain Slack authentication token
---------------------------------

Follow the steps below to obtain the Slack authentication token:

1.  Open your web browser and log in your Slack team space. Navigate to [Slack API App](https://api.slack.com/apps) to create a Katalon Studio app which is a chat bot to send notification to your Slack Work Space. Read more about Slack App [here](https://api.slack.com/slack-apps).
    

![](../../images/katalon-studio/docs/slack-integration/MnrcS0uw3RstYk6DKbgFSGhJJygIFZ3Q6JpnPxCai23ZsF5anp)

1.  Click on OAuth & Permissions on the left menu to get the Token and define Scopes to the chat bot. An authentication token will be generated. For example:
    

![](../../images/katalon-studio/docs/slack-integration/Screen Shot 2018-08-06 at 10.50.04 AM.png)

1.  Select the desired Scopes for the app. Once finished, copy the OAuth Access Token to Katalon Studio Slack integration setting.
    

![](../../images/katalon-studio/docs/slack-integration/NRAcNKO3hdIjFDPZQoVXGhxg3ogn65uuos4_dbIemoGmhXz0dV)

1.  Click Test Connection in Katalon Studio
    

![](../../images/katalon-studio/docs/slack-integration/Screen Shot 2018-08-06 at 1.07.16 PM.png)

Verify posted messages in Slack
-------------------------------

You can verify whether the messages are correctly sent to your Slack team space from your Katalon Studio, as below:

1.  Assume that Katalon Studio is configured to send a notification whenever a test case is created.
2.  Create an empty test case.
3.  Navigate to your chosen Slack channel/group, a message posted from Katalon Studio should be displayed.  
    ![](../../images/katalon-studio/docs/slack-integration/6.png)