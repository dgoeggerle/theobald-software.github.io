---
ref: xu-salesforce-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: salesforce
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sf-settings-en
---

You can define the following extraction-specific settings:

![sf-destination-settings3](/img/content/sf-destination-settings3.PNG){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/general/entity-name.md %}

{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}

**Preparation**<br>
- **Delete & Create**: Deletes the object with the specified name and creates a new one.
- **Create if not exists**: Creates a new object if no object with the specified name could be found.

**Row processing**
- **Insert**: Inserts all records into the specified object.
- **Merge**: Inserts all records into the specified object and updates already existing entries.

#### Concurrency mode

- **Parallel**: Process batches in parallel mode. This is the default value.
- **Serial**: Process batches in serial mode. Processing in parallel can cause database contention. When this is severe, the job may fail. If you're experiencing this issue, submit the job with serial concurrency mode. This guarantees that batches are processed one at a time. Note that using this option may significantly increase the processing time for a job.