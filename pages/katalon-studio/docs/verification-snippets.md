---
title: "Verification Snippets" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/verification-snippets.html 
redirect_from:
    - "/display/KD/Verification%20Snippets/"
    - "/x/EwjR/"
    - "/katalon-studio/docs/verification-snippets/"
description: 
---
Katalon Studio now supports the ability to write verification scripts directly in Web Service object's details. This support will greatly reduce the time of going back and forth between the test case and request object to add test scripts. Verify the response can be done instaneously.

Verification snippets can be accessed by clicking on the '**Verification**' tab within Web Service object's view.

![](../../images/katalon-studio/docs/verification-snippets/Screenshot_13.png)

Using Verification Snippets
---------------------------

When you click on one of the available snippets, Katalon Studio will generate a snippet for you. 

> The generated snippet is ONLY an example. DON'T try to use them immediately without adjustments matched your needs, otherwise it will not work.

Once the verification snippets are generated, you can use it in either in your current Web Service's object or in your Test Case

*   **_In Web Service's object_**: Click on drop-down button next to '**Play**' button in Web Service object's details and select 'Test Request and Verify'.   
    ![](../../images/katalon-studio/docs/verification-snippets/Untitled3.png)  
      
    It will send the current request and also execute verification snippets. Verification logs executed using verification snippets will be displayed on '**Verification Log**' tab. If you don't want to send a test request using current verification snippets, then just click on '**Play'** button.  
    ![](../../images/katalon-studio/docs/verification-snippets/Screenshot_14.png)
*   **_In test case_**:  Use '[Send Request and Verify](/display/KD/%5BWS%5D+Send+Request+And+Verify)' keyword. This will also send the current request and execute verification snippets. 
    
    ```groovy
    WS.sendRequestAndVerify(findTestObject('REST_CommentDetails'))
    ```
    
    Execution results will be displayed in '**Log Viewer**' tab.
    
    ![](../../images/katalon-studio/docs/verification-snippets/Untitled2.png)
    

List of Available Verification Snippets
---------------------------------------

On the right panel of 'Verification' tab is the list of common pre-built snippets which can assist you in most of the verification cases. 

<table><thead><tr><th>Snippet</th><th>Description</th></tr></thead><tbody><tr><td><p><strong>Get a variable</strong></p><p class="p1"><strong>def</strong> variables = request.getVariables()</p><p class="p1"><strong>def</strong>&nbsp;variable = variables.get('yourVariableName')</p></td><td>Return the value of a <a class="external-link" href="/pages/viewpage.action?pageId=13701134#ParameterizeaWebServiceObject(latest)-Variables(since5.7)" rel="nofollow">variable </a>that you've created in the Web Service Test Object.</td></tr><tr><td><p><strong>Get current response</strong></p><p>ResponseObject response = WSResponseManager.<em>getInstance</em>().getCurrentResponse()</p></td><td>Return response object after sending a request successfully.</td></tr><tr><td><p><strong><br></strong></p><p><strong>Get current request</strong></p><p class="p1">RequestObject request = WSResponseManager.<em>getInstance</em>().getCurrentRequest()</p></td><td>Return current request object after sending a request successfully.</td></tr><tr><td><p><strong><br></strong></p><p><strong>Get a global variable</strong></p><p class="p1">GlobalVariable.variable</p></td><td>Return a Global Variable's value.</td></tr><tr><td><p><strong><br></strong></p><p><strong>Response Body: Contains string</strong></p><p class="p1"><em>assertThat</em>(response.getResponseText()).contains("yourTextString")</p></td><td>Verify if response's body contains a specific string.</td></tr><tr><td><p><strong><br></strong></p><p><strong>Response Body: Convert to JSON Object</strong></p><p class="p1"><strong>def</strong> jsonSlurper = <strong>new</strong> JsonSlurper()</p><p class="p1"><strong>def</strong> jsonResponse = jsonSlurper.parseText(response.getResponseText())</p></td><td>Convert response's body to JSON.</td></tr><tr><td><p class="p1"><strong><br></strong></p><p class="p1"><strong>Response Body: is equal to a string</strong></p><p class="p1"><em>assertThat</em>(response.getResponseText()).isEqualTo("yourTextString")</p></td><td>Verify if the response's body equal to a specific string.</td></tr><tr><td><p><strong><br></strong></p><p><strong>Response Headers: Content-Type header</strong></p><p class="p1"><em>assertThat</em>(response.getHeaderFields().get('Content-Type').toString()).isEqualTo('[application/json;charset=UTF-8]')</p><p class="p1"><em>assertThat</em>(response.getHeaderFields().containsKey('Content-Type')).isTrue()</p></td><td>Verify Content-Type header's value.</td></tr><tr><td><p><strong><br></strong></p><p><strong>Status code: Code is 200</strong></p><p class="p1">WS.<em>verifyResponseStatusCode</em>(response, 200)</p><p class="p1"><em>assertThat</em>(response.getStatusCode()).isEqualTo(200)</p></td><td>Verify if response's status code is 200 or no.</td></tr><tr><td><p><strong><br></strong></p><p><strong>Status code: Successfully request</strong></p><p class="p1"><em>assertThat</em>(response.getStatusCode()).isIn(Arrays.<em>asList</em>(200, 201, 202))</p></td><td>Verify if the request is sent successfully.</td></tr><tr><td><p><strong><br></strong></p><p><strong>Response: Array contains</strong></p><p class="p1">String[] arrayResponse = ["why", "hello", "there"]</p><p class="p1">String[] arrayExpect = ["there", "why", "hello"]</p><p class="p2"><em>assertThat</em>(arrayResponse).containsOnly("there", "hello", "why")</p><p class="p2"><em>assertThat</em>(arrayResponse).containsOnlyElementsOf(Arrays.<em>asList</em>("why", "there", "hello"))</p><p class="p2">&nbsp;</p><p class="p2"><em>assertThat</em>(arrayResponse).containsExactly("why", "hello", "there")</p><p class="p2"><em>assertThat</em>(arrayResponse).containsExactlyElementsOf(Arrays.<em>asList</em>("why", "hello", "there"))&nbsp;</p><p class="p2">&nbsp;</p><p class="p2"><em>assertThat</em>(arrayResponse).containsSequence("why", "hello")</p><p class="p2"><em>assertThat</em>(arrayResponse).containsSubsequence("why", "there")</p><p class="p2"><em>assertThat</em>(arrayResponse).containsAnyOf("why", "nothing", "new")</p><p class="p3">&nbsp;</p><p class="p2"><em>assertThat</em>(arrayResponse).contains("hello", <em>atIndex</em>(1))</p></td><td>Verify specified arrays contain values.</td></tr></tbody></table>