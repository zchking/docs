---
title: "Integrate test case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/integrate-test-case.html 
description: 
---
**Test cases folder** must be registered in [**Test Case Repositories**](https://docs.katalon.com/display/KD/qTest+Integration) before you can upload test cases to qTest.

Upload test cases to qTest
--------------------------

You have two methods to upload a test case to predefined qTest Module

### Upload a single test case

1.    
    1.  Navigate to the **Integration** tab of the test case. Click on the **Upload** button.  
        ![](../../images/katalon-studio/docs/integrate-test-case/image2016-11-18 14_19_2.png)  
          
        
    2.  In the Tests Explorer view, right click on the test case to trigger its context menu. Select the **qTest > Upload** option.  
          
        ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-5 16_29_21.png)  
          
        
2.  Uploaded Test Case will have qTest icon at the bottom right of the icon as shown below  
       
    ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-5 16_30_1.png)  
      
      
    
3.  You can also go to qTest to verify that the **Katalon Studio test case** is uploaded to the integrated **qTest module**. Refer to [Enable qTest Integration](/display/KD/Enable+qTest+Integration) for details about setting up an integrated qTest module.  
    ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-5 16_35_44.png)  
      
    
4.  Katalon Studio will also retrieve the information regarding the above **qTest test case** and display them in the **Integration** tab of the Katalon test case.
    
      
    Where:
    
    <table class="relative-table confluenceTable" style="width: 43.1518%;"><colgroup><col><col></colgroup><tbody><tr><th class="confluenceTh">Field</th><th class="confluenceTh">Description</th></tr><tr><td class="confluenceTd">Test Case ID</td><td class="confluenceTd">The ID of the integrated qTest test case.</td></tr><tr><td class="confluenceTd">Alias</td><td class="confluenceTd">The alias of the integrated qTest test case.</td></tr><tr><td class="confluenceTd">Parent ID</td><td class="confluenceTd"><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img class="confluence-embedded-image" width="500" src="../../images/katalon-studio/docs/integrate-test-case/image2017-8-9 16_27_25.png" data-image-src="/download/attachments/3178914/image2017-8-9%2016%3A27%3A25.png?version=1&amp;modificationDate=1504084817000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5116962" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-8-9 16:27:25.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="3178914" data-linked-resource-container-version="1"></span></p><p>The ID of the integrated qTest module.</p></div></td></tr></tbody></table>
    
      
    
5.  Click the **Navigate** button to quickly open the integrated **qTest test case** from Katalon Studio.  
      
    

### Upload test case folder

**Test cases folder** must be registered in [**Test Case Repositories**](https://docs.katalon.com/display/KD/qTest+Integration) before you can upload test cases to qTest.

1.  In the **Tests Explorer** view, right click on the test case folder to trigger its context menu. Select the **qTest > Upload** option.  
    ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-9 16_34_22.png)  
      
    
2.  Once the uploading process finished, you can verify by qTest icon at the bottom right of test case icon as shown below  
      
    ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-9 16_41_46.png)  
      
    Or you can go to qTest to verify that the **Katalon test cases** within the selected folder are uploaded to the integrated **qTest module**.  
      
    ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-9 16_45_32.png)

  

Download qTest test case
------------------------

1.  Select Test Design in qTest, move any **test cases** to be downloaded into the integrated **qTest module**. Refer to [Enable qTest Integration](/display/KD/Enable+qTest+Integration) for details about setting up an integrated qTest Module in Katalon Studio.  
      
    ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-5 16_48_50.png)  
      
    
2.  In Tests Explorer of Katalon Studio, right click on the **test case folder** which is integrated with **qTest module** above (Refer to [Enable qTest Integration](/display/KD/Enable+qTest+Integration) for more details).  
    Right Click > **qTest > Download** option from the context menu.  
      
    ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-5 16_51_18.png)  
      
    
3.  The **Downloaded test case preview** dialog is displayed. All test cases within the integrated **qTest module** that are available for download are listed. Click **OK** to continue.
    
      
    ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-5 16_52_29.png)
    
    **Test cases** that are already integrated will **not** be displayed again.
    
4.  Once the downloading process finished, you can view new integrated test cases in Tests Explorer of Katalon Studio.  
      
    ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-5 16_56_37.png)

Disintegrate test cases
-----------------------

Remove the connection between **Katalon test cases** and **qTest test cases**.

### Disintegrate a test case from qTest

1.  You have two methods to break the connection between a test case and qTest:  
      
    1.  Navigate to the **Integration** tab of the test case. Click on the **Disintegrate** button.  
        ![](../../images/katalon-studio/docs/integrate-test-case/image2016-11-18 16_45_57.png)  
          
        
    2.  In the Tests Explorer view, **Right click > qTest > Disintegrate**.  
          
        ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-5 16_59_5.png)  
          
        
2.  Click **OK** on the Confirmation dialog. The connection from this test case to qTest will be removed.  
      
    

### Disintegrate a test case folder from qTest

You can break the connection between a Katalon Studio test case folder (together with **all** its **test cases**) and qTest system by following the steps below:

1.  In the **Tests Explorer** view, right click on the test case folder. Select the **qTest > Disintegrate**.  
      
    ![](../../images/katalon-studio/docs/integrate-test-case/image2017-8-5 17_2_57.png)  
      
    
2.  Click **OK** on the Confirmation dialog. The connection from this folder (and all its test cases) to qTest will be removed.