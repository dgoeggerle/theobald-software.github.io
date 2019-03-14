---
ref: xu-advanced-techniques-06
layout: page
title: SAP Single Sign On
description: SAP Single Sign On
product: xtract-universal
parent: advanced-techniques
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sso-with-snc
---

You can create a SAP connection using Single-Sign-On (SSO) and Secure Network Communication (SNC). If you use the SNC mechanism you can select the NTLM or the Kerberos 5 mechanism. 

**Kerberos**

The Kerberos method uses a Kerberos server to authenticate the client. The server will create so called tickets an send them to the client. The client uses this ticket to authenticate. The client authenticates itself with this ticket to the server.


More detail information about Kerberos you will find here: [http://technet.microsoft.com/en-us/library/bb742516.aspx](http://technet.microsoft.com/en-us/library/bb742516.aspx) 

**Double Hop Problem**

Double hop describes the passing of authentication information across two or more computers (hops).
For security reasons Kerberos is transmitting the authentication data only in one hop by default, but it can be configured, that the data can be send over two or more computers (Hops).

The Double Hop Problem if the consumer of the SAP data and Xtract Server are running on the same computer. The domain controller and the SAP system can run on different computers. In this case you also can use NTLM or Kerberos.
If the consumer of the SAP data and the Xtract Server are running on different computers you have to use Kerberos which can be configured that the Double Hop Problem do not matter. 

The Kerberos configuration you will find here: [http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx](http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx)

More information about the SSO configuration you will find here: [http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm)




**Download the DLLs**

You must also have the relevant DLLs from SAP und put them in the folder %SYSTEMROOT%\System32 . 
These DLLs are different for 32-bit and 64-bit platforms and are available with SNOTE* 352295. 
The [SAP note 2115486](http://service.sap.com/sap/support/notes/2115486) has an 'Attachments' option from where you can download the package. 


Für 64-Bit x86: 
 - Kerberos gx64krb5.dll 


To configure SSO with SNC on your SAP System refer to or Knowledge Base article. The article offers a link to download the DLLs:
[http://my.theobald-software.com/index.php?/Knowledgebase/Article/View/87/3/snc-connection-with-sso]() 