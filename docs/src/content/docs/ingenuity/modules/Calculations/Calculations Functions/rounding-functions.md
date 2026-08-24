---
title: 2.14 Rounding Functions
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 17

---

## 2.14 Rounding Functions

The Rounding functions all have the syntax 

```
calc/function(tag, x)
```
Where
>**tag** - any valid timeseries source – see section 2.2 
>
>**x** - a value specifying the rounding operation as appropriate to the function and described in the following sections. 

With the exception of the MROUND function, the value of “x” for the rounding operation can be positive or negative.  A positive number is the number of places after the decimal point, a negative number is the number of places before the decimal point.  I.e. a value of “-1” is equivalent to rounding to the nearest 10. 

### 2.14.1 ROUND

The ROUND function rounds a number to a specified number of digits. It rounds up if the next digit is 5 or greater, and down otherwise. For example,  

```
calc/ROUND(12.345, 2) 
```
would result in 12.35, while 
```
calc/ROUND(12.344, 2)
```
would result in 12.34. 

### 2.14.2 ROUNDUP

The ROUNDUP function always rounds a number up, away from zero, to the specified number of digits. For example,  
```
calc/ROUNDUP(12.341, 2)  
```
would result in 12.35. 

### 2.14.3 ROUNDDOWN

The ROUNDDOWN function always rounds a number down, towards zero, to the specified number of digits. For example,  
```
calc/ROUNDDOWN(12.349, 2) 
```
would result in 12.34. 

### 2.14.4 MROUND 

The MROUND function rounds a number to the nearest specified multiple. For example, 
```
calc/MROUND(12.34, 0.5) 
```
would round to the nearest 0.5, resulting in 12.5. 

### 2.14.5 FLOOR

The FLOOR function rounds a number down to the nearest specified multiple. For example, 
```
calc/FLOOR(12.34, 0.5)  
```
would round down to 12. 


### 2.14.6 CEILING

The CEILING function rounds a number up to the nearest specified multiple. For example 
```
calc/CEILING(12.34, 0.5)  
```
would round up to 12.5. 
