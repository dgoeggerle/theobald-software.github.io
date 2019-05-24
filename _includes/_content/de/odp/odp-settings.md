**Operation Data Provider**<br/>
zeigt den Namen des Quellobjekts an 

**Context**<br/>
zeigt den Kontext des ODP-Anbieters an 

**Typ**<br/>
zeigt den Datentyp des Quellobjekts an.

**Update Mode** 
- Full Update: extrahiert die Daten im Full-Modus.
- Delta-Update: extrahiert die Daten im Delta-Modus (inkrementell). 
Bei der Delta-Initialisierung haben Sie die Möglichkeit, Daten zu extrahieren oder nicht.
-- Extract data 
-- Extract no data 
-- Auto-sync subscription: steht für automatische Synchronisierung des Abonnement 

Wenn das Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option Delta Update in der ODP-Komponente verfügbar. 
<br/>
![ODP-Einstellungen](/img/content/odp/odp-settings-01.png){:class="img-responsive"}
<br/>

**Show Subscriptions** <br/>
Klicken Sie auf Abonnements anzeigen, um Informationen über den Abonnenten zu erhalten. Dazu gehört auch: 
- Name des Abonnenten
- Zeitstempel der letzten Anforderung
- Erstellungszeitstempel 
Um das Abonnement zu löschen, klicken Sie auf das Symbol Löschen auf der rechten Seite. <br/>

![ODP-Abonnent](/img/content/odp/odp-settings-02.png){:class="img-responsive"}

**Filterung**<br/>
In den Hauptfenstern können Sie neben jedem Feld auf Bearbeiten klicken, um einen Filter zu definieren.
In den eckigen Klammern links neben dem Feldnamen, z.B.[1], sehen Sie die Anzahl der definierten Filter. <br/>
![ODP ABAP CDS View Filter](/img/content/odp/odp-component-cds-costcenter-03-filter.png){:class="img-responsive"}