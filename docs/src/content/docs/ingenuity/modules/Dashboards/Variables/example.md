---
title: Example - Flight Information
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 8
---



## 6.3 Worked Example -- Flight information

The example below is from our demo site:

<https://ingenuity.eigen.co/pages/view/flights>

Users can select an airport and see the live list of Arrivals and
Departures

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image128.png)

An "airport" variable is used to pass the selected airport to the
FlightRadar24 data source.

### 6.3.1 Configuring the data source

Make sure the FlightRadar24 data source is installed and click the
"Details" button:

![](~/assets/dashboards/image129.png)

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image130.png)

Scroll to the Preview section at the bottom.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image131.png)

Enter an airport code (e.g. LHR for London Heathrow) and click Test.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image132.png)

Check through the Outputs to verify that the data source is working.

### 6.3.2 Configure the "airport" variable

In Edit mode in your blank dashboard, click anywhere on the grid and
then click the "Variables" button from the right-hand panel:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image133.png)

Click "Add variable"

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image112.png)

Leave the Type as "Select" (this is the default)

Configure the variable as follows:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image114.png)

The complete list of airport codes can be found here:
<https://www.world-airport-codes.com/>

### 6.3.3 Add the select box to the page

Add a "Control" component to the page:

#### ![A screenshot of a phone AI-generated content may be incorrect.](~/assets/dashboards/image134.png)

Configure the control to use the "airport" variable under the "Format
Value" section.

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image135.png)

### 6.3.4 Configure a table to use the variables

Add two "Data table" components to the page; one for the Arrivals and
one for the Departures.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image136.png)

In the Source section of each table, select the FlightRadar24 data
source. The input for the "code" will appear. Click the "**(x)**" icon
on the right to connect this input to a page variable and select the
airport" variable.

The table Source section should now look like this:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image137.png)

Add the following columns in the tables for the associated outputs from
the FlightRadar24 data source \[Type in square brackets\]:

#### _Arrivals Table_

> Time \[Date\]: Arrival Scheduled Arrival Time
>
> Flight \[Text\]: Arrival Flight Number
>
> Airline \[Text\]: Arrival Airline
>
> From \[Text\]: Arrival From City
>
> Terminal \[Text\]: Arrival Terminal
>
> ETA \[Text\]: Arrival ETA
>
> Status \[Text\]: Arrival Status Word

#### _Departures Table_

> Time \[Date\]: Departure Scheduled Arrival Time
>
> Flight \[Text\]: Departure Flight Number
>
> Airline \[Text\]: Departure Airline
>
> To \[Text\]: Departure Destination Name
>
> Terminal \[Text\]: Departure Terminal

#### _Configuring the Time column_

To display the time correctly, the Time column in both tables should be
set to be a \[Date\] type. Then under the "Value" section the Source
should be set to "Table" and "Use output" = the same as the column field
(e.g. Arrival Scheduled Arrival Time)

Under the "Format" section the "Output" format should be "HH:mm".

See the sections below: Type, Source, Use output and Output format

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image139.png)

