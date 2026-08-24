---
title: 2.5 Raw vs Interpolated Points
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 6

---

## 2.5 RAW vs INTERPOLATED points

In the following descriptions, reference is often made to Raw and
Interpolated points.

**Raw** points are real data points that have been stored in the
underlying data historian.

**Interpolated** points are virtual data points calculated from the raw
points.

By default Interpolated points are used in charts and KPIs but the user
can change this to Raw points. The reason for this is that the User
Interface has no awareness of the number of raw points in a tag before
it queries it. If the tag has very high frequency data (for example one
point per second) then the returned dataset will be very large and could
take a long time to load, or worse, crash the users browser. Conversely,
if the underlying tag is very sparse, for example a safety valve
position which only moves occasionally, there may be no data within the
window requested.

To overcome this issue, Ingenuity 7 will default to 1000<sup>1</sup>
interpolated points on a trend (this can be changed in the trend
configuration) to ensure that a trend will always load and then the user
can decide to switch to raw points.
