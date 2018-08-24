---
title: "Value Types" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/value-types.html 
redirect_from: "/display/KD/Value+Types" 
description: 
---
While designing automation test in Katalon Studio, users usually need to configure data for certain test steps, such as:

*   Pass input parameters to a test step.
*   Get the output value from a test step.

You can select from a wide range of value types supported by Katalon Studio as showed below:

<table><thead><tr><th>Value Type</th><th>Description</th></tr></thead><tbody><tr><td><p>Constant</p></td><td><p>The data is a value that will not change over time.</p></td></tr><tr><td><p>Variable</p></td><td><p>The data is a value that might be changed during execution. This type of data can only be referred within the scope of the test case where it is defined.</p></td></tr><tr><td><p>Global Variable</p></td><td><p>The data is a value that might be changed during execution. This type of data can be referred anywhere in the project.</p></td></tr><tr><td><p>Test Data Value</p></td><td><p>The data is a value coming from a test data file.</p></td></tr><tr><td><p>Binary</p></td><td><p>The data is a binary expression.</p></td></tr><tr><td><p>Boolean</p></td><td><p>The data is a Boolean value that can be evaluated from a Boolean expression.</p></td></tr><tr><td><p>Test Case</p></td><td><p>The data is a test case.</p></td></tr><tr><td><p>Test Data</p></td><td><p>The data is a test data file.</p></td></tr><tr><td><p>Test Object</p></td><td><p>The data is a test object.</p></td></tr><tr><td><p>Method Call</p></td><td><p>The data is a method call.</p></td></tr><tr><td><p>Property</p></td><td><p>The data is a public property value of an object.</p></td></tr><tr><td><p>List</p></td><td><p>The data is a list of values.</p></td></tr><tr><td>Dictionary</td><td>The data is <span>a collection of keys and values.</span></td></tr></tbody></table>

This list describes how to provide data for each data type:

<table><thead><tr><th>Value Type</th><th>How to provide value for the property?</th></tr></thead><tbody><tr><td><ul><li>String</li><li>Integer</li></ul></td><td><div><p>Enter value directly into the <strong>Value</strong> cell.</p><p><span><img></span></p></div></td></tr><tr><td><ul><li>Variable</li><li>Global Variable</li></ul></td><td><div><p>Select preferred option from the <strong>Value</strong> drop-down list.</p><p><span><img></span></p></div></td></tr><tr><td><p>Boolean</p></td><td><div><p>Select preferred option from the <strong>Value</strong> drop-down list.</p><p><span><img></span></p></div></td></tr><tr><td><p>List</p></td><td><div><ul><li>Click on the <strong>Value</strong> cell.</li><li>A popup which looks like the following will be displayed:<br><span><img></span></li><li>Continue&nbsp;to add as many items as you want in the above popup.<br><span><img></span></li><li>Then press the <strong>OK</strong> button.</li><li>Those defined values will be displayed in the <strong>Value</strong> cell, as illustrated below:<br><span><img></span></li></ul><p>&nbsp;</p></div></td></tr><tr><td>Dictionary</td><td><div><ul><li>Click on the <strong>Value</strong> cell.</li><li>A popup which looks like the following will be displayed:</li></ul><p><span><img></span></p><p>Continue to add as many items as you want in the above popup.</p><p><span><img></span></p><ul><li>Then press the <strong>OK</strong> button</li><li>Those defined values will be displayed in the <strong>Value</strong> cell, as illustrated below.<br><span><img></span></li></ul></div></td></tr></tbody></table>