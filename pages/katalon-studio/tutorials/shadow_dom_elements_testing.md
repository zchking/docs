---
title: "Automation testing of Shadow DOM elements with Katalon Studio"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/shadow_dom_elements_testing.html
description: "What is Shadow DOM? This article will show you how Katalon Studio solves Shadow DOM problem and let you test shadow DOM elements in a straightforward way"
---
What is Shadow DOM?
-------------------

Shadow DOM is a technique to help web developers to better encapsulate their code. Shadow DOM works by allowing DOM elements to contain child node and CSS. Shadow DOM also keeps child node and CSS separate from the DOM of the main document. DOM subtree has a root node (Shadow Root) which is unaffected by any modification made to other elements.

Although shadow DOM is a useful solution for Web developers, it becomes a challenge for automation testing because those elements inside a shadow root technically do not exist in the main document DOM. Therefore, test automation frameworks that use the DOM query function would not work properly.

In this article, we will take a look at how Katalon Studio solves the problem and let you test shadow DOM elements in a straightforward way. We will use Chrome as the main browser for testing this feature as Chrome version 53 or later fully supports shadow DOM.

A shadow DOM demo site
----------------------

We’re going to use the demo site JavaScript Books http://www.kaidez.com/samples/template-shadowdom-practice/.

All the books in this demo website are comprised of elements that are contained within a shadow root. You can validate this by inspecting a book element (right click on a book element and select Inspect to open the Chrome Developer tools).

The inspected shadow root element is shown as below:

Notice the **#shadow-root** element as it is the representation of a shadow root. All elements inside this shadow root are considered separate from the current DOM document.

Automate Testing Shadow DOM with Katalon Studio
-----------------------------------------------

We use the demo site above as the application under test. Consider a simple scenario: when the user clicks on **Buy at Amazon**, a new window is opened to show the corresponding book on Amazon. We will test if this window is opened successfully.

We assume that you are already familiar with Katalon Studio. If you need to get started with its basic functions instead, please visit Katalon Studio tutorials center.

1\. First, create a new Katalon Studio project, and let’s name it as **Shadow DOM Testing.**

2\. Create a new test object to represent a shadow root. Let’s name this test object as **sectionAllBooks**.

3\. Add a property with the name **id** and the value **allBooks** for the **sectionAllBooks** object.

4\. Next, create a new test **object** to represent an   in HTML DOM. Let’s name this object as **aStoreLink**.

5\. Create a property for this object, **aStoreLink**. This property has the _name as_ **href** and _value_ as http://www.amazon.com/gp/product/1849693129/ref=as\_li\_qf\_sp\_asin\_il\_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1849693129&linkCode=as2&tag=kaidez-20&linkId=CK7X5SMYEHL3BMEQ

6\. Select the Shadow Root Parent option, as shown below. Click on Browse and select **SectionAllBooks** from Object Repository Browser.

Once finished, the aStoreLink object has Shadow Root Parent as below

7\. Now you’re ready to start scripting. Let’s create a test case with the name **Shadow DOM Test** and open it.

8\. Paste the following script into the test case’s Script editor.

9\. Now execute the test script by selecting Run > Chrome.

10\. Katalon Studio should successfully find the element within the shadow root and open the Amazon window to show the book.

Congratulations! You have successfully created and run your first Shadow DOM test script with Katalon Studio. For more advanced features and keywords, please visit Katalon Studio tutorials center

The sample project for this tutorial can be found at https://github.com/katalon-studio/ShadowDOMSampleProject.