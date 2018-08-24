---
title: "Version 5.1.0.2" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-5102.html 
redirect_from: "/display/KD/Version+5.1.0.2" 
description: 
---
*   Fix an issue where desired capabilities are not working on Chrome.
*   Fix 'NullPointerException' error from mobile execution.
*   Fix an issue where '[Execute from here...](https://docs.katalon.com/display/KD/Execute+test+from+specific+step)' feature is disabled.
*   Fix an issue where 'Workbench auto-save job' message is displayed when users leave Katalon Studio in an idle state for a while.
*   Support Appium 1.7. Due to this change, '[Swipe](https://docs.katalon.com/display/KD/%5BMobile%5D+Swipe)' keyword has been adjusted:
    
    <table><thead><tr><th>&nbsp;</th><th>Current</th><th>Changed</th></tr></thead><tbody><tr><th>Behavior</th><td>Swipe from (startx, startY) position to <strong>extract</strong> (endX,endY) position.<strong></strong></td><td>Swipe from (startX, startY) position to <strong>relative position</strong> of (startX, endY) position.<strong></strong></td></tr><tr><th>Example</th><td><span>Swipe from (100,200) position to (200,300) position</span></td><td><span>Swipe from (100,200) position to (200,300) position =&gt; (endX,endY) position in this case will be (startX + 100, endX + 100)</span></td></tr><tr><th>Script</th><td>Mobile.swipe(100, 200, 200, 300)</td><td><span>Mobile.swipe(100, 200, 100, 100)</span></td></tr></tbody></table>