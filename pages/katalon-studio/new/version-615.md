Version 6.1.5
=============

### Plug-ins

*   **Sauce Labs Integration:** A plugin that lets Katalon Studio connect to Sauce Labs browsers easily and update job's info with test case name and run status.
*   **Test Suite Collection Scheduling Plugin:** A plugin that lets Katalon Studio run a test suite collection at a specific time in the future.
*   **Katalon Studio Report Plugin:** A plugin that replaces the current report feature of Katalon Studio. Starting from v6.1.5, the report feature is no longer available natively in Katalon Studio, users need to download this plugin to continue using this feature.

### Fixes and Improvements

*   Fixed a bug where Kobiton devices are duplicated.
*   Fixed a bug where Katalon Studio cannot be opened if a custom keyword plugin contains errors.
*   Fixed a bug where HAR files are not generated with the correct name.
*   Fixex a bug where Safari webdriver installation requirements pop-up shows up before every test.
*   Fixed a bug where test execution crashes when failing to get recent projects.
*   Fixed a bug where executeJavaScript keyword  fails when there are 3 arguments.
*   Fixed a bug in Jira Plugin where Default JIRA Issue TypeType field in integration setting contains duplicated values.
*   Added some small UI improvements when selecting devices and app files.
*   \[BETA\] Added the capability to import Test Objects from Postman collection JSON file. Importable fields include Postman fields in Params, Headers, Body.
*   Added a scrollbar in dropdown when selecting execution profiles.
*   Added the capability to display all user folders/files in Test Explorer.
*   Added the capability to allow configuration of plugin installlation location in Preferences -> Katalon -> Plugins.
*   Added the capability to use variables in XPaths when finding test objects.
