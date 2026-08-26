---
title: Configuring Data Entry Fields
description: A guide to configuring data entry fields for logbooks in Ingenuity 7.
sidebar:
    order: 4
---

When a new instance is created it appears in the list of Logbooks. To configure a Logbook, press the Edit button.

![Trend Charts](~/assets/logbooks/image56.png)

Note:
This can also be accessed from each logbook page under Edit Logbook

![Trend Charts](~/assets/logbooks/image57.png)

The following page shows the key parameters and default Layout.

![Trend Charts](~/assets/logbooks/image58.png)


## 4.1	Adding a new Field

Once a Logbook instance is created custom fields can be added to the set of the standard fields. Each field will show their field type next to the name e.g. Chemical Function (select-from-variable).

![Trend Charts](~/assets/logbooks/image34.png)


This allows you to add custom fields to your Add New Entry form.

For example:

![Trend Charts](~/assets/logbooks/image59.png)

To add a new field, click Add Field within the edit logbook layout.

![Trend Charts](~/assets/logbooks/image60.png)

This will open a data entry window to add a new field.

![Trend Charts](~/assets/logbooks/image61.png)

The required attributes for all fields are as follows:

***Label***

![Trend Charts](~/assets/logbooks/image62.png)

Public facing/aesthetic purposes.

***Name of Field***

![Trend Charts](~/assets/logbooks/image63.png)

This will act as a variable name/ID.

:::caution[Warning:] 
This cannot be edited once the field has been created.
:::

***Description***

Adding a description to describe the field you are adding. 

![Trend Charts](~/assets/logbooks/image64.png)

When adding a new entry it will show the description under the field.

![Trend Charts](~/assets/logbooks/image65.png)

***Use as filter***

To designate custom field as a filter and add it to the filter bar click ‘Use this field as filter’ in the field definition

![Trend Charts](~/assets/logbooks/image66.png)

The field will then appear in the filter bar next to the standard filters.

![Trend Charts](~/assets/logbooks/image67.png)

***Type***

This will determine which type of input data you receive.

Choose from the following types:
- Text
- Number
- Checkbox
- Select
- Multi Select
- Date
- Time Select
- Select from Variable
- Calculated from Data source

Refer to Field Types section for more details.

***Default value***

Add a value to set as the default value in the submit an entry form. 
>This field is optional.

![Trend Charts](~/assets/logbooks/image68.png)

:::note
When adding an entry, you can either change the default value that has been set or submit as is.
:::

:::note
Depending on which Field type, the default value may not be visible
:::

Once you have finished configuring your field press Add.

![Trend Charts](~/assets/logbooks/image68-1.png)

## 4.2	Field types

Select one field type based on the input you expect to receive.

- Text – Text entry field
- Number – Number entry field
- Checkbox – Single checkbox field
- Select – Single dropdown select field.
- Multi Select – Multi dropdown/checkbox field.
- Date – Date entry field
- Time Select – Time select entry field
- Select from Variable – Variable select entry field.
- Calculated from Datasource.

![Trend Charts](~/assets/logbooks/image69.png)

### 4.2.1	Text

The ‘Text’ field enables users to enter text entry into the Logbook record. 

![Trend Charts](~/assets/logbooks/image70.png)

:::note
The standard field ‘Comment’ uses the Text Field.
:::

![Trend Charts](~/assets/logbooks/image71.png)

***How is this displayed in the add entry form?***

![Trend Charts](~/assets/logbooks/image68.png)

### 4.2.2 Number

The ‘Number’ field enables users to enter numeric data into the Logbook record. The numeric data entries are treated as time-series data so it can be used with widgets such as Ingenuity chart, Ingenuity table, current value etc.

![Trend Charts](~/assets/logbooks/image72.png)

![Trend Charts](~/assets/logbooks/image73.png)

***How is this displayed in the add entry form?***

![Trend Charts](~/assets/logbooks/image74.png)

:::note
Numbers can be typed or reached  by  using the arrows.
:::

### 4.2.3	Check Box
The ‘Checkbox’ field enables users to tick checkboxes when Yes or No answer is required in questionnaire type of log e.g. in inspection checklist.

![Trend Charts](~/assets/logbooks/image75.png)

![Trend Charts](~/assets/logbooks/image76.png)

***How is this displayed in the add entry form?***

![Trend Charts](~/assets/logbooks/image77.png)

### 4.2.4	Select
The ‘Select’ field option enables you to create dropdown selection with specific entries.

![Trend Charts](~/assets/logbooks/image78.png)