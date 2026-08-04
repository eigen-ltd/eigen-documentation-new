---
title: 2.4 Relative Time Expressions
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 5

---

## 2.4 Relative Time Expressions

Where a calculation is stated as accepting Relative Time Expressions, both offsets and timestamps can be specified. For example:

| Supported Expressions |
|-----------------------|
| `in 2 days` |
| `5 days ago` |
| `2 days and 5 seconds` |
| `in 2 days at the same time` |
| `2 days and 5 minutes ago` |
| `last moment of yesterday` |
| `in 3 days at midnight` |
| `now` |

:::note
Forward looking expressions are only relevant if there is data in the future!
:::

The following are **not** supported:

| Unsupported | Example |
|-------------|---------|
| Day names | "last moment of last Sunday" |
| Vague time expressions | "yesterday at lunchtime" |
| Partial day references | "morning" |
| Holiday names | "Christmas day" |