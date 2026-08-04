---
title: 2.2 Valid Timeseries Inputs
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 3

---

## 2.2 Valid timeseries inputs

All calculation functions accept a constant value or any valid
timeseries source as an input.

A valid timeseries source in Eigen Ingenuity is anything of the form

```
historian/id
```

#### *For example:*

||||
|---|---|---|
| enterprise historian: | `ip21/21PI1234.val`
| an open source historian: | `influx/kitchen_temp`
| a calculation: | `calc/ADD(15,24,35)`
| signal generator outputs: | `siggen/rand10\~5@3600000`
| constant values: | `value/10`

Constant values are a special case in that there is no need to prefix
them with "value/" as the system will do that automatically.