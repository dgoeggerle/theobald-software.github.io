---
ref: xfa-introduction-03
layout: page
title: Installation and First Steps
description: Installation and First Steps
product: xtract-for-alteryx
parent: introduction
permalink: /:collection/:path
weight: 3
lang: en_GB
---

The installation program is a standard installation routine which copies all necessary files into the program directory.
The setup installs the Visual C++ 2005 Runtime library.  

**recommendation**<br>
Before installing Xtract For Alteryx, make sure that Alteryx is installed and the Alterxy Designer is closed on your computer.
This procedure ensures that the XfA components are available and can be displayed in the Alteryx Designer.


### Installation and First Steps

The installation is carried out using the supplied installation program in the standard folder C:\Program Files\XtractForAlteryx. <br>
During installation, certain libraries and programs are stored in the Alteryx installation on the same machine to make the components available later in the Alteryx UI. <br>
This installation in the target environment is done by the program XtractForAlteryxPluginInstaller.exe. It is triggered by the setup program under the hood. <br>
In the log file XtractForAlteryxSetup.txt you can read exactly which modifications were made to the system and whether errors occurred during installation.
If you start Alteryx after installation, the XfA components are available in a separate tab in the toolbox within the Alteryx UI and can be dragged and dropped onto the workflow as usual.
If you don't see the tab immediately, scroll to the right of the Toolbox tabs. You should find it there.

![Designer](/img/content/xtract_for_alteryx_tools.png){:class="img-responsive"}


**Beta version**<br>
If you have installed the beta version prior to 1.0, please use the uninstaller in the installation folder to uninstall the earlier version. 
Beta version is not compatible with version 1.0. Only the SAP connections are compatible and can be reused with version 1.0. All extractions must be recreated. 

