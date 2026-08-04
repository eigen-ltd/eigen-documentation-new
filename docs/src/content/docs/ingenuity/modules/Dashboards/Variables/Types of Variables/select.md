---
title: Select
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 8
---

### 6.1.1 Select Type variables

The Select type variable lets a user select from a pre-defined list of
options. These are typed as a comma-separated list in the "Possible
values" field. For example,

Aa, Bb, Cc

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image113.png)

To show a more user friendly name to the user, labels can be defined in
square brackets before each variable:

```
\[Label 1\]Aa,\[Label 2\]Bb
```

For example, a list of possible airports with their codes would be
defined as:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image114.png)

The user will see:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image115.png)

Use "Default value" field to define the value that will be selected the
first time the page loads (and if there is no value passed in the URL).
