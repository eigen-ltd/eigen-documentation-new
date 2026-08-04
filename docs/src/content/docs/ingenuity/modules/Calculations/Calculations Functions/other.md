---
title: 2.16 Other
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 19

---

## 2.16 Other 

### 2.16.1 POINTINTIME: Point in Time

The Point In Time function returns that value of the source data at a
specific point in time. It is only useful for dashboards and will result
in a flat line in a trend. The syntax for POINTINTIME is:

```
POINTINTIME(a, timereference)
```

> **a** -- any valid timeseries source -- see [section 2.2](#22-valid-timeseries-inputs)
>
> **timereference** -- an expression describing how far to shift the data
> back in time -- see below for options

The timereference can be defined in several ways:

- As an offset from now :

  - number of milliseconds (3600000 = 1 hour)

  - an exact time definition (-1s, -1h, -7d etc.) -- see [section 2.2](#22-valid-timeseries-inputs)

  - relative time expressions, like *"2 hours ago" --* see [section 2.4](#24-relative-time-expressions).

- As a point in time :

  - As a timestamp expression in hh:mm or hh:mm:ss. E.g. 00:00 for
    midnight this morning

  - relative time expressions, like *"last moment of yesterday" --* see [section 2.4](#24-relative-time-expressions).

#### *Examples*

To return the value of a tag at 23:59:59.999 the previous day, the
POINTINTTIME syntax is:

```
POINTINTIME(tag, last moment of yesterday)
```

Return the value of a tag 2 hours ago:

```
POINTINTIME(tag, -2h)
```