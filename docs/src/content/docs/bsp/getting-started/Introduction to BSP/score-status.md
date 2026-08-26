---
title: 'Score & Status'
description: Defines what status means in BSP, how it is calculated based on criticality and impairment type, and what different status colours indicate across the system.
sidebar:
  order: 3
---

## What aggregated 'status' means in the system  

Aggregate status colour is based on Aggregate score (total score) of underlying impairments.  

## What different status values indicate

||||
|---|---|---|
|**Colour**	|**Value**	|**Description**|
|Blue/Grey	|No Information	|No data is currently available to calculate status.|
|Green	|Healthy	|Information is available and the barrier is performing as required.|
|Yellow	|Warning/Degraded	|The barrier is partially degraded (e.g., non-critical overdue maintenance).|
|Red|	Critical	|The barrier is fully degraded and unable to provide protection.|

:::tip
You can click the info button in the BSP system for a reminder.

![BSP](~/assets/bsp/getting-started/image3.png)
:::

## Tag score

Each tag has its own score derived from its condition and criticality. The higher the score, the greater the risk.

## Aggregated Score

Aggregate score is the total score of all tags affecting a specific Area, Performance standard (PS) and Integrity Program (IP)

## How are scores calculated or assigned
Status is calculated by assigning a score to each impairment based on two factors: the type of impairment and the criticality of the affected equipment. These scores are aggregated according to the ruleset configured for the installation. 

Criticality is assigned by the operating company and reflects how essential a piece of equipment is to the barrier function: 

- A High Integrity Pressure Protection System (HIPS) on a single incoming gas supply line would typically be assigned a criticality of 6, as it is a non-redundant single point of failure. 
- A sensor in a two-out-of-three (2oo3) voting arrangement might be assigned a criticality of 3, as the failure of one does not fully degrade the barrier. 

Impairment types carry different weights. An overdue preventative maintenance task might carry a score of 1. Multiplied by a criticality of 6, this yields a score of 6, which may trigger a yellow status. A confirmed equipment fault carrying a severity score of 8 or more would trigger red. Logic caps exist — for example, overdue preventative maintenance can never by itself trigger a red status, regardless of how many instances are present.

