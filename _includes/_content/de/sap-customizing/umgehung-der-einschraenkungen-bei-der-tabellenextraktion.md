Hier finden Sie die Anleitung zur Manuellen Installation des Funktionsbausteins Z_XTRACT_IS_TABLE.

**Schritt 1 – Baustein anlegen**

Starten Sie die Transaktion SE37 und legen Sie einen neuen Baustein namens Z_XTRACT_IS_TABLE an. Sie können ihn in eine bestehende Funktionsgruppe ablegen, oder eine neue Funktionsgruppe dafür anlegen. Dasselbe gilt für die Entwicklungsklasse.

Im Reiter *Attribute* stellen sie die Ausführungsart *auf remote aufrufbar*

![Z-Custom-Function-01](/img/content/Z-Custom-Function-01.png){:class="img-responsive"}

**Schritt 2 – Import-Parameter**

Definieren Sie die Import-Parameter wie im folgenden Screenshot gezeigt.

![Z-Custom-Function-02](/img/content/Z-Custom-Function-02.png){:class="img-responsive"}

**Schritt 3 – Tabellen-Parameter**

Definieren Sie die Tabellenparameter wie im folgenden Screenshot gezeigt.

![Z-Custom-Function-03](/img/content/Z-Custom-Function-03.png){:class="img-responsive"}

**Schritt 4 – Exceptions**

Definieren Sie die Ausnahmen (Exceptions) wie im folgenden Screenshot gezeigt.


![Z-Custom-Function-04](/img/content/Z-Custom-Function-04.png){:class="img-responsive"}

**Schritt 5 - Code**

Den ABAP-Code finden Sie in der Datei [Z_XTRACT_IS_TABLE.txt](/docs/sap-customizing/Z_XTRACT_IS_TABLE.txt){:download="Z_XTRACT_IS_TABLE"} im Installationsverzeichnis. Sie können den Code einfach per *Strg+C* und *Strg+V* in den Quellcode-Editor übernehmen.

Speichern und Aktivieren Sie den Baustein. 


Alternativ können Sie den Funktionsbaustein mit Hilfe des mitgelieferten Transportauftrags *thtrans.zip* installieren, den Sie im Unterordner ABAP des Installationsordners finden. 
Weiterführende Informationen zur Installation eines Transportauftrags finden Sie im folgenden [Knowledgebase-Artikel](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)