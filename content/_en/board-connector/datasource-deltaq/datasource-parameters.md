---
ref: bc-datasource-deltaq-06
layout: page
title: Datasource parameters
description: Datasource parameters
product: board-connector
parent: datasource-deltaq
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=datasource_parameters
---

Parameters can have single values, intervals and complex selections. <br>
All kinds of parameters can be edited and entered with the help of the editor.

If the parameter is a complex selection, use the Edit link to open an additional dialogue.<br>
As shown in the screenshot, variables can also be used. Please add an @ right before the value to mark it as an variable.

The following screenshot shows the dialogue for entering complex selections.

![Parameters-2](/img/content/Parameters-2.png){:class="img-responsive"}

The field Sign hast 2 Options: Include - Exclude. This selection determines for every row whether the result of the condition is included or excluded in the entire resulting set for all rows.

The field Option contains the selection option for the condition of the row in form of logical operators:<br>

'='  Equal<br>
'!=' Not Equal<br>
'<' Lower Than<br>
'<=' Lower Equal Than <br>
'>' Greater Than <br>
'>=' Greater Equal Than <br>
'[]' BeTween <br>
'][' NotBetween<br>
'* ' Contains Pattern (Like)

Low Value column is designated for the comparison value or the lower interval limitation.<br>
High Value column is designated for the upper interval limitation.
 

Variables and [script expressions]() are supported too. 
Parameters are not allowed with the Delta Update Mode, since the parameters of the Init mode will be automatically applied. 
