---
title: "Web Services Builder" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/web-services-builder.html 
description: 
---
Since Katalon Studio 5.4

**RestRequestObjectBuilder** class provides functions to create a RESTful object easily and quickly in scripting view. You can find details regarding to API docs specifications from this [page](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html).

<table class="" style="table-layout: fixed;"><colgroup class="" style=""><col class="" style=""><col class="" style=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" style="">Type</th><th class="" style="">Name and description</th></tr><tr class="" style=""><td class="" style=""><code class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RequestObject.html" rel="nofollow" style="">RequestObject</a></code></td><td class="" style=""><code class="" style=""><strong class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#build()" rel="nofollow" style="">build</a></strong>()</code></td></tr><tr class="" style=""><td class="" style=""><code class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow" style="">RestRequestObjectBuilder</a></code></td><td class="" style=""><code class="" style=""><strong class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withFileBodyContent(java.lang.String)" rel="nofollow" style="">withFileBodyContent</a></strong>(<a class="" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String" style="">String</a>&nbsp;filePath)</code><br class="" style="">Specify the binary body content</td></tr><tr class="" style=""><td class="" style=""><code class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow" style="">RestRequestObjectBuilder</a></code></td><td class="" style=""><code class="" style=""><strong class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withHttpHeaders(List%3CTestObjectProperty%3E)" rel="nofollow" style="">withHttpHeaders</a></strong>(<a class="" href="http://download.oracle.com/javase/6/docs/api/java/util/List.html" rel="nofollow" title="List" style="">List</a>&lt;<a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/TestObjectProperty.html" rel="nofollow" title="TestObjectProperty" style="">TestObjectProperty</a>&gt; httpHeaderProperties)</code><br class="" style="">Specify HTTP headers for the request object</td></tr><tr class="" style=""><td class="" style=""><code class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow" style="">RestRequestObjectBuilder</a></code></td><td class="" style=""><code class="" style=""><strong class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withMultipartFormDataBodyContent(List%3CFormDataBodyParameter%3E)" rel="nofollow" style="">withMultipartFormDataBodyContent</a></strong>(<a class="" href="http://download.oracle.com/javase/6/docs/api/java/util/List.html" rel="nofollow" title="List" style="">List</a>&lt;<a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/FormDataBodyParameter.html" rel="nofollow" title="FormDataBodyParameter" style="">FormDataBodyParameter</a>&gt; parameters)</code><br class="" style="">Specify the body content for multipart/form-data type, default charset UTF-8</td></tr><tr class="" style=""><td class="" style=""><code class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow" style="">RestRequestObjectBuilder</a></code></td><td class="" style=""><code class="" style=""><strong class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withRestParameters(List%3CTestObjectProperty%3E)" rel="nofollow" style="">withRestParameters</a></strong>(<a class="" href="http://download.oracle.com/javase/6/docs/api/java/util/List.html" rel="nofollow" title="List" style="">List</a>&lt;<a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/TestObjectProperty.html" rel="nofollow" title="TestObjectProperty" style="">TestObjectProperty</a>&gt; restParameters)</code><br class="" style="">Specify the REST parameters for the request object</td></tr><tr class="" style=""><td class="" style=""><code class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow" style="">RestRequestObjectBuilder</a></code></td><td class="" style=""><code class="" style=""><strong class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withRestRequestMethod(java.lang.String)" rel="nofollow" style="">withRestRequestMethod</a></strong>(<a class="" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String" style="">String</a>&nbsp;requestMethod)</code><br class="" style="">Specify method for the request object</td></tr><tr class="" style=""><td class="" style=""><code class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow" style="">RestRequestObjectBuilder</a></code></td><td class="" style=""><code class="" style=""><strong class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withRestUrl(java.lang.String)" rel="nofollow" style="">withRestUrl</a></strong>(<a class="" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String" style="">String</a>&nbsp;url)</code></td></tr><tr class="" style=""><td class="" style=""><code class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow" style="">RestRequestObjectBuilder</a></code></td><td class="" style=""><code class="" style=""><strong class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withTextBodyContent(java.lang.String)" rel="nofollow" style="">withTextBodyContent</a></strong>(<a class="" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String" style="">String</a>&nbsp;text)</code><br class="" style="">Specify the text body content, default charset UTF-8</td></tr><tr class="" style=""><td class="" style=""><code class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow" style="">RestRequestObjectBuilder</a></code></td><td class="" style=""><code class="" style=""><strong class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withTextBodyContent(java.lang.String,%20java.lang.String)" rel="nofollow" style="">withTextBodyContent</a></strong>(<a class="" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String" style="">String</a>&nbsp;text,&nbsp;<a class="" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String" style="">String</a>&nbsp;charset)</code><br class="" style="">Specify the text body content</td></tr><tr class="" style=""><td class="" style=""><code class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow" style="">RestRequestObjectBuilder</a></code></td><td class="" style=""><code class="" style=""><strong class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withUrlEncodedBodyContent(List%3CUrlEncodedBodyParameter%3E)" rel="nofollow" style="">withUrlEncodedBodyContent</a></strong>(<a class="" href="http://download.oracle.com/javase/6/docs/api/java/util/List.html" rel="nofollow" title="List" style="">List</a>&lt;<a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/UrlEncodedBodyParameter.html" rel="nofollow" title="UrlEncodedBodyParameter" style="">UrlEncodedBodyParameter</a>&gt; parameters)</code><br class="" style="">Specify the body content that composes of a list of url-encoded pairs, default charset UTF-8</td></tr><tr class="" style=""><td class="" style=""><code class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow" style="">RestRequestObjectBuilder</a></code></td><td class="" style=""><code class="" style=""><strong class="" style=""><a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withUrlEncodedBodyContent(List%3CUrlEncodedBodyParameter%3E,%20java.lang.String)" rel="nofollow" style="">withUrlEncodedBodyContent</a></strong>(<a class="" href="http://download.oracle.com/javase/6/docs/api/java/util/List.html" rel="nofollow" title="List" style="">List</a>&lt;<a class="" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/UrlEncodedBodyParameter.html" rel="nofollow" title="UrlEncodedBodyParameter" style="">UrlEncodedBodyParameter</a>&gt; parameters,&nbsp;<a class="" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String" style="">String</a>&nbsp;charset)</code><br class="" style="">Specify the body content that composes of a list of url-encoded pairs</td></tr></tbody></table>

  
Examples regard how to use them:

