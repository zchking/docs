---
title: "使用Katalon Studio手动创建REST API请求"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/create_rest_api_requests_manually.html
description: "Katalon Studio offers a great UI support for creating REST API requests. This tutorial will be about show you how to make your code robust and effective."
---

介绍
------------

Katalon为创建REST API请求提供了出色的UI支持，可以参考上一篇（使用Katalon Studio创建你的第一个API测试）。如果你已经是Katalon老手，通过Katalon为API测试提供的强大的方法库，则完全可以自行手动创建。本教程将介绍如何手动创建REST API请求并处理响应，以使你的代码更加健壮有效。

### 要求

熟悉Katalon Studio，并了解Java / Groovy的基础知识。

RequestObject和ResponseObject
--------------------------------

这是处理API请求的两个主要类。我相信你已经发现了，RequestObject类代表一个API请求，WSBuiltInKeywords.sendRequest方法返回ResponseObject。
现在让我们创建一个REST API请求作为示例（当然，你可以对SOAP API请求执行相同的操作）。首先需要获得请求的信息，包括

*   URL
*   Request method (GET, POST, PUT, DELETE, …)
*   Request headers (Authorization, Content-Type, …)
*   Request body (for POST request)
*   REST request parameters

接下来，使用以下任一方法从RequestObject创建对象：
*	直接创建一个RequestObject实例，并使用setRestUrl()和setRestRequestMethod()等方法设置其信息。
*	使用RestRequestObjectBuilder，这是Katalon Studio 5.4及更高版本提供的非常有用的类。


```groovy
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.RestRequestObjectBuilder
import com.kms.katalon.core.testobject.TestObjectProperty
import com.kms.katalon.core.testobject.impl.HttpTextBodyContent
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
 
public class SampleRequestObject {
 
String endpoint = "https://www.katalon.com"
String requestMethod = "GET"
String authHeader = "whateverYouNeedForAuthentication"
 
TestObjectProperty header1 = new TestObjectProperty("Authorization", ConditionType.EQUALS, authHeader)
TestObjectProperty header2 = new TestObjectProperty("Content-Type", ConditionType.EQUALS, "application/json")
TestObjectProperty header3 = new TestObjectProperty("Accept", ConditionType.EQUALS, "application/json")
ArrayList defaultHeaders = Arrays.asList(header1, header2, header3)
 
/**
* GET requests
* @return
*/
public ResponseObject buildApiRequest1() {
RequestObject ro = new RequestObject("objectId")
ro.setRestUrl(endpoint)
ro.setHttpHeaderProperties(defaultHeaders)
ro.setRestRequestMethod(requestMethod)
 
ResponseObject respObj = WS.sendRequest(ro)
return respObj
}
 
public ResponseObject buildApiRequest2() {
RequestObject ro = new RestRequestObjectBuilder()
.withRestUrl(endpoint)
.withHttpHeaders(defaultHeaders)
.withRestRequestMethod(requestMethod)
.build()
 
ResponseObject respObj = WS.sendRequest(ro)
return respObj
}
}

```

以上源码中包括两种不同的创建请求的方法。它们都返回一个ResponseObject对象。使用RestRequestObjectBuilder创建RequestObject实例时，可以调用withXXX()和build()方法。
RestRequestObjectBuilder的一个好处是它有额外的方法允许直接为POST请求设置不同的Content-Type，例如FileBodyContent和MultipartFormBodyContent。也可以使用RequestObject，但使用RestRequestObjectBuilder更直接。

有关这些类的方法的更多详细信息，请访问Katalon API文档网站上的 [RequestObject](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RequestObject.html) 和 [RestRequestObjectBuilder](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html)

请注意，如果要使用HTTP headers，可以创建新的TestObjectProperty实例，如代码段所示。
创建POST请求与GET请求基本相同，但您必须使用RequestObject中的setBodyContent或RestRequestObjectBuilder中的withTextBodyContent 指定请求的body。


