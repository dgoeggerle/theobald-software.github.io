---
ref: xu-server-01
layout: page
title: Start Server
description: Start Server
product: xtract-universal
parent: server
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=start-server
---

The Server is initially installed as a Windows Service and automatically started. But you can start the Server either as a console program or as a Windows service. In an environment in which multiple users access the same repository, you should run the Server as a Windows Service on a central server.

The service can be started and stopped via the Windows Services administration. 

![Services-Start-Server](/img/content/Services-Start-Server.jpg){:class="img-responsive"}

To uninstall the service use the command 

*XtractService.exe /u*  

If you can not start the Server because the default port is reserved, please open the ServerConfig.xml file in the installation directory and set a suitable port.