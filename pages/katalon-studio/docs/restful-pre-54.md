---
title: "RESTful (Pre-5.4)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/restful-pre-54.html 
description: 
---
Create REST Object
------------------

1.  Select **File > New > Web Service Request** from the main menu. The **New Web Service Request** dialog will be displayed.  
      
    Provide the name for the new service request object, select **RESTful** as **Request Type** then click **OK**.  
      
    
2.  A new service request object is created under **Object Repository** of Katalon Studio.  
      
      
    
3.  In the opened editor of the new service request object, enter all required information.  
      
    where:
    
    | Field | Description |
    | --- | --- |
    | Request Method | The request method indicates the expected action to be executed on the specified resource. Katalon Studio supports following methods for REST services: GET, POST, PUT, DELETE. |
    | Request URL | The URL registered for the RESTful web service. |
    | Parameters | Any parameter that you want to pass along with this RESTful request object. |
    | 
    Authorization
    
    
    
     | 
    
    Credentials for HTTP authentication.  
    
    Type: **Basic, OAuth 1.0,** or **No Authorization**  
    
        
    
    
    
     |
    | HTTP Headers | 
    
    The header information that you want to transmit in this RESTful request object.
    
    You can select headers from the list of suggested options (by double clicking on the **Name** cell) or enter another header of your interest. Refer to Supported HTTP Headers for more details.
    
    
    
     |
    | HTTP Body | 
    
    The information that you want to transmit in this RESTful request object. You can enter directly or import content from external text files. 
    
    
    
     |
    | Response | 
    
    The retrieved message from web service server when you click **Test Request**.
    
    
    
     |
    
4.  Save the service request object when you're done. The service request defined here can be utilized in other test cases. Refer to Use WebService in Test Case for more details.