---
title: "Web Services Builder" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/web-services-builder.html 
redirect_from: "/display/KD/Web+Services+Builder" 
description: 
---
Since Katalon Studio 5.4

**RestRequestObjectBuilder** class provides functions to create a RESTful object easily and quickly in scripting view. You can find details regarding to API docs specifications from this [page](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html).

<table><thead><tr><th>Type</th><th>Name and description</th></tr></thead><tbody><tr><td><code><a>RequestObject</a></code></td><td><code><strong><a>build</a></strong>()</code></td></tr><tr><td><code><a>RestRequestObjectBuilder</a></code></td><td><code><strong><a>withFileBodyContent</a></strong>(<a>String</a>&nbsp;filePath)</code><br>Specify the binary body content</td></tr><tr><td><code><a>RestRequestObjectBuilder</a></code></td><td><code><strong><a>withHttpHeaders</a></strong>(<a>List</a>&lt;<a>TestObjectProperty</a>&gt; httpHeaderProperties)</code><br>Specify HTTP headers for the request object</td></tr><tr><td><code><a>RestRequestObjectBuilder</a></code></td><td><code><strong><a>withMultipartFormDataBodyContent</a></strong>(<a>List</a>&lt;<a>FormDataBodyParameter</a>&gt; parameters)</code><br>Specify the body content for multipart/form-data type, default charset UTF-8</td></tr><tr><td><code><a>RestRequestObjectBuilder</a></code></td><td><code><strong><a>withRestParameters</a></strong>(<a>List</a>&lt;<a>TestObjectProperty</a>&gt; restParameters)</code><br>Specify the REST parameters for the request object</td></tr><tr><td><code><a>RestRequestObjectBuilder</a></code></td><td><code><strong><a>withRestRequestMethod</a></strong>(<a>String</a>&nbsp;requestMethod)</code><br>Specify method for the request object</td></tr><tr><td><code><a>RestRequestObjectBuilder</a></code></td><td><code><strong><a>withRestUrl</a></strong>(<a>String</a>&nbsp;url)</code></td></tr><tr><td><code><a>RestRequestObjectBuilder</a></code></td><td><code><strong><a>withTextBodyContent</a></strong>(<a>String</a>&nbsp;text)</code><br>Specify the text body content, default charset UTF-8</td></tr><tr><td><code><a>RestRequestObjectBuilder</a></code></td><td><code><strong><a>withTextBodyContent</a></strong>(<a>String</a>&nbsp;text,&nbsp;<a>String</a>&nbsp;charset)</code><br>Specify the text body content</td></tr><tr><td><code><a>RestRequestObjectBuilder</a></code></td><td><code><strong><a>withUrlEncodedBodyContent</a></strong>(<a>List</a>&lt;<a>UrlEncodedBodyParameter</a>&gt; parameters)</code><br>Specify the body content that composes of a list of url-encoded pairs, default charset UTF-8</td></tr><tr><td><code><a>RestRequestObjectBuilder</a></code></td><td><code><strong><a>withUrlEncodedBodyContent</a></strong>(<a>List</a>&lt;<a>UrlEncodedBodyParameter</a>&gt; parameters,&nbsp;<a>String</a>&nbsp;charset)</code><br>Specify the body content that composes of a list of url-encoded pairs</td></tr></tbody></table>

  
Examples regard how to use them:

1.  **Create a 'GET' RESTful request:**
    
    ```groovy
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
    
    ```groovy
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