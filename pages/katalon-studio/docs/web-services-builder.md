---
title: "Web Services Builder" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/web-services-builder.html 
description: 
---
Since Katalon Studio 5.4

**RestRequestObjectBuilder** class provides functions to create a RESTful object easily and quickly in scripting view. You can find details regarding to API docs specifications from this [page](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html).

| Type | Name and description |
| --- | --- |
| `[RequestObject](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RequestObject.html)` | `**[build](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#build())**()` |
| `[RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html)` | `**[withFileBodyContent](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withFileBodyContent(java.lang.String))**([String](http://download.oracle.com/javase/6/docs/api/java/lang/String.html "String") filePath)`  
Specify the binary body content |
| `[RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html)` | `**[withHttpHeaders](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withHttpHeaders(List%3CTestObjectProperty%3E))**([List](http://download.oracle.com/javase/6/docs/api/java/util/List.html "List")<[TestObjectProperty](https://api-docs.katalon.com/com/kms/katalon/core/testobject/TestObjectProperty.html "TestObjectProperty")> httpHeaderProperties)`  
Specify HTTP headers for the request object |
| `[RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html)` | `**[withMultipartFormDataBodyContent](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withMultipartFormDataBodyContent(List%3CFormDataBodyParameter%3E))**([List](http://download.oracle.com/javase/6/docs/api/java/util/List.html "List")<[FormDataBodyParameter](https://api-docs.katalon.com/com/kms/katalon/core/testobject/FormDataBodyParameter.html "FormDataBodyParameter")> parameters)`  
Specify the body content for multipart/form-data type, default charset UTF-8 |
| `[RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html)` | `**[withRestParameters](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withRestParameters(List%3CTestObjectProperty%3E))**([List](http://download.oracle.com/javase/6/docs/api/java/util/List.html "List")<[TestObjectProperty](https://api-docs.katalon.com/com/kms/katalon/core/testobject/TestObjectProperty.html "TestObjectProperty")> restParameters)`  
Specify the REST parameters for the request object |
| `[RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html)` | `**[withRestRequestMethod](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withRestRequestMethod(java.lang.String))**([String](http://download.oracle.com/javase/6/docs/api/java/lang/String.html "String") requestMethod)`  
Specify method for the request object |
| `[RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html)` | `**[withRestUrl](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withRestUrl(java.lang.String))**([String](http://download.oracle.com/javase/6/docs/api/java/lang/String.html "String") url)` |
| `[RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html)` | `**[withTextBodyContent](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withTextBodyContent(java.lang.String))**([String](http://download.oracle.com/javase/6/docs/api/java/lang/String.html "String") text)`  
Specify the text body content, default charset UTF-8 |
| `[RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html)` | `**[withTextBodyContent](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withTextBodyContent(java.lang.String,%20java.lang.String))**([String](http://download.oracle.com/javase/6/docs/api/java/lang/String.html "String") text, [String](http://download.oracle.com/javase/6/docs/api/java/lang/String.html "String") charset)`  
Specify the text body content |
| `[RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html)` | `**[withUrlEncodedBodyContent](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withUrlEncodedBodyContent(List%3CUrlEncodedBodyParameter%3E))**([List](http://download.oracle.com/javase/6/docs/api/java/util/List.html "List")<[UrlEncodedBodyParameter](https://api-docs.katalon.com/com/kms/katalon/core/testobject/UrlEncodedBodyParameter.html "UrlEncodedBodyParameter")> parameters)`  
Specify the body content that composes of a list of url-encoded pairs, default charset UTF-8 |
| `[RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html)` | `**[withUrlEncodedBodyContent](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withUrlEncodedBodyContent(List%3CUrlEncodedBodyParameter%3E,%20java.lang.String))**([List](http://download.oracle.com/javase/6/docs/api/java/util/List.html "List")<[UrlEncodedBodyParameter](https://api-docs.katalon.com/com/kms/katalon/core/testobject/UrlEncodedBodyParameter.html "UrlEncodedBodyParameter")> parameters, [String](http://download.oracle.com/javase/6/docs/api/java/lang/String.html "String") charset)`  
Specify the body content that composes of a list of url-encoded pairs |

  
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