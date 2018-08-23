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

<table class="" style="table-layout: fixed;"><thead class="" style=""><tr class="" style=""><th class="" style=""><div class="" style="">Param</div></th><th class="" style=""><div class="" style="">Param Type</div></th><th colspan="1" class="" style=""><div class="" style="">Mandatory</div></th><th colspan="1" class="" style=""><div class="" style="">Description</div></th></tr></thead><tbody class="" style=""><tr class="" style=""><td class="" colspan="1" style=""><span style="" class="">to&nbsp;</span></td><td class="" colspan="1" style=""><span style="" class="">TestObject</span></td><td class="" colspan="1" style=""><span style="" class="">Required</span></td><td class="" colspan="1" style=""><span style="" class="">Represent a web element.</span></td></tr><tr class="" style=""><td class="" style=""><span style="" class="">text</span></td><td class="" style=""><span style="" class="">String</span></td><td class="" colspan="1" style=""><span style="" class=""><span style="" class="">Required</span></span></td><td class="" colspan="1" style=""><span style="" class=""><span class="" style=""><span style="" class="">The encrypted text.</span></span></span></td></tr><tr class="" style=""><td class="" colspan="1" style=""><span style="" class=""><span style="" class="">flowControl</span></span></td><td class="" colspan="1" style=""><span style="" class=""><span style="" class="">FailureHandling</span></span></td><td class="" colspan="1" style=""><span style="" class="">Optional</span></td><td class="" colspan="1" style=""><span style="" class="">Spec</span><span class="" style="">ify </span><a href="https://docs.katalon.com/x/qAAM" rel="nofollow" class="" style="">failure handling</a><span class="" style=""> schema to determine whether the execution should be allowed to continue or stop.</span></td></tr></tbody></table>

Example
-------

Set the encrypted text to txt_Password of a login form.

```
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