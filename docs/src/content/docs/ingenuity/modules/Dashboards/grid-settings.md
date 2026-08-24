---
title: Grid Settings
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 2
---

## 2.4 Grid Configuration

Each type of dashboard has different grid settings applied to it. To
change the grid settings of any dashboard or page, click on "Grid
Settings" in the right-side menu when in Edit mode. 

:::tip
If you cannot see this option but see the configuration menu for a widget instead, click
on an empty space in the dashboard or page to access it. This will open
a window with four main sections, which we will cover next.
:::

![A blue rectangle with white text Description automatically
generated](~/assets/dashboards/image14.png)

### 2.4.1 Settings tab

In the setting section, we can adjust the following:

•	Number of columns and height of the rows

•	Max Width

•	Show vertical and horizontal guides

•	Prevent collision

•	Show lines below graphics

•	Scale

•	Linear layout

•	Subtle save and subtle load

•	Snap to grid

•	Fit to screen

•	Snap size X & Y

•	Tags

![A screenshot of a computer Description automatically
generated](~/assets/dashboards/image15.png)

#### Number of columns and height of rows

To change the size of the grid, change the number of columns and the row height.

#### Vertical and horizontal guides

The vertical and horizontal guides are what makes the grid visible while on Edit mode. These are ideal to use as reference when you want to place widgets perfectly aligned. These can be toggled separately depending on preference.

#### Prevent collision

Disabling "Prevent collision" will allow you to overlay widgets, which
is ideal for having images or graphics with data on top of it.

#### Show lines below graphics

The "Show lines below graphics" will make the lines added from the
Lines' menu sit behind the graphics overlaid on them. This difference
can be seen in the following image.

![A black cylinder with red lines Description automatically
generated](~/assets/dashboards/image16.png)![A black cylinder with a red laser
Description automatically
generated](~/assets/dashboards/image17.png)

:::tip

_Enabling the scale toggle will make the dashboard scale horizontally and
vertically with the screen size, as a scaled dashboard would do. A
scaled dashboard will have as default settings no vertical nor
horizontal guides, the prevent collision toggle off and the scale toggle
on. Enabling the scale toggle is ideal when creating a dashboard that
will be seen in different screen sizes, since it will keep the ratio and
overall alignment of the elements regardless of the screen size used._

:::

#### Subtle save

Typically, making any change to a dashboard prompts a large, distracting "save" banner. 

![subtle save](~/assets/dashboards/grid-settings/image2.png)


With subtle save enabled, the system differentiates between permanent configuration changes and temporary user interactions (like pinching, zooming, or re-adjusting axes on a chart). Instead of a large banner, you are prompted with a small, discreet save icon in the top right corner if you choose to persist those specific interactions. 

![subtle save view](~/assets/dashboards/grid-settings/image3.png)

:::tip 
This is best enabled once a dashboard has moved from the development phase to production.
:::

#### Subtle load

![subtle load](~/assets/dashboards/grid-settings/image4.png)

This feature handles dashboard refreshes more elegantly. When a dashboard is set to refresh at a specific interval (e.g., every 30 or 90 seconds), subtle load prevents the entire screen from showing multiple widget-level "spinners" or reloading the browser. Instead, it indicates that the page is loading via a small spinner in the top right corner. The data values update seamlessly once retrieved, keeping the viewing experience smooth for users monitoring dashboards on public displays or in meetings.

#### Snap to grid

![snap to grid](~/assets/dashboards/grid-settings/image5.png)

Instead of needing to manually align elements by zooming in and adjusting them on a pixel-by-pixel basis, this feature ensures that shapes, values, and lines automatically "snap" into alignment with a predefined grid.

This can also be adjusted outside of the grid settings on the right hand side.

![grid settings](~/assets/dashboards/grid-settings/image6.png)

#### Fit to screen

This will adjust the dashboard so that the whole dashboard will fit on the screen without any need to scroll. 

### 2.4.2 Background tab

In the background section you can upload a background image or set a
background colour. Remember you can adjust the opacity, 0 being
completely transparent and 1 being not transparent at all.

![A white background with blue lines Description automatically
generated](~/assets/dashboards/image18.png)

### 2.4.3 Live mode tab

The Live mode lets you activate live mode for the dashboard, allowing
widgets to be set to the current time. You can also choose whether the
widgets should inherit these settings or maintain their own
configuration as well as changing how often the data will update.

![A screenshot of a computer AI-generated content may be
incorrect.](~/assets/dashboards/image19.png)

Showing the live settings toolbar will show a Live toggle on the top of
the dashboard, which can be activated or deactivated and will change all
the widgets in the dashboard to this time frame. When the toggle is off,
you can select a specific date to set all the widgets to.

![A close up of a number AI-generated content may be
incorrect.](~/assets/dashboards/image20.png)

If you select a specific date in the Date section, the Live mode will be
turned off and the data will not be updated, rather displayed for a
fixed time frame according to your selection.

### 2.4.4 Editing JSON code

The last section in the Grid configuration menu allows us to see the
JSON code for the whole dashboard and it is signaled by the following
button.

![A close-up of a symbol Description automatically
generated](~/assets/dashboards/image21.png)

To copy the current dashboard to another page or dashboard, we can
select the "text" option and copy all the code of the desired page into
the code of the page where we want the copy to be in and click save.
This will replicate the whole dashboard with all its widgets configured
with the data sources from the original dashboard if available, yet
images will have to be uploaded again in the destination page.

![A screenshot of a computer program Description automatically
generated](~/assets/dashboards/image22.png)

Each widget on the dashboard will have their individual JSON code,
therefore if you wish to copy a single widget from a different dashboard
into your own, you can access their JSON code by clicking on them while on Edit mode and selecting the JSON button on the bottom of the right-side menu.