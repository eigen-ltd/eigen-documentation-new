---
title: Theme Parks Data Source
description: An overview of the common errors that you may encounter when using the Ingenuity calculations module.
sidebar:
    order: 10

---

# 6 Worked Examples

The following sections contain some worked examples. These examples are
used as the basis for the worked examples in the Dashboards. Access to
Ingenuity Hub within your subscription is required for all of these
examples as they must be created as a Datasource Template first.

## 6.3 Theme Parks data source

This data source connects to publicly available data on major theme
parks and their queue times.

Access Ingenuity Hub by clicking on your user in the bottom left corner
and selecting "Ingenuity Hub"

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/datasources/image22.png)

Go to the "Datasource templates" tab and click the [Add datasource
template] button:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/datasources/image23.png)

### 6.3.1 Enter the metadata

Enter the following data:

> **Name**: Theme Parks
>
> **nameID**: theme-parks
>
> **Description**: Use the docs from the API to put together a useful
> description for users:
> <https://queue-times.com/pages/about>

Search the web for an appropriate logo and upload it.

### 6.3.2 _Configure the source_

The URL of the API is:
<https://queue-times.com/parks.json>

The request is a standard "GET", therefore, the first two lines of the
datasource are:

```
"url": "<https://queue-times.com/parks.json>",
"type": "GET",
```

#### _Configuring the other settings_

Before we can test the data source we may need to force it to use the
Proxy service (i.e. be sent from the back-end server rather than the
users machine) if there are any cross site scripting limitiations or
users machines do not have access to the data source. Configure the
useProxy as follows, and we may as well take the time to also configure
the "compatibleWith" parameters.

```json
"useProxy": true,
"compatibleWith": [
  "table",
  "multivalue",
  "value"
]
```

### 6.3.3 Configure the inputs

The URL does not accept any parameters but we would like to have the
option to filter out the list of parks for a given company. So we will
present the user with an optional input for the companyId and use a JSON
path filter to create a custom output with the list we would like ;

> **companyId:** Optional - The id of the company to filter the
> list of theme parks

Therefore the inputs section of the data source is configured as
follows:

```json
"inputs": [
  {
    "name": "companyId",
    "label": "Company ID (leave blank to return all)",
    "description": "If null then all companies and parks will be
    returned"
  }
],
```

### 6.3.4 Configuring the outputs

The outputs are configured in the output section and as a minimum
require a "name" and "path".

```json
"output": {
  "paths": []
}
```

The path is the json path expression to extract the data from the API
response

With the inputs set, we can now use the Test button at the in the
Preview section to check the response from the API:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/datasources/image35.png)

We can see that the list of parks is returned as a sub-document of each
company the park details as a further set of sub-documents:

![A screenshot of a computer screen AI-generated content may be
incorrect.](~/assets/datasources/image36.png)

#### _The Company output_

In this case we are going to return the whole json document for each
company and let the user pick the property they want to display as a
sub-path. So configure the first output as follows:

```json
"output": {
  "paths": [
    {
    "name": "$company",
    "path": "$",
    "label": "Company [id,name]",
    "description": "List of all the Companies that have Theme Parks. Has
    .name and .id properties"
    },
  ]
}
```

When a user selects this output in the UI, they will be prompted to
enter the sub path (i.e. id or name)

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/datasources/image37.png)

#### _The Parks output_

For the Parks output we would like to separate the Parks out into a
separate field to make it more intuitive for users and so that all the
details are available within 1 sub-path. To do this we need to filter
the API response to those parks matching the "companyId" in the input,
using a JSON path expression that finds all objects in the root array
that have an id matching the specified companyId, and then returns the
parks property from those objects.

```
"$[?(@.id==={{companyId}})].parks"
```

1.  $ - This represents the root of the JSON document

2.  \[ \] - Square brackets indicate an array of elements

3.  ? - signifies the beginning of a filter expression

4.  () - round brackets contain the filter expression

5.  @ - represents the current object being processed in the filter.

6.  @.id==={{companyId}} - elects elements where the id property equals
    the value of {{companyId}}

7.  .parks - After filtering, this selects the parks property from each
    matched element

The $parks output is therefore configured as follows:

```json
{
  "name": "$parks",
  "path": "$[?(@.id==={{companyId}})].parks",
  "label": "Parks",
  "description": "List of all the parks for the selected company"
}
```

Now re-check the output by entering a Company ID and you should see
something like the following:

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/datasources/image38.png)

#### _Configure the other settings_

The datasource is available on the internet so we do not need to use the
back-end proxy. The outputs we have configured are compatible with a
table;

```json
"useProxy": false,
"compatibleWith": [
  "table"
]
```

Save the data source template by clicking the Update button at the
bottom of the form:

![A close up of a message AI-generated content may be
incorrect.](~/assets/datasources/image26.png)

###