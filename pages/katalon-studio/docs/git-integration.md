---
title: "Git Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/git-integration.html 
description: 
---
The Git integration feature is based on **EGit**. You can refer to [http://wiki.eclipse.org/EGit/User_Guide](http://wiki.eclipse.org/EGit/User_Guide) for detailed user guide regarding EGit.

Configuration
-------------

1.  **Enable Git Integration.** In order to access all Git features, you need to enable Git Integration first. The option is available at following settings: **Window > Katalon Studio Preferences > Katalon > Git**. Once enabled, you can start using Git at Katalon Studio main toolbar.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-6-29 16_55_50.png)  
    
2.  Advanced configurations are available at** Window** \> Preferences > Team > Git**** in case you want more specific setups.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-6-29 16_56_16.png)  
    

Clone Project
-------------

After enabling Git Integration, you can clone an existing **Git repository** into a newly created directory on the local machine.

1.  Select **Clone Project** from **Git** menu of the main toolbar.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 14_1_12.png)  
    
2.  The **Source Git Repository** dialog will be displayed.   
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 14_3_4.png)  
    Where:
    
    <table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Field</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style="">Repository URL</td><td class="xtd-1-1 confluenceTd" style="">The URL to your Git repository (Should be in HTTPS protocol).</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style="">Username</td><td class="xtd-2-1 confluenceTd" style="">The username to access the Git repository.</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style="">Password</td><td class="xtd-3-1 confluenceTd" style="">The password to access the Git repository.</td></tr></tbody></table>
    
    Enter all required information and click the **Next** button to let Katalon Studio gets details about your repository.
    
    If you cannot access the repository after clicking **Next** button, the connection may have issues with SSL verification. You can use below command to bypass SSL verification (NOT recommended):
    
    ```groovy
    git config --global http.sslVerify false
    ```
    
3.  At **Branch Selection**screen, you can choose which branches to be checked out as local branches. Click the **Next** button to continue.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 16_30_51.png)
    
4.  At **Local Destination** dialog, specify the local location for cloning as well as the initial branch.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 16_32_6.png)
    
    Where:
    
    <table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Field</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style="">Directory</td><td class="xtd-1-1 confluenceTd" style=""><span style="">The local storage location you want to store your Git's repository.</span></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style="">Initial branch</td><td class="xtd-2-1 confluenceTd" style=""><span style="">All selected branches from the previous step will be displayed here. Select the branch to be used initially from this list.</span></td></tr></tbody></table>
    
5.  Click **Finish** when you are done. Katalon Studio will automatically open your cloned project. 
    

Share Project
-------------

**Share Project** is a step to make your Katalon project associated with Git.

1.  Select **Share Project** from **Git** menu of the main toolbar.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 14_27_20.png)  
      
    
2.  Folder **.git** and file **.gitignore** will be created within the Katalon project.  
    ![](../../images/katalon-studio/docs/git-integration/image2016-9-1 15_55_54.png)  
      
    
    **`.gitignore`** tells Git which files (or patterns) it should ignore. By default, **.gitignore** content will contain these files and patterns:
    
    /bin  
    /Libs  
    .settings  
    .classpath  
    /.svn
    

Commit
------

The **Commit** option allows users to view all current changes and decide which changes to be stored in local branch. Refer to [https://git-scm.com/docs/git-commit](https://git-scm.com/docs/git-commit) for detailed Git documentation regarding Commit command.

1.  Select the **Commit** option from **Git** menu of the main toolbar.   
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 14_38_43.png)  
      
    
2.  The **Git Staging** tab will be display for configuration.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 14_41_43.png)  
    Where:
    
    <table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Field</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style="">Unstaged Changes</td><td class="xtd-1-1 confluenceTd" style="">Changes which have been made.</td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style="">Staged Changes</td><td class="xtd-2-1 confluenceTd" style="">Selected changes from&nbsp;<strong style="">Unstaged Changes.</strong>&nbsp;These changes will be committed.</td></tr></tbody></table>
    
3.  From the **Unstaged Changes** list, select the changes to be committed, then right-click on them and select **Add To Index**. Selected changes will be added to the **Staged Changes** list.  
      
    
4.  Enter your comments into the **Commit Message** then click on **Commit** to store your staged changes into the local branch.

