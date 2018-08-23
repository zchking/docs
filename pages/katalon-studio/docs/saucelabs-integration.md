---
title: "SauceLabs Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/saucelabs-integration.html 
description: 
---
To integrate with Saucelabs, you need to execute your test scripts using ‘Remote‘ option based on SauceLabs provided capabilities of your choices. Below are steps on how to get your desire SauceLabs capabilities.

1.  Login to SauceLabs.
2.  Navigate to ‘Account’ page after logged in and note/copy your ‘Access Key’value  
      
    

3. Go to ‘Platform Configurator‘ page. Select the settings you want and SauceLabs will generate capabilities for you

4.In Katalon Studio, open ‘Remote’ settings and pass SauceLabs settings from step #2 and #3 with some adjustments:

*   Remote Web Server URL: `"https://``USERNAME:ACCESS_KEY``@ondemand.saucelabs.com:443/wd/hub", `e.g: `https://toi5``:a4r6trgfd87gdsadfdss``@ondemand.saucelabs.com:443/wd/hub`
*   Other settings are gotten from step #3.

5\. The final step will be selecting ‘**Remote**’ item for execution.