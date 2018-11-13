---
title: "使用Katalon Studio进行数据驱动测试的方法"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/data_driven_testing.html
redirect_from:
    - "/katalon-studio/tutorials/data-driven-testing/"

description: "Data-driven testing is a testing method using the tables of test data. This article will show you how to apply data-driven testing using Katalon Studio."
---

## 什么是数据驱动测试?

**数据驱动测试(DDT)** 在计算机软件测试领域是个普通术语。它定义了一个测试，这个测试的完成要使用一个数据表格直接作为测试的输入和可验证的输出。另外,在数据驱动测试过程中，测试环境设置和控制都不是硬编码的。这种测试过程很流行并且常常在录制回放之后来应用。换句话说，一旦捕获了一组测试对象后，测试员就需要从外部数据文件添加更多输入数值，以便应用系统能处理大量将来的应用场景。从控制方法上来讲，外部信息是从数据库读进来的，这些数据库可以是任何以下数据文件。

*	数据池
*	Excel 文件
*	ADO 对象
*	CSV 文件
*	ODBC 数据源

更好地理解这个数据驱动测试方法的最简单办法就存在于一个自动测试的录制过程中。一些情况下，在录制过程中你选择的值不会发现任何缺陷或错误。但是录制过程中没有使用到的其它数值却会发现一些缺陷或错误。这时候测试员就需要一组数据集来使他们的测试输入多样化。
另外，如果你想做些变动，例如添加更多或削减一些数据，你完全可以自由地重新规制数据而不必对硬代码的数值做任何改动。假如这此变动是硬代码数值本身，当然你就不得不对代码和数据都进行改动。

下图可以帮助你更好地理解数据驱动的框架:

![data-driven testing using Katalon Studio](../../images/katalon-studio/tutorials/data_driven_testing/data_driven_testing.jpg)

### 下图可以帮助你更好地理解数据驱动的框架

*	在开发员还在开发应用、软件时就可以并行地开发测试脚本。设计、计划、运行数据集的整个过程是和应用开发完全独立的。
*	测试员可以避免开发一些不相关或不必要的重复的测试脚本。因为在此之前，我们已经列出了一个标准文件，包含了测试的输入及测试的验证数据。
*	所的输入的产出，切实可行的测试结果的输出都会被收集并保存到有序管理的文本记录里。
*	测试用例要能适应大量的数据集，因为这些外部信息是独立于测试用例收集的。这些信息保存在以Excel文件、XML或其它测试资源存在的外部资料里。
*	测试脚本改变时不会影响到测试数据，因为数据驱动测试的运行是独立于开发的。即便测试员做了多次变动也不会影响到开发者。
*	如果使用数据驱动框架的方法，进行了多个场景和输入的测试，将来产生错误或缺陷的可能性就会很小。这对测试人员来说是个好消息。


## 使用Katalon Studio进行数据驱动测试的方法
------------------------------------------------

Katalon Studio 支持数据驱动测试，它允许用户定义测试数据集。并且对比其它的数据驱动测试框架，它执行脚本更快更容易。
数据驱动测试示例工程
我们通过测试一个预定服务，来描述这个简单的数据驱动测试示例。预定表格中包括5个不同的字段，每个字段都包含多个选项。特定用例使用的数据可能发现不了被测应用的错误，但其它数据集可能就能发现。为了保证无论任何输入情况下被测应用都基本能工作，你就需要发挥数据驱动测试的优势，对这个测试场景使用不同的数据集自动地执行很多遍。

