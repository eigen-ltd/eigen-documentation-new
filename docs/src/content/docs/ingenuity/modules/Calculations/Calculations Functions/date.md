---
title: 2.15 Date
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 18

---

## 2.15 Date

### 2.15.1 EPOCH_MS: Epoch Milliseconds of raw point

EPOCH_MS Returns number of milliseconds, since 1st January 1970, of each
[raw]{.underline} point in the underlying series. For current and
historical points it gets last timestamp of point before. i.e for
interpolated data it will return the timestamp of the last raw point
before.

The syntax for an EPOCH_MS function is:

```
calc/EPOCH_MS(tag)
```

#### *Examples*

Calculate the number of hours between now and the most recent point
stored in the tag:

```
calc/DIV(SUB(date/CURRENT_EPOCH_MS, calc/EPOCH_MS(tag)),3600000)
```

This calculation first subtracts the EPOCH_MS of the most recent point
from the current time, which will return the number of milliseconds
difference. This is then divided by 3,600,000, which is the number of
milliseconds in an hour.