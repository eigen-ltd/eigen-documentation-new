---
title: 2.17 Dates Historian
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 20

---

## 2.17 Dates Historian

As of build version ei-v6.71.6 in October 2024 there is a new “Dates” historian that returns data about the date. This does not relate to the date of value in a timeseries, but the date as a reference point itself e.g. on the x-axis.  For example, when trended the, functions will use the x-axis time.  When used to provide a single value in a dashboard the functions will use either “now” in Live Mode or the last point in the requested time window.   The available functions in the dates historian are: 

|Function|Definition|
|---|---|
|dates/CURRENT_EPOCH_MS|Return wall clock time in epoch ms. The returned units are "epoch ms".|
|dates/DAY|Return number of day in month. Points are returned at midnight of the configured timezone.|
|dates/DAY_OF_MONTH|Return number of day in month. Points are returned at midnight of the configured timezone.|
|dates/DAY_OF_MONTH_UTC|Return number of day in month. Points are returned at midnight UTC.|
|dates/DAY_OF_WEEK|Return number of day in week. Monday is 1, and Sunday is 7. Points are returned at midnight of the configured timezone.|
|dates/DAY_OF_WEEK_UTC|Return number of day in week. Monday is 1, and Sunday is 7. Points are returned at midnight UTC.|
|dates/DAY_OF_YEAR|Return number of day in year. Points are returned at midnight of the configured timezone.| 
|dates/DAY_OF_YEAR_UTC|Return number of day in year. Points are returned at midnight UTC.| 
|dates/DAY_UTC|Return number of day in month. Points are returned at midnight UTC.|
|dates/DAYS_IN_MONTH|Return number of days in month.|
|dates/IS_BEFORE_TODAY|Return 1 if given timestamp is before midnight of today. (i.e. the opposite of IS_TODAY)|
|dates/IS_TODAY|Return 1 if given timestamp is today. When trended this will always be zero until the time on the x-axis is today.|
|dates/MONTH|Return number of month in configured timezone.|
|dates/MONTH_UTC|Return number of month. Points are returned at midnight UTC.|
|dates/YEAR|Return number of year. Points are returned at midnight of the configured timezone.|
|dates/YEAR_UTC|Return number of year. Points are returned at midnight UTC.|