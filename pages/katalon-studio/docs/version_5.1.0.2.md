---
title: "Version 5.1.0.2" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/version_5.1.0.2.html 
description: 
---
*   Fix an issue where desired capabilities are not working on Chrome.
*   Fix 'NullPointerException' error from mobile execution.
*   Fix an issue where '[Execute from here...](https://docs.katalon.com/display/KD/Execute+test+from+specific+step)' feature is disabled.
*   Fix an issue where 'Workbench auto-save job' message is displayed when users leave Katalon Studio in an idle state for a while.
*   Support Appium 1.7. Due to this change, '[Swipe](https://docs.katalon.com/display/KD/%5BMobile%5D+Swipe)' keyword has been adjusted:
    
    <table class="wrapped relative-table confluenceTable" style="width: 100.0%;"><colgroup><col style="width: 7.66823%;"><col style="width: 35.133%;"><col style="width: 57.1987%;"></colgroup><tbody><tr class="xtr-0"><th class="xtd-0-0 confluenceTh" colspan="1">&nbsp;</th><th class="xtd-0-1 confluenceTh" style="text-align: center;">Current</th><th class="xtd-0-2 confluenceTh" style="text-align: center;">Changed</th></tr><tr class="xtr-1"><th class="xtd-1-0 confluenceTh" colspan="1">Behavior</th><td class="xtd-1-1 confluenceTd">Swipe from (startx, startY) position to <strong>extract</strong> (endX,endY) position.<strong></strong></td><td class="xtd-1-2 confluenceTd">Swipe from (startX, startY) position to <strong>relative position</strong> of (startX, endY) position.<strong></strong></td></tr><tr class="xtr-2"><th class="xtd-2-0 confluenceTh" colspan="1">Example</th><td class="xtd-2-1 confluenceTd" colspan="1"><span>Swipe from (100,200) position to (200,300) position</span></td><td class="xtd-2-2 confluenceTd" colspan="1"><span>Swipe from (100,200) position to (200,300) position =&gt; (endX,endY) position in this case will be (startX + 100, endX + 100)</span></td></tr><tr class="xtr-3"><th class="xtd-3-0 confluenceTh" colspan="1">Script</th><td class="xtd-3-1 confluenceTd" colspan="1">Mobile.swipe(100, 200, 200, 300)</td><td class="xtd-3-2 confluenceTd" colspan="1"><span>Mobile.swipe(100, 200, 100, 100)</span></td></tr></tbody></table>