---
ref: xfa-bw-cube-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 3
lang: de_DE
---

Über den Button „Extraction Settings“ können noch Einstellungen zum Verhalten vorgenommen werden:

**Package Size<br>
definiert, wieviele Daten in einem RFC-Call vom SAP geholt werden sollen. Werte zwischen 10.000 und 100.000 sind sinnvoll, aber nur wenn die Datenmenge entsprechend groß ist. Ansonsten ist es angezeigt, den Wert auf 0 zu belassen. Dann wird die komplette Ergebnismenge in einem Rutsch geholt.

**Max Rows<br>
definiert die maximale Anzahl von Zeilen in der Egebnismenge. Das kann sinnvoll sein, hier etwas anderes als 0 (=beliebig viele) anzugeben, wenn im weiteren Verlauf des Datenflusses nur wenig Daten benötigt werden (z.B. beim Testen)

**Column Name Style<br>
definiert die Logik für die Benneung der Spalten: Code bennent die Spalten mit dem technischen Namen des Originalelements, CodeAndText mit dem technischen Namen und der Klarschrift, TextAndCode mit Larschrift und dann dem technischen Namen


![Designer](/img/content/xfa/bwcube04.png){:class="img-responsive"}

