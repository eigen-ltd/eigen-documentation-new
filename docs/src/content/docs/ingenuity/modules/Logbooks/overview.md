---
title: Overview of the Logbook
description: An overview of the logbook module in Ingenuity 7.
sidebar:
    order: 1
---

**GLOSSARY**

|||
|---|---|
|KPI | Key Performance Indicator, also used as a generic term for visualisation components on a dashboard (e.g. Dial, Gauge, Status Indicator etc.)|
|Tag | An industry term for the name (or ID) of the timeseries data for a sensor in a data historian.  All equipment in a facility is “tagged” with a unique identifier, and these unique identifiers are commonly referred to as “tags”.|

## 1.1	What is Logbook

The Logbook is a module in Ingenuity which enables users to:

- Create, configure and delete Logbook instances e.g Shift Log. Locked Valve Register, Safety Function Override, Incident Register, Well Books, Lab Data Entry etc. 
- Customize each instance by creating fields relevant to the use case
- Generate and distribute scheduled reports 
- Create versions of a Logbook for different types of users (Sub-logs).
- Search and filter the data based on custom filter definition.


## 1.2 How to access Logbook

It is accessed via the “Logbook” entry in the left-hand panel.

![Trend Charts](~/assets/logbooks/image1.png)

## 1.3 Logbook Layout

A typical Logbook instance page appears as follows:

![Trend Charts](~/assets/logbooks/image2.png)

A page comprises of the following areas:

### 1.3.1	Title

The Title appears in the top left corner of the screen.

### 1.3.2	User Controls

The following user controls: 

- Print PDF – prints the filtered content of the Logbook into pdf file format.
- Download csv – downloads the data in csv format
- Add Entry – launches a data entry window appear in the top right corner of the screen.
- Edit Logbook – configure data entry fields

![Trend Charts](~/assets/logbooks/image3.png)

### 1.3.3	Filters

The standard filters are displayed above the Logbook records area: 

- Search – searches the Logbook for records that match user entered search criteria
- Author – filter the records created by specific user(s)
- Tag – filter by one or more user-created tags
- Time Range – filter based on user-selected start and end date. User picks the data from the calendar picker
- Predefined Time Range – e.g. Last Week, Last Month, Last Shift etc.

In addition to standard filters the custom filters are shown e.g.: System Name dropdown, Shift selector etc.

![Trend Charts](~/assets/logbooks/image4.png)

### 1.3.4	Pagination

The following pagination controls appear at the bottom of the screen:

- View – select maximum number of records displayed per page
- < Previous button – navigate to the previous page
- \> Next button - navigate to the next page
- << Return button - navigate to the first page

![Trend Charts](~/assets/logbooks/image5.png)

### 1.3.5	Feed 

The main section of Logbook is the feed that is a timeline of all the Logbook records entered. The feed is displayed in chronological order (newest at the top).

![Trend Charts](~/assets/logbooks/image6.png)

The record content and appearance depends on the Logbook instance configuration (custom fields). 

![Trend Charts](~/assets/logbooks/image7.png)

The common content and controls are as follows:
- Pin – pin the record so it stays on the screen and does not disappear from the feed after some time.  
![Trend Charts](~/assets/logbooks/image8.png)
- Delete, Edit Log, Copy Log controls 
![Trend Charts](~/assets/logbooks/image9.png)
![Trend Charts](~/assets/logbooks/image10.png)
- Log timestamp 
![Trend Charts](~/assets/logbooks/image11.png)
- Author – user who created the log record
![Trend Charts](~/assets/logbooks/image12.png)
- Comment – is the body of the log record
![Trend Charts](~/assets/logbooks/image13.png)
- Other metadata – info from the custom fields
![Trend Charts](~/assets/logbooks/image14.png)

## 1.4 Logbook settings

From the side menu, click Logbooks/Settings. 

![Trend Charts](~/assets/logbooks/image25.png)

From this page you can:

- Navigate all existing logbooks (Name, Source, Tags)
- Create logbook or sub-logbook instances
- Open existing logbooks
- Edit existing logbooks
- Delete logbooks.

![Trend Charts](~/assets/logbooks/image28.png)


