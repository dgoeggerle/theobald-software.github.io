---
ref: xu-pbi_connector-04
layout: page
title: Power Query M-script
description: Power Query M-script 
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url:
---

Anstelle des Power BI Custom Connector, können Sie auch das Custom Power Query M-script zum Verbinden von Power BI mit Xtract Universal verwenden. Das Power Query M-script ist in Form einer Text-Datei namens *loading script* bereitgestellt. Diese Datei befindet sich im Ordner *powerbi* innerhalb des Installationsverzeichnisses von Xtract Universal.
<br>
### Custom Power Query M-script einrichten

**Achtung:** Power Query M-script und Power BI Custom Connector gehören nicht zusammen. <br>
Verwenden Sie entweder das Power Query M-script **oder** den Power BI Custom Connector.

### Power Query M-script in Power BI verwenden

1.  Erstellen Sie einen Power BI-Bericht mithilfe einer *Leeren Abfrage* (Blank Query) als Datenquelle.
2. Öffnen Sie den *Erweiterten Editor* (Advanced Editor).
3. Öffnen Sie das Xtract Universal-*loading_script* in jedem beliebigen Texteditor.
4. Kopieren Sie den kompletten Inhalt in das Fenster des erweiterten Editors von Power BI.
5. Ändern Sie die Werte in den Feldern *ExtractionName* und  *ServerURL* enstprechend dem Namen Ihrer Xtract Universal Extraktion und dem Webserver. <br>
**Achtung:** Verwenden Sie nur die Extraktionen mit der *Power BI Connector* Destination.
6. Schließen Sie den *Erweiterten Editor*.
7. Klicken Sie die Schaltfläche *Fertig* (Close & Apply).
8. Wenn Sie aufgefordert werden eine der folgenden Authentifizierungsmethoden auszuwählen: *Anonymous*, *Basic* or *Windows*, befolgen Sie die Handlungsanweisungen aus dem Abschnitt [Singe Sign On und SAP-Authentifizierung](./pbi-SSO).<br>
![M-Script](/img/content/XU_PowerQueryScript.png){:class="img-responsive"}
---
![PowerQueryEditor](/img/content/XU_PBI_PowerQueryEditor.png){:class="img-responsive"}







