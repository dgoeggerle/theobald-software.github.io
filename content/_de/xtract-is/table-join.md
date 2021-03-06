---
ref: xtract-is-06
layout: page
title: Xtract IS Table Join
description: Xtract IS Table Join
product: xtract-is
parent: xtract-is
childidentifier: xtract-is-table-join
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=xtract-is-table-join
---

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i>
  <strong>Note:</strong> Ab Xtract IS Version <a href="https://kb.theobald-software.com/release-notes/XtractIS-5.0.0.html" class="alert-link">5.0</a> ist die Table Join Komponente obsolet.Bitte nutzen Sie die Table Join Funktionalität der <a href="./xtract-is-table" class="alert-link">neuen Table Komponente</a>
</div>

Die Table-Join Komponente dient dazu, mehrere Tabellen (und Views) auf SAP-Seite zusammenzufassen (Join).  <br>

Mögliche Szenarien dafür wären, Tabellen für Kopf- und Postionsdaten (z.B. einer Bestellung oder Rechnung) oder Tabellen für Stammdaten und Texte (z.B. eines Materials) zu joinen. <br>

Dazu wird dynamisch der entsprechende SQL-Befehl generiert und auf dem SAP-Server ausgeführt. 

Die Komponente unterstützt darüber hinaus die Definition von Aggregat-Funktionen, Where- und Having-Bedingungen. 

Voraussetzung dafür ist die Installation eines [Z-Funktionssbausteins](https://kb.theobald-software.com/sap/installation-of-the-function-module-z_xtract_is_table_join) auf der SAP-Seite. 

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> Cluster- und Pool-Tabellen werden von der Table Join-Komponente nicht unterstützt, können aber wie gewohnt mit der Table-Komponente extrahiert werden.
</div>

### SSIS-Version

Die Komponente Table Join setzt die Version SQL Server 2012 Integration Services (SSIS) voraus. Ältere Versionen werden nicht unterstützt. 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
