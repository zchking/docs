---
title: "录制回放模式创建测试用例"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/create_test_case_using_record_playback.html
redirect_from:
  - "/katalon-studio/tutorials/sample_web_automation_test_project.html"
description: "Test recording is the easiest way for new automation testers to start learning test automation.This article illustrates how to record the test case easily."
---
对于自动化测试菜鸟来说，开始学习自动化最简单的方法是测试录制。识别应用系统上的对象是一件费时且痛苦的事情。Web Recorder Utility（网页录制功能）捕获你在应用系统上的操作行为并且在后台把它们转化为可运行的代码。使用这个功能，你可以很快对应用系统的一些功能进行自动化，对于那些需要在迭代构建中重复执行多次的动作，通过录制可以节省时间。Katalon Studio 的这个功能支持录制测试用例，并可在多种浏览器中回放。这篇文章将向你展示如何轻松地录制测试用例。

使用Katalon Studio 录制网页功能录制你的第一个测试用例
-----------------------------------------------------------------

**场景** 预定

1.  打开被测系 (URL: http://demoaut.katalon.com/)
2.  点击预定按键
3.  输入有效的用户名、密码并点击登录按键
4.  预定

跟随以下步骤，熟悉网站界面测试中的录制&回放功能

**步骤 1:** 打开 Katalon Studio 并点击主工具栏上的 新建 > 测试用例。 输入测试用例名字并点确定. 一个空的测试用例就创建好了。

![Create-Test-Case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Create-Test-Case.png)

**步骤 2:** 在主工具栏上点击 Record Web （录制网页）

![Record-Web](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Web.png)

**步骤 3:** 录制对话框就显示出来了。

![Web recorder](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Dialog-300x254.png)

**步骤4:** 选择浏览器并点击录制按键开始录制测试用例。

![recording-test-case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/recording-test-case.png)

**步骤 5:** 在你的系统打开之后， 把鼠标移到 ‘Make Appointment’（预定） 按键上并点击（等待登录页面加载完毕）

![Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Make-Appointment-e1513053243772-1024x512.png)

**步骤 6:** 输入有效的用户名&密码 (John Doe & ThisIsNotAPassword) 并点击‘Login‘ 按键 (等待页面加载完毕)

![Login-to-Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Login-to-Make-Appointment-e1513053339776.png)

**步骤7:** 预定页面加载完成后,在Facility下拉框中选择值 “Hongkong CURA Healthcare Center” 。

![Make-Appointment-page](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Make-Appointment-page-e1513067371591.png)

**步骤 8:** 把鼠标移动到 ‘Apply for hospital readmission‘勾选框并点击。

**步骤9:** 把鼠标移动到‘Medicaid’单选框并点击。

**步骤10:** 点击‘Visit Date’（预约日期）的日历图标并点击所需的日期。

![Calendar](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Calendar-e1513067438109.png)

**步骤11:** 把鼠标移动到备注区并输入文字。

**步骤12:** 把鼠标移动到 Book Appointment（预约）按键并点击。

**步骤13:** 你可以随时点‘Stop‘停止录制。 Katalon Studio 允许用户对所捕获的对象选择‘定位模式’。对于刚开始自动化之旅的手动测试员，我们推荐使用Basic mode（基本模式）。基本模式下Katalon Studio的智能定位器生成器会自动为每个捕获的对象生成可靠并唯一的定位器。

对于希望手动输入定位器的高阶测试员，可以选择CSS 或 XPath 模式。关于定位方法的更多细节可以参考 [guide](http://docs.katalon.com/pages/viewpage.action?pageId=5118311).

![Katalon Web Recorder](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Selection-Method-for-captured-objects.png)

**步骤14:** 当完成录制后，点击OK ，所有录制下来的动作都会被保存到Katalon Studio中去。 保存过程中会提醒你把捕获的对象都保存到对象库中去，这样你可以随时重用它们。你也可以根据自己的意愿来创建保存对象的文件夹结构。点击OK 继续。

![Object-Repository](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Object-Repository.png)

**步骤15:** 记录下来的对象和动作会象以下显示的那样保存到测试用例中。

![Recorded-objects](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Recorded-objects-e1513067504997.png)

只需点击‘Run’（运行） 就可以在你期望的浏览器中执行记录下来的测试用例。

**记录和回放的脚本代码**

```groovy
WebUI.openBrowser('')
WebUI.navigateToUrl('http://demoaut.katalon.com/')</p>
WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
WebUI.selectOptionByValue(findTestObject('Page_CURA Healthcare Service (2)/select_facility'), 'Hongkong CURA Healthcare Center',
 
true)
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/input_programs'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/div_input-group-addon'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/td_3'))
 
WebUI.setText(findTestObject('Page_CURA Healthcare Service (2)/textarea_comment'), 'Katalon')
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/button_Book Appointment'))
 
WebUI.closeBrowser()

```

录制时如何实时更改页面文件夹和元素的名字
------------------------------------------------------------------------------

为了在页面对象模式下组织你的测试脚本，我们需要把测试对象添加到与页面对应的文件夹下。这样做有助于重用及维护对象。

**场景:**  使用有效数据登录

1.	打开被测试系统 (URL: http://demoaut.katalon.com/)。
2.	点击预约按键 (改变页面及对象名字)。
3.	输入有效的用户名，密码并点击登录按键。 (改变页面及对象名字)。
步骤 1: 打开 Katalon Studio 并点击主工具栏上的 First Test Case（首个测试用例）按键。输入你的测试用例名字并点OK。一个空的测试用例就创建了 。

**步骤 1:** 打开 Katalon Studio 并点击主工具栏上的 First Test Case（首个测试用例）按键。输入你的测试用例名字并点OK。一个空的测试用例就创建了 。

![Change-Element-Name](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Change-Element-Name.png)

**步骤 2:** 在主工具栏上点击 Record Web （录制网页）

![Record-Web](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Web.png)

**步骤 3:** 录制对话框就显示出来了。选择浏览器并点击录制按键开始录制测试用例。

![recording-test-case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/recording-test-case.png)

**步骤 4:** 在你的系统打开之后， 把鼠标移到 ‘Make Appointment’（预定） 按键上并点击（等待登录页面加载完毕）

![Record-Dialog-Box](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Dialog-Box.png)

**步骤 5:** 把页面名字从 “Page_CURA Healthcare Service” 改为 “Page_Home Page”。

**步骤 6:** 在捕获的对象框架中选择 “a_Make Appointment”元素。

**步骤 7:** 把元素名字从“a_Make Appointment” 改为“button_Make Appointment”。

![Web-Recorder-Utility](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Web-Recorder-Utility.jpg)

**步骤 8:** 切换到录制浏览器，移动到Login 按键并点击它，以重新继续录制。

![Login-to-Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Login-to-Make-Appointment-e1513053339776.png)

**步骤 9:** Repeat重复以下步骤，改变Login 对象及它的文件夹的名字。

**步骤 10:** 把 “Page_CURA Healthcare Service” 页面的名字改为 “Page_Login”。

![Web-Recorder-Utility-2](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Web-Recorder-Utility-2.jpg)

**步骤 11:** 你可以随时点‘Stop‘停止录制。当完成录制后，点击OK ，所有录制下来的动作都会被保存到Katalon Studio中去。

**步骤 12:** 保存过程中会提醒你把捕获的对象都保存到对象库中去，这样你可以随时重用它们。你也可以根据自己的意愿来创建保存对象的文件夹结构。点击OK 继续

![Objects-repository](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Objects-repository.png)

**步骤 13:** 记录下来的对象和动作会象以下显示的那样保存到测试用例中。

![Recorded-objects-and-actions](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Recorded-objects-and-actions-e1513069057639.png)

只需点击‘Run’（运行） 就可以在你期望的浏览器中执行记录下来的测试用例。

**源代码:**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject</p>
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
WebUI.openBrowser('')
 
WebUI.navigateToUrl('http://demoaut.katalon.com/')
 
WebUI.click(findTestObject('Page_Home Page/button_Make Appointment'))
 
WebUI.click(findTestObject('Page_Login/button_Login'))
 
WebUI.closeBrowser()

```
录制时如何添加Katalon命令
-------------------------------------------

**场景:**  使用validations（验证命令） 验证登录功能

1.	打开被测系(url: http://demoaut.katalon.com/)
2.	验证Make Appointment按键存在
3.	点击Make Appointment按键
4.	验证Login按键可见
5.	输入有效的用户名、密码并点击登录按键

实时录制时Katalon Studio允许用户添加额外的命令，如基本动作命令，验证点命令，集合命令。

**步骤 1:** 打开 Katalon Studio并点击主工具栏上的 New Test Case（新建测试用例）按键。输入测试用例名字并点击OK。 一个空的测试用例就创建了。
![Create-Test-Case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Create-Test-Case.png)

**步骤 2:** 在主工具栏上点击 Record Web （录制网页）

![Record-Web](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Web.png)

**步骤 3:** 录制对话框就显示出来了。
**![Record-Dialog](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Record-Dialog.png) **

**步骤 4:** 选择浏览器并点击录制按键开始录制测试用例。

![recording-test-case](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/recording-test-case.png)

**步骤 5:** 在你的系统打开之后， 把鼠标移到 ‘Make Appointment’（预定） 按键上并点击（等待登录页面加载完毕）

![Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Make-Appointment-e1513053243772.png)

**步骤 6:** 我们在实时录制时可以添加验证命令。切换到 Katalon 录制对话框，找到需要在其下加入验证命令的行，然后点击 Add 按键。

![Katalon-Record-Dialog](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Katalon-Record-Dialog.png)

**步骤 7:** 点击 Add Validation Point（添加验证点）

**步骤 8:** 系统自动添加缺省的命令：Verify Element Present（验证元素存在）

**步骤 9:** 我们需要给 Verify Element Present 命令时间值，Katalon Studio 提供的默认时间是30秒。 点击 Verify Element Present的动作数据并设置成30秒 [根据你自己需要] 然后点击OK 按键。

![Verify-Element-Present](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Verify-Element-Present.png)

**步骤10:** 图示是在记录对话框中带有时间的 Verify Element Present 命令

**步骤 11:** 我们需要给 Verify Element Present 命令设置对象。点击Verify Element Present命令的元素栏，系统将显示页面对象对话框。选择Login 按键对象 [根据你自己的需要] 并点击 OK 按键。

![Login-Verify-Element-Present](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Login-Verify-Element-Present.png)

**步骤 12:** 示例显示的是设置了对象的Verify Element Present命令

**步骤 13:** 然后返回浏览器重新继续录制，移动鼠标到Make Appointment按键并点击 Make Appointment 按键。
![Login-to-Make-Appointment](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Login-to-Make-Appointment-e1513053339776.png)

**步骤 14:** 我们切换回录制对话框，添加Make Appointment按键的验证命令。

**步骤 15:** 点击Add 按键，在显示的命令下拉框中点击Add Validation point

**步骤16:** 系统将添加默认的Verify Element Present命令。

**步骤 17:** 现在我们需要把Verify Element Present 命令改为 Verify Element Visible。 双击Verify Element Present命令的动作栏，然后会显示向下箭头。点击向下箭头，将会显示所有验证命令。点击Verify Element Visible 命令 [或根据你自己的需要选择其它的命令]。

![Verify-Element-Visible](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Verify-Element-Visible.png)

**步骤 18:** 系统将显示修改了验证点的录制对话框。

**步骤 19:** 我们需要给 Verify Element Visible 命令设置对象。点击Verify Element Visible命令的元素栏，系统将显示页面对象对话框。展开页面对象文件夹，选择Login 按键对象 [根据你自己的需要] 并点击 OK 按键。

**步骤20:** 系统将显示修改了对象的Verify Element Visible命令。

**步骤21:** 你可以随时点‘Stop‘停止录制。当完成录制时点击OK ，所有录制的动作都会被保存到Katalon Studio中。

![recorded-actions](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/recorded-actions.png)

**步骤 22:** 保存过程中会提醒你把捕获的对象都保存到对象库中去，这样你可以随时重用它们。你也可以根据自己的意愿来创建保存对象的文件夹结构。点击OK 继续。

**步骤 23:** 记录下来的对象和动作会象以下显示的那样保存到测试用例中。

![Recorded-objects-and-actions-3](../../images/katalon-studio/tutorials/create_test_case_using_record_playback/Recorded-objects-and-actions-3-e1513069217546.png)

**脚本代码:**

```groovy
WebUI.openBrowser('')</p>
WebUI.navigateToUrl('http://demoaut.katalon.com/')
 
WebUI.verifyElementPresent(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'), 30)
 
WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
 
WebUI.verifyElementVisible(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
WebUI.closeBrowser()

```

就这样我们可以利用Katalon Studio录制所操作的动作。也有少量动作录制不下来。

### 不能录制什么?

虽然录制测试可以节省时间，但有一些情况我们无法确定有效，例如：网页表格处理，多框架切换，切换到窗口，图像识别,视频播放。 下列是主要的缺憾：
a)使用记录器，我们无法处理动态变化的元素(因为需要客制化 Xpath/CSS)
b)无法在任何需要的地方都重用代码。这对调试工作是极大的挑战。

You can download source code [here](https://github.com/katalon-studio/katalon-web-automation).

For further instructions and help, please refer to [Recording WebUI Test](/x/RwnR) and [Record and Playback](https://www.katalon.com/videos/tutorial-videos/create-test-case-record-playback/) tutorials.
