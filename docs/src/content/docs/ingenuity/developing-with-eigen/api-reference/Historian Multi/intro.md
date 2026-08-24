---
title: Introduction to Historian Multi API
description: Overview of the Historian Multi API capabilities
sidebar:
  order: 1
---

The Historian Multi API provides a single interface for reading from connected historians and time-series databases, and for writing timeseries to certain historians.

It is designed for requests that need to retrieve data across multiple historian data sources in single requests, with a consistent request structure and shared api key authentication model.

## What you can do

- Read current, historical, interpolated, raw, adjacent, and aggregated data points from multiple timeseries sources
- Browse and create tags, update metadata, and write datapoints to writable historians

## Authentication

All Historian Multi endpoints require an API key. Pass it either as the `apikey` query parameter or as the `X-Api-Key` HTTP header.

## Available sections

- [Retreiving data](../read) covers request structure, limits, supported timestamp formats, and all read methods
- [Writing data](../write) covers listing writable historians, creating tags, updating metadata, and writing datapoints

## When to use Historian Multi

Use Historian Multi when you need a consistent way to retrieve or write time-series data without handling each historian implementation separately.

These APIs are also available as parameterised functions in both the [Excel Addin](../../../excel-addin/overview) and [Ingenuity Python SDK](../../../python-library/overview)
