---
title: 3.23 Write Data Component
description: A guide to using the write data widget in Ingenuity 7.
sidebar:
    order: 26
---

The Write Data component looks like this in the left-hand panel of widgets when a dashboard is in edit mode. 

![Write Data](~/assets/dashboards/write-data-component/image1.png)

### Write Data Button Configuration

![Timestamp](~/assets/dashboards/write-data-component/image7.png)

**Source:** By default, this is set to the Historian Multi Write data source.  It is unlikely that this would need to be changed as this data source supports all configured writeable historians in the Ingenuity 7 subscription. 

**Name:** This field is not used but may be useful if there are more than one Write Data buttons on a page 

**Scope:** this determines where the button looks for the list of tags to write to.  The options are: 

![Timestamp](~/assets/dashboards/write-data-component/image8.png)

>**Tag:** the list of tags is configured in the Configuration of the button 
>
>**Page:** the list of tags comes from the tags on the page that are flagged with “Enable write” 
>
>**Group:**  the list of tags comes from the tags in the same group as the Write Data button that are flagged with “Enable write”

### Write Data Button Scope

>**Scope = Tag**

The list of tags is set directly in the Configuration section as shown in the screenshot below 

![Timestamp](~/assets/dashboards/write-data-component/image9.png)

Multiple tags can be configured by clicking Add tag.  The full tag will be displayed in the form that pops up to write data. 

![Timestamp](~/assets/dashboards/write-data-component/image10.png)

>**Scope = Page**

The list of tags comes from the page.  The code looks for any historian tag on the page that has been flagged to “Enable write”.  For example, the Write Data button in the screenshot below will pick up the tag in the Number component to the right if “Enable write” is set to true under the Settings (cog wheel icon) in the Source configuration 

![Timestamp](~/assets/dashboards/write-data-component/image11.png)

>**Scope = Group**

The list of tags comes from the Group that the Write Data button belongs to.  This works the same way as the Page scope above, but the button only looks at tags in the same group on the dashboard.  If the button is not part of a group, it will not pick up any writeable tags.   

:::tip
The advantage of using the Page or Group scope is that the Name field is shown in the form that pops up to write data.
:::

![Timestamp](~/assets/dashboards/write-data-component/image12.png)

This can be useful for users when the tag name might be complex or not intuitive.  Using a more user-friendly name can make it easier for users to enter the correct data. 

### Other Configuration Options

The other configuration options determine the button’s appearance on a dashboard and the default settings for the popup form.

![Timestamp](~/assets/dashboards/write-data-component/image13.png)

**Button Text:** The text to show on the button.  By default, it is set to “Write data”. 

**No icon/Show icon:** set this to “Show icon” if you would like to add an icon to the button.  A search box appears.  Type in words that describe the kind of icon you would like and select from the available options as shown below .

![Timestamp](~/assets/dashboards/write-data-component/image14.png)

**Button size:** Select from pre-defined sizes: 

-  Extra Small 
- Small 
- Regular 
- Large 

**Button colour:** select from pre-defined button colours. 

**Horizontal alignment:** this determines where the button sits horizontally within its frame as the page scales.  It gives flexibility to make sure the button is always positioned as desired on wider screens. 

**Vertical alignment:** this determines where the button sits horizontally within it’s frame as the page scales.  It gives flexibility to make sure the button is always positioned as desired on larger screens. 

**Default hour:** this is used to set the default hour of the timestamp to write data for.  Setting it to ‘0’ will set the hour to midnight. 

**Default minute:** this sets the default minutes after the hour.

#### Background Configuration

The Background configuration is that same as any other dashboard component and gives users very granular control on the padding, corner rounding, shadow and borders. 

#### Type Configuration

Not used.

#### Using the Write Data Widget

Drag and drop it onto a page and it shows as a blue button with the text Write Data. 

:::note
 In an unscaled dashboard, the default button size is 2 wide x 1 high.  Depending on the width of the columns in your dashboard you may need to expand the size of the button). 
 :::

![Write Data](~/assets/dashboards/write-data-component/image2.png)

When the button is clicked, a form pops up for the user to enter the data to write.   

![Write Data](~/assets/dashboards/write-data-component/image3.png)

The timestamp can also be adjusted.  

:::note
The default hour and minute can be configured in the button configuration, for example 00:00.
:::

![Timestamp](~/assets/dashboards/write-data-component/image4.png)

Multiple values can be written by clicking the [+] icon at the right-hand side

![Timestamp](~/assets/dashboards/write-data-component/image5.png)

Click “Write” to write the points to the data source(s). 

![Timestamp](~/assets/dashboards/write-data-component/image6.png)


:::note[Manual Data Entry]

There are two types of manual data entry in Ingenuity 7: 

1. Timeseries data 
2. Logbook entries (Events) 

**Manually entering Timeseries data**

Manual data entry of timeseries data in Ingenuity 7 requires 2 things to work: 

1. A writeable timeseries data source 
2. The Write Data UI component configured to enable writing to this data source 

**Writeable timeseries data sources**

Whether or not a data source support write back is dependent on the driver.  The driver must support writeback and have appropriate permissions to do so.  The Historian Instance on the Ingenuity server must also be configured to know that this is a writeable data source.  It cannot be configured from the Ingenuity 7 front end.  This makes it secure and controllable as a data source cannot unknowingly be written to. 

**Historian Multi Write data source**

The writeable timeseries data sources are available through the Historian Multi Write data source.  Only writeable data sources can be selected in the UI components that enable write. 

![Timestamp](~/assets/dashboards/write-data-component/image15.png)

**UI components**

The Write Data component is used to write timeseries data to a data source. 

:::
