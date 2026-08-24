---
title: 2.6 Basic Maths
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 7

---

## 2.6 Basic Maths 

### 2.6.1 Add, Subtract, Multiply, Divide

These functions take a list of inputs separated by commas. The syntax
for the Basic Maths functions ADD, SUB, MUL and DIV is:
```
ADD(a, b,..., n)

SUB(a, b,..., n)

MUL(a, b,..., n)

DIV(a, b,..., n)
```
> **a, b,.. n** -- any valid timeseries input (see [section 2.2](#22-valid-timeseries-inputs))

The inputs are processed from right to left which means that the SUB and
DIV functions will return different results depending on the order of
the inputs:
```
DIV(10, 8) = 1.25

DIV(8, 10) = 0.8
```
### 2.6.2 Percent Deviation

This function returns the percent deviation of input b from input a. The
syntax for the PERCENTDEV function is:
```
PERCENTDEV(a, b)
```
It is evaluated as 100 \*(a-b)/b. For example:
```
PERCENTDEV(10, 8) = 25

PERCENTDEV(8, 10) = -20
```