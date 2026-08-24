---
title: 2.9 Sliding Aggregates
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 12

---

## 2.9 Sliding Aggregates

The SlidingAggregate functions perform an aggregate *operation* on a
single *input*, over a *window*. The general construct for SLIDINGAGG
functions is:

```
SLIDINGAGG(input, operation, window)
```

> **input** -- an integer or any valid timeseries source
>
> **operation** -- the short name for one of the operators listed below
> (AVG, COUNT, NUMGOOD, NUMBAD, STDDEV, VAR, MIN, MAX, SUM, DIFF)
>
> **window** -- any valid time input -- see [section 2.2](#22-valid-timeseries-inputs)

:::tip

SLIDINGAGG functions are the most data-hungry calculations and can
cause memory problems with either very large window sizes, or, very
large time periods with a small window size (e.g. a 2 year trend with a
window size of 1hr). If you need to view trends over large periods,
consider restructuring the calculation to reduce the number of points
the SLIDINGAGG function needs to call.

:::

The function returns the result of the operation over the period of the
window immediately preceding the current time. When trending a
SLIDINGAGG function, the window is always anchored to beginning of the
trend time range.


#### *Example*

```
SLIDINGAGG(input, AVG, window)
```

Will return a timeseries of the average of the preceding hour at every
point in time

The difference between the Sliding Aggregates and the Statistics
functions is that the Statistics functions operate across the inputs at
each point in time, whereas the Sliding Aggregates operate on a single
tag over a window.

### 2.9.1 AVG: Average

Returns an averaged value of the input over the window. This is an
extremely useful function for smoothing out noisy signals. The syntax
for a sliding aggregate AVG function is:

```
SLIDINGAGG(input, AVG, window)
```

### 2.9.2 COUNT: Count

Returns the count of the number of points in the window. The syntax for
a sliding aggregate COUNT function is:

```
SLIDINGAGG(input, COUNT, window)
```

### 2.9.3 NUMBAD: Number of Bad Points

Returns the count of the number of points with a "bad" status in the
window. The syntax for a sliding aggregate NUMBAD function is:

```
SLIDINGAGG(input, NUMBAD, window)
```

### 2.9.4 NUMGOOD: Number of Good Points

Returns the count of the number of points with a "bad" status in the
window. The syntax for a sliding aggregate NUMGOOD function is:

```
SLIDINGAGG(input, NUMGOOD, window)
```

### 2.9.5 STDDEV: Standard Deviation

Returns the standard deviation of the data in the window. The syntax for
a sliding aggregate STDDEV function is:

```
SLIDINGAGG(input, STDDEV, window)
```

### 2.9.6 VAR: Variance

Returns the variance of the data in the window. The syntax for a sliding
aggregate VAR function is:

```
SLIDINGAGG(input, VAR, window)
```

### 2.9.7 MIN: Minimum

Returns the minimum value of the data in the window. The syntax for a
sliding aggregate MIN function is:

```
SLIDINGAGG(input, MIN, window)
```

### 2.9.8 MAX: Maximum

Returns the maximum value of the data in the window. The syntax for a
sliding aggregate MAX function is:

```
SLIDINGAGG(input, MAX, window)
```

### 2.9.9 SUM: Sum

Returns the sum of all the values of the data in the window. The syntax
for a sliding aggregate SUM function is:

```
SLIDINGAGG(input, SUM, window)
```

### 2.9.10 DIFF: Difference

Returns the difference between the last and the first values of the data
in the window. The syntax for a sliding aggregate DIFF function is:

```
SLIDINGAGG(input, DIFF, window)
```

If the last value is lower than the first value, then the result is
negative. This is very useful for calculating gradients.