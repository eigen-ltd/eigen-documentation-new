---
title: 2.10 Windowed Aggregates
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 13

---

## 2.10 Windowed Aggregates

This calculation is an optimized SLIDINGAGG variant that uses
historian-provided aggregates to speed up data retrieval time. Instead
of calculating over a sliding window, it calculates the aggregates over
consecutive fixed windows within the time period.

The syntax of the WINDOWAGG function is:

```
calc/WINDOWAGG(input, operation, window)
```

> **input** -- an integer or any valid timeseries source
>
> **operation** -- the short name for one of the operators listed below
> (AVG, COUNT, , NUMBAD, STDDEV, VAR, MIN, MAX, SUM, DIFF)
>
> **window** -- any valid time input -- see [section 2.2](#22-valid-timeseries-inputs)

The available operations for WINDOWAGG are AVG, MIN, MAX, COUNT, STDDEV,
VAR. The functions as the same as for the SLIDINGAG calculation.


:::caution[Important Notes on WindowAGG]

- To achieve best performance, this calc should be used on historian
tags, not on other calculations.

- Windows are anchored to closest midnight UTC before requested range.

- When using not "round" window size, windows since day 2 of request
  will be placed after previous, not after midnight UTC.

- Aggregates like MIN, MAX and COUNT are stepped (step-after), raw
  points are generated at beginning of each window.

- Aggregates like AVG, STDDEV, VAR are linearly interpolated, raw points
  are generated in the middle of each window.

- When requesting interpolated points, window size is increased to match
  interpolated point interval, when requested window count would be at
  least twice more than requested interpolated point count. This changes
  slightly how this calc works, but makes sure that all values in
  requested area are used, so effectively we query for a continuous time
  range.

:::
