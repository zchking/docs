---
title: "Call test case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/call-test-case.html 
description: 
---
Call Test Case in Manual view
-----------------------------

Follow the steps below in order to make a call to another test case in **Manual view**:

1.  Open a test case in **Manual** view, then select option to add **Call Test Case** from command toolbar.  
    ![](../../images/katalon-studio/docs/call-test-case/image2017-6-30 20_38_7.png)  
      
    
2.  The **Test Case Browser** dialog which shows all existing test cases within the project will be displayed. Select the test case to be called and click **OK**.  
    ![](../../images/katalon-studio/docs/call-test-case/image2017-2-9 10_2_56.png)  
      
    
3.  A **Call Test Case** step will be added with the selected test case above as its target.   
    ![](../../images/katalon-studio/docs/call-test-case/image2017-2-9 10_6_5.png)
    
    Once a test step is added as **Call Test Case**, it will not be allowed to change into another keyword.
    

Call Test Case in Scripting view
--------------------------------

In **Scripting view**, the _callTestCase_ method allows users to make a call to another test case. Refer to either of the following syntaxes:

```groovy
//call test case using WebUI Class
WebUI.callTestCase(findTestCase({Test Case ID}), [key1:value1, key2:value2, … , keyN:valueN], FailureHandling.option)
 
//call test case using Mobile Class
Mobile.callTestCase(findTestCase({Test Case ID}), [key1:value1, key2:value2, … , keyN:valueN], FailureHandling.option)
```

where:

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead><tr><th class="confluenceTh" style="">Items</th><th class="confluenceTh" style="">Description</th></tr></thead><tbody style=""><tr style=""><td class="confluenceTd" style="">{Test Case ID}</td><td class="confluenceTd" style=""><div class="content-wrapper" style=""><p style="">The&nbsp;<strong style="">ID</strong>&nbsp;of the test case to be called. You can find this info in test case properties.</p><p style="">For example:</p><p style=""><span class="confluence-embedded-file-wrapper" style=""><img class="confluence-embedded-image" src="../../images/katalon-studio/docs/call-test-case/image2017-2-24 14_16_26.png" data-image-src="/download/attachments/786602/image2017-2-24%2014%3A16%3A26.png?version=1&amp;modificationDate=1487920587000&amp;api=v2" data-unresolved-comment-count="0" data-linked-resource-id="5113100" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="image2017-2-24 14:16:26.png" data-base-url="https://docs.katalon.com" data-linked-resource-content-type="image/png" data-linked-resource-container-id="786602" data-linked-resource-container-version="1" style=""></span></p></div></td></tr><tr style=""><td class="confluenceTd" style=""><p style="">Parameters binding:</p><pre style=""><code class="language-groovy" style="">[key1:value1, key2:value2, … , keyN:valueN]</code></pre></td><td class="confluenceTd" style=""><p style=""><span style="">The&nbsp;<strong style="">list of input parameters</strong>&nbsp;for that test case if any, which consists of following details:</span></p><ul style=""><li style=""><em style="">Key(s)</em>: The <a href="https://docs.katalon.com/display/KD/Variable+Types#VariableTypes-Publicvariables" rel="nofollow" style="">public variables</a> defined within the called test case.</li><li style=""><em style="">Value</em>: the value to be used for the corresponding public variables.</li></ul></td></tr><tr style=""><td class="confluenceTd" style="">FailureHandling.option</td><td class="confluenceTd" style=""><p style="">The <em style="">failure handling</em> option for the current test step. This parameter is <strong style="">optional</strong>.</p></td></tr></tbody></table>

For example:

![](../../images/katalon-studio/docs/call-test-case/image2017-6-30 20_39_15.png)