[![API testing interview questions](../../images/katalon-studio/tutorials/data_driven_testing/Untitled-1.png)](https://www.katalon.com/download)

**示例的场景如下:**
•	打开Katalon demo AUT website的登录页面 (http://demoaut.katalon.com/profile.php#login)
•	使用3个不同的帐号登录
•	验证登录是否成功
•	关闭浏览器

![prepare data](../../images/katalon-studio/tutorials/data_driven_testing/Picture1-300x132.png)

### 你可以通过以下步骤来自动化以上场景。

1\. 创建一个新的测试用例并继续生成以下步骤:

* 	打开 http://demoaut.katalon.com/profile.php#login (the Katalon demo AUT website)
*	输入用户名、密码
*	点击登录
*	验证预定页面是否显示出来
你可以使用网页录制功能快速地创建测试步骤。

* 步骤 1: 点击主工具栏上的New Test Case按键，输入测试用例名称并点OK， 一个空的测试用例就创建了。
* 步骤 2: 主工具栏上点击Record。
* 步骤 3: 点击录制对话框中的录制开始录制测试用例。
* 步骤 4:  进行以上场景步骤。

![Katalon Test case](../../images/katalon-studio/tutorials/data_driven_testing/2.-Katalon-test-case.png)

你可以看出来录制过程中你输入的用户名和密码值（本例中，admin/abc123）是硬代码化了。为了使用不同的帐号来多次运行这个脚本，你需要参数化这些值。请继续下面的步骤。


2\. 切换到测试用例的变量页面，并创建两个变量，名字分别为 ‘demo_usn’ 和 ‘demo_pwd’。
步骤 1: 切换到测试用例的变量页面。点击Add（添加）。
步骤2: 变量列表里会新增一行。创建两个变量，名字分别为 ‘demo_usn’ 和 ‘demo_pwd’。做完后保存测试用例。

![Katalon Variables tab of the test case](../../images/katalon-studio/tutorials/data_driven_testing/3.-Katalon-Variables.png)

3\. 切换回测试用例的手工视图，把这两个变量设成username/password字段的输入。

![Katalon Manual view](../../images/katalon-studio/tutorials/data_driven_testing/4.-Katalon-manual-view.png)


### 数据驱动测试的执行

你可以在两种地方进行数据驱动测试：测试集或测试用例。
#### A.从测试集执行

#### A. Execution from test suites

1\. 接下来, 创建一个测试集，以便用定义的数据集来执行测试用例。

![Katalon New test suite](../../images/katalon-studio/tutorials/data_driven_testing/6.-Katalon-Data-driven.png)

2\. 展开数据绑定部分, 把创建的数据文件添加到测试数据部分。然后把两个变量 ‘demo_usr’ 和 ‘demo_pwd’绑定到数据文件的对应列上。如果想要了解更多关于变量绑定的细节，你可以点链接Data for test execution。

![Katalon Test Data driven testing section](../../images/katalon-studio/tutorials/data_driven_testing/7.-Katalon-test-data.png)

3\. 最后你可以运行测试集，你的登录测试用例将会分别使用测试数据文件中定义的帐号，运行三次。

#### B. 从测试用例执行
1. 我们也可以在单个测试用例中实现驱动测试。创建一个新的测试用例并切换到脚本模式。要使用多组数据进行迭代测试，我们需要FOR 语句，并且调用测试数据对象。

In which:

* 从Katalon内嵌的库中导入 InternalData类。并在本地测试数据表中定义data 变量
* 使用For语句循环完测试数据表中的所有行。行数就是你的测试用例将要执行的次数，使用 getRowNumbers() 方法来获得行数。
* 使用GetValue方法来获得测试数据表中的一行值。例如：

_Username field: data.internallyGetValue("demo_usn", index)_

_Password field:  data.internallyGetValue("demo_pwd", index)\_

2\. 脚本视图中做完后，切换回到手工视图，测试用例就和下图显示的一样:

![Katalon Scripts view](../../images/katalon-studio/tutorials/data_driven_testing/8.-Katalon-Script-view.png)

3\. 最后你可以运行测试集，你的登录测试用例将会分别使用测试数据文件中定义的帐号，运行三次。

**恭喜！你现在已理解并掌握了利用 Katalon Studio进行数据驱动测试的方法了.**

Tutorial video is contributed by Shiva Raj
------------------------------------------

<iframe width="560" height="315" src="https://www.youtube.com/embed/O95RSICQjus" frameborder="0" allowfullscreen="allowfullscreen">&nbsp;</iframe>

Learn more:

*   [How To Apply Data Driven By Katalon Studio](https://www.katalon.com/videos/apply-data-driven-katalon-studio/)
*   [Record & playback, Data Driven and Cross browser testing with Katalon Studio for Web UI](https://www.katalon.com/videos/record-playback-data-driven-cross-browser-testing-katalon-studio-web-ui/)
