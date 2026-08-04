---
title: 2.1 Calculations Summary
description: A short overview of the different calculations within the Ingenuity calculations module
sidebar:
    order: 2

---

# 2 Calculation Details

## 2.1 Calculations summary

The table below is a quick reference for all the calculations. **All
calculations must be preceded by "calc/", for example calc/ADD(a,b)**.
This prefix will be added automatically by the UI but should be
remembered if typing a calculation manually. The placeholders a, b etc.
can be a constant value or another timeseries source, or another
calculation.

**Basic Maths:**

| Category | Name | Syntax | Notes |
|----------|------|--------|-------|
| Basic Maths | Add | `ADD(a, b,..., n)` |[See section 2.6](/modules/calculations/calculations-functions/basic-maths/) |
| Basic Maths | Subtract | `SUB(a, b,..., n)` | Evaluated right to left (n - ... b - a) |
| Basic Maths | Multiply | `MUL(a, b,..., n)` |[See section 2.6](/modules/calculations/calculations-functions/basic-maths/) |
| Basic Maths | Divide | `DIV(a, b,..., n)` | Evaluated right to left (n / ... b / a) |
| Basic Maths | Percent Deviation | `PERCENTDEV(a, b)` | Evaluated as 100*(a-b)/b |
| Totalisers | Totalise | `TOTALISE(a, window, starttime, rate)` | [See section 2.7](/modules/calculations/calculations-functions/totalisers/) |
| Totalisers | Totalise Raw | `TOTALISERAW(a, window, starttime, rate)` | [See section 2.7.3](/modules/calculations/calculations-functions/totalisers/#273-totalise-raw) |
| Function | Exponential | `EXP(input)` | [See section 2.8.1](/modules/calculations/calculations-functions/functions) |
| Function | Natural Log | `LN(input)` | [See section 2.8.2](/modules/calculations/calculations-functions/functions/#282-ln-natural-log-ln) |
| Function | Square Root | `SQRT(input)` | [See section 2.8.3](/modules/calculations/calculations-functions/functions/#283-sqrt-square-root-x) |
| Function | Log | `LOG(input, b)` | [See section 2.8.4](/modules/calculations/calculations-functions/functions/#284-log-logarithm-logyx) |
| Function | Power | `POWER(input, b)` | [See section 2.8.5](/modules/calculations/calculations-functions/functions/#285-pow-power-xy) |
| Sliding Aggregates | Average | `SLIDINGAGG(input, AVG, window)` | [See section 2.9.1](/modules/calculations/calculations-functions/sliding-aggregates/#291-avg-average) |
| Sliding Aggregates | Count | `SLIDINGAGG(input, COUNT, window)` | [See section 2.9.2](/modules/calculations/calculations-functions/sliding-aggregates/#292-count-count) |
| Sliding Aggregates | Number of Bad Points | `SLIDINGAGG(input, NUMBAD, window)` | [See section 2.9.3](/modules/calculations/calculations-functions/sliding-aggregates/#293-numbad-number-of-bad-points) |
| Sliding Aggregates | Number of Good Points | `SLIDINGAGG(input, NUMGOOD, window)` | [See section 2.9.4](/modules/calculations/calculations-functions/sliding-aggregates/#294-numgood-number-of-good-points) |
| Sliding Aggregates | Standard Deviation | `SLIDINGAGG(input, STDDEV, window)` | [See section 2.9.5](/modules/calculations/calculations-functions/sliding-aggregates/#295-stddev-standard-deviation) |
| Sliding Aggregates | Variance | `SLIDINGAGG(input, VAR, window)` | [See section 2.9.6](/modules/calculations/calculations-functions/sliding-aggregates/#296-var-variance) |
| Sliding Aggregates | Minimum | `SLIDINGAGG(input, MIN, window)` | [See section 2.9.7](/modules/calculations/calculations-functions/sliding-aggregates/#297-min-minimum) |
| Sliding Aggregates | Maximum | `SLIDINGAGG(input, MAX, window)` | [See section 2.9.8](/modules/calculations/calculations-functions/sliding-aggregates/#298-max-maximum) |
| Sliding Aggregates | Sum | `SLIDINGAGG(input, SUM, window)` | [See section 2.9.9](/modules/calculations/calculations-functions/sliding-aggregates/#299-sum-sum) |
| Sliding Aggregates | DIFF | `SLIDINGAGG(input, DIFF, window)` | [See section 2.9.10](/modules/calculations/calculations-functions/sliding-aggregates/#2910-diff-difference) |
| Windowed Aggregates | Same functions as SLIDINGAGG | `WINDOWAGG(input, function, window)` | [See section 2.10](/modules/calculations/calculations-functions/window-aggregates/#210-windowed-aggregates) |
| Statistics | Maximum | `MAX(a, b,.., n)` | [See section 2.11.1](/modules/calculations/calculations-functions/statistics/#2111-max-maximum) |
| Statistics | Minimum | `MIN(a, b,.., n)` | [See section 2.11.2](/modules/calculations/calculations-functions/statistics/#2112-min-minimum) |
| Statistics | Mean | `MEAN(a, b,.., n)` | [See section 2.11.3](/modules/calculations/calculations-functions/statistics/#13-mean-mean) |
| Statistics | Median | `MEDIAN(a, b,.., n)` | [See section 2.11.4](/modules/calculations/calculations-functions/statistics/#2114-median-median) |
| Statistics | Standard Deviation | `STDDEV(a, b,.., n)` | [See section 2.11.5](/modules/calculations/calculations-functions/statistics/#2115-stddev-standard-deviation) |
| Statistics | Variance | `VAR(a, b,.., n)` | [See section 2.11.6](/modules/calculations/calculations-functions/statistics/#2116-variance-variance) |
| Logical | If Tag Exists | `IFTAGEXISTS(a, ifFalse)` | [See section 2.12.1](/modules/calculations/calculations-functions/logical/#2121-iftagexists-if-tag-exists) |
| Logical | If Equals | `IFEQUALS(a, b, ifTrue, ifFalse, <precision>)` | [See section 2.12.2](/modules/calculations/calculations-functions/logical/#2122-ifequals-if-equals) |
| Logical | Threshold | `THRESHOLD(a, b, ifaboveorequal, ifbelow)` | [See section 2.12.3](/modules/calculations/calculations-functions/logical/#2123-threshold) |
| Series Conditioning | Stepped | `STEPPED(tag)` | [See section 2.13.1](/modules/calculations/calculations-functions/series-conditioning/#2131-stepped) |
| Series Conditioning | Stepped Raw | `STEPPEDRAW(tag)` | [See section 2.13.2](/modules/calculations/calculations-functions/series-conditioning/#2132-steppedraw-stepped-raw) |
| Series Conditioning | No BAD | `NOBAD(tag)` | [See section 2.13.3](/modules/calculations/calculations-functions/series-conditioning/#2133-nobad-no-bad) |
| Series Conditioning | Timeshift | `TIMESHIFT(a, offset)` | [See section 2.13.4](/modules/calculations/calculations-functions/series-conditioning/#2134-timeshift) |
| Series Conditioning | Highpass | `HIGHPASS(a, time-constant)` | [See section 2.13.5](/modules/calculations/calculations-functions/series-conditioning/#2135-highpass) |
| Series Conditioning | Lowpass | `LOWPASS(a, time-constant)` | [See section 2.13.6](/modules/calculations/calculations-functions/series-conditioning/#2135-highpass) |
| Date | Epoch Milliseconds | `EPOCH_MS(tag)` | [See section 2.15.1](/modules/calculations/calculations-functions/date/#2151-epoch_ms-epoch-milliseconds-of-raw-point) |
| Other | Point in Time | `POINTINTIME(a, timereference)` | [See section 2.16.1](/modules/calculations/calculations-functions/other/#2161-pointintime-point-in-time) |
| Other | Current Epoch Milliseconds | `dates/CURRENT_EPOCH_MS` | Return wall clock time in epoch ms |
| Dates | Day | `dates/DAY` | Return number of day in month. Points returned at midnight of configured timezone |
| Dates | Day UTC | `dates/DAY_UTC` | Return number of day in month. Points returned at midnight UTC |
| Dates | Day of Week | `dates/DAY_OF_WEEK` | Return number of day in week. Monday is 1, Sunday is 7. Points returned at midnight of configured timezone |
| Dates | Day of Week UTC | `dates/DAY_OF_WEEK_UTC` | Return number of day in week. Monday is 1, Sunday is 7. Points returned at midnight UTC |
| Dates | Day of Month | `dates/DAY_OF_MONTH` | Return number of day in month. Points returned at midnight of configured timezone |
| Dates | Day of Month UTC | `dates/DAY_OF_MONTH_UTC` | Return number of day in month. Points returned at midnight UTC |
| Dates | Days in Month | `dates/DAYS_IN_MONTH` | Return number of days in month |
| Dates | Day of Year | `dates/DAY_OF_YEAR` | Return number of day in year. Points returned at midnight of configured timezone |
| Dates | Day of Year UTC | `dates/DAY_OF_YEAR_UTC` | Return number of day in year. Points returned at midnight UTC |
| Dates | Is Today | `dates/IS_TODAY` | Return 1 if given timestamp is today |
| Dates | Is Before Today | `dates/IS_BEFORE_TODAY` | Return 1 if given timestamp is before midnight of today |
| Dates | Month | `dates/MONTH` | Returns number of month in local timezone. January is 1 |
| Dates | Month UTC | `dates/MONTH_UTC` | Return number of month. Points returned at midnight UTC. January is 1 |
| Dates | Year | `dates/YEAR` | Return number of year. Points returned at midnight of configured timezone |
| Dates | Year UTC | `dates/YEAR_UTC` | Return number of year. Points returned at midnight UTC |


