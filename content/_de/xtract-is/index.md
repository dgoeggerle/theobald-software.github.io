---
ref: xtract-is-01
layout: page
title: Xtract IS
description: Xtract IS
product: xtract-is
parent: home
childidentifier: xtract-is
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/
---
### Architektur<br>
Xtract IS ist ein Plug-In für die SQL-Server-Integration-Services (SSIS). Es kann nicht außerhalb von SSIS verwendet werden, 

sodass eine SQL Server Lizenz notwendig ist, auch bei nicht verwendeter SQL Server Datenbank. 

Die Xtract IS Komponentensuite bietet Ihnen insgesamt 10 unterschiedliche Bausteine für die SQL-Server-Integration-Services an.

Somit steht Ihnen die komplette Bandbreite der Datenextraktion für unterschiedliche SAP-Objekte zur Verfügung.

![XIS-Architecture](/img/content/xis/architectures_xis_neu.png){:class="img-responsive"}


### Verwendung der Komponenten<br>
In der unten stehenden Übersicht sehen Sie, bei welcher Komponente Lese (R),- und Schreibrechte (W) zur Verfügung stehen. 

Die benötigte Lizenz für die Nutzung der unterschiedlichen Komponenten im SAP ERP sowie SAP BW sind ebenfalls der Tabelle zu entnehmen.

| Komponente | ERP | BW | Enterprise <br> Lizenz | Ultimate <br> Lizenz  |
|-------------|-----|----|:--|:--|
| Table       | R   | R  | X                  | X                |
| Table Join  | R   | R  |                    | X                |
| BAPI        | R/W  | R/W | X                  | X                |
| Query       | R   |    | X                  | X                |
| ABAP Report | R   |    |                    | X                |
| DeltaQ      | R   | R  |                    | X                |
| BW Cube     |     | R  | X                  | X                |
| Hierarchy   |     | R  |                    | X                |
| OHS         |     | R  |                    | X                |
| BW Loader   |     | W  |                    | X                | 


Hier finden Sie die folgenden Kapitel:

{% include _content/table-of-contents.html parent="xtract-is" collection=site.de %}