```groovy
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.RestRequestObjectBuilder
import com.kms.katalon.core.testobject.TestObjectProperty
import com.kms.katalon.core.testobject.impl.HttpTextBodyContent
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
 
public class SampleRequestObject {
 
String endpoint = "https://www.katalon.com"
String requestMethod = "POST"
String authHeader = "whateverYouNeedForAuthentication"
 
TestObjectProperty header1 = new TestObjectProperty("Authorization", ConditionType.EQUALS, authHeader)
TestObjectProperty header2 = new TestObjectProperty("Content-Type", ConditionType.EQUALS, "application/json")
TestObjectProperty header3 = new TestObjectProperty("Accept", ConditionType.EQUALS, "application/json")
ArrayList defaultHeaders = Arrays.asList(header1, header2, header3)
 
String body = '{"dummyRequest":"yes"}'
 
/**
* POST requests
* @return
*/
public ResponseObject buildPostApiRequest1() {
RequestObject ro = new RequestObject("objectId")
ro.setRestUrl(endpoint)
ro.setHttpHeaderProperties(defaultHeaders)
ro.setRestRequestMethod("POST")
ro.setBodyContent(new HttpTextBodyContent(body))
 
ResponseObject respObj = WS.sendRequest(ro)
return respObj
}
 
public ResponseObject buildPostApiRequest2() {
RequestObject ro = new RestRequestObjectBuilder()
.withRestUrl(endpoint)
.withHttpHeaders(defaultHeaders)
.withRestRequestMethod("POST")
.withTextBodyContent(body)
.build()
 
ResponseObject respObj = WS.sendRequest(ro)
return respObj
}
}

```

关于不同的Content-Type，例如file、form等，请参阅 [RestRequestObjectBuilder API documentation](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html).

ResponseObject
--------------

接上，我们在发送API请求时获得了一个ResponseObject实例。此对象包含响应的所有信息，包括status code, response body, response headers, waiting time和许多其他信息。处理响应对象的方法如下所示：

```groovy
import com.kms.katalon.core.testobject.ResponseObject
 
public class SampleResponseObject {
 
public static int getStatusCode(ResponseObject resp) {
return resp.getStatusCode()
}
public static String getResponseText(ResponseObject resp) {
return resp.getResponseText()
}
public static long getResponseBodySize(ResponseObject resp) {
return resp.getResponseBodySize()
}
public static long getResponseHeaderSize(ResponseObject resp) {
return resp.getResponseHeaderSize()
}
public static long getWaitingTime(ResponseObject resp) {
return resp.getWaitingTime()
}
}

```

测试用例中的示例用法：

```groovy
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.util.KeywordUtil
 
import mypackage.SampleRequestObject
import mypackage.SampleResponseObject as SampleResponseObject
 
SampleRequestObject req = new SampleRequestObject()
 
ResponseObject resp = req.buildApiRequest1()
 
if(SampleResponseObject.getStatusCode(resp) != 200) {
KeywordUtil.markFailed("Status code is not 200 as expected. It is "
+ SampleResponseObject.getStatusCode(resp))
}
 
if(SampleResponseObject.getWaitingTime(resp) > 5000) {
KeywordUtil.markFailed("Your request takes more than 5000ms. Actual time is "
+ SampleResponseObject.getWaitingTime(resp))
}

```

你可能想知道为什么需要SampleResponseObject类，因为我可以通过调用ResponseObject中的方法直接获取所有信息。这样封装可能对您将来的增强功能有所帮助，因为您的代码不会那么依赖于ResponseObject类。如果ResponseObject有更改，则只需更新这个封装类。当然，直接使用ResponseObject还是自行封装，看你的使用习惯自行选择。

### 结论

本教程重点介绍了Katalon中REST API请求的高级用法。比起手动模式点击测试，我更喜欢编写代码，因此本教程可能对类似的自动化工程师有所帮助。

RequestObject和ResponseObject是强大的类，可以帮助你详细定制API测试。

原文作者
Marek Melocik，目前在捷克共和国布尔诺担任测试自动化工程师。自2014年以来，他一直从事QA工作。

[![Rest API Request Katalon Studio](../../images/katalon-studio/tutorials/create_rest_api_requests_manually/api-testing-interview-question-1024x101.png)](https://www.katalon.com/download)

**Read more:**

*   [Top 5 Free API Testing Tools (New & Updated Tools)](/katalon-studio/blog/top-5-free-api-testing-tools/)
*   [Create your first API test with Katalon Studio](/katalon-studio/tutorials/create-first-api-test-katalon-studio/)
*   [Top 50+ Web API Testing Interview Questions](/katalon-studio/blog/web-api-testing-interview-questions/)
