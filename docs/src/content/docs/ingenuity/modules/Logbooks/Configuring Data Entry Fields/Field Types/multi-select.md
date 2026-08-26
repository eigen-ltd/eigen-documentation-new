---
title: Multi select
description: A guide to configuring and using the multi select field for logbooks in Ingenuity 7.
sidebar:
    order: 11
---

### What is the Multi select field?

The ‘Multi Select’ field enables users to select Multiple options from a predefined list into the Logbook record. 

![Trend Charts](~/assets/logbooks/image87.png)

Type something and press enter after each entry.

![Trend Charts](~/assets/logbooks/image88.png)

Use the arrows to change the order of your entries. To remove an entry, press the (x).

### How is this displayed in the add entry form?

- Dropdown

![Trend Charts](~/assets/logbooks/image89.png)

- Display as Checkboxes

![Trend Charts](~/assets/logbooks/image90.png)

:::note
By default, this is displayed as a dropdown (good for a larger number of selections). You can toggle Display as checkboxes to change the dropdown to checkboxes.

![Trend Charts](~/assets/logbooks/image91.png)

:::

Empty option

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


