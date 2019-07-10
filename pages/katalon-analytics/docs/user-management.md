---
title: "User Management" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/user-management.html 
redirect_from:
    - "/display/KA/User+Management/"
    - "/display/KA/User%20Management/"
    - "/x/lQjR/"
    - "/katalon-analytics/docs/user-management/"
description: 
---
## User Management

In Katalon Analytics, each user is identified with the same account registered for Katalon Studio. User Management is only available for the *Owner* and *Admins* in an organization.  

### Glossary

__Organization__

Organizations are groups of users organized under one Katalon Analytics account and understood as companies. A user defaults to own a personal organization and can belong to many organizations.

__Team__

Teams are groups of members that reflect company's structures. A team is created by either *Owner* or *Admin* in an organization. Only members of a team can view and access the projects within that team. 

__Project__

A project is created only by *Admin* of a team with a particular name and automatically generated ID. There are many projects in a team.

__Role__

Katalon Analytics (beta) provides a set of default roles which have certain permissions related to user and project management. There are three roles including *Owner*, *Admin*, and *User* with hierarchical capabilities.

__User__

*Users* are personal Katalon Analytics accounts. Each user has a personal organization and can work on multiple projects. They can be invited to join other users' organizations and teams.

The *Owners* can be assigned to a *User* role by *Admins* when invited to a team in their own organizations.

### Default Roles

Every user defaults to the *Owner* of their own organization.\
*Admin* is granted by the *Owner*.\
*User* is automatically assigned when a person is first invited to collaborate in a team.

### Roles and default permissions

 
__Owner__

* Invite new users to your organization and to collaborate on your projects.
* Assign *Admin* or *User* roles to new and existing team members. 
* Remove existing *Admins* and *Users* from your organization and projects. 
* Delete projects. 
* Upload test execution reports. 


__Admin__ 

* Invite new users to collaborate on your projects.  
* Assign *Admin* or *User* roles to new and existing team members.   
* Remove existing *Users* from your projects. 
* Delete projects.
* Upload test execution reports.

__Users__ 
* Monitor project progress.
* Upload test execution reports.

### User-related permissions

__Invite a new user__

Before joining a project, a user is required to join the organization that hosts the project. The invited person is required to have a Katalon Studio account. If the person invited to collaborate on Katalon Analytics projects doesn't have a Katalon account, an email will be sent to help that person create one.

__Invite a person to your organization:__

+ From Katalon Analytics home page, select the organization
+ From __Users Tab__, click __Invitations__
+ Enter an email address and click __Invite__
+ Copy the activation link and send to that person

![](../../images/katalon-analytics/docs/user-management/1-usermgt-invitations.png)

The invited person accepts the invitation by clicking the activation link directing to Katalon Analytics and then clicking the name of the organization.

Before that person accepts the invitation, their email address will be listed in __PENDING INVITATIONS__. Once the person joins the organization, their name and email address will be listed below Users. The new user is only able to access the projects when added by the Owner or the Admin to a team.
> Notes: The owner can withdraw the invitation by removing it from __PENDING INVITATIONS__.

__Invite a user to your team:__

Only users in an organization can be invited to a team in that organization. From __Users Tab__ in a team, select that person's email in drop-down list and then click __Add__ to add a user to a team.

__Remove existing Users__

From __Users Tab__, click the emove icon in the last column and confirm your action in the pop-up. The removed user can be re-added to the project if necessary (refer to *Invite a user to a team*)

![](../../images/katalon-analytics/docs/user-management/1-usermgt-icons.png)

__Assign Admin or User roles to new and existing team members__

*Admin* and *Owner* can reassign the existing *Admin* and *User* to a new role. From __Users Tab__, click the pencil icon in the last column and then select a new role in the drop-down list.
A user can have different roles in different teams.

### **Project-related permissions**

*   **Upload test execution reports**
*   **Monitor the progress of a project**
*   **Delete projects**

