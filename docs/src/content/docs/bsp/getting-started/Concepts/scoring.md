---
title: 'Scoring & Colour Codes'
description: Explains how barrier status is calculated by combining impairment type and equipment criticality into a score.
sidebar:
  order: 4
---

##	How scores are calculated  

Each impairment present on a barrier element is assigned a score based on two factors: the type of impairment and the criticality of the affected equipment. These scores are aggregated across connected elements according to the ruleset configured for the installation. 

The criticality of a piece of equipment reflects how essential it is to the barrier function. Equipment with no redundancy — where a single failure would leave the barrier fully exposed — is assigned a high criticality. Equipment that forms part of a redundant group is assigned a lower criticality, as the failure of one does not necessarily degrade the barrier entirely. 

Different types of impairment carry different weights. An overdue planned maintenance activity, for example, carries a lower score than a confirmed equipment fault, as the former represents a procedural gap while the latter confirms the equipment is not functioning. 

- Criticality is assigned by the customer on a scale of 1–6, reflecting how essential the equipment is to the barrier function. 
- Severity reflects the nature of the impairment — a confirmed fault carries a higher severity than overdue planned maintenance. 
- Score = criticality × severity weighting. 

These scores are aggregated across connected elements according to the installation's ruleset.

##	What the colour scale represents

Status colours provide an immediate indication of barrier health: 

- 🟢 Green — the barrier is performing within acceptable parameters. 
- 🟡 Yellow / Amber — a warning condition exists. The barrier may be partially degraded or have outstanding actions that require attention. 
- 🔴 Red — a critical condition exists. The barrier is considered fully degraded and may not be capable of providing the protection required. 
- 🔵 Blue / Grey — no information is available for this element. 

##	Why you can have multiple colours at the same score.

Because multiple impairments of different severities can be present simultaneously, a barrier may carry impairments of more than one colour at the same time. For example, a barrier could have two green-level impairments and one amber-level impairment active concurrently. The overall status displayed reflects the most severe active impairment, but the full breakdown is visible when drilling into the detail. 

##	Where colour coding appears across the system  

Colour coding is used consistently throughout the BSP — on the area overview diagram, in tables, on performance standard pages, on system pages, and within the major accident hazard view — allowing users to assess status at a glance regardless of which page they are viewing. 

