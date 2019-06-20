---
title: "Katalium Server User Guide" 
sidebar: katalon_studio_docs_sidebar
permalink: katalium-server/docs/katalium-user-guide.html 
description: User guide for Katalium end-user.
---
> https://github.com/katalon-studio/katalium-server/releases

- Frontend
	- Prerequisite: nodejs
	- Root folder: /web
	- Install package: npm install
	- Build: npm run build
	- Move /web/build into src/main/resource/static

- Backend
	- Execute: mvn clean package
	- Make sure the `katalon-server.jar` file is generated under /target folder
	- In standalone mode. Then execute the below command under folder which contains `katalon-server.jar`
	
	```
	java -jar katalon-server
	```
	
	- In grid mode
		- Start server as a hub. Then execute the below command under folder which contains `katalon-server.jar`
		
		```
		java -jar katalon-server -role hub -servlets com.katalon.kata.servlet.ListSessionsServlet,com.katalon.kata.servlet.KatalonConsole,com.katalon.kata.servlet.ScreenShotsServlet,com.katalon.kata.servlet.ConfigSessionsServlet,com.katalon.kata.servlet.SessionServlet
		```

		![](../../images/katalium-server/docs/katalium-user-guide/1-katalium.png)

		- Start server as a node. Then execute the below command under folder which contains `katalon-server.jar`

		```
		java -jar katalon-server -role node -hub http://localhost:4444/grid/register -proxy com.katalon.kata.proxy.KatalonProxy
		```