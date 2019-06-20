---
title: "Contributing Guidelines" 
sidebar: katalon_studio_docs_sidebar
permalink: katalium-server/docs/katalium-contributing.html 
description: User guide for Katalium developer.
---
- Frontend
	- Root folder: /web
	- Install package: npm install
	- Start frontend server: npm run start
	- Default http port: 3000

- Backend
	- Import as Maven project into IntelliJ IDEA or Eclipse 
	- In standalone mode
		- Start server as a Java application with entry class `KatalonServer`
		- Default http port: 4444
 	- In grid mode
		- Start server as a hub with entry class `KatalonServer` and below arguments
		
		```
		-role hub -servlets com.katalon.kata.servlet.ListSessionsServlet,com.katalon.kata.servlet.KatalonConsole,com.katalon.kata.servlet.ScreenShotsServlet,com.katalon.kata.servlet.ConfigSessionsServlet,com.katalon.kata.servlet.SessionServlet
		```

		- Start server as a node with entry class `KatalonServer` and below arguments
		
		```
		-role node -hub http://localhost:4444/grid/register -proxy com.katalon.kata.proxy.KatalonProxy
		```