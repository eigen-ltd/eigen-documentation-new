---
title: Setting up Variables
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 6
---

Variables are page (dashboard) wide parameters that allow you to pass
information between components and create dynamic dashboards that update
based on user input and selections.

## 6.1 Setting up variables

Variables are set up at the page level by clicking on the
"(x) Variables" button in the right hand pane, which is visible when the
grid is selected (by clicking on any empty area in the grid).

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image111.png)

This will bring up the Grid Variables form:

![A screenshot of a phone AI-generated content may be
incorrect.](~/assets/dashboards/image112.png)

Clicking "Add variable" adds an empty variable configuration. The Name
and Type fields are always present and the fields thereafter depend on
the selection made in the Type field:

**Name**: Text input for the name of the variable. Must start with a
dollar sign (\$) and contain only letters and numbers. No spaces or
special characters.

**Type**: dropdown to select where the value of the variable comes from.
It has the following options:

> **Select**: type a comma separated list of possible values directly in
> the variable configuration.
>
> **Multi Select**: Formatted the same as the Select type but the user can select multiple options.
>
> **String**: A text string entered into the variable configuration.
>
> **Number**: A number is entered into the variable configuration.
>
> **Boolean**: A boolean is entered into the variable configuration.
>
> **Date**: A date is entered into the variable configuration
>
> **Select from Datasource output**: The list of possible values comes
> from an Ingenuity data source.
>
> **Value from Datasource output**: A boolean indicating if multiple
> values can be selected for this input.
>
> **User**: An existing user can be entered into the variable configuration.
> 



<br />
<br />

***Default value***

![Trend Charts](~/assets/logbooks/image110.png)

Add a value to set as the default value in the submit an entry form.

:::note 
The Default value field doesn’t show under the types: Value from datasource output and conditional.
:::

<br />

***Update URL Toggle***

![Trend Charts](~/assets/logbooks/image111.png)

Enable this to update the URL with the selected value of the variable to create a link to the state of the page that can be shared.

:::note
The toggle URL is not available under the Conditional type.
:::
