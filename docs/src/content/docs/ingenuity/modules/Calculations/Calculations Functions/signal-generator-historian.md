---
title: 2.18 Signal Generator Historian
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 21

---

## 2.18 Signal Generator Historian (siggen)

The Signal Generator or "siggen" historian is built in and is useful for
generating example timeseries or for modifying other timeseries (for
example the saw wave can be used to convert a daily forecast into a ramp
showing the forecast to that point in the day).

The syntax is (without the spaces):
```
function amplitude +/- y-offset @ period +/- x-offset (in milliseconds)
```
e.g. `sin10-30@600-3600000` -- sinewave of amplitude -10 to 10; offset by
-30 (i.e. between -40 and -20); with a period of 600 seconds; offset by
-3600000 milliseconds (1 hr)

The function will complete one full cycle within the period.

Function supported are:

- sin (sine)

- cos (cosine)

- saw (saw wave) -- useful to modify daily values

- sq (square wave) -- useful as an on/off signal

- sc (S-curve)

- rand (random) -- repeatable random number