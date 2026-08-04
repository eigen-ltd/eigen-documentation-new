---
title: 3.26 Control Widget
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 29
---

The Control Widget allows a user to input a value via a dropdown, which then filters or updates connected widgets on the dashboard. Each Control Widget handles a single variable. For multiple variables under one submit button, see Control Group Widget.

Example: A user selects an airport from a dropdown and the connected table updates to show arrival and departure times for that airport.

To add the Control widget to your dashboard, drag and drop from the widget menu.

![Control group](~/assets/dashboards/control-group/image1.png)

### Setting up variables

Before configuring the widget, set up your variables in Variable Settings (see Variables section).

![Control group](~/assets/dashboards/control-group/image2.png)


:::note
Variables are configured per dashboard.
:::

Once your variable is set up, select it from the variable dropdown in the widget settings.

![Control group](~/assets/dashboards/control-group/image3.png)

In the Format section you can configure the size, orientation, and alignment of the widget.

![Control group](~/assets/dashboards/control-group/image4.png)

**Update immediately** – connected widgets update automatically as soon as a field is filled in.

**Show submit button** – connected widgets wait to update until the user presses the submit button.

**Show reset button** – allows the user to reset their inputs back to default values.

**Submit button label** – the submit button displays "Go" by default; this can be edited.

### Connecting to a widget

To connect the Control Widget to another widget on the dashboard, open that widget's settings and click the (x) icon, then select the variable you configured.

:::note
A variable must be preconfigured in Variable Settings before the (x) option will appear in a widget's settings.
:::

Depending on the widget and its connected data source, there may be multiple settings that can be controlled by a variable.

![Control group](~/assets/dashboards/control-group/image5.png)

:::note
You can connect multiple Control Widgets to the same widget. For example, you could control both the location filter and the number of rows in a table using separate variables.
:::

See worked examples: Flight Information, Queue Times (using two Control Group widgets).
