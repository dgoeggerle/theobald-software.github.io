---
ref: xu-microsoft-sql-server-06
layout: page
title: Custom SQL
description: Custom SQL
product: xtract-universal
parent: microsoft-sql-server
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sql-server-voraussetzungen
---

Sie haben die Möglichkeit abseits vom Standard eigene SQL-Statement für die drei unterschiedlichen DB Prozessschritte zu verwenden und / oder diese an Ihre Bedürfnissen anzupassen.

Die notwendigen Anpassungen sind für die Abschnitte *Preparation, Row & Processing* sowie *Finalization* in den Destination Settings vorzunehmen. 
Selektieren Sie dafür eine bestehende Extraction in Xtract Universal und klicken auf die Schaltfläche Destination.

![Destination-Settings](/img/content/destination_settings.png){:class="img-responsive"}

Im folgenden Beispiel wird die Tabelle *KNA1* um eine Spalte mit dem aktuellen Datum vom Typ `DATETIME` erweitert. 
Das Befüllen dieser neuen Spalte wird dynamisch mit einer .NET basierten Funktion umgesetzt. 
Die verwendbaren Datentypen im SQL-Statement sind abhängig von der SQL-Server Datenbank Version.

![Custom-SQL_Prep](/img/content/custom_sql_preparation_statement.png){:class="img-responsive"}

Beginnen Sie damit im Preparation Abschnitt über das Drop-Down Menü *Custom SQL* auszuwählen. Anschließend klicken Sie auf die Schaltfläche *Edit SQL*, um den Code zu bearbeiten.
Wählen Sie aus dem Drop-Down Menü *Drop & Create* aus und klicken Sie auf *Generate Statement*. Fügen Sie am Ende des erzeugten Statements folgende Zeile ein und bestätigen Sie die Eingabe mit *OK*. 

{% highlight sql %}

[Extraction_Date] DATETIME

{% endhighlight %}

Im Abschnitt *Row Processing* werden die Spaltenwerte aus SAP in die vorab angelegten Spalten der SQL-Zieltabelle prozessiert. Dieses SQL-Statement wird daher auf dem Standard *Insert* als SQL-Statement belassen. Zu diesem Zeitpunkt werden keine Daten aus dem SAP-Quellsystem, sondern `NULL` Werte in die neu angelegte Spalte *Extraction_Date* geschrieben.

Im letzten Abschnitt *Finalization* werden die `NULL` Werte mit folgenden SQL-Statement des aktuellen Datums der Extraktion befüllt und durch den T-SQL Befehl `UPDATE` in die SQL-Zieltabelle geschrieben: 

{% highlight sql %}
UPDATE [dbo].[KNA1] 
SET [Extraction_Date] = '#{DateTime.Now}#' 
WHERE [Extraction_Date] IS NULL; 
{% endhighlight %}

Bestätigen Sie die Eingabe mit *OK*. 

![Custom-SQL_Final](/img/content/custom_sql_finalization_statement.png){:class="img-responsive"}

SQL-Server Ansicht der Tabelle *KNA1* mit der erweiterten Spalte *Extraction_Date*.

![Custom_SQL_SQL_Server_Ausgabe](/img/content/sql_server_ansicht_extraction_date_spalte.png){:class="img-responsive"}




