---
title: "Version 5.1.0.2" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version-5102.html 
description: 
---
*   Fix an issue where desired capabilities are not working on Chrome.
*   Fix 'NullPointerException' error from mobile execution.
*   Fix an issue where '[Execute from here...](https://docs.katalon.com/display/KD/Execute+test+from+specific+step)' feature is disabled.
*   Fix an issue where 'Workbench auto-save job' message is displayed when users leave Katalon Studio in an idle state for a while.
*   Support Appium 1.7. Due to this change, '[Swipe](https://docs.katalon.com/display/KD/%5BMobile%5D+Swipe)' keyword has been adjusted:
    
    <table class="" style="table-layout: fixed;"><colgroup class="" style=""><col style="" class=""><col style="" class=""><col style="" class=""></colgroup><tbody class="" style=""><tr class="" style=""><th class="" colspan="1" style="">&nbsp;</th><th class="" style="">Current</th><th class="" style="">Changed</th></tr><tr class="" style=""><th class="" colspan="1" style="">Behavior</th><td class="" style="">Swipe from (startx, startY) position to <strong class="" style="">extract</strong> (endX,endY) position.<strong class="" style=""></strong></td><td class="" style="">Swipe from (startX, startY) position to <strong class="" style="">relative position</strong> of (startX, endY) position.<strong class="" style=""></strong></td></tr><tr class="" style=""><th class="" colspan="1" style="">Example</th><td class="" colspan="1" style=""><span class="" style="">Swipe from (100,200) position to (200,300) position</span></td><td class="" colspan="1" style=""><span class="" style="">Swipe from (100,200) position to (200,300) position =&gt; (endX,endY) position in this case will be (startX + 100, endX + 100)</span></td></tr><tr class="" style=""><th class="" colspan="1" style="">Script</th><td class="" colspan="1" style="">Mobile.swipe(100, 200, 200, 300)</td><td class="" colspan="1" style=""><span class="" style="">Mobile.swipe(100, 200, 100, 100)</span></td></tr></tbody></table>