Die Extraktionen von Xtract Universal können eingeplant und zu einem späteren Zeitpunkt ausgeführt werden. Dazu benötigen Sie einen beliebigen Taskplaner z.B. den Windows Task Scheduler (siehe [Blogartikel - How to schedule Xtract Universal extractions to load data from SAP](http://www.theobald-software.com/blog/2013/01/28/how-to-schedule-xtract-universal-extractions-with-the-windows-task-scheduler-to-load-data-from-sap/0)). Um die Taskplaner-Funktionalität zu nutzen, führen Sie Xtract Universal von einer Kommandozeile aus.

### Xtract Universal von der Kommandozeile ausführen
1. Navigieren Sie zum Installationsordner von Xtract Universal, z.B.
 `C:\Program Files\XtractUniversal` <br>
2. Finden Sie das Kommandozeilen-Tool xu.exe, mit dem eine Extraktion ausgeführt werden kann.<br>

`C:\Program Files\XtractUniversal\xu.exe`<br>
`http://localhost:8065/?name=MyExtractionName`


### Variablen

Wenn Sie Variablen nutzen, stellen Sie ein Escape-Zeichen *^* vor dem *&* Zeichen. <br>
`C:\Program Files\XtractUniversal\xu.exe`
`http://localhost:8065/?name=MyExtractionName^&Variable=Value`


Wird die Extraktion über die Parameter aufgerufen, können über den -o Parameter beliebig viele Variablen hinzugefügt werden:<br>
- -o variablenName=variablenWert 
- -o variablenName2=variablenWert2 ...

### Vordefinierte Variablen

Vordefinierte Variablen finden Sie unter [Extraktionsparameter](./extraktionsparameter). 

### Rückgabe

Wenn eine Operation erfolgreich abgeschlossen wurde, gibt das Programm den Wert 0 zurück.<br>
Im Falle eines Fehlers, gibt das Programm einen der folgenden Codes zurück:

|HTTP Statuscodes | Beschreibung |
|:----|:---| 
|404 | Extraktion existiert nicht |
|1001 | Ein undefinierter Fehler ist aufgetreten |
|1002 | Die Datei konnte nicht gefunden werden|     
|1013 | Ungültige Eingabedaten |
|1014 | Die Anzahl der Argumente ist ungültig |
|1015 | Der Name des Parameters ist unbekannt |
|1016 | Das Argument ist ungültig |
|1053 | Die URL ist falsch |
|1087 | Der Parameter ist ungültig |

#### Parameter

-h        Gibt die Hilfe-Seite aus

-s        Server für die Extraktion

-p        Listener-Port des Xtract Universal Servers

-n        Name der Extraktion

-o        Fügt eine Variable hinzu

Beispiele: <br>
```
xu.exe http://localhost:8065/?name=MyExtractionName^&rows=200
xu.exe -s localhost -p 8065 -n MyExtractionName -o rows=200
xu.exe -s localhost -p 8065 -n MyExtractionName
xu.exe -h
```

### Aufruf in PowerShell

Das folgende Beispiel zeigt, wie man eine Extraktion in PowerShell mit Hilfe des Kommandozeilen-Tools xu.exe aufrufen kann. 
Im Beispiel hat die Extraktion hat eine dynamische Variable, welche im Skript gesetzt werden kann. Im [Blogartikel - Mastering SAP Access with Xtract Universal and Powershell](https://blog.theobald-software.com/2018/04/26/mastering-sap-access-with-xtract-universal-and-powershell/) sind noch weitere Skripte und Beispiele beschrieben. 

<details>
<summary>Hier klicken, um PowerShell Script anzuzeigen</summary>
{% highlight javascript %}
# Execute an Xtract Universal extraction using the command tool xu.exe in a powershell script
# the extraction has a variable CalendarMonth that needs a value in the format YYYYMM, e.g. 201712
  
clear
# write the output to a file
$XUOutputfile = "C:\Data\powershell\output.txt"
# write the log to a file
$XULogfile = "C:\Data\powershell\log.txt"
  
# set the path to the installation folder
$XUCmd = 'C:\Program Files\XtractUniversal\xu.exe'
  
$XUServer = "localhost"
$XUPort = "8065"
$XUExtraction = "SAPSalesCube"
  
  
# BEGIN OF BLOCK FOR SETTING VARIABLE
# Skip this block if you don't use variable
  
# generate the calender month from the current date to be used as a variable
# e.g. Tuesday, December 19, 2017 10:40:32 AM
$myyear = (Get-Date -format "yyyy")
$mymonth = (Get-Date -format "MM")
# 201712
$myCalendarMonth = "$myyear$mymonth"
# another option Get-Date -format "yyyyMM"
  
# just if you use variables
# the extraction has a variable CalendarMonth, its value has the format YYYYMM
# set the variable for calendar month e.g. 201712
 
  
# END OF BLOCK FOR SETTING VARIABLE
  
  
# define error message
$errorMessage = @'
If the command completes an operation successfully, it returns an exit code of zero (0).
In case of an error, it will return one of the following (http status) codes:
HTTP Statuscodes (e.g. 404 when the extraction does not exist)
1001    An undefined error occured
1002    Could not find the specified file      
1013    Invalid input data
1014    The number of arguments is invalid
1015    The parameter name is unknown
1016    The argument is not valid
1053    Something is wrong with your URL
1087    The parameter is invalid
  
 
  
# run the command tool with the right parameters
$res = &$XUCmd -s $XUServer -p $XUPort -n $XUExtraction -o CalenderMonth=$myCalenderMonth 1>$XUOutputfile 2>$XULogfile
  
# check the last exit code
# 0: successful
# else unsuccessful
if($LASTEXITCODE -eq 0) {
           
write-host -f Green "The last command executed successfully"          
} else {
           
write-host -f Red "The last execution failed with error code $LASTEXITCODE!"
write-host $errorMessage
}
{% endhighlight %}
</details>

### Extraktion im Windows Event-Viewer anzeigen

Die Extraktionen von Xtract Universal können auch in die Windows Logs aufgenommen und im Event Viewer angezeigt werden.<br> 
Mehr dazu im [Knowledge Base Artikel - How to insert Xtract Universal Extraction Events into the windows logs](https://kb.theobald-software.com/xtract-universal/how-to-insert-xtract-universal-extraction-events-into-the-windows-logs-and-show-them-in-the-event-viewer).
