---
title: Date
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 12
---

### 6.1.5 Date Type

Date type variables store a timestamp.

![A screenshot of a login box AI-generated content may be
incorrect.](~/assets/dashboards/image121.png)

When connected to a Control component, users can select the data and
time from a date picker:

![A screenshot of a calendar AI-generated content may be
incorrect.](~/assets/dashboards/image122.png)

#### _Default value_

The default value has two options: "Static" and "Now"

![A blue stripe on a white background AI-generated content may be
incorrect.](~/assets/dashboards/image123.png)

If "Static" is selected and the value field left blank, the date picker
will start at 1<sup>st</sup> Jan 1970, which is most probably annoying for users.
Clicking in the field to the right of the dropdown will show a date
picker and it is a good idea to set a date (and time).

![A screenshot of a calendar AI-generated content may be
incorrect.](~/assets/dashboards/image124.png)

<br />

Selecting "Now" will show additional configuration options:

<br />

![](~/assets/dashboards/image125.png)

<br />

> **Offset**: -1d for yesterday,
>
> **Default minute**: \[0 -- 60\] Set to 0 for the start of the nearest
> hour
>
> **Default hour**: \[0 -- 24\] Set to zero for midnight, 8 for 08:00
> etc.
>
> **Default day**: \[1^st^- 31^st^, Last\] Select the day of the month

<br />

For example, to default to midnight on the 1^st^ of the month:

![](~/assets/dashboards/image126.png)
