---
title: 2.7 Totalisers
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 8

---

## 2.7 Totalisers 

The Totalise functions integrate the area under a trend over the
specified window and starting at a specified time. For example,
totalising a flow will return the total volume since the start of the
window.

The TOTALISE function is the original integral function and has since
been superseded by the (backwards compatible) TOTALISE2 function, which
is more advanced and better at handling calendar time intervals and
daylight savings time.

At some point the TOTALISE algorithm will be replaced by the TOTALISE2
code but any calculations will continue to work.

### 2.7.1 TOTALISE

The TOTALISE calculation is probably the most used function will follow
the selected interpolation mode on a trend. I.e. if the series is set to
INTERPOLATED mode then the TOTALISE calculation will request
interpolated points when it is being evaluated. This will result in the
fastest performance but may give discrepancies vs raw data

The syntax for the TOTALISE function is:

```
TOTALISE(input, window, windowOffsetOrAnchor, rate)
```

- **input** -- any valid timeseries input (see [section 2.2](#22-valid-timeseries-inputs))

- **window** -- a window size to totalise over (fixed amount of
  seconds/minutes/hours/days)

- **windowOffsetOrAnchor** -- where this window should be placed this
  can be specified in four ways; as a pre-defined text expression, as an
  offset from 00:00:00 GMT, as an expression of time or as a dynamic
  offset from the current time.

- **rate** -- time unit for underlying tag, if it is m3/s then the time
  unit is seconds, so you would write "1s", if m3/h then unit is hours,
  so you would write "1h" (required to properly scale result)

#### *Window Definition*

The Window can be defined as:

- using calendar types: DAY, MONTH, QUARTER, YEAR. These options are
  pre-defined in the UI

| | |
|---|----|
|DAY: |defaults to midnight of one day to midnight of another|
|MONTH: |defaults to midnight of first day of the month until first day of the next month
|QUARTER: |defaults to midnight of first day of either january, april, july and October
|YEAR: |defaults to midnight of 1st of january until begin of next year

- an exact time definition (1s, 7d, 1mo) -- see [section 2.2](#22-valid-timeseries-inputs)

To use this or the following options select "Other" in the Window size
definition dropdown:

![A screenshot of a phone Description automatically
generated](~/assets/calculations/image14.png)

- by duration definition (PT1S, PT1H, PT24H)

- by period definition (P1D, P1M, P1Y)

- by passing millisecond value (3600000 for 1h)

#### *windowOffsetOrAnchor definition*

This defines where the start of the totalisation is placed. The options
are:

- Text expressions BEGIN_DAY, BEGIN_MONTH, BEGIN_QUARTER or BEGIN_YEAR
  will anchor window to the beginning of current period.

  :::note
  This option is the most popular and will adjust for daylight savings time and the variable length of months
  :::

- An offset from 00:00:00 GMT. Negative values shift the start earlier,
  and positive values shift it later (e.g. -02:00 to align with European
  summer time - CEST)

  :::note
   This option will not automatically adjust for daylight savings time when the clocks shift back in the autumn.
  :::

- A fixed point in time with optionally specified timezone in the format
  "YYYY-MM-DD hh:mm:ss ZZZz" (e.g. 2024-04-01 00:00:00 CEST).

  :::note
  This option is the least efficient as the algorithm will go back
  to this date every time it is evaluated
  :::

- Dynamic offset: Entering a time expression results in the start time
  of the window being changed dynamically to \[now+dynamic offset\]. For
  example, entering '0' means the window is always ending "now". I.e. it
  always shows the value of the previous "window" up to now. (This is
  effectively the same as a SLIGINGAGG(SUM) calculation over the same
  "window")\
  Entering "-2h" will give the total over the "window" 2 hours ago.

#### *Examples*

```
calc/TOTALISE(tag, YEAR, BEGIN_YEAR, 1h)
```

will calculate integral since beginning of current year up to current
moment.

```
calc/TOTALISE(tag, MONTH, BEGIN_YEAR, 1h)
```

will calculate intergral since beginning of current year, starting from
0 at beginning of each month

```
calc/TOTALISE(1, 1d, 00:00:00, 1h)
= 24 at 23:59:59.999

calc/TOTALISE(1, DAY, BEGIN_DAY, 1d)
= 1 at 23:59:59.999

calc/TOTALISE(1, QUARTER, BEGIN_QUARTER, 1d)
= 90 at 2023-03-31 23:59:59.999
= 91 at 2023-06-30 23:59:59.999
= 92 at 2023-09-30 23:59:59.999
= 92 at 2023-12-31 23:59:59.999
```

:::tip[TIP]
There are some scenarios where the underlying data needs to be treated
as stepped, for example an annual forecast that has a single value for
each month at the start of the month. Linearly interpolating between
these values will result in errors and so it may be necessary to wrap
the tag in a STEPPED() calculation or use TOTALISERAW to make sure that
the data is properly interpolated and totalized.
:::

### 2.7.2 TOTALISE2

The TOTALISE2 function is the same as the TOTALISE function from Ingenuity back-end version ei-v6.88.0 (20th November 2025). TOTALISE2 was originally created as an improved version of the totaliser and then replace the original logic. The function name can still be used to make sure any content created with TOTALISE2 still works.



### 2.7.3 TOTALISE RAW

The TOTALISERAW function is identical to the TOTALISE function except
that it will force the calculation to use Raw data when it is evaluated,
regardless of the Interpolation mode on the trend. This can result in
slow performance if there is a lot of data, but it will be very
accurate. This might be preferable if the value is to be used in a
report.