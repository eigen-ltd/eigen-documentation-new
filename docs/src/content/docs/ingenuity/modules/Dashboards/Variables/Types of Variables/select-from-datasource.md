---
title: Select from Datasource output
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 13
---

### 6.1.3 Select from Datasource Output Type

This variable type takes the list of possible values from any of the
installed data sources in Ingenuity. Much like the configuration of a
component on a dashboard, the data source is selected from a dropdown
list and the fields underneath will update to reflect the inputs and
outputs from that data source.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image118.png)

Where the data source requires an input, this can come from other page
variables (by clicking the (X) icon) or the Knowledge Graph (cube icon).

#### _Variable name must be prefixed with "\$"_

The "Select from Datasource Output" type variable is an advanced
variable that can contain a data object rather than a single value or
string. Because of this, the variable name must be prefixed with a
dollar sign (\$). For example, "\$foo". If the variable name does not
start with "\$", the Control component connected to it will show

![A close-up of a sign AI-generated content may be
incorrect.](~/assets/dashboards/image119.png)