---
title: 2.8 Functions
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 9

---

## 2.8 Functions 

The mathematical functions give access to the common operations for
analysing data and evaluating formulae. The EXP, LN and SQRT functions
take the form:
```
fn(input)
```
> **input** any valid timeseries input (see [section 2.2](#22-valid-timeseries-inputs))

The LOG and POWER functions require a second input and the syntax is:
```
fn(input, b)
```
> **input** any valid timeseries input (see [section 2.2](#22-valid-timeseries-inputs))
>
> **b** any valid timeseries input (see [section 2.2](#22-valid-timeseries-inputs))

### 2.8.1 EXP: Exponential, e<sup>x</sup>

The term \"exp(x)\" is the same as writing e<sup>x</sup> or ℯ\^x or \"e to the
x\" or \"ℯ to the power of x\". In this context, \"ℯ\" is a universal
constant, ℯ = 2.718281828...

```
calc/EXP(input)
```

#### *Example*

```
calc/EXP(10) = 22,026.465...
```

### 2.8.2 LN: Natural Log, ln()

The Natural Log is the inverse of the Exponential function. I.e.
ln(ℯ<sup>x</sup>) = x. The syntax for the LN function is:

```
calc/LN(input)
```

#### *Example*

```
calc/LN(5) = 1.609...

calc/LN(EXP(10)) = 10
```

#### *Important notes*

The following should be noted:

- The ln of a negative number is undefined and will throw a "Not a
  Number" (NaN) error:

> ![](~/assets/calculations/image15.png)

- ln(0) is undefined and will throw a "Not a Number" (NaN) error:

> ![](~/assets/calculations/image16.png)

- ln(∞)= ∞

> ![](~/assets/calculations/image17.png)

- ln(1)=0

- ln(e)=1

- ln(e<sup>x</sup>) = x

- e<sup>ln(x)</sup>=x

### 2.8.3 SQRT: Square Root, √x

Square root of a number is a value, which on multiplication by itself,
gives the original number. The square root is an inverse method of
squaring a number i.e. x<sup>2</sup>. The syntax for the SQRT function is:

```
calc/SQRT(input)
```

#### *Example*

```
calc/SQRT(16) = 4
```
:::tip
The square root function is equivalent to raising a number to the power of ½:

`SQRT(x) ≡ POW(x,0.5)`
:::

### 2.8.4 LOG: Logarithm Log<sub>y</sub>(x)

**The Logarithm** is the exponent or power to which a base (b) must be
raised to return a given number (x).

> Log<sub>b</sub>(x)

The syntax for the LOG function is:

```
calc/LOG(input, b)
```

> **input** the number for which to find the LOG - any valid timeseries
> input (see [section 2.2](#22-valid-timeseries-inputs))
>
> **b** the base in which to calculate -- any constant or valid
> timeseries (see [section 2.2](#22-valid-timeseries-inputs))

#### *Example*

```
calc/LOG(100,10) = 2

calc/LOG(8,2) = 3
```

### 2.8.5 POW: Power, x<sup>y</sup>

The POWER function multiplies a number (*x*) by itself a specified
number of times (*b*). This is often called raising *x* to the power of
*b*. It is the inverse of the LOG function

> x<sup>b</sup>

The syntax for the POW function is:

```
calc/POW(input, b)
```

> **input** the number to multiply (*x*) - any valid timeseries input
> (see [section 2.2](#22-valid-timeseries-inputs))
>
> **b** the power, the number of times to multiply the input by itself--
> any constant or valid timeseries (see [section 2.2](#22-valid-timeseries-inputs))

#### *Example*

```
calc/POW(10,2) = 100

calc/POW(10,-2) = 0.01

calc/POW(2,3) = 8

calc/POW(25,0.5) = 5
```
