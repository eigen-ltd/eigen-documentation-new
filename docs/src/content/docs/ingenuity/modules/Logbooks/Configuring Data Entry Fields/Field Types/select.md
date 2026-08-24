---
title: Select
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 10
---

### What is the Select field?

The ‘Select’ field option enables you to create dropdown selection with specific entries.

![Trend Charts](~/assets/logbooks/image78.png)

![Trend Charts](~/assets/logbooks/image79.png)

:::note
With this option the user can only select a single option. See Multi Select if you want the user to be able to select multiple options.
:::

To configure the selection, fill in the additional fields required for this field type:

***Select Options***

![Trend Charts](~/assets/logbooks/image80.png)

Type something and press enter after each entry.

![Trend Charts](~/assets/logbooks/image81.png)

Use the arrows to change the order of your entries.

To remove an entry, press the x

:::note
Each entry must be different.
:::

***Empty option***

![Trend Charts](~/assets/logbooks/image82.png)

This value will be stored by default if no other option is selected. This option is not visible to users (they can only see the Label)

***Empty option label***

![Trend Charts](~/assets/logbooks/image83.png)

Label for the Empty Option (visible to users)

> For example: Empty Label = off but Empty Option = 0. Users will see Off but the form will store the value of 0.

***Store value and label***

![Trend Charts](~/assets/logbooks/image84.png)

By default only the Empty Option will be stored. Toggle store value and label to store both.

:::note
This data will be stored in the shift log data source.
:::

***Store value as***

![Trend Charts](~/assets/logbooks/image85.png)

**Number** - If you intend to receive number input then store the value as Number.

**String** - If you intend to receive text input then store the value as String.

***How is this displayed in the add entry form?***

![Trend Charts](~/assets/logbooks/image86.png)