Manage Branches
---------------

### New Branch

1.  Select the **New Branch** option from **Git** menu of the main toolbar.   
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 14_57_48.png)  
      
    
2.  The **Create Branch** dialog will be displayed.   
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 15_2_3.png)  
    Where:
    
    <table class="relative-table wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="xtd-0-0 confluenceTh" style="">Field</th><th class="xtd-0-1 confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style="">Source</td><td class="xtd-1-1 confluenceTd" style=""><div class="content-wrapper" style=""><p style="">Select either remote or local branch which will be your source branch.</p><p style=""><span class="confluence-embedded-file-wrapper" style=""><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/git-integration/image2017-2-22 16_8_31.png" data-image-src="/download/attachments/3178878/image2017-2-22%2016%3A8%3A31.png?version=1&amp;modificationDate=1487754511000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5112994" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-22 16:8:31.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="3178878" data-linked-resource-container-version="1" style=""></span></p></div></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" style="">Branch name</td><td class="xtd-2-1 confluenceTd" style="">The name to be used for the new branch.</td></tr><tr class="xtr-3" style=""><td class="xtd-3-0 confluenceTd" style="">Checkout new branch</td><td class="xtd-3-1 confluenceTd" style="">Option to let Katalon Studio checkout that branch after created.</td></tr></tbody></table>
    
3.  Click **Finish** to create new branch.

### Checkout Branch

The **Checkout Branch** option allow you to switch from one branch to another.

1.  Select the **Checkout Branch** option from **Git** menu of the main toolbar.   
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 15_7_15.png)  
      
    
2.  The **Select Source** dialog will be displayed. Select the local branch you want to check out to be current branch. The branch with √ icon is your current local branch.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 15_8_40.png)  
      
    
3.  Click **OK** to finish checking out to new local branch.

### Delete Branch

1.  Select the **Delete Branch** option from **Git** menu of the main toolbar.   
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 15_10_10.png)  
      
    
2.  On this dialog, both local and remote branches are displayed. Select a branch to be deleted then click **OK**.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 16_6_37.png)

Fetch
-----

Retrieve all information about changes occurred in remote branches. Refer to [https://git-scm.com/docs/git-fetch](https://git-scm.com/docs/git-fetch) for detailed Git documentation regarding Fetch command

1.  Select the **Fetch** option from **Git** menu of the main toolbar.   
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 16_27_32.png)  
      
    
2.  It will automatically fetch remote branches, tags, and remote changes.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 16_57_18.png)  
      
    
3.  Select **History** from main toolbar   
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 17_2_17.png)  
      
    
4.  Details regarding all the branches and tags you've just fetched will be displayed.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 17_6_5.png)

Pull
----

Incorporate changes from a remote repository into the current branch. Refer to [https://git-scm.com/docs/git-pull](https://git-scm.com/docs/git-pull) for detailed Git documentation regarding Pull command

1.  Select the **Pull** option from **Git** menu of the main toolbar.   
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 15_53_48.png)  
      
    
2.  In the **Pull** dialog, select the remote branch to be pulled into your local branch. Click **Finish**.   
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 15_54_56.png)  
      
    
3.  The **Pull Result** dialog will be displayed with all data about pulling request taken on the selected branch.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 15_56_21.png)

Push
----

Update remote branch using the local branch. Refer to [https://git-scm.com/docs/git-push](https://git-scm.com/docs/git-push) for detailed Git documentation regarding Push command

Before doing any push, you have to commit your changes first. 

1.  Select **Push** option from **Git** menu of the main toolbar.   
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 15_14_38.png)
    
2.  The** Push to Branch **dialog will be displayed. Choose from the **Remote branch** list which branch to be updated (All remote branches in your Git repository are listed here). 
    
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 15_19_28.png)  
    Click **Next** after finished selecting your remote branch.
    
    If you enter a different name besides the listed branches, a new remote branch with that name will be created accordingly.
    
3.  The **Push Confirmation**Dialog will be displayed with details regarding your commit.  
    ![](../../images/katalon-studio/docs/git-integration/image2017-2-22 15_27_45.png)  
    Click on **Finish** to push your commits to the remote repository.