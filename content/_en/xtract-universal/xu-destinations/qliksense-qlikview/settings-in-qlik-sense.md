---
ref: xu-qliksense-qlikview-04
layout: page
title: Settings in Qlik Sense
description: Settings in Qlik Sense
product: xtract-universal
parent: qliksense-qlikview
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=settings_in_qliksense
---

When using the qlik script generated by Xtract Universal in Qlik Sense you might be getting an error message like: *This statement only works with lib:// paths in this script mode*. 

This is because the dynamic load of data from a web file is deactivated in Qlik Sense per default.
On the Qlik Sense help site you can find how to activate it. Do a search for 'Disabling standard mode' or check the following [link](https://help.qlik.com/en-US/sense/2.2/Subsystems/Hub/Content/LoadData/disable-standard-mode.htm). 

In *Qlik Sense* deactivate the Standard Mode in Qlik Management Console -> Engine Properties.<br> 
In *Qlik Sense Desktop* open the file C:\Users\{user}\Documents\Qlik\Sense\Settings.ini in a text editor. <br>Change StandardReload=1 to StandardReload=0. Save the file and restart Qlik Sense.

Since Qlik Sense June 2018 only port 5555 (default port of Qlik Web Connectors) is allowed for WebFile connectivity connecting to *http://localhost*. 
Hence, if you are getting a *Forbidden* or *Access is denied* error when executing a Qlik Sense report please check the following help pages.

[Cannot load data from Qlik Web Connectors](https://help.qlik.com/en-US/connectors/Subsystems/Web_Connectors_help/Content/Connectors_QWC/Install/troubleshooting_load.htm?l=DE-DE).

["Access is denied" when connecting to localhost with WebFile connection ](https://qliksupport.force.com/articles/000054581?_ga=2.234987393.1633897554.1546511952-1716671580.1545392499).

