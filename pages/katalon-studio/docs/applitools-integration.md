---
title: "Applitools integration"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/applitools-integration.html

description:
---


### Sample project
A sample project for this plugin can be found [here](https://github.com/katalon-studio-samples/katalon-studio-applitools-sample-project)

### Applitools settings
Go to **Project Settings** > **Plugin** > **Applitools Integration** and setup these following configurations:  

![Applitools Integration Visual Grid](https://i.ibb.co/nkYGcF9/Applitools-Store-2.png)

* API Key : this is a required field. [How to obtain Applitools API Key](https://applitools.com/docs/topics/overview/obtain-api-key.html)  
     - *For a quick testing, you only need to fill in API Key and leave out the rest*
* Application Name :  name of application in Applitools, do not need to create this in Applitools before hand.  
* Hide Caret : **true** or **false**
     - true: hide the caret (if any) before capturing image  
     - false: do not hide the caret (if any) before capturing image  
* Match Level: match level in Applitools. [Applitools Match Level](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-matchlevel-selenium-java.html)
* Visual Grid View Port: list of viewports including width and height for Applitools Visual Grid; once specified all browser images under those viewports will be captured and compared.  
    - [[width1, height1], [width2, height2], ...] (for example: [[800,600],[1200,630]])
    - leave empty: use the browser viewport at the point of execution  
    - *Note: View Port configuration is applicable for **checkWindow** and **checkElement** keywords*
    
### Use Applitools functions during Recording
This plugin provides 2 custom keywords which are helpful to use during recording test cases:
* **checkWindow**: use to compare the image of the full browser at the point this keyword is called, images in the last run will be used as baseline for images in the next run
    - input: a unique string for a checking, Applitools will use this to compare the capture images
    - output: result comparison result from Applitools 
* **checkElement**:  use to compare the image of a specific element at the point this keyword is called, images in the last run will be used as baselines for images in the next run
    - input: a Test Object, and unique string for a checking
    - output: result comparison result from Applitools

### Use Applitools functions for Scripting
Other than the two public keywords below, this plugin also provide a set of keywords which can be use in Script mode:

	/**
	 * Initialize a wrapped WebDriver to starts a test
	 *
	 * @param testName The name of the test. This name must be unique within the scope of the application name. It may be any string.
	 * @return A wrapped WebDriver which enables Eyes trigger recording and frame handling.
	 */
	static Eyes eyesOpen(String testName) 

	/**
	 * End the test.
	 *
	 * @param eyes The initialized eyes object.
	 * @return The list of results of the test can be obtained from the object returned.
	 */
	static List<TestResults> eyesClose(Eyes eyes)

	/**
	 * Initialize a wrapped WebDriver to starts a test with a specified baseline name.
	 *
	 * @param baselineName The environment name that defines baseline. If the name is undefined in the server when the test runs then the name will be created and defined on the server with values of the current test environment defined by a triplet <OS = baselineName, Browser, Viewport>.
	 * @param testName The name of the test. This name must be unique within the scope of the application name. It may be any string.
	 * @return A wrapped WebDriver which enables Eyes trigger recording and frame handling.
	 */
	static Eyes eyesOpenWithBaseline(String baselineName, String testName)

	/**
	 * Runs a checkpoint of the entire application (e.g. browser) window.
	 *
	 * @param eyes The initialized eyes object.
	 * @param message An message to be associated with the snapshot.
	 */
	static void checkOpenedWindow(Eyes eyes, String message)

	/**
	 * Takes a snapshot of the application under test and matches a region ( or element) specified by the given selector with the expected region output.
	 *
	 * @param eyes The initialized eyes object.
	 * @param selector Selects the region/element to check.
	 * @param matchTimeout The amount of time to retry matching. (Milliseconds).
	 * @param message An message to be associated with the snapshot.
	 * @param stitchContent If stitchContent is false, it will match a region of a specific element with the expected region output. Otherwise, matches an specified element with the expected region output.
	 */
	static void checkOpenedRegion(Eyes eyes, By selector, int matchTimeout, String message, boolean stitchContent)

	/**
	 * Takes a snapshot of the application under test and matches a region ( or element) of a specific element with the expected region output.
	 *
	 * @param eyes The initialized eyes object.
	 * @param element The element which represents the region/element to check.
	 * @param matchTimeout The amount of time to retry matching. (Milliseconds).
	 * @param message An message to be associated with the snapshot.
	 * @param stitchContent If stitchContent is false, it will match a region of a specific element with the expected region output. Otherwise, matches an specified element with the expected region output.
	 */
	static void checkOpenedRegion(Eyes eyes, WebElement element, int matchTimeout, String message, boolean stitchContent)
