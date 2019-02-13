---
title: "Getting Started"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-store/docs/user/getting-started.html
redirect_from:
    - "/katalon-store/docs/user/getting-started/"

description: Help user navigate around KStore
---

## Sign in to Katalon Store

Use Katalon Store to find and install plugins to Katalon Studio.

Before you can install (or purchase) a plugin from the Katalon Store, you must sign in using your Katalon ID.

In Katalon Store, click _Sign in_ at the top-right corner. 

If you do not have a Katalon ID, create one by clicking '_Sign up.'_ Then follow the onscreen instructions.

The account information includes your Katalon ID and the username that you use when you review plugins. 

To sign out of Katalon Store at any time, click _Sign In_ > _Sign Out_.


## Find and install plugins

To find the right plugin, browse the Katalon Store or use the Search function. Once you find the plugin you want, you can install it using your Katalon Account.

![](../../images\katalon-store\docs\user\store-browse.png)


### Free plugins

Search for a plugin by entering one or more words in the search field at the top of the Katalon Store window, then pressing Enter. Click on a thumbnail image of a plugin on the homepage to view details.

To install the plugin, click the button _Install_ on the product detail page. 

![](../../images\katalon-store\docs\user\store-install-plugin.png)


_Note: After the installation has completed, click Reload Plugins in Katalon Studio to activate the plugin._


### Free trial plugins

You can get a 30-day free trial for some of the plugins on the Katalon Store. 

To get a trial (only 1 trial is offered per account), follow these steps:

1. Find a free trial

    *   Search for a trial in the search field on the homepage.
    *   Click on a thumbnail image of a plugin which has a Free trial label.

2. Get a plugin FREE for 30 days

    *   Click on _Try it free_ button.
    *   Then a confirmation box will be displayed. Click _Install now_ to get a plugin.

The plugin will switch to _Expired_ status after the trial ends.

_Note: After the installation has completed, click Reload Plugins in Katalon Studio to activate the plugin._


## View and manage installed plugins 

You can view the plugins you've installed using your Katalon Account in the **Manage installed plugins** page. You can uninstall plugins that you no longer need.

### View trial/purchased plugins

In the Katalon Store, click your name in the bottom-left corner, or click _Sign in_ if you're not signed in already.

Click **Manage installed plugins** in the drop-down list menu to view a list of installed plugins. From here, you can view lists of trial/purchased and free plugins.


![](../../images\katalon-store\docs\user\store-manage-plugin.png)


### Uninstall plugins

_Note: If you uninstall a plugin you've already paid for, you can reinstall it for free_.

In the Katalon Store, do any of the following:

*   Click on the _Uninstall_ button on a plugin's detail page
*   Uninstall the plugin in **Manage installed plugins page**

Then click Reload Plugins in Katalon Studio to complete the process. 


## Ratings & Reviews

### View Ratings & Reviews

You can view ratings on thumbnail images of each plugin on the homepage.

To view detailed reviews of each plugin, go to the detail page of that plugin and select the **Ratings & Reviews** tab.

![](../../images\katalon-store\docs\user\store-rating.png)

### Submit a review

Before you can submit a review for any plugin from the Katalon Store, you must sign in using your Katalon ID.

Go to a detail page of a plugin and choose the **Ratings & Reviews** tab and write your review in the text field. Click _Submit_ to post your review.

_Note: A rating is required to submit a review_.

# API Keys Setting


## API Keys usage 


In Katalon Studio Commandline Execution, API keys play the role as the user credentials to download and install plugins of the API key owners to Katalon Studio before proceeding execution. 

Without API keys applied, Katalon Studio will execute as no plugins are installed. Therefore, API keys are must-have for using plugin functions during Commandline Execution in Katalon Studio.


## Manage API Keys


### Create a new key



1.  Navigate to Katalon Store **[Settings](https://store.katalon.com/settings)** > **API Keys** tab.
1.  Click on **Generate New Key** button > Input key **Title** > Click **Add key** button > Key list will be shown with the new key added.


### Remove an existing key



1.  Navigate to Katalon Store **[Settings](https://store.katalon.com/settings)** > **API Keys** tab.
1.  Click on the **Remove** button of the key you want to remove > Click **OK** to remove

Note that this action cannot be undone. Once a key is removed, it cannot be used anymore.


## Apply API Keys in Katalon Studio Commandline Execution



1.  Generate a new API key or using an existing key
1.  Add the **apiKey** parameter to the execution command line. \
<span style="text-decoration:underline;">For example:</span> \
`katalon -noSplash  -runMode=console -consoleLog -noExit -projectPath="C:\Users\Katalon Studio\Project\YourProject.prj"` `-retry=` `0` `-testSuitePath="Test Suites/TS_RegressionTest"` <code>-browserType="Chrome (headless) <strong>-apiKey=e4c46ee7-0179-4309-a7bf-c0530bf61d07 \
</strong></code>
1.  Plugins installed by the API key owners will be downloaded and installed to Katalon Studio before execution. Functions of the plugins will be triggered accordingly. 