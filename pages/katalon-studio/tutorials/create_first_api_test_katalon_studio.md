---
title: "Create your first API test with Katalon Studio"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/create_first_api_test_katalon_studio.html
description: "API testing has become more important. This tutorial will demonstrate how to use Katalon Studio to create your first API test from scratch."
---
[](#)

**API testing** (or Web service testing in the context of a Web application) has become more important in software testing. The interest in API testing has been increasing over the last five years, according to [Google Trends](https://trends.google.com/trends/explore?date=today%205-y&q=api%20testing). This trend possibly indicates that the demand for applying API testing has become more prevalent. Testing API or web services is no longer performed solely by the original developer. This activity is now a common practice among outsourcing teams who independently verify and validate their products.

This tutorial will demonstrate how to use Katalon Studio to create your first API/Web service test from scratch with good practices. Before proceeding with API Testing, there are some basic terms about API testing object in Katalon Studio that we need to understand clearly.

![api test object katalon studio](../../images/katalon-studio/tutorials/create_first_api_test_katalon_studio/API-testing-object-in-Katalon-Studio.png)

### Test Case (or Test Scenario)

This is one of the most important concepts in Katalon Studio project structure. **Test Cases** list all the stored test cases by the user. Normally, a test case contains a list of steps demonstrating a test scenario.

### Object Repository

**Object Repository** is a place where all the Test Objects are stored. In UI testing, Test Objects are web elements with specified locators which Web Driver uses to locate the web element during test execution. In API/Web service testing, Test Objects (or Web Service Requests) are functions with URL (end-point) and other information such as methods, authorization, body, parameters, etc. which are utilized by rest-client when the test is executing to send the request to API/Web servers.

### Request

In API/Web service testing, a **request** contains all the necessary information that will be sent to the Web server. In a request, URL and method are required information, while authorization, body, and parameters are optional and dependent on the request type.

In Katalon Studio, a request is stored at Object Repository and can be called from a test step of any test cases.

### Response

A **response** is the data returned from Web server where a request is sent to. A typical response contains headers, body content and a code segment indicating the status of the request.

In Katalon Studio, a response is stored either in the Object Repository (at request level) or a test step of any test cases. Currently, the response can be verified at each individual test case.

How to create a Web service (RESTful) test case from scratch using Katalon Studio?
----------------------------------------------------------------------------------

### **Step 1: Create a new Web Service Request**

Right-click on the Object Repository, select Web Service Request under New sub-menu to open new Web Service Request dialog.

![Web-Service-Request-katalon-studio](../../images/katalon-studio/tutorials/create_first_api_test_katalon_studio/Web-Service-Request.png)

_Figure 1: Web Service Request access menu_

Input information into the new **Web Service Request** dialog

![New Web Service Request dialog](../../images/katalon-studio/tutorials/create_first_api_test_katalon_studio/Web-Service-Request-dialog.png)

_Figure 2: New Web Service Request dialog_

**Name:**

This is a free string to specify the name of created Web Service Request. There is no special naming rule in this field. As a good practice, it is highly suggested that the request’s name is readable and briefly describes the request’s purpose.

**Request Type:**

This provides important information about a request. In Katalon Studio, a Web Service Request can be either [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) or [SOAP](https://simple.wikipedia.org/wiki/SOAP_(protocol)). Since RESTful is becoming more and more popular, it is selected by default in the dialog.

**URL:**

This is the end-point of the created Web Service Request.

**Description:**

If needed, more information about the request can be specified in this area.

Once all the information is specified, the new Web Service Request will be created after the OK button is clicked.

![new Web Service Request](../../images/katalon-studio/tutorials/create_first_api_test_katalon_studio/New-WS-Request-is-created-in-the-Tests-Explorer1.png)

_Figure 3: New WS Request is created in the Tests Explorer_

### **Step 2: Specify the WS Request’s settings**

![Web service object information](../../images/katalon-studio/tutorials/create_first_api_test_katalon_studio/Web-service-object-information.png)

_Figure 4: Web service object information_

(1) The Web service request item created with the specified name

(2) The request’s method. If the request type is RESTful, one of following methods can be selected: GET, PUT, POST, DELETE. The request type depends on the Web service provider.

(3) The request’s URL. It can be updated any time after the request is created.

(4) The Authorization setting, which is used to connect to web server. Basic, OAuth 1.0 are the two most common types of authorization method.

a. Basic method

*   Specify the valid username and password
*   Click “Update to HTTP Header” to apply the authorization configuration.

b. OAuth 1.0 method

*   Specify all configuration in the form
*   Click “Update to HTTP Header” to apply the authorization configuration.

(5) HTTP Header configuration.

(6) Folder structure to organize the end-points. The application under test often has hundreds of services, so having a good organization is very important. In Katalon Studio, it is highly suggested that Web services should be grouped by path, function, and method by using folder structure.

### **Step 3: Smoke test the Web service**

Before adding actual verification steps to test the service, Katalon Studio supports testing on-the-fly method: send the request and perform quick verification of the response.

![Web service’s response information](../../images/katalon-studio/tutorials/create_first_api_test_katalon_studio/Web-service%E2%80%99s-response-information.png)

_Figure 5: Web service’s response information_

(1) Click to send the request to the Web server

(2) The response code of the request. The code reflects the status of the request. Learn more about the [response code](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).

(3) Elapsed time demonstrates how much time Katalon Studio takes to get the response from the web server.

(4) The size of the response’s data.

(5) Response data.

(6) Based on the response data format, Katalon Studio will automatically choose the pretty mode to display the data in correct format. Currently, it supports JSON, XML, HTML, JavaScript data types.

### **Step 4: Create test scenario for the Web service**

The first 3 steps demonstrate how to create Web service end-point at Object Repository. This step will guide you through creating an actual test scenario for it.

![Adding ‘Web Service Keyword” step](../../images/katalon-studio/tutorials/create_first_api_test_katalon_studio/Adding-%E2%80%98Web-Service-Keyword%E2%80%9D-step.png)

_Figure 6: Adding ‘Web Service Keyword” step_

(1) Create a test case with a readable name. It is highly recommended that the test case name briefly describes the test scenario.

(2) From the Test case editor, select ‘Add -> Web Service Keyword’ to add a new step.

![Adding “Send request” keyword](../../images/katalon-studio/tutorials/create_first_api_test_katalon_studio/Adding-%E2%80%9CSend-request%E2%80%9D-keyword.png)

_Figure 7: Adding “Send request” keyword_

(1) In the Item drop-down list, select “Send Request” keyword

(2) Click on Object cell in the same row to open “Test Object input” dialog

(3) Select “Test Object” from “Object Type” list

(4) Select the “Web Service Request” we’ve created from step 2

### **Step 5: Add verification steps**

This step will guide you how to add verification steps into the Test Case.

![Verification steps katalon studio](../../images/katalon-studio/tutorials/create_first_api_test_katalon_studio/Verification-steps.png)

_Figure 8: Verification steps_

(1) Web Service Request is added to the test case from the previous step.

(2) In order to verify the content that the request return, we need to specify the output of the request. Just simply enter the ‘Output’ with the variable name we want to use later.

(3) Step 2 and step 3 of the test case are for verification. They are added in a similar way to “Send Request” step. Step 2 verifies the response code (200 if the request is sent successfully)

(4) Verify the response code is 200

(5) Verify the response content with the json-path and expected value

### **Step 6: Execute the Test case**

Executing an API Test case is exactly the same as executing a UI functional Test case. However, in API Testing, there is no browser used.

**Notes:**

Source code: [https://github.com/katalon-studio-samples/jira-ui-tests](https://github.com/katalon-studio-samples/jira-ui-tests)

Project: Jira API

**CONGRATULATION! YOU HAVE SUCCESSFULLY CREATE A SIMPLE API TESTING FROM SCRATCH WITH 6 SIMPLE STEPS.**

[](#modal-id-popup)