1.  **Create a 'GET' RESTful request:**
    
    ```
    import com.kms.katalon.core.testobject.ConditionType as ConditionType
    import com.kms.katalon.core.testobject.RestRequestObjectBuilder
    import com.kms.katalon.core.testobject.TestObjectProperty as TestObjectProperty
    import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
    
    'Create a new GET object using builder'
    def builder = new RestRequestObjectBuilder()
    def requestObject = builder
    	.withRestRequestMethod("GET")
    	.withRestUrl("http://jsonplaceholder.typicode.com/comments")
    	.withRestParameters([
    		new TestObjectProperty("postId", ConditionType.EQUALS, "1"),
    		new TestObjectProperty("id", ConditionType.EQUALS, "1")
    	])
    	.withHttpHeaders([
    		new TestObjectProperty("Content-Type", ConditionType.EQUALS, "application/json")
    	])
    	.build()
    'Send a request'
    def response = WS.sendRequest(requestObject)
    
    'Verify if comment\'s email after sending request is correct or not'
    WS.verifyElementPropertyValue(response, '[0].email', 'Eliseo@gardner.biz')
    
    
    ```
    
2.  **Create a 'POST' RESTful request:**
    
    ```
    import com.kms.katalon.core.testobject.ConditionType as ConditionType
    import com.kms.katalon.core.testobject.RestRequestObjectBuilder
    import com.kms.katalon.core.testobject.TestObjectProperty as TestObjectProperty
    import com.kms.katalon.core.testobject.UrlEncodedBodyParameter
    import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
     
    def builder = new RestRequestObjectBuilder()
      
    'Create a new POST object using builder'
    def requestObject = builder
        .withRestRequestMethod("POST")
        .withRestUrl("https://sample-web-service-aut.herokuapp.com/api/users/urlencoded")
        .withHttpHeaders([
            new TestObjectProperty("Content-Type", ConditionType.EQUALS, "application/x-www-form-urlencoded")
        ])
        .withUrlEncodedBodyContent([
            new UrlEncodedBodyParameter("username", "myUsername"),
            new UrlEncodedBodyParameter("password", "myPassword"),
            new UrlEncodedBodyParameter("gender", "MALE"),
            new UrlEncodedBodyParameter("age", "20"),
    		new UrlEncodedBodyParameter("avatar", "AAA"),
        ])
        .build()
         
    def response = WS.sendRequest(requestObject)
      
    assert response.getStatusCode() == 200
    ```