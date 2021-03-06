![Extraction-Settings-01](/img/content/xu/Table-Extraction-Settings.png){:class="img-responsive"}

Folgende Extraktionseinstellungen stehen zur Verfügung:

**Package Size** <br>
Gibt die Anzahl der Datensätze an, die pro Datenpaket geholt werden. Welche Werte in Ihrem Fall optimal sind, muss ausprobiert werden. 
Erfahrungsgemäß ist bei großen Datenmengen eine Package Size zwischen 15000 und 50000 sinnvoll. Der Default-Wert liegt bei 20000 Zeilen. 
0 bedeutet, es findet keine Parkettierung statt. Dies kann bei großen Datenextrakten zu einem RFC-Timeout führen.
Insbesondere bei der Ausführung einer Tabellenextraktion als Hintergrund-Job (siehe *Extract data in background job*) spielt die Paketgröße eine wichtige Rolle und sollte sinnvoll in Bezug auf die Gesamtdatenmenge gewählt werden. 

**Row limit** <br>
Gibt die maximale Anzahl der extrahierten Datensätze an. *0* extrahiert die komplette Tabelle.

**Function Module** <br>
Bezeichnet den Namen des verwendeten Funktionsbausteins für die Datenextraktion. Das Feld wird automatisch befüllt in Abhängigkeit davon, welche Funktionsbausteine auf Ihrem SAP System vorhanden sind.
Wir empfehlen, unseren Baustein Z_THEO_READ_TABLE zu verwenden. Siehe auch [SAP Customizing](../sap-customizing/funktionsbaustein-fuer-table-extraktion). 

**Extract data in background job** <br>
Durch Anhaken dieser Checkbox wird die Tabellenextraktion als Hintergrund-Job in SAP ausgeführt. Diese Einstellung ist optional und wird in Kombination mit dem Baustein Z_THEO_READ_TABLE ab Version 2.0 unterstützt.
Empfohlen wird die Aktivierung für langlaufende Extraktionen mit sehr großen Datenmengen, die mit der Standard-Methode in einen Timeout-Fehler laufen ("Time limit exceeded"). <br>
Die Extraktionsjobs finden sich im SAP JobLog (SM37) unter dem JobName *theo_read_table*.
