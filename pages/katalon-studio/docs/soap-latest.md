---
title: "SOAP (latest)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/soap-latest.html 
description: 
---
1.  Select **File > New > Web Service Request** from the main menu. The **New Web Service Request** dialog will be displayed. Select 'SOAP' from Request Type list to create a new SOAP object.  
      
      
    
2.  A new service request object is created under **Object Repository** of Katalon Studio.  
      
      
    
3.  In the opened editor of the new service request object, enter all required information.  
      
    where:
    
    | 
    Field
    
     | 
    
    Description
    
     |
    | --- | --- |
    | Request Method | The request method indicates the expected action to be executed on the specified resource. Katalon Studio supports following SOAP methods: SOAP, SOAP 1.2, POST, GET. |
    | Request URL | The WSDL address registered for the SOAP web service. |
    | Service Function | 
    
    The function/method of the SOAP web service that you want to use in this SOAP request. The list will be retrieved after clicking **Load from WSDL**. 
    
    
    
     |
    | Authorization | 
    
    Credential for HTTP authentication.
    
    
    
     |
    | HTTP Headers | 
    
    The header information that you want to transmit in this SOAP request object.
    
    You can select headers from the list of suggested options (by double-clicking on the **Name** cell) or enter another header of your interest. Refer to Supported HTTP Headers for more details.
    
    
    
     |
    | Request Message | 
    
    The information that you want to transmit in this SOAP request object. You can enter directly or import content from external text files. 
    
    
    
     |
    | Response | 
    
    The retrieved message from web service server when you click **Test Request** button. You can view details information of the response including **Status**, **Elapsed Time**, **Size.**
    
    There are 2 viewing format: **pretty** or **raw**
    
     
    
    
    
     |
    
4.  Save the service request object when you're done. The service request defined here can be utilized in other test cases. Refer to Use Web Service in Test Case for more details.