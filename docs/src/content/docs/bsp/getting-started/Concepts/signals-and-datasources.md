---
title: 'Signals & Data Sources'
description: Defines signals as standardised messages produced by data connectors.
sidebar:
  order: 5
---

##	What are signals?  

Data connectors extract relevant data from source systems at regular intervals and convert it into the standard Eigen signal format. Once produced, signals are passed to the business rules engine, which processes them against the knowledge graph and ruleset to determine their effect on the barrier model objects. 


##	How signals are ingested and processed  

Once produced, signals are passed to the business rules engine, which processes them against the knowledge graph to determine their effect on the barrier model. 

Because processing is recursive, a single signal can propagate status changes through multiple layers of the barrier model hierarchy — from an individual element up through its associated systems, performance standards, and areas. 

The signal structure is consistent regardless of the source system. All installation specific data schema is resolved at the extraction layer, via installation-specific queries or API calls before the signal is produced. Once in the standard format, the signal is handled identically across all installations. Status is polled periodically — typically every five minutes or every hour depending on the data source.

##	Data sources — how they work, how to connect 

The BSP can connect to a wide range of source systems, including maintenance management systems, safety observation platforms, control systems, and data lakes. 

Common source systems include SAP (preventive and corrective work orders), Synergi (safety observations, DNV platform), Honeywell (control system inhibits), Maximo, and data lakes such as Snowflake, Databricks, Cognite CDF, Azure Data Lake, and Microsoft Fabric. Some installations connect directly to source systems; others connect via a central data lake. Either approach is supported. 

##Detail on named connectors and troubleshooting is covered in Support

Regardless of the source, all data is converted into the same signal format before processing, ensuring consistent behaviour across the barrier model. 

Each data connector is purpose-built for its source system and contains the specific query logic required to extract the relevant data. This logic is entirely contained at the connector level and has no effect on how signals are processed once ingested.