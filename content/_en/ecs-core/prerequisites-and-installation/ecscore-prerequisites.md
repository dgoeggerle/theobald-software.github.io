---
ref: ecs-core-prerequisites-and-installation-01
layout: page
title: Prerequisites
description: Prerequisites
product: ecs-core
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 1
lang: en_GB
---

**Windows operating system** 

- Windows 10
- Windows Server 2012 R2 or higher
- IIS web server version 10 or higher
- Net Framework 4.7.1 or higher

**User rights on Windows** 

- The rights of an administrator are required to install the applications.

**Azure Relay**

If you want to use the Azure Relay functionality of Microsoft Azure, you need at least the standard tier.

**SAP system(s)**

- SAP ERP: R/3 4.0B or higher or any version of SAP ECC
- SAP BW: 3.0 or higher

**SAP user**

- An SAP system or dialog user with the corresponding [authorization objects](https://kb.theobald-software.com/sap/authority-objects---sap-user-rights) is required.

**Network Settings**

- Port 33nn must be open, where nn = the system number of the SAP system.

It is recommended to install ECS Core on a computer without any other Theobald Software components. 
Although this is possible, it makes error analysis and troubleshooting more difficult.