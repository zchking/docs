---
title: "[WebUI] Set Encrypted Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-set-encrypted-text.html 
description: 
---
Description
-----------

Set encrypted text into an input field. It also clears the previous value of the input field. To encrypt raw text, go to **Help > Encrypt Text**.

_Manual mode_

The pop-up dialog has been shown when calling keyword “**Set Encrypted Text**”. Input raw text and select insert.

**_Script Mode_**

Go to **Help > Encrypt Text**, input raw text to encrypt. Next, copy and paste encrypted text into the test scripts.

 Parameters
-----------

<table class="wrapped confluenceTable" style="table-layout: fixed;"><thead style=""><tr style=""><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Param</div></th><th class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Param Type</div></th><th colspan="1" class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Mandatory</div></th><th colspan="1" class="confluenceTh" style=""><div class="tablesorter-header-inner" style="">Description</div></th></tr></thead><tbody style=""><tr class="xtr-0" style=""><td class="xtd-0-0 confluenceTd" colspan="1" style=""><span style="">to&nbsp;</span></td><td class="xtd-0-1 confluenceTd" colspan="1" style=""><span style="">TestObject</span></td><td class="xtd-0-2 confluenceTd" colspan="1" style=""><span style="">Required</span></td><td class="xtd-0-3 confluenceTd" colspan="1" style=""><span style="">Represent a web element.</span></td></tr><tr class="xtr-1" style=""><td class="xtd-1-0 confluenceTd" style=""><span style="">text</span></td><td class="xtd-1-1 confluenceTd" style=""><span style="">String</span></td><td class="xtd-1-2 confluenceTd" colspan="1" style=""><span style=""><span style="">Required</span></span></td><td class="xtd-1-3 confluenceTd" colspan="1" style=""><span style=""><span style=""><span style="">The encrypted text.</span></span></span></td></tr><tr class="xtr-2" style=""><td class="xtd-2-0 confluenceTd" colspan="1" style=""><span style=""><span style="">flowControl</span></span></td><td class="xtd-2-1 confluenceTd" colspan="1" style=""><span style=""><span style="">FailureHandling</span></span></td><td class="xtd-2-2 confluenceTd" colspan="1" style=""><span style="">Optional</span></td><td class="xtd-2-3 confluenceTd" colspan="1" style=""><span style="">Spec</span><span style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" style="">failure handling</a><span style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example
-------

Set the encrypted text to txt_Password of a login form.

```groovy
'Open browser and navigate to AUT'
WebUI.openBrowser('http://demoaut.katalon.com/profile.php#login')

'Input username'
WebUI.setText(findTestObject('Page_Login/txt_UserName'), 'John Doe')

'Input password'
WebUI.setEncryptedText(findTestObject('Page_Login/txt_Password'), 'g3/DOGG74jC3Flrr3yH+3D/yKbOqqUNM')

'Click on "Login" button'
WebUI.click(findTestObject('Page_Login/btn_Login'))

'Close browser'
WebUI.closeBrowser()
```