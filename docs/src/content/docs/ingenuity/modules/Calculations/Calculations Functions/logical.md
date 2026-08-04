---
title: 2.12 Logical
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 15

---

## 2.12 Logical

The Logical functions allow the user to change the data that is returned
depending on if a certain condition is true. They do not apply any
mathematical operations on the data.

### 2.12.1 IFTAGEXISTS: If Tag Exists

This function prevents errors where a valid timeseries does not exist.
If a valid dataset is returned then it is returned by the function,
otherwise the specified response is provided. The syntax for an
IFTAGEXISTS function is:
```
IFTAGEXISTS(a, ifFalse)
```
> **a** -- a constant or timeseries source to check and return if valid --
> see [section 2.2](#22-valid-timeseries-inputs)
>
> **ifFalse** -- a constant or any valid timeseries source to return if (a)
> is invalid -- see [section 2.2](#22-valid-timeseries-inputs)

### 2.12.2 IFEQUALS: If Equals

This function compares two inputs (a & b) and returns one timeseries if
the result is true (to within the specified precision), otherwise it
returns an alternative timeseries. The syntax for an IFEQUALS function
is:

IFEQUALS(a, b, ifTrue, ifFalse, \<precision\>)

> **a** -- a constant or any valid timeseries source -- see [section 2.2](#22-valid-timeseries-inputs)
>
> **b** -- a constant or any valid timeseries source -- see [section 2.2](#22-valid-timeseries-inputs)
>
> **ifTrue** -- a constant or any valid timeseries source -- see [section 2.2](#22-valid-timeseries-inputs)
>
> **ifFalse** -- a constant or any valid timeseries source -- see [section 2.2](#22-valid-timeseries-inputs)
>
> **precision** -- OPTIONAL a number specifying the tolerance as either an
> absolute value or a % tolerance of the average of a & b to apply to
> the IFEQUALS test. Default = 0.01%.

In order to keep it simple and make sure that the order of the numbers
is not important, the precision is calculated as:
```
Precision absolute abs\|(a-b)\|

Precision percent abs\|(a-b)/((a+b)/2)\|\*100
```
i.e. the percentage is the deviation from the average of the two
numbers.

:::tip

Where an exact deviation is required, for example ±20 against a value
of 100, then a precision of 20 should be specified, not 20%.

:::

:::caution[Important Note]

The way the precision percentage is calculated means that the absolute
deviation is slightly asymmetric and ranges from a lower percentage for
values of b lower than a, and higher for values of b higher than a.

For example, for what range of values of b will the following
calculation return 1:

```
calc/IFEQUALS(100,b,1,0,20%) = 1
```

This means finding the highest and lowest values of b that make the
following expression evaluate to 20:
```
abs\|(100-b)/((100+b)/2)\|\*100
```
Evaluating this gives
```
81.8 \< b \< 122.2
```
Which ,as a percentage of 100, ranges from 18.2% below up to 22.2%
above.

#### *Examples*

Using an absolute value of 20 for the precision returns the ifTrue
result:

```
calc/IFEQUALS(80,100,1,0,20) = 1
```

because the difference is 20:
```
abs\|(80-100)\|= 20
```
Using a percentage of 20% as the precision returns the ifFalse value:

```
calc/IFEQUALS(80,100,1,0,20%) = 0
```

because the difference is 22.2%:
```
abs\|(80-100)/((80+100)/2)\|= 20/90 = 22.2%
```
#### *Use cases*

Returning a binary status if a value is within an expected range. For
example, a pressure should be 100 ±10%

```
calc/IFEQUALS(100,PressureReading,1,0,10)
```
:::

### 2.12.3 THRESHOLD

This function compares two inputs (a & b) and returns one timeseries a
is equal or greater than b, and a different one if it is lower. The
syntax for a THRESHOLD function is:
```
THRESHOLD(a, b, ifaboveorequal, ifbelow)
```
#### *Example*

```
calc/THRESHOLD(100,50,1,0) = 0

calc/THRESHOLD(100,100,1,0) = 1

calc/THRESHOLD(100,80,1,20) = 20

calc/THRESHOLD(80,100,1,20) = 1
```

#### *Use cases*

Flow masking -- return the value of a flowmeter if a valve is open,
otherwise return zero. This is useful where a flowmeter does not read
exactly zero when there is no flow.

```
calc/THRESHOLD(ValveStatus,1,FlowReading,0)
```

Masking out the periods above or below 'Threshold'.

The function can be used as the filter so the time-series data has
'gaps' instead of specific value when the input is above or below the
threshold. The following example shows the use case of falling edge
detection. When ValveStatus goes from 1 to 0 the function outputs the
value = 1 points when the transaction occurs.

```
calc/THRESHOLD(ValveStatus,1,constants/empty,1)
```

### 2.12.4 TIME_THRESHOLD

This function combines the timeseries of two inputs 'before_tag' and
'after_tag' at the time point specified by 'timestamp'. The syntax is as
follows:

```
calc/TIME_THRESHOLD(timestamp, before_tag, after_tag)
```

#### *Use cases*

A well designation was changed from producer to injector and a new
historian tag was introduced to record wellhead pressure for the new
well id. User wishes to visualize the wellhead pressure from the
wellbore point of view. To achieve this the two tags can be joined at
the point where the designation change occurred.

```
calc/TIME_THRESHOLD('1-Jan-2022 05:00:00', A21P_WHP, A21I_WHP)
```